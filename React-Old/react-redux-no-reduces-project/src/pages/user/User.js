import React, { Component } from 'react'
import UserForm from "./UserForm";

class User extends Component {
    render() {
        let list = [{
                name: "Paul Doe",
                email: "pauldoe@gmail.com"
            },
            {
                name: "Lisa Doe",
                email: "lisadoe@gmail.com"
            }]

        return (
            <div>
                <UserForm />
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>E-mail</th>
                        </tr>
                        {list.map((item) => {
                            return <tr key={item.name}>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.email}
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default User
