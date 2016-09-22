 function smokecalc(pack,cigar,price) {
   var result = ((price/pack)*cigar);
  return Number(result.toFixed(2));
 }


module.exports = smokecalc;
