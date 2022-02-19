const UserList = ({users}) => {
    
    return (  
        <table className="user-list">
            <tr >
                <th>First Name</th>
                <th>Last Name</th>
                <th>Balance</th>
            </tr>
            {users.map(user => (
                <tr key={user.id}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{`$ ${user.balance}`}</td>
                </tr>
            ))}
        </table>
        
    );
}
 
export default UserList;