

import usersStore from "./store/users-store.js";
import {renderTable} from "./presentation/render-table/render-table.js";


/*
*
* @param {HTMLDivElement} element
 */


export const UsersApp = async (element) => {

    element.innerHTML = 'Loading...';
    await usersStore.loadNextPage()

    renderTable(element)



}
