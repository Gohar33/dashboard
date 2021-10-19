import React, { useState } from 'react';
import Cards from './Cards';
import ModalView from "../containers/ModalView";
import Title from '../components/Title';
import './CardBoard.styles.css';


export default function Header({ onClick }) {
    const [show, setShow] = useState(false)

    const closeModalHandler = () => setShow(false);

    return (
        <div>
            <ModalView show={show} closeModalHandler={closeModalHandler} />
            {show ? <div onClick={closeModalHandler} clasName="modal-back-drop"></div> : null}
            <div className='header'>
                <Title title=' MAU Usage Summary' variant="black-large" />
                <p>A monthly active user (MAU) is a unique visitor to your webiste. Learn more <button className="modal-button" onClick={() => setShow(true)} >here </button></p>

            </div>

            <Cards />



        </div >

    )
}

