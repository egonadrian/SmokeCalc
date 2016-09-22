var prompt = require('prompt-sync')();
var smokecalc = require('./smokecalc');


var pack = prompt('How many cigarretes are in one carton of cigarretes?');
var cigar = prompt('How many cigarretes do you smoke per day?');
var price = prompt('How much do you pay per carton of cigarretes?');
var final = smokecalc(pack,cigar,price)



console.log('You spend $'+final+' per day on cigarretes');
console.log('You spend $'+(final*365).toFixed(2)+' per year on cigarretes');
