const app = require('./app')
const { PORT } = require('./config')

 const { PORT, DB_URL } = require('./config')

   const db = knex({
     client: 'pg',
     connection: DB_URL,
   })

app.set('db', db)
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})
