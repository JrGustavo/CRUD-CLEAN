import './render-table.css'
import usersStore from "../../store/users-store";

let table;


const createTable = () => {

    const table = document.createElement('table')
    const tableHeaders = document.createElement('thead')
    tableHeaders.innerHTML = `
        <tr>
            <th>#ID</th>
            <th>Email</th>
            <th>Name</th>
            <th>Avatar</th>
        </tr>
    `;

    const tableBody = document.createElement('tbody');
    table.append(tableHeaders, tableBody);
    return table


}
/**
 *
 * @param {HTMLDivElement} element
 */


export const renderTable = (element)  => {

    const users = usersStore.getUser();

    if (!table) {
        table = createTable()
        element.append(table)

    }

    let tableHTML = '';
    users.forEach(user => {
        tableHTML += `
        <tr>
            <td>${user.id}</td>
            <td>${user.email}</td>
            <td>${user.first_name} ${user.last_name}</td>
            <td><img src="${user.avatar}" class="avatar"></td>
        </tr>
        `
    })


}
