// var Connection = require('tedious').Connection;
// var Request = require('tedious').Request;
// var TYPES = require('tedious').TYPES;
const { Sequelize, Datatypes} = require('sequelize');
var DataTypes = require('sequelize/lib/data-types');
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

//
// // Create connection to database
// var config = {
//   server: 'localhost',
//   authentication: {
//       type: 'default',
//       options: {
//           userName: 'SA', // update me
//           password: 'Popohq14' // update me
//       }
//   },
//   options: {
//       trustServerCertificate: true,
//       database: 'AwesomeCompany'
//   }
// }
// var connection = new Connection(config);
// // Attempt to connect and execute queries if connection goes through
// connection.on('connect', function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Connectado');
//     executeStatement();
//   }
// });
//
// connection.connect();
//
//
//
// function executeStatement() {
//   request = new Request("select fullName from awesome_table", function(err, rowCount) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(rowCount + ' rows');
//     }
//   });
//
//   request.on('row', function(columns) {
//     columns.forEach(function(column) {
//       console.log(column.value);
//     });
//   });
//
//   connection.execSql(request);
// }
//


const sequelize = new Sequelize('AwesomeCompany', 'SA', 'Popohq14', {
  host: 'localhost',
  dialect: 'mssql'
});

const AwesomeTableModel = sequelize.define('AwesomeTableModel', {
  // Model attributes are defined here
  id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
  },
  fullName: {
    type: DataTypes.STRING,
  },
  birthDay: {
    type: DataTypes.DATEONLY
  },
  phone: {
    type: DataTypes.INTEGER
  },
  email: {
    type: DataTypes.STRING
  },
  salary: {
    type: DataTypes.INTEGER
  },
  maritalStatus: {
    type: DataTypes.STRING
  }
});


    try {
      sequelize.authenticate();
      console.log('Connection has been established successfully.');
      AwesomeTableModel.sync({ alter: true })
      const jane = AwesomeTableModel.create({ fullName: "Jane" });
    } catch (error) {
      console.error('Unable to connect to the database:', error);
  }



















app.engine('hbs', exphbs.engine({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/database', (req, res) => {

    res.render('database');
});


app.listen(3000, () => {
    console.log('The web server has started on port 3000');
});
