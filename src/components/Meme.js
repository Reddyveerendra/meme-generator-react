import React from "react";
import { memesData } from "./memesData";
function Meme() {
    const [imageUrl, setImageUrl] = React.useState("")
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setImageUrl(memesArray[randomNumber].url);
    }
    return (
        <div>
            <div className="form">
                <input type="text" placeholder="Top text" className="form_inputs" />
                <input type="text" placeholder="Bottom text" className="form_inputs" />
                <button className="form_button" onClick={getMemeImage}>Get a new Meme image 🖼</button>
            </div>
            <img src={imageUrl} alt="" className="meme_img" />
        </div>
    )
}
export default Meme