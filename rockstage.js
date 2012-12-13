/*! rockstage.js - v0.0.5 - 2012-12-14
* http://layzie.github.com/rockstage_js
* Copyright (c) 2012 HIRAKI Satoru; Licensed MIT */

(function(window, undefined) {
  'use strict';
  /**
   * This function check the type. (This is private)
   * @private
   * @param {String} type String which you want to check type.
   * @param argument Any type want to compare to type.
   * @return {Boolean} Return type and argument is equal then return true.
   */
  function _checkArgument(type, argument) {
    var object = Object.prototype.toString.call(argument).slice(8, -1);

    return argument !== undefined && argument !== null && object === type;
  }

  /**
   * This function is select the storage. True or undefined is
   * 'localStorage', false is 'sessionStorage'. (This is private)
   * @private
   * @param {Boolean} flag Boolean which the storage you want to use. Default is 'true'.
   * @param {String} fun String which want to retun error.
   * @return {Object} Return localStorage or sessionStorage.
   */
  function _selectStorage(flag, fun) {
    var order = (fun !== 'clear()') ? '2nd ' : '',
        storage;

    if (_checkArgument('Boolean', flag) || flag === undefined) {
      storage = (flag === true || flag === undefined) ? localStorage : sessionStorage;

      return storage;
    } else {
      /**
       * @throws {Error} If second argument(only argyment in RS.clear()) isn't boolean.
       */
      throw new Error('RS.' + fun + ': ' + order + 'argument should be boolean');
    }
  }

  /**
   * You can set object into the storage.
   * @param {Object} obj Object which you want to save the storage.
   * @param {Boolean} flag Boolean which the storage you want to use. Default is 'true'.
   * @return {Void} Return nothing.
   * @example When you'll save object in localStorage.
   * RS.put({foo: 'hoge', bar: 'fuga', baz: 'hogera'});
   */
  function put(obj, flag) {
    var storage = _selectStorage(flag, 'put()');

    if (_checkArgument('Object', obj) && !_checkArgument('Array', obj)) {
      for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
          storage.setItem(i, JSON.stringify(obj[i]));
        }
      }
    } else {
      /**
       * @throws {Error} If first argument isn't object.
       */
      throw new Error('RS.put(): 1st argument should be object');
    }
  }

  /**
   * You can get string from the storage.
   * @param {String} key String which you want to get from the storage.
   * @param {Boolean} flag Boolean which the storage you want to use. Default is 'true'.
   * @return {String} Return value of matched in storage.
   * @example When you'll get value in localStorage.
   * RS.get('foo');
   */
  function get(key, flag) {
    var storage = _selectStorage(flag, 'get()'),
        selectKey = storage.getItem(key);

    if (_checkArgument('String', key)) {
      if (selectKey) {
        return JSON.parse(selectKey);
      } else {
        return console.log('RS.get(): This key is not in storage');
      }
    } else {
      /**
       * @throws {Error} If first argument isn't string.
       */
      throw new Error('RS.get(): 1st argument should be string');
    }
  }

  /**
   * You can remove object from the storage.
   * @param {String} key String which you want to remove from storage.
   * @param {Boolean} flag Boolean which the storage you want to use. Default is 'true'.
   * @return {Void} Return nothing.
   * @example When you'll remove key & value in localStorage.
   * RS.remove('foo');
   */
  function remove(key, flag) {
    var storage = _selectStorage(flag, 'remove()'),
        selectKey = storage.getItem(key);

    if (_checkArgument('String', key)) {
      if (selectKey) {
        storage.removeItem(key);
      } else {
        console.log('RS.remove(): This key is not in storage');
      }
    }
  }

  /**
   * You can remove all object in the storage.
   * @param {Boolean} flag Boolean which the storage you want to use. Default is 'true'.
   * @return {Void} Return nothing.
   * @example When you'll remove all of key & value in localStorage.
   * RS.clear();
   */
  function clear(flag) {
    var storage = _selectStorage(flag, 'clear()');

    storage.clear();
  }

  /**
   * You can check existance of a object in the storage.
   * @param {String} key String which you want to know in storage.
   * @param {Boolean} flag Boolean which the storage you want to use. Default is 'true'.
   * @return {Boolean} Return true or false.
   * @example When you'll check a key in localStorage.
   * RS.is('foo');
   */
  function is(key, flag) {
    var storage = _selectStorage(flag, 'is()'),
        selectKey = storage.getItem(key);

    if (_checkArgument('String', key)) {
      if (selectKey) {
        return true;
      } else {
        return false;
      }
    } else {
      /**
       * @throws {Error} If first argument isn't string.
       */
      throw new Error('RS.is(): 1st argument should be strings');
    }
  }

  /**
   * You can check existance of a object in the storage.
   * @param {Boolean} flag Boolean which the storage you want to use. Default is 'true'.
   * @return {Number} Return object's length in storage
   * @example When you'll check object's length in localStorage.
   * RS.length();
   */
  function length(flag) {
    var storage = _selectStorage(flag, 'length()');

    return storage.length;
  }

  /**
   * This function is called when 'RS' will be loaded. Then check the storageprivate
   * and set 'RS' name space in 'window'. (This is private)
   * @private
   * @return {Void} Return nothing
   */
  (function _init() {
    if (window.localStorage && window.sessionStorage) {
      if (_checkArgument('Undefined', window.RS)) {
        window.RS = {};
      }

      /**
       * @namespace RS This library's namespace is 'RS'
       */
      window.RS = {
        put: put,
        get: get,
        remove: remove,
        clear: clear,
        is: is,
        length: length
      };
    } else {
      /**
       * @throws {Error} If a browser have no storage.
       */
      throw new Error('RS: This browser have no storage.');
    }
  }());
}(this));

