import logo from './logo.svg';
import './App.css';

function App() {

  function greeting(name) {
    const date = new Date()
    const hours = date.getHours()

    let timeOfDay = "";

    if (hours > 4 && hours < 12) {
      timeOfDay = "morning";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon";
    } else if (hours >= 17 && hours < 20) {
      timeOfDay = "evening";
    } else {
      timeOfDay = "night";
    }

    return <p>Good {timeOfDay}, {name}!</p>
  }
  return (
    <div className="App">
      <p>{greeting("Bob")}</p>
    </div>
  );
}

export default App;
