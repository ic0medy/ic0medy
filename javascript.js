var NumberOfWords = 9

var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "http://shortearn.eu/NBkNi"
words[2] = "http://shortearn.eu/qAxZUAgH"
words[3] = "http://shortearn.eu/AXAg"
words[4] = "http://shortearn.eu/wxv5PKYk"
words[5] = "http://shortearn.eu/ZL5f0VR"
words[6] = "http://shortearn.eu/2FEJ"
words[7] = "http://shortearn.eu/5eOzLz"
words[8] = "http://shortearn.eu/eVSt"
words[9] = "http://shortearn.eu/kbzNtpmm"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}