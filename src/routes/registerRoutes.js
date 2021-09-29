const express = require('express');
const registerRouter = express.Router();

function router(nav){
    registerRouter.get('/',function(req,res){
        res.render('register',{
            nav,
            title: 'Library',
            
        })
    })
    registerRouter.get('/add',function(req,res){
        res.send("");
    })

    return registerRouter;

    
}
module.exports = router;