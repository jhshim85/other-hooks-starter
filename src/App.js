import { useState, createContext } from 'react';
import users from './imagineThisIsADatabase';
import MembersArea from './MembersArea';
import AllPosts from './AllPosts';

// ***** IMPORTANT!!! *****
// createContext always outside of app component!!!

// step #1 of the PSEUDO-CODE
const mySatellite = createContext();
console.log(mySatellite);
export {mySatellite};

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

      {/* 
          step #2 of the PSEUDO-CODE
          It looks very similar to Router component
          We connected to our 'SATELLITE' to *provide/send* data
          *value* is an attribute to pass - REQUIRED!!!
      */}
      <mySatellite.Provider value={user}>
        {
          showProfile
          ? <MembersArea />
          : <AllPosts />
        }
      </mySatellite.Provider>
    </div>
  );
}

export default App;



// PSEUDO-CODE for creating and using the CONTEXT API:
  // 1. We need to create our context!
    // That is to say, we need to build our SATELLITE that will be used to replay data from our APP to our other components.
    // This is do-able with a function provided by the React library called createContext(). It returns a *context object*, which is our satellite.
  // 2. We need to start distributing data to our satellite for broadcast. That is to say, we need our PROVIDER (ie. the component that is providing the data) to pass that data to our CONTEXT.
  // 3. We need the components that want access to the data (ie. the CONSUMERS) to *subscribe* to that context, which will give them the data.
    // We do this with the build-in React Hook, useContext().
    // *NOTE* that the useContext Hook is for *READING* context, not for *WRITING* (ie. creating) it.