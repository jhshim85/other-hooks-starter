import ProfilePage from './ProfilePage';

const Dashboard = (props) => {
  return (
    <div className="dash">
      <aside>
        <nav>
          <ul>
            <li>Profile page</li>
            <li>Notification preferences</li>
            <li>More links</li>
            <li>Another link wow</li>
            <li>Uhhh something else too</li>
          </ul>
        </nav>
      </aside>

      <ProfilePage userInfo={props.userInfo}/>
    </div>
  )
}

export default Dashboard;