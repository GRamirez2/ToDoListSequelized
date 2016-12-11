
var express = require('express'),
    app = express(),
    favicon = require('serve-favicon'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    // path = require('path'),
    models = require('./models'),
    nodemon = require('nodemon'),
    logger = require('morgan');

nodemon.on('start', function () {
  console.log('Tasks App has started');
}).on('quit', function () {
  console.log('App has quit');
}).on('restart', function (files) {
  console.log('App restarted due to: ', files);
});

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// override with POST having ?_method=DELETE and ?_method=PUT
app.use(methodOverride('_method'));

// Serve static content for the app from the "public" directory in the application directory. 
app.use(express.static(process.cwd() + '/public'));

// var application_controller = require('./controllers/applicatioin_controller');
var routes = require('./controllers/tasks_controller.js');

// app.use('/', application_controller);
app.use('/', routes);

//trying serve-favicon
app.use(favicon(__dirname + '/public/favicon.ico')); 

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

