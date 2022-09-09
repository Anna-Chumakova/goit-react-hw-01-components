import propTypes from 'prop-types';
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
FriendsList.propTypes = {
    friends: propTypes.arrayOf(propTypes.exact({id: propTypes.number.isRequired, isOnline: propTypes.bool.isRequired, avatar: propTypes.string.isRequired, name: propTypes.string.isRequired}))
}
export default FriendsList;