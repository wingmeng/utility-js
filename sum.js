function sum(params) {
    var add = function(a, b) {
        return a + b;
    };

    if (Array.isArray(params)) {
        return params.reduce(function(prev, cur) {
            return prev + cur;
        });
    }

    return Array.prototype.reduce.call(arguments, add);
}