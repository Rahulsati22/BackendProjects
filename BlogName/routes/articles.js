const { response } = require('express');
const express = require('express');
const router = express.Router();
const article = require('../models/articles');

router.post('/', function(request,response){
     article.create(request.body,function(error,user){
        if(error){
            console.log(request.body)
            return response.render('./articles/new',{title: request.body.title, description :  request.body.description, content:request.body.content});
        }else{
            return response.redirect(`articles/${user._id}`);
        }
     });
    //  return response.redirect('/');
})
router.get('/new',function(request,response){
    return response.render('./articles/new',{title: '', description :'', content:''});
})
router.get('/:id', async function(request,response){
    const articl = await article.findById(request.params.id);
    if(articl == null)return response.redirect('/');
    return response.render('./articles/show',{
        articles : articl,
    });
})

router.get('/edit/:id',function(request,response){
    article.findById(request.params.id, function(error,user){
        if (error){
            console.log('error');
            return;
        }
        else{
            return response.render('./articles/edit',{
                articles : user,
            })
        }
    })
})
 router.post('/blog_edit/:id', function(request,response){
      article.findByIdAndUpdate(request.params.id,{title : request.body.title, description : request.body.description, content : request.body.content},function(error,user){
         if (error){
            console.log('error');
            return;
         }
         else{
            return response.redirect('/');
         }
      })
 })
router.get('/delete/:id',function(request,response){
    article.findByIdAndDelete(request.params.id,function(error,user){
        if(error){
            console.log('error');
            return;
        }
        else{
            console.log('deleted successfully');
            return response.redirect('/');
        }
    })
})
module.exports = router;