import propTypes from 'prop-types';
import FriendItem from "./FriendItem";
import styles from './Friends.module.css';


const FriendsList = ({ friends }) => {

    return (
        <ul className={styles.friendList}>
        {friends.map(({ id, isOnline, avatar, name }) => <FriendItem
        key={id}
        isOnline={isOnline}
        avatar={avatar}
        name={name}
        />)}
        </ul>
    )
}
FriendsList.propTypes = {
    friends: propTypes.arrayOf(propTypes.exact({id: propTypes.number.isRequired, isOnline: propTypes.bool.isRequired, avatar: propTypes.string.isRequired, name: propTypes.string.isRequired}))
}
export default FriendsList;