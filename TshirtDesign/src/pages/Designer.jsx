import { useState, useEffect } from 'react'
import { useSnapshot } from 'valtio'
import state from '../store'
import { AnimatePresence, motion } from 'framer-motion'
import config from '../config/config'
import { download } from '../assets'
import { downloadCanvasToImage, reader } from '../config/helpers'
import { EditorTabs, FilterTabs, DecalTypes, Download } from '../config/constants'
import { fadeAnimation, slideAnimation } from '../config/motion'
import { AIPicker, ColorPicker, CustomButton, FilePicker, TabSwitcher } from '../components'

const Designer = () => {
    const snap = useSnapshot(state)
    const [file, setFile] = useState('')
    const [prompt, setPrompt] = useState('')
    const [generating, setGenerating] = useState('')
    const [activeEditorTab, setActiveEditorTab] = useState('')
    const [activeFilterTab, setActiveFilterTab] = useState({ logoShirt: true, stylishShirt: false })

    const generateTabContent = () => {
        switch (activeEditorTab) {
            case "colorpicker":
                return <ColorPicker />
            case "filepicker":
                return <FilePicker file={file} setFile={setFile} readFile={readFile} />
            case "aipicker":
                return <AIPicker prompt={prompt} setPrompt={setPrompt} generating={generating} handleSubmit={handleSubmit} />
            default:
                return null
        }
    }

    const handleSubmit = async (type) => {
        if (!prompt) return alert("Please enter a prompt");

        try {
            setGenerating(true);
            const response = await fetch(config.backendUrl + '?prompt=' + encodeURIComponent(prompt));
            const data = await response.json();
            handleDecals(type, `data:image/png;base64,${data.photo}`)
        } catch (error) {
            alert(error)
        } finally {
            setGenerating(false);
            setActiveEditorTab("");
        }
    }

    const handleActiveFilterTab = (tabName) => {
        switch (tabName) {
            case "logoShirt":
                state.isLogo = !activeFilterTab[tabName]
                break
            case "stylishShirt":
                state.isTexture = !activeFilterTab[tabName]
                break
            default:
                state.isLogo = true
                state.isTexture = false
        }
        setActiveFilterTab((prevState) => {
            return { ...prevState, [tabName]: !prevState[tabName] }
        })
    }

    const handleDecals = (type, result) => {
        const decalType = DecalTypes[type]
        state[decalType.stateProperty] = result
        if (!activeFilterTab[decalType.filterTab]) {
            handleActiveFilterTab(decalType.filterTab)
        }
    }

    const readFile = (type) => {
        reader(file)
            .then((result) => {
                handleDecals(type, result)
                setActiveEditorTab("")
            })
    }

    return (
        <AnimatePresence>
            {!snap.onIntro && (
                <>
                    <motion.div key="custom" className='absolute top-0 left-0 z-10' {...slideAnimation('left')}>
                        <div className="flex items-center min-h-screen">
                            <div className="editortabs-container tabs">
                                {EditorTabs.map((tab) => (
                                    <TabSwitcher
                                        key={tab.name}
                                        tab={tab}
                                        handleClick={() => setActiveEditorTab(tab.name)}
                                    />
                                ))}
                                {generateTabContent()}
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className='absolute z-10 top-5 right-5' {...fadeAnimation}>
                        <CustomButton type="filled" title="Back to Home" handleClick={() => (state.onIntro = true)} customStyles="w-fit px-4 py-2.5 font-bold text-sm" />
                    </motion.div>
                    <motion.div className='filtertabs-container' {...slideAnimation('up')}>
                        {FilterTabs.map((tab) => (
                            <TabSwitcher
                                key={tab.name}
                                tab={tab}
                                isFilterTab
                                isActive={activeFilterTab[tab.name]}
                                handleClick={() => handleActiveFilterTab(tab.name)}
                            />
                        ))}
                        {Download.map((tab) => (
                            <TabSwitcher
                                tab={tab}
                                key={tab.name}
                                isActiveTab={activeFilterTab[tab.name]}
                                handleClick={() => downloadCanvasToImage()}
                            />
                        ))}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default Designer