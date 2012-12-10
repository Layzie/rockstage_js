buster.testCase('RockstageExceptionTest', {
  setUp: function() {
    localStorage.clear();
    sessionStorage.clear();
  },
  'RS should be return message of error called method when 2nd argument isn\'t Boolean or undefined': function() {
    try {
      RS.put({foo: 'hoge', bar: 'fuga'}, 'baz');
    } catch(e) {
      assert.same(e.message, 'RS.put(): 2nd argument should be boolean');
    }

    try {
      RS.get('foo', 2);
    } catch(e) {
      assert.same(e.message, 'RS.get(): 2nd argument should be boolean');
    }

    try {
      RS.remove('foo', /abc/i);
    } catch(e) {
      assert.same(e.message, 'RS.remove(): 2nd argument should be boolean');
    }

    try {
      RS.clear(function() {});
    } catch(e) {
      assert.same(e.message, 'RS.clear(): argument should be boolean');
    }
  },
  'RS should be called when browser have storage': function() {
    refute.exception(function() {
      window.RS;
    });
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
