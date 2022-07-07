

const ProfilePage = () => {
  return(
    <section className="profile">
      <ul>
        <li>
          <h3>Display name</h3>
          <p className="displayName">[n/a]</p>
        </li>
        <li>
          <h3>Avatar</h3>
          <img src="https://via.placeholder.com/600" alt="avatar for [n/a]" />
        </li>
        <li>
          <h3>Bio</h3>
          <p>[n/a]</p>
        </li>
      </ul>
    </section>
  )
}

export default ProfilePage;