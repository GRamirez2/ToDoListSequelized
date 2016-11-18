var models = require('../models');
var express = require('express');
var router = express.Router();

// GET
router.get('/', function(req, res){

    models.Tasks.findAll({
      //this is where I will use the include method to grap data from another table
      //in the meantime, does this stay blank?
    }).then(function(tasks){
        var entireList = {todo:tasks};//**I'm not sure what this should be named, what is handlebars expecting????
        res.render('index', entireList);
    });
});

// POST

router.post('/create', function (req, res){

    models.Tasks.create({
        name: req.body.name,
        complete: req.body.complete
    }).then(function(){
        res.redirect('/');
    });
});


// PUT

router.put('/update/:id', function(req, res){
    models.Tasks.update(
        {
            complete:req.body.complete
        },
        {
            where:{id:req.params.id}
        }
    ).then(function (result){
        res.redirect('/');
    })

});

// DELETE
router.delete('/delete/:id', function(req,res){
    models.Tasks.destroy(
        {
            where:{id:req.params.id}

        }
    ).then(function (result){
        res.redirect('/');
    })
})

module.exports = router;