import "./input.css";
export function Input() {
  return (
    <>
      <h1> INPUT </h1>

      <h2>Registration</h2>
      <div className="box">
        <div className="form">
          <h3>Registration-Form</h3>

          <h4>FirstName</h4>
          <input placeholder="write your first name" />
          <h4>LastName</h4>
          <input placeholder="write your lastName" />
          <h4>Email-id</h4>
          <input placeholder="write your E-mail" />
          <h4>Create Password</h4>
          <input placeholder="create password" />
          <h4>Confirm Password</h4>
          <input placeholder="confirm password" />
          <button>Register</button>
        </div>
      </div>

      <h2>Login-form</h2>

      <div className="box">
        <div className="form">
          <h3>E-mail</h3>
          <input />
          <h3>Password</h3>
          <input />
          <button>Login</button>
        </div>
      </div>

      <h2>Check</h2>
      <div className="box">
        <form class="w3-container w3-card-4">
          <h2>Checkboxes</h2>
          <p>
            <input class="w3-check" type="checkbox" checked="checked" />
            <label>Milk</label>
          </p>
          <p>
            <input class="w3-check" type="checkbox" />
            <label> Sugar</label>
          </p>
          <p>
            <input class="w3-check" type="checkbox" disabled />
            <label>Lemon (Disabled)</label>
          </p>
        </form>
      </div>

      <h2>Radip</h2>
      <div className="box">
        <form class="w3-container w3-card-4">
          <h2>Radio Buttons</h2>
          <p>
            <input
              class="w3-radio"
              type="radio"
              name="gender"
              value="male"
              checked
            />
            <label>Male</label>
          </p>
          <p>
            <input class="w3-radio" type="radio" name="gender" value="female" />
            <label>Female</label>
          </p>
          <p>
            <input
              class="w3-radio"
              type="radio"
              name="gender"
              value=""
              disabled
            />
            <label>Don't know (Disabled)</label>
          </p>
        </form>
      </div>
    </>
  );
}
