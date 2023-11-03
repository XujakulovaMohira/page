import Avatar from "./Avatar";
import UserProfile from "./UserProfile";

function ProfileCard({ user }) {
  const name = `${user.first_name} ${user.last_name}`;

  return (
    <div className="gender">
      <section key={user.id} id={`user-${user.id}`} className="profile-card">
        <Avatar name={name} url={user.avatar} />
        <UserProfile name={name} email={user.email} />
      </section>
    </div>
  );
}

export default ProfileCard;
