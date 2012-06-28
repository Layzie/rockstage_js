buster.testCase('RockstageTest', {
  setUp: function() {
    localStorage.clear();
    sessionStorage.clear();
  },
  'put() should be equal storage.setItem()': function() {
    RS.put({foo: 'bar'});
    assert.equals(RS.get('foo'), JSON.parse(localStorage.getItem('foo')));
  }
});
