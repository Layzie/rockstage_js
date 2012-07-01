buster.testCase('RockstageTest', {
  setUp: function() {
    localStorage.clear();
    sessionStorage.clear();
  },
  'put() should be equal storage.getItem()': function() {
    RS.put({foo: 'bar'});
    assert.equals('bar', JSON.parse(localStorage.getItem('foo')));
  },
  'get() should be equal storage.setItem()': function() {
    localStorage.setItem('foo', JSON.stringify('bar'));

    assert.equals('bar', RS.get('foo'));
  },
  'remove() should be clear storage': function()  {
    RS.put({foo: 'bar'});

    RS.remove('foo');

    refute.isFalse(JSON.parse(localStorage.getItem('foo')));
  }
});
