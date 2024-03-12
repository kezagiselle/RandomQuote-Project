const quotes = [];
function addQuote(name){
    quotes.push({nameOfQuote: name});
    return quotes;
};

addQuote("It takes courage to grow up and become who you really are.");
addQuote("Your self-worth is determined by you.")
addQuote("Nothing is impossible.");
addQuote("You have brains in your head");
addQuote("Champions keep playing until they get it right");

console.log(quotes);

function removeQuote(index){
   if(index > 0 && index < quotes.length){
    quotes.splice(index,1);
    console.log('quotes is removed');
   } else{
    console.log('invalid index');
   }
};
removeQuote(1);
console.log(quotes);

function randomSelection(){
    let randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[2];
}
console.log(randomSelection());

function displayQuote(index){
    if(quotes.length > 0){
        console.log("quotes:");
        quotes.forEach(function(nameOfQuote){
            console.log(`${nameOfQuote}`);
        })
        return quotes;
    } else{
        console.log('no list');
        return [];
    }
};
console.log(quotes);

module.exports = {
    addQuote,
    removeQuote,
    randomSelection,
    displayQuote
}



