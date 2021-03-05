const reverseInParentheses = require('./reverseInParentheses');

test('"foo(bar)baz(blim)" returns "foorabbazmilb"', () => {
    expect(reverseInParentheses('foo(bar)baz(blim)')).toEqual('foorabbazmilb');
});

test('"foo(bar(baz))blim" returns "foobazrabblim"', () => {
    expect(reverseInParentheses('foo(bar(baz))blim')).toEqual('foobazrabblim');
});