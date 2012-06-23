(function() {
  window.RS = {
    init: function() {
    },
    put: function put(key, value) {
      key = this.key;
      value = this.value;
      var div = document.getElementById('console');

      div.innerHTML = 'This is ' + key + ' and value is ' + value;
    },
    get: function get(key) {
      // body...
    },
    remove: function remove() {
      // body...
    },
    clear: function clear() {
    }
  };

  window.addEventListener('load', function() {
    RS.put('hoge', 'fuga');
  });
})();
