function printName(
    obj: {name:string, age:number})
{
        console.log(`This person is called ${obj.name} and he is ${obj.age} years old`);
}

let person1 = {name: 'Pedro', age: 24}
let person2 = {name: 'Bernardo', age: 69}

printName(person1)
printName(person2)
