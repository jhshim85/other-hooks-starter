import { useContext } from "react";
import { mySatellite } from "./App";

const ProfilePage = () => {

  const userDeets = useContext(mySatellite);
  console.log(userDeets);

  return(
    <section className="profile">
      <ul>
        <li>
          <h3>Display name</h3>
          <p className="displayName">{userDeets.name}</p>
        </li>
        <li>
          <h3>Avatar</h3>
          <img src={userDeets.avatar} alt={`avatar for ${userDeets.name}`} />
        </li>
        <li>
          <h3>Bio</h3>
          <p>{userDeets.bio}</p>
        </li>
      </ul>
    </section>
  )
}

export default ProfilePage;