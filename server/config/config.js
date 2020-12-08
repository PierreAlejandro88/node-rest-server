//======================
//Puerto

const e = require("express");

//======================
process.env.PORT = process.env.PORT || 3000;

//======================
//Entorno
//======================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//======================
//Base de Datos
//======================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URL;
}

process.env.URLDB = urlDB;


//======================
//Vencimiento Token
//======================
//60 segundos, 60 minutos ,24 horas, 30 dias
process.env.CADUCIDAD_TOKEN = '48h';


//======================
//SEED de autenticacion
//======================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';


//======================
//Google ClienteID
//======================

process.env.CLIENT_ID = process.env.CLIENT_ID || '133358281178-7cd19rm8375i41a7sk5krt9hi3db5qff.apps.googleusercontent.com';