// Defining the Hello component
function Hello() {
    // Declaring a variable named myName and assigning it the value 'Miner'
    let myName = 'Miner';

    // Declaring a variable named Number and assigning it the value 456
    let Number = 456;

    // Declaring a function named fullName that returns a full name string
    let fullName = () => {
        return 'Miner Hossain';
    };

    // Returning JSX: a paragraph element with a message
    return <p>
        MessageNo: {Number}. I am Your King {myName} hi
    </p>;
}

// Exporting the Hello component so it can be imported elsewhere
export default Hello;
