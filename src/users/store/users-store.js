import {loadUsersByPage} from "../use-cases/load-users-by-page.js";


const state = {
    currenPage: 0,
    users: [],
}

const loadNextPage = async() => {
   const users = await  loadUsersByPage(state.currenPage + 1  )
    if (users.length === 0) return;

    state.currenPage += 1;
    state.users = users;

}

const loadPreviousPage = async() => {
    throw new Error('Not implemented');
}

const onUserChange = async() => {
    throw new Error('Not implemented');
}

const reloadPage = async() => {
    throw new Error('Not implemented');
}

export default  {
    loadNextPage,
    loadPreviousPage,
    onUserChange,
    reloadPage,

    /**
     *
     * @returns {Number}
     */
    getUser: () => [...state.users],

    /*
    * @returns {Number}
    *
     */
    getCurrentPage: () => state.currenPage,
}
