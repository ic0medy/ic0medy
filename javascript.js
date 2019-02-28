var NumberOfWords = 50

var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "http://shortearn.eu/wn2l7eN" 
words[2] = "http://shortearn.eu/moU0y" 
words[3] = "http://shortearn.eu/08HHhvL0" 
words[4] = "http://shortearn.eu/ERb3mI" 
words[5] = "http://shortearn.eu/ycLbGzE" 
words[6] = "http://shortearn.eu/9dnwQKd2" 
words[7] = "http://shortearn.eu/dgCOZlB" 
words[8] = "http://shortearn.eu/LzkmrOS" 
words[9] = "http://shortearn.eu/Rcfe7" 
words[10] = "http://shortearn.eu/Y7UD" 
words[11] = "http://shortearn.eu/Asb4tZ5" 
words[12] = "http://shortearn.eu/RWOou" 
words[13] = "http://shortearn.eu/wweLk" 
words[14] = "http://shortearn.eu/JVwJ" 
words[15] = "http://shortearn.eu/G5CEqV" 
words[16] = "http://shortearn.eu/1w8ivi" 
words[17] = "http://shortearn.eu/sWFhtx4" 
words[18] = "http://shortearn.eu/pSoajWt" 
words[19] = "http://shortearn.eu/0KsHJRFG" 
words[20] = "http://shortearn.eu/3CUI" 
words[21] = "http://shortearn.eu/9cZ2" 
words[22] = "http://shortearn.eu/B8HEbliD" 
words[23] = "http://shortearn.eu/W8VTZozj" 
words[24] = "http://shortearn.eu/YFkfh7" 
words[25] = "http://shortearn.eu/ahRk" 
words[26] = "http://shortearn.eu/qdw3c" 
words[27] = "http://shortearn.eu/o1ksY" 
words[28] = "http://shortearn.eu/Pi5t" 
words[29] = "http://shortearn.eu/KHC72R" 
words[30] = "http://shortearn.eu/rE6bWw" 
words[31] = "http://shortearn.eu/UPcU17" 
words[32] = "http://shortearn.eu/ggWFBjD" 
words[33] = "http://shortearn.eu/FqULl" 
words[34] = "http://shortearn.eu/EuWZV" 
words[35] = "http://shortearn.eu/lOYL" 
words[36] = "http://shortearn.eu/BPbl8FR" 
words[37] = "http://shortearn.eu/PdRYEF" 
words[38] = "http://shortearn.eu/44Vv" 
words[39] = "http://shortearn.eu/PJDczHb" 
words[40] = "http://shortearn.eu/dvchCZQ" 
words[41] = "http://shortearn.eu/8Z5sOSI" 
words[42] = "http://shortearn.eu/3HLjJ2ZA" 
words[43] = "http://shortearn.eu/V1ZV" 
words[44] = "http://shortearn.eu/VzK1pdrE" 
words[45] = "http://shortearn.eu/UVGpG" 
words[46] = "http://shortearn.eu/XmEq1" 
words[47] = "http://shortearn.eu/H4lJj" 
words[48] = "http://shortearn.eu/gNX9jl6" 
words[49] = "http://shortearn.eu/C97Fq" 
words[50] = "http://shortearn.eu/38VHvjs" 

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