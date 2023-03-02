"use strict";
const person1 = {
    name: "jorge",
    age: 29,
    hobbies: ["series", "movies", "videogames", "cycling", "squash"]
};
let favoriteActivities;
favoriteActivities = [];
favoriteActivities = ['sports'];
for (const hobby of person1.hobbies) {
    console.log(hobby);
}
person1.hobbies.map(hobby => {
    return "my hobby is: " + hobby.toUpperCase();
});
console.log(person1.hobbies);
