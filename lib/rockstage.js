// Copyright (c) 2012 HIRAKI Satoru, https://github.com/Layzie
// 
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
// 
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

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

  if (typeof window.RS === 'undefined') {
    window.RS = {};
  }

  window.RS = {
    put: function put(obj, flag) {
      var storage = _selectStorage(flag);

      if (typeof obj === 'object') {
        if (obj instanceof Array) {
          throw new Error('1st argument should be object');
        }
        for (var i in obj) {
          if (obj.hasOwnProperty(i)) {
            storage.setItem(i, JSON.stringify(obj[i]));
          }
        }
      } else {
        throw new Error('1st argument should be object');
      }
    },
    get: function get(key, flag) {
      var storage = _selectStorage(flag),
          selectKey = storage.getItem(key);

      if (typeof key === 'string') {
        if (selectKey) {
          return JSON.parse(selectKey);
        } else {
          console.log('This key is not in storage');
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
    },
    is: function(key, flag) {
      var storage = _selectStorage(flag),
          selectKey = storage.getItem(key);

      if (typeof key !== 'string') {
        throw new Error('1st argument should be strings');
      } else {
        if (selectKey) {
          return true;
        } else {
          return false;
        }
      }
    }
  };
})(this);

