(function(window, undefined) {
  'use strict';

  var _selectStorage = function _selectStorage(flag) {
    var storage;

    if (typeof flag !== 'boolean' && flag !== undefined) {
      throw new Error('2nd argument should be boolean');
    } else {
      if (flag === true || flag === undefined) {
        storage = localStorage;
      } else {
        storage = sessionStorage;
      }
    }

    return storage;
  };

  window.RS = {
    put: function put(obj, flag) {
      var storage = _selectStorage(flag);

      if (typeof obj !== 'object') {
        throw new Error('1st argument should be object');
      }

      for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
          storage.setItem(i, JSON.stringify(obj[i]));
          console.log(storage);
        }
      }
    },
    get: function get(key, flag) {
      var storage = _selectStorage(flag),
          selectKey = storage.getItem(key);

      if (typeof key === 'string') {
        if (selectKey) {
          return JSON.parse(selectKey);
        } else {
          throw new Error('This key is not in storage');
        }
      } else {
        throw new Error('1st argument should be string');
      }
    },
    remove: function remove(key, flag) {
      var storage = _selectStorage(flag);

      storage.removeItem(key);
    },
    clear: function clear(flag) {
      var storage = _selectStorage(flag);

      storage.clear();
    }
  };
})(this);

