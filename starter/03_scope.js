// TODO: Create a global variable 'role' with value "guest"
// TODO: Write a function 'setRole' that declares a local variable also called 'role' with value "admin"
// TODO: Log the local role inside the function
// TODO: Write another function 'showGlobalRole' that logs the global role

let role = "guest";

function setRole() {
  let role = "admin"
  console.log(this.role)
}

function showGlobalRole() {
  console.log(globalThis.role)
}

module.exports = { setRole, showGlobalRole, role };
