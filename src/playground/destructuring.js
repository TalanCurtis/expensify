console.log("destructing is running");
/*
//--- object destructuring ---//
const person = {
  name: 'Alan',
  age: 43,
  location: {
    city: 'Philly',
    temp: 88
  }
}

// destructuring:
const { name, age } = person;
const { city, temp } = person.location;
console.log(`${name} is ${age}.`);
console.log(`it is ${temp} in ${city}.`);

// rename destructured
  //const { city, temp: tempature } = person.location;
// default value:
 // const { name = 'anonymous', age } = person;


// none destructured
console.log(`${person.name} is ${person.age}.`);
console.log(`it is ${person.location.temp} in ${person.location.city}.`);
*/

//--- array destructuring ---//

const address = ['123 S Juniper', 'Utah', 'Sandy', '84094' ];
const address2 = ['123 S Juniper', , 'Sandy', '84094' ];

const [ street, state = 'Unknown', city, zip ] = address;
const [ street2, state2 = 'Unknown', city2, zip2 ] = address2;

console.log( state, city , zip, street)
console.log( state2, city2 , zip2, street2)