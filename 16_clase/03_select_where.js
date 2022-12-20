const dbConfig = require('./db/config');
const knex = require('knex')(dbConfig.mariaDB)


    (async () => {
        try {
            const users = await knex.from('users')
            .select('id','name','lastname','age')
            .where('name','like','%e%');/* le estoy diciendo que me traiga todos los nombres que tengan e */
            /* where('age','in',[30,25]) */
            /* .orWhere({name:'luis'}) */
            console.table(users);
        } catch (error) {
          
        }
        finally{
            console.log('me muestro en finally')
            knex.destroy();
        }
    })()