

const ProfilePage = ({userInfo}) => {
  return(
    <section className="profile">
      <ul>
        <li>
          <h3>Display name</h3>
          <p className="displayName">{userInfo.name}</p>
        </li>
        <li>
          <h3>Avatar</h3>
          <img src={userInfo.avatar} alt={`avatar for ${userInfo.name}`} />
        </li>
        <li>
          <h3>Bio</h3>
          <p>{userInfo.bio}</p>
        </li>
      </ul>
    </section>
  )
}

export default ProfilePage;