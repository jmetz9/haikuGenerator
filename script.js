$(document).ready(function () {
    $("button#add").on("click", addWord);
    $("button#make").on("click", generateHaiku);
});

let dictionary = [
    //1
    ["hey", "the", "bees"],
    //2
    ["someone", "marker"],
    //3
    ["saxophone", "syllable"],
    //4
    ["contradicting", "catastrophic"],
    //5
    ["preliminary", "superintendent"],
    //6
    ["comfortability", "osteoporosis"],
    //7
    ["establishmentarian", "unconventionality"]
]

function addWord(){

    let input = $("input#box").val();
    let syllables = input.split("-").length

    if($("input#box").val() == "" || syllables > 7){
        $("p#error").text("incorrect number of syllables");
    }
    else {
        dictionary[syllables - 1].push(input.replaceAll("-",""));
        $("input#box").val("");
        $("p#error").text("")
    }
}

function generateHaiku(){

    $("p").text("");

    generateLine(5, $("p#first"))
    generateLine(7, $("p#second"))
    generateLine(5, $("p#third"))

}

function generateLine(syllables, line){

    let syllablesNeeded = syllables;

    while(syllablesNeeded != 0){
        let random = Math.floor(Math.random() * syllablesNeeded) + 1
        syllablesNeeded = syllablesNeeded - random;
        line.append(dictionary[random - 1][Math.floor(Math.random() * dictionary[random - 1].length)] + " ")
    }

}