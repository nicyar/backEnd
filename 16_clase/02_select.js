const dbConfig = require('./db/config');
const knex = require('knex')(dbConfig.mariaDB)


    (async () => {
        try {
            const users = await knex.from('users').select('id','name','age');
            console.table(users);
        } catch (error) {
          
        }
        finally{
            console.log('me muestro en finally')
            knex.destroy();
        }
    })()