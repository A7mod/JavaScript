import "./App.css";
function App() {
  // how to assign values? Use JSX.
  let a = 2;
  return (
    <div>
      {a}
      <h1 className="main">Hello, I am Component. </h1>
      <p style={{ backgroundColor: "blue", color: "white" }}>
        This is Tutorial of React.{" "}
      </p>
      ;
    </div>
  );
  // wrapping Components with <></>. Simple
}

export default App;
