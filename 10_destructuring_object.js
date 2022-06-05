const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 
 
const {firstName, age, isMale = false} = profile;
 
console.log(firstName)
console.log(age)
console.log(isMale)
 
/* output:
John
18
false
*/

// Assigning to Different Local Variable Names

const profile1 = {
    firstName1: "John",
    lastName1: "Doe",
    age1: 18
}
 
const {firstName1: localFirstName, lastName1: localLastName, age1: localAge} = profile1;
 
console.log(localFirstName);
console.log(localLastName);
console.log(localAge);
 
 