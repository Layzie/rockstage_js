buster.testCase('RockstageTest', {
  setUp: function() {
    localStorage.clear();
    sessionStorage.clear();
  },
  'put() should be equal storage.getItem()': function() {
    RS.put({foo: 'bar'});
    assert.equals('bar', JSON.parse(localStorage.getItem('foo')));
  }
});
