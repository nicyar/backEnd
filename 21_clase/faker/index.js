const {faker} = require('@faker-js/faker');

const faker={
    
    firstname:faker.name.firstname(),
    lasttname:faker.name.lastname(),
    age:faker.datatype.age({min:18,max:19}),
    avatar:faker.image.avatar()
}