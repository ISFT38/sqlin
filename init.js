const { Client } = require('pg')
const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

terminal.question('Ingrese su nombre: ', function(uname) {
  terminal.question('Ingrese su email: ', function(email) {
    terminal.question('Ingrese su password: ', function(upassword){
      createUser(uname, email, upassword);
      terminal.close();
    });
  });
});

const client = new Client({
  user: 'sqlin_user',
  host: 'localhost',
  database: 'sqlin_database',
  password: 'secret',
  port: 5432,
});

client.connect();

function createUser(uname, email, upassword) {
  // const sql = "INSERT INTO user_data(uname, email, upassword) VALUES('" + uname + "', '" + email + "', '" + upassword + "');";
  const sql = "INSERT INTO user_data(uname, email, upassword) VALUES($1, $2, $3)";
  console.log(sql);
  client.query(sql, [uname, email, upassword], (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
    client.end();
  });
}