// ES6
// a
var a = () => alert("Привет всем!")
alert(a())


// cube
var cube = (a) => Math.pow(a,3)
alert(cube(5))


// avg2
var avg2 = (b,c) => (Number(b) + Number(c))/2
alert(avg2(1,2)) 
alert(avg2(10,5))


// sum3
var sum3 = (e=0,d=0,f=0) => (Number(e)+Number(d)+Number(f))
alert(sum3(1,2,3))
alert(sum3(5,10,100500))
alert(sum3(5,10))


// intRandom
var intRandom = (g,h) => (!h?Math.round(Math.random()*g):Math.round(Math.random() * (g - h) + h))
alert(intRandom(2,15))
alert(intRandom(-1,-1))
alert(intRandom(0,1))
alert(intRandom(10))


// greetAll
var greetAll = (...arguments) => {
    var sum = '';
    for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i]
    }
    return sum
}
alert(greetAll("Superman"))
alert(greetAll("Superman",", Spiderman"))
alert(greetAll("Superman", ", SpiderMan", ", Captain Obvious"))


// sum
var sum = (...arguments) => {var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}

alert(sum(1))
alert(sum(2))
alert(sum(10,20,40,100))


// arrayMap
var arr = ["1", {}, null, undefined, "500", 700]
var numbers = arr.map(function(a){
    if (a === null || a === Number(a) || a === undefined || a === Object(a) || a === Boolean(a))
    return a;
    else 
    return +a;
})
console.log(numbers)


// sort
var persons = [
    {name: "Иван", age: 17},
    {name: "Мария", age: 35},
    {name: "Алексей", age: 73},
    {name: "Яков", age: 12},
]

function sort(k,i,b=true) {
    if (b === true) {
        let c = k.sort(function(a,b){
            if (a[i] > b[i]){
                return 1;
                }
                return -1;
            });
            console.log(c)
    } else {
        let c = k.sort(function(a,b){
            if (a[i] < b[i]){
                return 1;
                }
                return -1;
            });
            console.log(c)
    }
}
sort(persons, "name", false);
sort(persons, "age");


// array reduce
var arr = ["0", 5, 3, "string", null]
var numbers = arr.reduce(function(a,b){
    if (b === Number(b)){
        a = a * b
    }
    return a
},1)
console.log(numbers);


// Object filter
var phone = {
    brand: "meizu",
    model: "m2",
    ram: 2,
    color: "black",
};
var obj = {}
function filter(a,b,c) {
    for (var key in a) {
        if (key == b || phone[key] == c) 
            obj[key] = a[key]
    }
    return obj
}
console.log(filter(phone,"color",2))


// Object map
let a1 = {name: "Иван", age: 17};
let b1 = {}
function map(a,b,c,d){
    for (var key in a1) {
        b1[a+"_"] = b + "$";
        b1[c+"_"] = d + "$";
    } 
    return b1
}
console.log(map("name","Иван","age",17));















