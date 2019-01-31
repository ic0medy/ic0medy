var NumberOfWords = 28

var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "http://shortearn.eu/NBkNi"
words[2] = "http://shortearn.eu/qAxZUAgH"
words[3] = "http://shortearn.eu/AXAg"
words[4] = "http://shortearn.eu/wxv5PKYk"
words[5] = "http://shortearn.eu/ZL5f0VR"

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