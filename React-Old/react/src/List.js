import React, { Component } from 'react'

class List extends Component {
    render() {
        let list = [
            {
                name: "Paul Doe",
                email: "pauldoe@gmail.com"
            },
            {
                name: "Lisa Doe",
                email: "lisadoe@gmail.com"
            }
        ]
        return (
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>E-mail</th>
                    </tr>
                    {list.map((item) => {
                        return <tr>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.email}
                            </td>
                        </tr>
                    })}

                </table>
            </div>
        );
    }
}

export default List