import CustomButton from "./CustomButton"

const AIPicker = ({ prompt, setPrompt, generating, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea placeholder="Ask AI..." rows={5} value={prompt} onChange={(e) => setPrompt(e.target.value)} className="aipicker-textarea" />
      <div className="flex flex-wrap gap-3">
        {generating ? <CustomButton type="outline" title="Asking..." customStyles="text-xs" /> :
          <>
            <CustomButton type="outline" title="AI Logo" handleClick={() => handleSubmit('logo')} customStyles="text-xs" />
            <CustomButton type="filled" title="AI Texture" handleClick={() => handleSubmit('full')} customStyles="text-xs" />
          </>
        }
      </div>
    </div>
  )
}

export default AIPicker