

function Avatar({name, url}) {
  return (
    <img
      className="Avatar_photo"
      width="120"
      height="120"
      alt={name}
      src={url}
    />
  );
}

export default Avatar;
