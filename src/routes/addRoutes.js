const express = require('express');
const addRouter = express.Router();

function router(nav){
    addRouter.get('/',function(req,res){
        res.render('addAuthor',{
            nav,
            title: 'Library'
            
        })
    })
    addRouter.get('/add',function(req,res){
        res.send("");
    })

    return addRouter;
}
module.exports = router;