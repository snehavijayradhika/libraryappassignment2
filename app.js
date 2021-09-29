const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

const nav = [
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/admin',name:'Add Book'
    },
    {
        link:'/addauthor',name:'Add Author'
    },
    {
        link:'/login',name:'Login'
    },
    {
        link:'/register',name:'Register'
    }
];

// var admin = {
//     Username :"admin",
//     Password :"12345"
// }

const loginRouter = require('./src/routes/loginRoutes')(nav);
const registerRouter = require('./src/routes/registerRoutes')(nav);


const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);

const adminRouter = require('./src/routes/adminRoutes')(nav);
const addRouter = require('./src/routes/addRoutes')(nav);

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views',__dirname+ '/src/views');
app.use('/login',loginRouter);
app.use('/register',registerRouter);

app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/admin',adminRouter);
app.use('/addauthor',addRouter);


app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library'

    });


});

app.get('/',function(req,res){
    res.render("login",{title:"Login"});
});

app.get('/',function(req,res){
    res.render("register",{title:"Register"});
});

app.listen(port,()=>{console.log("Server Ready at" + port)});