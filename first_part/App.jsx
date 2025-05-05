// Importing the KgButton component from the file "KgButton.js"
import KgButton from "./KgButton";

// Importing the Random component from the file "Random.js"
import Random from "./Random";

// Importing the Hello component from the file "Hello.js"
import Hello from "./Hello";

// Defining the main App component
function App() {
  // Returning the JSX to display on the screen
  return (
    <div> {/* A container div for all the content */}
      <h1>
        This is react course {/* A heading text */}
      </h1>
      <Hello></Hello> {/* Rendering the Hello component */}
      <Random></Random> {/* Rendering the Random component */}
      {/* Note: KgButton is imported but not used yet */}
    </div>
  );
}

// Exporting the App component so it can be used in other files (like main.jsx)
export default App;
