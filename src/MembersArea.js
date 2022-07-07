import Dashboard from './Dashboard';

const MembersArea = (props) => {

  // const {userInfo} = props;

  return (
    <main>
      <h2>Welcome to the Members Area!</h2>
      <Dashboard userInfo={props.userInfo}/>
    </main>
  )
}

export default MembersArea;