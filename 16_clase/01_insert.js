const dbConfig = require('./db/config');
const knex = require('knex')(dbConfig.mariaDB)

const newUser = {
    name: 'lionel',
    lastname: 'messi',
    age: 35,
    dni: '12312Dios'
}

    (async () => {
        try {
            await knex('users').insert(newUser);
            console.log('me muestro en try')
            console.log('user insert into db')
        } catch (error) {
            console.log('me muestro en catch')
            console.log(error)
        }
        finally{
            console.log('me muestro en finally')
            knex.destroy();
        }
    })()