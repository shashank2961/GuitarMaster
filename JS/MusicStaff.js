
// Make a variable that is a list of key-values.
    // Key: Note Bottom Height (acts as the note, like C, D, E, etc.)
    // Value: keyboard value of note, like the literal key 'c'

// Const Notes = [(some height: 'c'), (some height: 'd') (some height: 'e')]
const notes = [
    {height: "208px", frequency: 349, tolerance: 5, key: "F4"},  // F4
    {height: "196px", frequency: 330, tolerance: 5, key: "E4"},  // High E string: 329.63 Hz
    {height: "180px", frequency: 294, tolerance: 5, key: "D4"},  // D 
    {height: "167px", frequency: 262, tolerance: 5, key: "C4"},
    {height: "152px", frequency: 247, tolerance: 5, key: "B3"},  //      B string: 249.94 Hz
    {height: "138px", frequency: 220, tolerance: 5, key: "A3"},
    {height: "123px", frequency: 196, tolerance: 5, key: "G3"},  //      G string: 196.00 Hz  
    {height: "109px", frequency: 175, tolerance: 5, key: "F3"},
    {height: "95px",  frequency: 165, tolerance: 5, key: "E3"},  
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
