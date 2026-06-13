
// Make a variable that is a list of key-values.
    // Key: Note Bottom Height (acts as the note, like C, D, E, etc.)
    // Value: keyboard value of note, like the literal key 'c'

// Const Notes = [(some height: 'c'), (some height: 'd') (some height: 'e')]
const notes = [
    {height: "208px", frequency: , tolerance: 5, key: "f"},  // High F
    {height: "196px", frequency: 329.63, tolerance: 5, key: "e"}, // High E string: 329.63 Hz
    {height: "180px", frequency: , tolerance: 5, key: "d"},  // D 
    {height: "167px", frequency: , tolerance: 5, key: "c"},
    {height: "152px", frequency: 249.94, tolerance: 5, key: "b"}, //      B string: 249.94 Hz
    {height: "138px", frequency: , tolerance: 5, key: "a"},
    {height: "123px", frequency: 196.00, tolerance: 5, key: "g"}, //      G string: 196.00 Hz  
    {height: "109px", frequency: , tolerance: 5, key: "f"},
    {height: "95px",  frequency: , tolerance: 5, key: "e"},  
];

const noteElement = document.getElementById('note');
let currentNote = notes[0];
noteElement.style.bottom = currentNote.height;

document.addEventListener('keydown', function(event) {
    console.log("A key was pressed! You typed:", event.key);
    // get the lowercase
    let userInput = event.key.toLowerCase();

    if (userInput == currentNote.key) {
        noteElement.style.backgroundColor = "green";

        setTimeout(function() {
            // move position and colour back to black
            let randomIndex = Math.floor(Math.random() * notes.length);
            currentNote = notes[randomIndex];
            noteElement.style.bottom = currentNote.height;
            noteElement.style.backgroundColor = "black";
        }, 500);

    } else {
        noteElement.style.backgroundColor = "red";
        setTimeout(function() {
            noteElement.style.backgroundColor = "black";
        }, 500);
    }
});

// Function:
    // While the user is on the page...
        // if userInput.lower() = the current value of a key present...
            // turn the note's colour green
            // give a new note randomly selected from Notes
        // else
            // Make the note red
