$(document).on('ready', function(){
  var socket = io('http://localhost:9090');
  window.app = feathers()
    .configure(feathers.socketio(socket))
    .configure(feathers.hooks())
    .configure(feathers.authentication({ storage: window.localStorage }));
  app.authenticate({
    'type': 'local',
    'email': "chumheramis@gmail.com",
    'password': "admin123"
  }).then(function(result){
    console.log('Authenticated!', result);
  }).catch(function(error){
    console.error('Error authenticating!', error);
    //alert('Error: ' + error.message);
  });
});