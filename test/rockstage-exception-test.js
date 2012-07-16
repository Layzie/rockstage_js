buster.testCase('RockstageExceptionTest', {
  setUp: function() {
    localStorage.clear();
    sessionStorage.clear();
  },
  'RS.put() should be throw error if 1st argument isn\'t Object': function() {
    assert.exception(function() {
      RS.put('hoge');
    });
    assert.exception(function() {
      RS.put(['hoge']);
    });
    assert.exception(function() {
      RS.put(7);
    });
    assert.exception(function() {
      RS.put(true);
    });
  },
  'RS.get() should be throw error if 1st argument isn\'t String': function() {
    RS.put({foo: 'hoge', bar: 'fuga', baz: 'hogera'});

    assert.exception(function() {
      RS.get(['hoge']);
    });
    assert.exception(function() {
    RS.get({foo: hoge});
    });
    assert.exception(function() {
      RS.get(7);
    });
    assert.exception(function() {
      RS.get(true);
    });
  },
  'RS.is() should be throw error if 1st argument isn\'t String': function() {
    RS.put({foo: 'hoge', bar: 'fuga', baz: 'hogera'});

    assert.exception(function() {
      RS.is(['hoge']);
    });
    assert.exception(function() {
    RS.is({foo: hoge});
    });
    assert.exception(function() {
      RS.is(7);
    });
    assert.exception(function() {
      RS.is(true);
    });
  }
});
