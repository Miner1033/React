// Importing the KgButton component from the file "KgButton.js"
import KgButton from "./KgButton";

// Importing the Random component from the file "Random.js"
import Random from "./Random";

// Importing the Hello component from the file "Hello.js"
import Hello from "./Hello";

// Defining the main App component
function App() {
  // Declaring a variable named 'name'
  const name = "rimon";

  // Declaring a variable named 'age'
  const age = 20;

  // Creating a person object with multiple properties
  const person = {
    name: 'Miner',
    age: 23,
    gmail: 'minerhossainrimon1033@gmail.com',
    mobile_number: 1763699850
  };

  // Returning JSX (UI) to be rendered on the screen
  return (
    <>
      {/* React Fragment used to group multiple elements without a wrapper div */}

      <div> {/* A container div for the main content */}
        <h1>
          This is react course {/* A heading element */}
        </h1>

        <Hello></Hello> {/* Rendering the Hello component */}
        <Random></Random> {/* Rendering the Random component */}

        {/* KgButton is imported but not used in this file */}

        {/* These lines are currently commented out, used to test variable output */}
        {/* <h1>{2+4}</h1>
        <h1>{name}</h1>
        <h1>age={age}</h1> */}

        {/* Displaying values from the 'person' object */}
        <h1>Name = {person.name}</h1>
        <h1>Age = {person.age}</h1>
        <h1>Gmail = {person.gmail}</h1>
        <h1>Mobile Number = {person.mobile_number}</h1>
      </div>

      <div> {/* Another separate div section */}
        <h1>Hello</h1> {/* A simple heading */}
      </div>
    </>
  );
}

// Exporting the App component so it can be used in index.js or main.jsx
export default App;
