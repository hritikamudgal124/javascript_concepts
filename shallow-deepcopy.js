// let obj = {                  //problem1
//   name: "hritika",
// };
// let user = obj;
// user.name = "rishi";
// console.log(obj);

//solution1 //shallow copy
// let obj = {
//   name: "hritika",
// };
// let user = Object.assign({}, obj);
// user.name = "rishi";
// console.warn("object is :", obj);
// console.warn("user is :", user);

//solution2
// let obj2 = {
//   name: "hritka",
// };
// let user2 = { ...obj2 };
// user2.name = "rishi";
// console.log("Object is :", obj2);
// console.log("user is :", user2);

//problem 2
// let obj3 = {
//   name: "hritika",
//   address: {
//     city: "dhar",
//     state: "MP",
//   },
// };
// let user3 = { ...obj3 };
// user3.address.city = "indore";
// console.log(obj3);

//solution deep copy
let obj3 = {
  name: "hritika",
  address: {
    city: "dhar",
    state: "MP",
  },
};
let user3 = JSON.parse(JSON.stringify(obj3));
user3.address.city = "indore";
console.log("Object is :", obj3);
console.log("user is :", user3);

//limitations of deep copy

//date and function will not work to resolve that we must use lodash library
// or we can use for loop to manually compare the items and copy them
