import FriendItem from "./FriendItem";
const FriendsList = ({ friends }) => {
    const elements = friends.map(({ id, isOnline, avatar, name }) => <FriendItem
        key={id}
        isOnline={isOnline}
        avatar={avatar}
        name={name}
    />)
    return (
        <ul className="friend-list">
            {elements}
        </ul>
    )
}
export default FriendsList;