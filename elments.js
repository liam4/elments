var elm = (function() {
  var elm = {};

  if (typeof Symbol === 'undefined') {
    var isIterable = function(o) {
      return o instanceof Array;
    };
  } else {
    var isIterable = function(o) {
      return typeof o[Symbol.iterator] !== 'undefined';
    };
  }

  var assign = function(el) {
    var elment = {el: el};

    elment.add = function(anElment) {
      elment.el.appendChild(anElment.el);
      return elment;
    };

    elment.on = function(listenerName, listenerValue) {
      var callbackTypeError = TypeError('Callback for event listener must be function or array of functions');
      if (listenerValue instanceof Function) {
        el.addEventListener(listenerName, listenerValue);
      } else if (isIterable(listenerValue)) {
        for (var callback of listenerValue) {
          if (callback instanceof Function) {
            el.addEventListener(listenerName, callback);
          } else {
            throw callbackTypeError;
          }
        }
      } else {
        throw callbackTypeError;
      }
      return elment;
    };

    elment.apply = function(fn) {
      return fn(elment);
    };

    elment.attr = function(attributeName, attributeValue) {
      elment.el.setAttribute(attributeName, attributeValue);
      return elment;
    };

    elment.class = function(className) {
      elment.el.classList.add(className);
      return elment;
    };

    return elment;
  };

  elm.from = function(query) {
    return assign(document.querySelector(query));
  };

  elm.create = function(tag, attributes, listeners) {
    if (typeof tag === 'undefined')
      throw new TypeError('elm requires more than 0 arguments');

    return assign(document.createElement(tag));
  };

  elm.text = function(text) {
    return {el: document.createTextNode(text)};
  };

  return elm;
}());
