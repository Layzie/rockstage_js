---
layout: default
title: Rockstage.js
---

# Rockstage.js

[![Build Status](https://secure.travis-ci.org/Layzie/rockstage_js.png?branch=master)](http://travis-ci.org/Layzie/rockstage_js)

This library for easier using 'localStorage' &amp; 'sessionStorage'.

See http://layzie.github.com/rockstage_js

## General usage

This script use no library yet. So add script tags in html when using it.

`<script src="/your/path/rockstage.js" type="text/javascrpt" charset="utf-8"></script>`

Or you want to minified file then add below.

`<script src="/your/path/rockstage.min.js" type="text/javascrpt" charset="utf-8"></script>`

### Set items to storage

`RS.put(object, flag)`
- `object` is value of setting to storage.
- `flag` is flag to selecting `localStorage` or `sessionStorage`.

When set items to storage using `RS.put()`. This method arguments is 2.
One is object set to storage. Last is chose `localStorage` or `sessionStorage` flag.

2nd argument default value is `true`. This is `localStorage`. Set to `false` when using
`sessionStorage`.

ex:
{% highlight javascript %}
```javascript
RS.put({
  foo: 'hoge',
  bar: 'fuga',
  baz: 'hogera'
}, true);
```
{% endhighlight %}

### Get item from storage

`RS.get('value', flag)`
- `value` is string of want to get storage.
- `flag` is flag to selecting `localStorage` or `sessionStorage`.

When get item from storage using `RS.get()`. This method arguments is 2.
One is string get to storage. Last is chose `localStorage` or `sessionStorage` flag.

2nd argument default value is `true`. This is `localStorage`. Set to `false` when using
`sessionStorage`.

ex:
{% highlight javascript %}
```javascript
RS.get('foo', true); // return 'hoge'
```
{% endhighlight %}

### Remove item from storage

`RS.remove('value', flag)`
- `value` is string of want to remove storage.
- `flag` is flag to selecting `localStorage` or `sessionStorage`.

When remove item from storage using `RS.remove()`. This method arguments is 2.
One is string remove from storage. Last is chose `localStorage` or `sessionStorage` flag.

2nd argument default value is `true`. This is `localStorage`. Set to `false` when using
`sessionStorage`.

ex:
{% highlight javascript %}
```javascript
RS.remove('foo', true); // remove 'foo' from localStorage
```
{% endhighlight %}

### Clear all items from storage

`RS.clear(flag)`
- `flag` is flag to selecting `localStorage` or `sessionStorage`.

When clear all items from storage using `RS.flag()`. This method arguments is only 1.
This flag is chose `localStorage` or `sessionStorage` flag.

This argument default value is `true`. This is `localStorage`. Set to `false` when using
`sessionStorage`.

ex:
{% highlight javascript %}
```javascript
RS.clear(true) // Clear all items from localStorage
```
{% endhighlight %}

### Check existence of items from storage

`RS.is(key, flag)`
- `key` is keyword of want to check in `localStorage` or `sessionStorage`.
- `flag` is flag to selecting `localStorage` or `sessionStorage`.

When check existence of item in storage using `RS.is()`. This method arguments is 2.
One is string of want to check from storage. Last is chose `localStorage` or `sessionStorage` flag.

This argument default value is `true`. This is `localStorage`. Set to `false` when using
`sessionStorage`.

ex:
{% highlight javascript %}
```javascript
RS.is('hoge', true) // Check 'hoge' in localStorage
```
{% endhighlight %}

### Check length of items from storage

`RS.length(flag)`
- `flag` is flag to selecting `localStorage` or `sessionStorage`.

Use this method to know the length of storage.

This argument default value is `true`. This is `localStorage`. Set to `false` when using
`sessionStorage`.

ex:
{% highlight javascript %}
```javascript
RS.length(true) // Return the length of localStorage.
```
{% endhighlight %}

## Test enviroments

This library tests below browsers.

- Chrome 21.0.1180.89, OS X 10.7 (Lion)
- Safari 6.0, OS X 10.7 (Lion)
- Firefox 15.0, OS X 10.7 (Lion)
- Opera 12.01, OS X 10.7 (Lion)

Maybe other browser can be used. But I don't test these browsers.

## Problem?

Please report [issues](https://github.com/Layzie/rockstage_js/issues).

## Licence

Copyright (c) 2012 HIRAKI Satoru, https://github.com/Layzie

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


