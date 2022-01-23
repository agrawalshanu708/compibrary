import "./alert.css";
export function Alert() {
  return (
    <>
      <h1>ALERT</h1>
      <p>
        An alert displays a short, important message in a way that attracts the
        user's attention without interrupting the user's task
      </p>

      <h2> BASIC </h2>

      <div className="box">
        <div className="alert-box">
          <div className="a-box r-color" style={{ backgroundColor: "#f87171" }}>
            <p>This is an error alert — check it out!</p>
          </div>
          <div className="a-box a-color" style={{ backgroundColor: "#facc15" }}>
            <p>This is a warning alert — check it out!</p>
          </div>
          <div className="a-box a-color" style={{ backgroundColor: "#0ea5e9" }}>
            <p>This is an info alert — check it out!</p>
          </div>
          <div className="a-box a-color" style={{ backgroundColor: "#86efac" }}>
            <p>This is a success alert — check it out!</p>
          </div>
        </div>
      </div>

      <h2> OUTLINED </h2>

      <div className="box">
        <div className="alert-box">
          <div
            className="a-box r-color"
            style={{ borderColor: "#f87171", color: "#f87171" }}
          >
            <p>This is an error alert — check it out!</p>
          </div>
          <div
            className="a-box a-color"
            style={{ borderColor: "#facc15", color: "#facc15" }}
          >
            <p>This is a warning alert — check it out!</p>
          </div>
          <div
            className="a-box a-color"
            style={{ borderColor: "#0ea5e9", color: "#0ea5e9" }}
          >
            <p>This is an info alert — check it out!</p>
          </div>
          <div
            className="a-box a-color"
            style={{ borderColor: "#86efac", color: "#86efac" }}
          >
            <p>This is a success alert — check it out!</p>
          </div>
        </div>
      </div>
    </>
  );
}
