const { Sequelize, Datatypes} = require('sequelize');
var DataTypes = require('sequelize/lib/data-types');
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
app.use(express.json());



const sequelize = new Sequelize('AwesomeCompany', 'SA', 'Popohq14', {
  host: 'localhost',
  dialect: 'mssql'
});

const AwesomeTableModel = sequelize.define('AwesomeTableModel', {
  id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
  },
  fullName: {
    type: DataTypes.STRING,
  },
  birthDate: {
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
    maritialStatus: {
    type: DataTypes.STRING
  }
});

AwesomeTableModel.sync({ alter: true });

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

app.post("/api", (req, res) => {
    console.log('Insertar');
    try{
        AwesomeTableModel.create(req.body);
        res.send('Exito!')
    } catch(error){
        console.log('Error al insertar datos',error);
    }
})

app.get("/api", (req, res) => {
    console.log('i receive a POST request');

              AwesomeTableModel.findAll()
              .then(variable => console.log("All users:", JSON.stringify(variable, null, 2)));

    var tryFetch = {myString: 'I am working fetch'};
    res.json(tryFetch)
})

app.listen(3000, () => {
    console.log('The web server has started on port 3000');
});
