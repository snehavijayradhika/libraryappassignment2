const express = require('express');
const booksRouter = express.Router();
function router(nav){
    var books = [

        {
            title: 'Tom and Jerry',
            author: 'Joseph Barbera',
            genre: 'Cartoon',
            img: "Tom-and-Jerry.jpg"
        },
    
        {
            title: 'Wings Of Fire',
            author: 'Dr APJ Abdul Kalam',
            genre: 'Autobiography',
            img: "Wings_of_Fire.jpg"
        },
    
        {
            title: 'The Alchemist',
            author: 'Paulo Coelho',
            genre: 'Novel',
            img: "al chemist.jpg"
        },
    
        {
            title: 'The Magic Of Thinking Big',
            author: 'David Schwartz',
            genre: 'Self Help',
            img: "themagicofthinking.jpg"
        },
    
        {
            title: 'The Immortals of Meluha',
            author: 'Amish Tripathi',
            genre: 'Historical Fiction',
            img: "meluha.jpg"
        }
    
    ]
    booksRouter.get('/',function(req,res){
        res.render("books",{
            nav,
            title:'Library',
            books
    
        });
    });
    
    booksRouter.get('/:i',function(req,res){
        const i = req.params.i
        res.render('book',{
            nav,
            title:'Library',
            book: books[i]
        });
    });

    return booksRouter;
}



module.exports = router;