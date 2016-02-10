Elm.Native.Intl = Elm.Native.Intl || {};
Elm.Native.Intl.NumberFormat = {};
Elm.Native.Intl.NumberFormat.make = function(elm) {
    'use strict';

    elm.Native = elm.Native || {};
    elm.Native.Intl = elm.Native.Intl || {};
    elm.Native.Intl.NumberFormat = elm.Native.Intl.NumberFormat || {};
    if (elm.Native.Intl.NumberFormat.values) return elm.Native.Intl.NumberFormat.values;

    // SEE: https://github.com/elm-lang/core/blob/1.0.0/src/Native/List.js
    function toArray(xs) {
        var out = [];
        while (xs.ctor !== '[]') {
            out.push(xs._0);
            xs = xs._1;
        }

        return out;
    }

    // SEE: https://github.com/elm-lang/core/blob/1.0.0/src/Native/List.js
    function fromArray(arr) {
        var out = Nil;
        for (var i = arr.length; i--; ) {
            out = Cons(arr[i], out);
        }
        return out;
    }

    function elm_format(x) {
        return new Intl.NumberFormat().format(x);
    }

    function elm_formatList(xs) {
        var intl = new Intl.NumberFormat();
        var arr = toArray(xs);
        return fromArray(xs.map(intl.Format));
    }

    return elm.Native.Intl.NumberFormat.values = {
        format: elm_format,
        formatList: elm_formatList
    };
};
