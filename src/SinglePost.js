import { useContext } from "react";
import { mySatellite } from "./App";

const SinglePost = () => {

  const userDeets = useContext(mySatellite);

  return (
    <div className="singlePost">
      <div className="profilePic">
        <img src={userDeets.avatar} alt={`avatar for ${userDeets.name}`} />
      </div>
      <div className="textBox">
        <h4>{userDeets.name}</h4>
        <p>Blah blah blah blah? Blah, blah blah blah, blah-blah!</p>
        <p>👏🏽 blah 👏🏽 blah 👏🏽 blah 👏🏽 blah 👏🏽</p>
      </div>
    </div>
  )
}

export default SinglePost;