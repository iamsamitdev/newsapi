// Import MySQL
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'newsdb',
    port: 3306
})

connection.connect((error) => {
    if(!!error){
        console.log(error)
    }else{
        console.log("MySQL Database Connected Success")
    }
})

module.exports = connection