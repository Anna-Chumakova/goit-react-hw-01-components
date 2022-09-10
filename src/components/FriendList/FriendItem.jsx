import propTypes from 'prop-types';
import styles from './Friends.module.css'

const FriendItem = ({ isOnline, avatar, name }) => {
    return (
        <li className={styles.item}>
            <span className={`${styles.status} ${styles[isOnline]}`}></span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className={styles.name}>{ name}</p>
        </li>
    )
}
FriendItem.propTypes = {
    isOnline: propTypes.bool.isRequired,
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
}
export default FriendItem;