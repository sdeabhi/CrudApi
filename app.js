const express = require('express')
const cors = require('cors')
const path = require("path");
const app = express();
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
const userRouter  = require("./routes/userRoutes");
const authRouter  = require("./routes/authRoutes");
const contactRouter = require('./routes/contactRoutes')
const careerRouter = require('./routes/careerRoutes')

const {getConnect } = require('./config/db');
getConnect();


app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

//Routes
app.use('/', userRouter);
app.use('/', authRouter);
app.use('/',contactRouter)
app.use('/',careerRouter)


module.exports = app;