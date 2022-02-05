import classes from "./styles/App.module.scss";

function App() {
  return (
    <div className={classes.main}>
      <div className={classes.qrImage}></div>
      <h1>Improve your front-end skills by building projects</h1>
      <p>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
}

export default App;
