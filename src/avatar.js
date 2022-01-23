import "./avatar.css";
export function Avatar() {
  return (
    <>
      <h1>AVATAR</h1>
      <p>Avatars are images that users can set as their profile picture</p>

      <h2>Image Avatar</h2>
      <p>
        Image avatars can be created by passing standard img props src or srcSet
        to the component.
      </p>
      <div className="box">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNpAyOIxyDxlTxQunoIDA7VA6uEo9_mYpVXg&usqp=CAU" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjDcBD9veC9vQPVlvLW7zDrasmum-gbR4Nng&usqp=CAU" />
      </div>

      <h2> Size </h2>
      <p>
        You can change the size of the avatar with the height and width CSS
        properties.
      </p>
      <div className="box">
        <img
          className="s"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjDcBD9veC9vQPVlvLW7zDrasmum-gbR4Nng&usqp=CAU"
        />
        <img
          className="m"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjDcBD9veC9vQPVlvLW7zDrasmum-gbR4Nng&usqp=CAU"
        />
        <img
          className="l"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjDcBD9veC9vQPVlvLW7zDrasmum-gbR4Nng&usqp=CAU"
        />
      </div>

      <h2>Grouped Avatar</h2>
      <p>
        AvatarGroup renders its children as a stack. Use the max prop to limit
        the number of avatars.
      </p>
      <div className="box"></div>
    </>
  );
}
