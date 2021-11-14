import react from "react";
import ReactDom, { createPortal } from "react-dom";
import './Modal.css'

const Modal = ({closeModal}) =>{
    return ReactDom.createPortal(
        <div onClick={closeModal} className="modal-overlay">
            <div onClick={(e) => e.stopPropagation()} className="modal-container">
                <div className="upper-section">
                    <h1>Announcement!!</h1>
                    <p onClick={closeModal} className="close">&times;</p>
                </div>
                <div className="middle-section">
                    <h3>Info</h3>
                    <p>Details of info</p>
                    <p>More details of info</p>
                </div>
                <div className="lower-section">
                    <a onClick={closeModal} className="modal-btn btn-red">Close</a>
                    <a className="modal-btn btn-green">Another btn</a>
                </div>
            </div>
        </div>
        ,
        document.getElementById('modal')
    )
}

export default Modal;