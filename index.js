const {app, BrowserWindow, ipcMain} = require('electron')
const mysql = require('mysql2')
const { Sequelize, DataTypes } = require('sequelize')
const path = require('path')
//const Connection = require('mysql2/typings/mysql/lib/Connection')

function create_window(){
    const ventana = new BrowserWindow({
        width: 500,
        height: 500,
        webPreferences: {
            preload: path.join(app.getAppPath(),'preload.js')
        }
    })
    ventana.loadFile('index.html')
}

//ORM

const sequelize = new Sequelize('prograAvanzada', 'tester', 'tester', {
    host: 'localhost',
    dialect: 'mysql'
  })

  const Joke = sequelize.define('Joke', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    category: {
      type: DataTypes.STRING,
    },
    joke: {
      type: DataTypes.STRING
      // allowNull defaults to true
    }
  }, {
    // Other model options go here
    tableName: 'Jokes',
    timestamps: false
  })

sequelize.authenticate()
.then(()=>{
    console.log('Connection established successfully')
})
.catch((err)=>{
    console.error('Unable to connect to the database: ', err)
})
//app

app.whenReady()
.then(create_window)


ipcMain.on('createJoke', function(event, args){
  console.log(args)
  Joke.create(args)
})