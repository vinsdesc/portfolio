function wrapChars(str, tmpl) {
    return str.replace(/\w/g, tmpl || "<span>$&</span>");
}

console.log(wrapChars(' Casalina'))