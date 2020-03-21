module.exports = function toReadable (number) {

    var num = number,
        a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '],
        b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
        c = ['thousand', 'million', ''],
        words = '';

    num = ('000000000' + num.toString()).substr(-9) // Make number into a predictiable nine character string
        .match(/.{3}/g); // Split string into chuncks of three numbers then reverse order of returned array

    for (var i = 0; i < c.length; i++) {
        var n = num[i],
            str = '';
        str += (words != '') ? ' ' + c[c.length - 1 - i] + ' ' : '';
        str += (n[0] != 0) ? (a[Number(n[0])] + 'hundred ') : '';
        n = n.substr(1);
        str += (n != 0) ? ((str != '') ? '' : '') + (a[Number(n)] || b[n[0]] + ' ' + a[n[1]]) : '';
        words += str;
    }
    return number === 0 ? 'zero' : words.replace(/ +/g, ' ').replace(/ $/, '');
  
}
