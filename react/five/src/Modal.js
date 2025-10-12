import { useState } from "react";
import './Modal.css'

function Modal(){
    let [open, setOpen] = useState(false);

    let image = "https://avatars.mds.yandex.net/i?id=605cbb63daeb72dc2a8f3697682349bc868591c7-5205033-images-thumbs&n=13"
    return(
        <div>
            <img src={image} className="small" alt="" onClick={() => setOpen(true)} style={{display: open ? "none" : "block"}}/>

            
            {open && (<div>
            <div>
                <img src={image} className="big" alt="" onClick={() => setOpen(false)}/>
            </div>
            </div>)}  

        </div>        
    )
}
export default Modal;