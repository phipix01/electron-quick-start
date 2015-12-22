const ipcRenderer = require('electron').ipcRenderer;
//console.log(ipcRenderer.sendSync('synchronous-message', 'user'));

ipcRenderer.on('asynchronous-reply', function(event, arg) {
  console.log(arg); // prints "pong"
});

var vm = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    getUser: function (event) {
      console.log("sending message");
      ipcRenderer.send('asynchronous-message', 'user');
    },
    greet: function (event) {
      console.log(ipcRenderer.sendSync('synchronous-message', 'ping')); // prints "pong"
    }
  }
})
