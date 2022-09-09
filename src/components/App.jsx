import Profile from "./Profile/Profile";
import user from "../data/user.json"
import data from "../data/data.json";
import friends from "../data/friends.json";
import StatisticsSection from "./Statistics/StatisticsSection";
import FriendsList from "./FriendList/FriendsList";

export const App = () => {
  return (
    <div>
      <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      /> 
        <StatisticsSection title="Upload stats" data={data}
        />
        <FriendsList friends={friends} />
        </>
    </div>
  );
};
