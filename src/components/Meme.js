import React from "react";
import { memesData } from "./memesData";
function Meme() {
    const [imageUrl, setImageUrl] = React.useState("")
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setImageUrl(memesArray[randomNumber].url);
    }
    const [meme, setMeme] = React.useState({ topText: "", bottomText: "" })
    function handleChange(e) {
        const { name, value } = e.target
        setMeme(prev => {
            return {
                ...prev, [name]: value
            }
        })
    }
    return (
        <div>
            <div className="form">
                <input type="text" placeholder="Top text" className="form_inputs" name="topText" value={meme.topText} onChange={handleChange} />
                <input type="text" placeholder="Bottom text" className="form_inputs" name="bottomText" value={meme.bottomText} onChange={handleChange} />
                <button className="form_button" onClick={getMemeImage}>Get a new Meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={imageUrl} alt="" className="meme_img" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}
export default Meme