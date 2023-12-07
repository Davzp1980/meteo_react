import React, { useState } from "react";
import { useTable } from "react-table";


const initialValues = {
    userName: '',
    userSurname: "",
    userSalary: ''
}
function Table () {
    const [userData, setUserData] = useState(initialValues)
    const [users, setUsers] = useState([])

    const [editableUserdata, setEditableUserdata] = useState({
        isEdit: false,
        userIndex: null

    })

    const handleRemoveClicl = (index) => {
        setUsers(users.filter((user, userIndex) => userIndex !== index))
    }
    //удаление пользователя из тблице по индесу

    const isFieldsEmpty = userData.userName && userData.userSurname && userData.userSalary 
    //bool true or false если поля пустые  add не работает

    const handleSubmitUser = (e) => {
        e.preventDefault()

        if (isFieldsEmpty) {
            if (editableUserdata.isEdit) {
                const editedData = users;
                editedData.splice(editableUserdata.userIndex, 1, userData)

                setUsers(editedData)

                setEditableUserdata({
                    isEdit: false,
                    userIndex: null
        
                })

            } else {
                setUsers((prevState) => [...prevState, userData])
            }
            
            setUserData(initialValues)
        }
        
    }
     // очищает заполненые поля в форме (без нажатия add)
    const handleCleanClick = () => setUserData(initialValues)

    const handleEditClick = (data,index) => {
        setUserData(data)
        setEditableUserdata({
            isEdit: true,
            userIndex: index

        })
    }
   


    return(
        <div>
            <div>
                <div className="table-data">
                    <table>
                    <th>#</th>
                    <th>User Name</th>
                    <th>User Surname</th>
                    <th>User Salary</th>
                    <th>Actions</th>

                    <tbody>
                        {users.map((user,index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{user.userName}</td>
                                <td>{user.userSurname}</td>
                                <td>{user.userSalary}</td>
                                <td>
                                    <div>
                                        <button className="edit-action" onClick={() => handleEditClick(user,index)}>Edit</button>
                                        <button className="remove-action" onClick={() => handleRemoveClicl(index)}>Remove</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Table
