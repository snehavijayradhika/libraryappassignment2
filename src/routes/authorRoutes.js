const express = require('express');
const authorsRouter = express.Router();

function router(nav){
    var authors = [

        {
            title: 'Tom and Jerry',
            author: 'Joseph Barbera',
            genre: 'Cartoon',
            img: "JBarbera.jpg"
        },
    
        {
            title: 'Wings Of Fire',
            author: 'Dr APJ Abdul Kalam',
            genre: 'Autobiography',
            img: "Dr.Apj.jpg"
        },
    
        {
            title: 'The Alchemist',
            author: 'Paulo Coelho',
            genre: 'Novel',
            img: "paulo coelho.jpg"
        },
    
        {
            title: 'The Magic Of Thinking Big',
            author: 'David Schwartz',
            genre: 'Self Help',
            img: "DavidSchwartz.jpg"
        },
    
        {
            title: 'The Immortals of Meluha',
            author: 'Amish Tripathi',
            genre: 'Historical Fiction',
            img: "Amish.jpg"
        }
    
    ]
    authorsRouter.get('/',function(req,res){
        res.render("authors",{
            nav,
            title:'Library',
            authors
        });
    });
    
    authorsRouter.get('/:i',function(req,res){
        const i = req.params.i
        res.render('author',{
            nav,
            title:'Library',
            author: authors[i]
        });
    });

    return authorsRouter;
}


module.exports = router;