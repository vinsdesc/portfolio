// function wrapChars(str, tmpl) {
//     return str.replace(/\w/g, tmpl || "<span>$&</span>");
// }

// console.log(wrapChars(' Casalina'))


// const sayGreeting = {
//     name: "Parwinder",
//     hello: function () {
//         return `Hello, ${this.name}`;
//     }
// }

// const nameObject = {
//     name: "Lauren"
// }

// console.log( sayGreeting.hello.bind(nameObject)())


a = 10;


var a;
console.log(a)



// Write an answer using console.log()
// To debug: console.error('Debug messages...');

const n = parseInt(readline());
const a = parseInt(readline());
const symbol = readline();

for(let i = 1; i <= n; i++) {
  console.log(' '.repeat(a+i) + symbol.repeat(i))
}



somme impair

int x=1;
int sum=0;
while(n!=0)
{
    n--;
    sum+=x;
    x=x+2;
}



PAS FINI
le dé

const n = parseInt(readline());
const s = readline();

const l = s.split(' ').length
const occ = s.split(' ').map(x => parseInt(x)).filter(x => x == n);
console.error(occ)
if (occ.length === 0) {
    console.log('No throws')
    return
}
console.error(l)
console.log(''+ (occ.length / l)*100)




supprimer doublon leading 0

const n = parseInt(readline());
var inputs = readline().split(' ');

inputs= inputs.map(x => +x)
let uniqueChars = [...new Set(inputs)];
console.error(uniqueChars)



PAS FINI
remplacement mot phrase
const n = parseInt(readline());
let toReplace = [], replacer = [];
for (let i = 0; i < n; i++) {
    const pair = readline();
   
    toReplace.push('<'+pair.split(' ')[0]+ '>');
    console.error(pair.split(' ').splice(1,1))
    replacer.push(pair.split(' ').splice(1,1).join(' '));
}
const template = readline();
console.error(toReplace)
let newTem = template;
for (let i = 0; i < replacer.length; i++) {
    newTem = newTem.replace(toReplace[i], replacer[i]);
    // console.error(newTem)
}

console.log(newTem)




Soustraction de somme de produit
p=1
s=0
[p:=p*int(i) for i in n]
[s:=s+int(i) for i in n]
print(p-s)


ascii art
const l = 'abcdefghijklmnopqrstuvwxyz'
const alpha = l.split('');
const tArrray = T.split('')

for (let i = 0; i < H; i++) {
    const ROW = readline();
    let res = '';
    tArrray.forEach(t => {
        const ind = alpha.findIndex(x => t.toLowerCase() === x)
        if (ind > -1) {
            res +=  ROW.substring(ind *L, ind *L + L) 
        } else if (t === ' ') {
            res += ' '
        }
    })
    console.log(res)
}
