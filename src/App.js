// Importing svg logo
import logo from "./logo.svg";
// Importing CSS
import "./App.css";
// Import components
import ReUsableComponent from "./ReUsableComponent";

// Javascript Function, but with capital letter
// Must have capital letter
function App() {
  // Any vanilla JavaScript logic can go here
  const arr = ["one", "two", "three"];
  // Return statement contains JSX (HTML)
  return (
    <div className="App">
      <h1>Intro to React </h1>
      {arr.map((item, index) => {
        return <ReUsableComponent />;
      })}
    </div>
  );
}

export default App;

// const arr = ["one", "two", "three"];

// const newArr = arr.map((item, index) => {
//   return item + "!"
// })
// console.log(newArr)
// // ["one!", "two!", "three!"]
// // "one" 0
// // "two" 1
// // "three" 2
