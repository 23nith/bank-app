const UserList = ({users}) => {
    
    return (  
            <table className="user-list">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{`$ ${user.balance}`}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
    );
}
 
export default UserList;