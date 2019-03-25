/**
 * 命名方式转换（驼峰命名 & 短横线命名）
 */
var transNaming = {
	// 驼峰命名转短横线命名
	// 'get-element-by-id' → 'getElementById'
	toCamel: function(str) {
		return str.replace(/-([a-z])/g, function(all, i) {
			return i.toUpperCase();
		});
	},

	// 短横线命名转驼峰命名
	// 'getElementById' → 'get-element-by-id'
	toKebab: function(str) {
		return str.replace(/[A-Z]/g, '-$&').toLowerCase();  // $& 表示整个被匹配的字符串
	}
};
