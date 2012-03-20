(function() {
  window.RS = {
    save: function save(key, value) {
      key = this.key;
      value = this.value;
      var div = document.getElementById('console');

      div.innerHTML = 'This is ' + key + ' and value is ' + value;
    }
  };

  window.addEventListener('load', function() {
    RS.save('hoge', 'fuga');
  });
})();
