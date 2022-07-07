

const ProfilePage = () => {
  return(
    <section className="profile">
      <ul>
        <li>
          <h3>Display name</h3>
          <p className="displayName">**USER-NAME-GOES-HERE**</p>
        </li>
        <li>
          <h3>Avatar</h3>
          <img src="http://placeimg.com/500/500/arch" alt="avatar for **_______**" />
        </li>
        <li>
          <h3>Bio</h3>
          <p>**USER-BIO-GOES-HERE**</p>
        </li>
      </ul>
    </section>
  )
}

export default ProfilePage;