// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
//
// let users = [ john, pete, mary ];
//
// let names = users.map(user => (user.name))
//
// alert( names ); // John, Pete, Mary

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };
//
// let users = [ john, pete, mary ];
//
// let usersMapped = users.map(user => ({
//   fullName: `${user.name} ${user.surname}` ,
//   id: user.id
// }))
//
// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */
//
// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith

// let sortByAge = (arr) => {
//   arr.sort((a,b) => a.age - b.age)
// }
//
// let compareAge = (a, b) => {
//   if (a.age < b.age) return -1;
//   else if (a.age > b.age) return 1;
//   else return 0;
// }
//
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
//
// let arr = [ pete, john, mary ];
//
// sortByAge(arr);
//
// // now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete

// let getAverageAge = (arr) => {
//   let sum = 0;
//   arr.forEach(item => sum += item.age);
//   return sum / arr.length
// }
//
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };
//
// let arr = [ john, pete, mary ];
//
// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

let groupById = (array) => {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
