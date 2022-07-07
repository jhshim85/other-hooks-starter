import ProfilePage from './ProfilePage';

const Dashboard = () => {
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

      <ProfilePage />
    </div>
  )
}

export default Dashboard;