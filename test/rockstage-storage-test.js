buster.testCase('RockstageStorageTest', {
  setUp: function() {
    localStorage.clear();
    sessionStorage.clear();
  },
  'RS.put() should be chosen localStorage by 2nd argument is true or undefined': function() {
    RS.put({foo: 'hoge'}, true);
    RS.put({bar: 'fuga'});

    assert.equals('hoge', JSON.parse(localStorage.getItem('foo')));
    assert.equals('fuga', JSON.parse(localStorage.getItem('bar')));
    refute.equals('hoge', JSON.parse(sessionStorage.getItem('foo')));
    refute.equals('fuga', JSON.parse(sessionStorage.getItem('bar')));
  },
  'RS.get() should be chosen localStorage by 2nd argument is true or undefined': function() {
    var lStorage = localStorage.setItem('foo', JSON.stringify('hoge'));
    var sStorage = sessionStorage.setItem('bar', JSON.stringify('fuga'));

    assert.equals('hoge', RS.get('foo', true));
    assert.equals('hoge', RS.get('foo'));
    refute.equals('fuga', RS.get('bar', true));
    refute.equals('fuga', RS.get('bar'));
  },
  'RS.remove() should be chosen localStorage by 2nd argument is true or undefined': function() {
    var lStorage = localStorage.setItem('foo', JSON.stringify('hoge'));
    var sStorage = sessionStorage.setItem('bar', JSON.stringify('fuga'));

    assert.equals(undefined, RS.remove('foo', true));
    assert.equals(undefined, RS.remove('foo'));
    refute.equals(null, RS.remove('bar', true));
    refute.equals(null, RS.remove('bar'));
  },
  'RS.clear() should be chosen localStorage by 2nd argument is true or undefined': function() {
    var lStorage = localStorage.setItem('foo', JSON.stringify('hoge'));
    var sStorage = sessionStorage.setItem('bar', JSON.stringify('fuga'));

    assert.equals(undefined, RS.clear(true));
    assert.equals(undefined, RS.clear());
    refute.equals(null, RS.clear(true));
    refute.equals(null, RS.clear());
  },
  'RS.is() should be chosen localStorage by 2nd argument is true or undefined': function() {
    var lStorage = localStorage.setItem('foo', JSON.stringify('hoge'));
    var sStorage = sessionStorage.setItem('bar', JSON.stringify('fuga'));

    assert.equals(true, RS.is('foo', true));
    assert.equals(true, RS.is('foo'));
    refute.equals(null, RS.is('bar', true));
    refute.equals(null, RS.is('bar'));
  },
  'RS.put() should be chosen sessionStorage by 2nd argument is true or undefined': function() {
    RS.put({foo: 'hoge'}, false);

    assert.equals('hoge', JSON.parse(sessionStorage.getItem('foo')));
    refute.equals('hoge', JSON.parse(localStorage.getItem('foo')));
  },
  'RS.get() should be chosen sessionStorage by 2nd argument is true or undefined': function() {
    var lStorage = localStorage.setItem('foo', JSON.stringify('hoge'));
    var sStorage = sessionStorage.setItem('bar', JSON.stringify('fuga'));

    assert.equals('fuga', RS.get('bar', false));
    refute.equals('hoge', RS.get('foo', false));
  },
  'RS.remove() should be chosen localStorage by 2nd argument is true or undefined': function() {
    var lStorage = localStorage.setItem('foo', JSON.stringify('hoge'));
    var sStorage = sessionStorage.setItem('bar', JSON.stringify('fuga'));

    assert.equals(undefined, RS.remove('bar', false));
    refute.equals(null, RS.remove('foo', false));
  },
  'RS.clear() should be chosen localStorage by 2nd argument is true or undefined': function() {
    var lStorage = localStorage.setItem('foo', JSON.stringify('hoge'));
    var sStorage = sessionStorage.setItem('bar', JSON.stringify('fuga'));

    assert.equals(undefined, RS.clear(false));
    refute.equals(null, RS.clear(false));
  },
  'RS.is() should be chosen localStorage by 2nd argument is true or undefined': function() {
    var lStorage = localStorage.setItem('foo', JSON.stringify('hoge'));
    var sStorage = sessionStorage.setItem('bar', JSON.stringify('fuga'));

    assert.equals(true, RS.is('bar', false));
    refute.equals(null, RS.is('foo', false));
  }
});
