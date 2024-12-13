import {User} from "../models/user.js";


/*
*
* @param {Like<User>} localhostUser
* @returns {User}
 */


export const localhostUserModel = (localhostUser) => {

    const  {
        avatar,
        balance,
        firstName,
        gender,
        id,
        isActive,
        lastName,
    } = localhostUser()
    return new User({
        avatar,
        balance,
        firstName: firstName,
        gender,
        id,
        isActive,
        lastName: lastName,

    })




}
