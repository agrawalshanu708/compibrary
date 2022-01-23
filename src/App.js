import { useState } from "react";
import "./styles.css";
import { Card } from "./card";
import { Button } from "./button";
import { Alert } from "./alert";
import { Avatar } from "./avatar";
import { Input } from "./input";
export default function App() {
  const [route, setRoute] = useState("card");
  return (
    <div className="App">
      <header></header>
      <div className="middle">
        <div className="left">
          <button onClick={() => setRoute("card")}>Card</button>
          <button onClick={() => setRoute("button")}>Button</button>
          <button onClick={() => setRoute("alert")}>Alert</button>
          <button onClick={() => setRoute("avatar")}>Avatar</button>
          <button onClick={() => setRoute("input")}>Input</button>
        </div>
        <div className="main">
          {route === "card" && <Card />}
          {route === "button" && <Button />}
          {route === "alert" && <Alert />}
          {route === "avatar" && <Avatar />}
          {route === "input" && <Input />}
        </div>
        <div className="right"></div>
      </div>
      <footer></footer>
    </div>
  );
}
