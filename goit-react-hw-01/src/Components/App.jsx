import "./App.css";
import Profile from "./Profile/Profile.jsx";
import FriendList from "./Friendlist/FriendList.jsx";
import TransactionHistory from "./TransactionHistory/TransactionHistory.jsx";
import userData from "../data/userData.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";

function App() {
  return (
    <>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        image={userData.image}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
