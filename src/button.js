import "./button.css";
export function Button() {
  return (
    <>
      <h1>BUTTON</h1>
      <p>
        Buttons allow users to take actions,and make choices, with a single
        tap.Buttons communicate actions that users can take.
      </p>
      <h2> Basic</h2>
      <div className="box">
        <button>CONTAINED</button>
        <button>TEXT</button>
        <button>DISABLED</button>
        <button>OUTLINED</button>
        <button>DASHED</button>
      </div>

      <h2> Color</h2>

      <div className="box">
        <button>GREEN</button>
        <button>ERROR</button>
        <button>WARNING</button>
        <button>SUCCESS</button>
      </div>

      <h2> Size </h2>

      <div className="box box-flex">
        <div className="size-box">
          <button>LARGE</button>
          <button>MEDIUM</button>
          <button>SMALL</button>
        </div>
        <div className="size-box">
          <button>LARGE</button>
          <button>MEDIUM</button>
          <button>SMALL</button>
        </div>
      </div>

      <h2> Link-Button </h2>

      <div className="box">
        <a href="./">LINK BUTTON</a>
      </div>

      <h2> Icons</h2>
      <div className="box">
        downlaod upload delete send camera cart wishlist
      </div>

      <h2> BUTTONS WITH ICON & LABEL </h2>

      <div className="box">delete upload addtocart wishlist</div>

      <h2> Floating Button </h2>

      <div className="box">Floating</div>
    </>
  );
}
