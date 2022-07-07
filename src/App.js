import { useState } from 'react';
import users from './imagineThisIsADatabase';
import MembersArea from './MembersArea';
import AllPosts from './AllPosts';

function App() {

  const [user, setUser] = useState(users[0]);
  const [showProfile, setShowProfile] = useState(true);

  const switchUser = (e) => setUser(users[e.target.id]);

  return (
    <div className={`app ${user.theme}`}>
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
