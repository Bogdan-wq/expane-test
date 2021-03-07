import React from 'react';
import User from "../types/User";

interface UserTableInterface {
    users:User[]
}

const UserTable = ({ users } : UserTableInterface) => {
    return (
        <table className="table-fixed w-full">
             <thead>
                <tr>
                    <th className="w-1/5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        First Name
                    </th>
                    <th className="w-1/5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Last Name
                    </th>
                    <th className="w-1/5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Phone
                    </th>
                    <th className="w-1/5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Avatar url
                    </th>
                    <th className="w-1/5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Edit
                    </th>
                </tr>
             </thead>
            <tbody>
            {users.map(user => {
                return (
                    <tr key={user.id}>
                        <td className="w-1/5 py-3 border-b border-gray-200 bg-white text-sm text-gray-90 whitespace-no-wrap text-center">
                            {user.firstName}
                        </td>
                        <td className="w-1/5 py-3 border-b border-gray-200 bg-white text-sm text-gray-900 whitespace-no-wrap text-center">
                            {user.lastName}
                        </td>
                        <td className="w-1/5 py-3 border-b border-gray-200 bg-white text-sm text-gray-900 whitespace-no-wrap text-center">
                            {user.phone}
                        </td>
                        <td className="w-1/5 py-3 border-b border-gray-200 bg-white text-sm text-gray-900 whitespace-no-wrap">
                            <img alt={`User ${user.id}`}
                                 className="w-6 h-6 rounded-full mx-auto"
                                 src={user.avatarUrl}/>
                        </td>
                        <td className="w-1/5 py-3 border-b border-gray-200 bg-white text-sm text-center">
                            <button className="bg-green-500 text-white py-1 px-5 rounded">
                                Edit
                            </button>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}

export default UserTable;