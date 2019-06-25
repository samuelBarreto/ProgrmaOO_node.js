console.log(typeof Strings)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}
console.log('Escola da vida'. reverse())

Array.prototype.first = function() {
    return this[0]
}
console.log([1,2,3,4,5,6,7,8,9].first())
console.log(['a','b','c','d','e','f','g','h','i'].first())

String.prototype.toString = function () {
    return 'Lascou tudo'
}
console.log('Escola da vida String'.reverse())