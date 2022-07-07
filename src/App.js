import { useState } from 'react';
import users from './imagineThisIsADatabase';
import MembersArea from './MembersArea';
import AllPosts from './AllPosts';

function App() {

  const [userName, setUserName] = useState(users[0].name);
  const [userAvatar, setUserAvatar] = useState(users[0].avatar);
  const [userTheme, setUserTheme] = useState(users[0].theme);
  const [userBio, setUserBio] = useState(users[0].bio);

  const [showProfile, setShowProfile] = useState(true);

  const switchUser = (e) => {
    const personNumber = e.target.id;

    setUserName(users[personNumber].name)
    setUserAvatar(users[personNumber].avatar)
    setUserTheme(users[personNumber].theme)
    setUserBio(users[personNumber].bio)
  }

  return (
    <div className={`app ${userTheme}`}>
      <header>
        <h1>MyShmace</h1>

        <button id="0" onClick={ switchUser }>No user</button>
        <button id="1" onClick={ switchUser }>User 1</button>
        <button id="2" onClick={ switchUser }>User 2</button>
        <button id="3" onClick={ switchUser }>User 3</button>

        <div className="pageFlip">
          <button onClick={ () => setShowProfile(true) } >Your profile</button>
          <button onClick={ () => setShowProfile(false) } >All your posts</button>
        </div>
      </header>

      {
        showProfile
        ? <MembersArea />
        : <AllPosts />
      }
    </div>
  );
}

export default App;
