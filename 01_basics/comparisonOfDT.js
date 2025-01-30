console.log(null > 0);          // false
console.log(null == 0);         // false
console.log(null >= 0);         // true
 // Why? Equality check == and comparison works diff.
 // comaprison converts null to number 0.
 // therefor null > 0 : 0 > 0 is false