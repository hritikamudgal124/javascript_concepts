//an item's lexical scope is the place in which the item got created.
//The place an item got invoked (or called) is not necessarily the item's lexical scope. Instead, an item's definition space is its lexical scope.

// Define a variable in the global scope:
const myName = "Oluwatobi";
// Call myName variable from a function:
function getName() {
  return myName;
}
console.log(myName); //lexical scope of myName is global bcoz we have defined it globally

// Define a variable in the local scope:
function getName() {
  const myName = "Oluwatobi";
  return myName;
}
console.log(myName); //lexical scope of myName is local bcoz we have defined it locally

// function showLastName() {
//   const lastName = "Sofela";
//   return lastName;
// }

// function displayFullName() {
//   const fullName = "Oluwatobi " + lastName; //error
//   return fullName;
// }

// console.log(displayFullName());

// // The invocation above will return:error

//solution of above
function showLastName() {
  const lastName = "Sofela";
  return lastName;
}

function displayFullName() {
  const fullName = "Oluwatobi " + showLastName();
  return fullName;
}

console.log(displayFullName());
