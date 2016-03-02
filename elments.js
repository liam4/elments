var elm = {};

elm.from = function(query) {
    return elm.assign(document.querySelector(query));
};

elm.assign = function(el) {

    var elment = {
        el: el
    };

    elment.add = function(anElment) {
        console.log('add', anElment);
        elment.el.appendChild(anElment.el);
        return elment;
    };

    return elment;
};

elm.create = function(tag, attributes, listeners) {

    if (typeof tag === 'undefined')
        throw new TypeError('elm requires more than 0 arguments');
    if (typeof attributes === 'undefined')
        attributes = {};
    if (typeof listeners === 'undefined')
        listeners = {};

    if (typeof Symbol === 'undefined') {
        var isIterable = function(o) {
            return o instanceof Array;
        };
    } else {
        var isIterable = function(o) {
            return typeof o[Symbol.iterator] !== 'undefined';
        };
    }

    var callbackTypeError = TypeError('Callback for event listener must be function or array of functions');

    var el = document.createElement(tag);
    for (var attributeName in attributes) {
        el.setAttribute(attributeName, attributes[attributeName]);
    }
    for (var listenerName in listeners) {
        var listenerValue = listeners[listenerName];
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
    }

    return elm.assign(el);
};

elm.text = function(text) {
    return {el: document.createTextNode(text)};
};
