import "./App.css";
import Navbar from "./Navbar";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='App-container'>
        <h1 className='App-title'>Say hello to ReactJS</h1>
        <p className='App-text'>
          You will learn how to use the most popular frontend library, and become a super Ninja developer.
        </p>
        <a href='example.com'>
          <button className='App-btn'>Awesome!</button>
        </a>
      </div>
    </div>
  );
}

export default App;
