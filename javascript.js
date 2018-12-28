var NumberOfWords = 28

var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "embeddedjoker@gmail.com:connor666"
words[2] = "jaspernijhuisofficial@gmail.com:Jappie01"
words[3] = "hansoniscrazy@gmail.com:hanson888"
words[4] = "timgardon@gmail.com:gr33nr3d"
words[5] = "oliverdesousa37@gmail.com:robo3000"
words[6] = "alan_ferrett@hotmail.com:Tbbtb3d2"
words[7] = "wayners0908@gmail.com:Wayneb509"
words[8] = "raty.294@gmail.com:ralphy294"
words[9] = "trampek993@gmail.com:panda813"
words[10] = "huiggi@gmail.com:ahugo6159"
words[11] = "roy@mydoar.net:k2c5666"
words[12] = "jlmsteelers86@gmail.com:cooldj87"
words[13] = "lezzord@mail.ru:11qq22ww"
words[14] = "drawable123@gmail.com:Dave9696"
words[15] = "fail333@web.de:nicokausk12"
words[16] = "ronal-dinho-j@hotmail.com:25769235"
words[17] = "ruan-cesar@hotmail.com:158310"
words[18] = "billyjcbs27@gmail.com:batman27"
words[19] = "stevesko81@yahoo.com:89camaro"
words[20] = "kyle.soccer14@gmail.com:soccer15"
words[21] = "lopez.abel39@yahoo.com:vista"
words[22] = "miller.kwm@gmail.com:emily2003"
words[23] = "xx_jc32_xx@yahoo.com:assassin2"
words[24] = "fernanda.abel.59@hotmail.com:florzinha20"
words[25] = "katerinakosta@gmail.com:sociology"
words[26] = "sandrass99@hotmail.com:eusoudejesus"
words[27] = "sabredeluz@hotmail.com:123zxcP"
words[28] = "fco-justinbieber2love@hotmail.com:runawaylove"

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