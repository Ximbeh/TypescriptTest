function printName(obj) {
    console.log("This person is called ".concat(obj.name, " and he is ").concat(obj.age, " years old"));
}
var person1 = { name: 'Pedro', age: 24 };
var person2 = { name: 'Bernardo', age: 69 };
printName(person1);
printName(person2);
