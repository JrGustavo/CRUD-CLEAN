
import './render-add-button.css';
import {showModal} from "../render-modal/render-modal.js";

/**
 *
 * @param {HTMLDivElement} element
 */
export const renderAddButton = ( element ) => {

    const fabButton = document.createElement('button');
    fabButton.innerText = '+';
    fabButton.classList.add('fab-button');

    element.append( fabButton );

    //TODO:
    fabButton.addEventListener('click', () =>{
        showModal();
    });

}
