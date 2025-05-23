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

  // Creating a 'person' object with multiple personal details
  const person = {
    name: 'Miner',
    age: 23,
    gmail: 'minerhossainrimon1033@gmail.com',
    mobile_number: 1763699850
  };

  // Creating a 'product' object with product details
  const product = {
    title: "iphone",
    model: 'iphone-15',
    price: 70000
  };

  // Returning JSX (UI) to be rendered on the screen
  return (
    <>
      {/* React Fragment used to group multiple elements without adding extra <div> in HTML */}

      <div> {/* First container div */}
        <h1>
          This is react course {/* Heading for the page */}
        </h1>

        <Hello></Hello> {/* Rendering Hello component */}
        <Random></Random> {/* Rendering Random component */}

        {/* KgButton is imported but still not used - can be added below if needed */}

        {/* These lines are commented out - they show examples of using variables in JSX */}
        {/* <h1>{2+4}</h1>
        <h1>{name}</h1>
        <h1>age={age}</h1> */}

        {/* Displaying data from 'person' object */}
        <h1>Name = {person.name}</h1>
        <h1>Age = {person.age}</h1>
        <h1>Gmail = {person.gmail}</h1>
        <h1>Mobile Number = {person.mobile_number}</h1>
      </div>

      <div> {/* Second container div */}
        {/* Displaying data from 'product' object */}
        <h3>Title = {product.title}</h3>
        <h3>Model = {product.model}</h3>
        <h4>Price = {product.price}</h4>
      </div>
    </>
  );
}

// Exporting the App component to be used in index.js or main.jsx
export default App;
