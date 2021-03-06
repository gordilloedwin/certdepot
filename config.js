module.exports = function(app, express, mongoose){

  var config = this;

  //generic config
  app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.compress());
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
    app.use(express.favicon(__dirname + '/public/img/award-certificate-icon.ico')); 
  });

  //env specific config
  app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

    //app.mongoose.connect('mongodb://localhost/nodemvr');
  });

  app.configure('production', function(){
    app.use(express.errorHandler());

    //app.mongoose.connect('mongodb://flame.mongohq.com:27087/nodemvr');
    //app.mongoose.connect('mongodb://localhost/nodemvr');
  });

  return config;

};

