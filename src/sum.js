/**
 * 归纳求和
 * @param {number | array} params - 求和项，支持多参数形式或单数组封装形式传入
 */
function sum(params) {
    if (Array.isArray(params)) {
        return params.reduce(function(prev, cur) {
            return prev + cur;
        });
    }

    return Array.prototype.reduce.call(arguments, function(a, b) {
		return a + b;
	});
}
