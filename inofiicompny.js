var details= [     {"name": "John", "age": 25},     {"name": "Jane", "age": 30},     {"name": "John", "age": 35},     {"name": "Jane", "age": 40},     {"name": "John", "age": 45},     {"name": "Alice", "age": 20} ];



const aggreagteage=[];
details.forEach(person=>{
    const existingPerson=aggreagteage.find(p=>
    p.name ===person.name);
    if(existingPerson){
        existingPerson.age += person.age;
    }else{
        aggreagteage.push({name:person.name,age:person.age});
    }
})
console.log(aggreagteage);

// output:
// [
//   { name: 'John', age: 105 },
//   { name: 'Jane', age: 70 },
//   { name: 'Alice', age: 20 }
// ]
