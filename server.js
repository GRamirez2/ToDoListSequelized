
var express = require('express'),
    app = express(),
    favicon = require('serve-favicon'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    path = require('path'),
    models = require('./models');


// trying nodemon
var nodemon = require('nodemon');

nodemon.on('start', function () {
  console.log('ToDo App has started');
}).on('quit', function () {
  console.log('App has quit');
}).on('restart', function (files) {
  console.log('App restarted due to: ', files);
});


//model controllers rather than routes
var application_controller = require('./controllers/applicatioin_controller');
var tasks = require('./controllers/tasks_controller');//this file may have errors



//********Express Settings

// Serve static content for the app from the "public" directory in the application directory.
//Do I Need this anymore???? YES I DO 
app.use(express.static(process.cwd() + '/public'));

app.use('/', application_controller);
app.use('/tasks', tasks);


//trying serve-favicon
app.use(favicon(__dirname + '/public/favicon.ico')); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));

// use handlebars as a template maker
app.set('view engine', 'handlebars');

// these two lines of code were replaced by my model contollers
// var routes = require('./controllers/todo_controller.js');
// app.use('/', routes);

// listening on port 3000 OR process.env.PORT
app.set('port', process.env.PORT || 3000);

models.sequelize.sync().then(function(){
  app.listen(app.get('port'),function(){
    console.log('listening on port ' + this.address().port);
  });
});

