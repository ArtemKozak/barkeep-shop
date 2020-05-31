export const countUsersToOrders = ({usersKeys, ordersKeys}) => {
    const UsersToOrders = usersKeys.map(user =>
        ordersKeys.find(
            order => order === user
        )
    )
    const usersWithOrders = UsersToOrders.filter(usersOrder => usersOrder !== undefined);
    return (usersWithOrders.length / usersKeys.length).toFixed(3);
};