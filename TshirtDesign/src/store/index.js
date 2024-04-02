import { proxy } from "valtio";

const state = proxy({
    onIntro: true,
    color: '#EFBD48',
    isLogo: true,
    isTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png'
})

export default state;