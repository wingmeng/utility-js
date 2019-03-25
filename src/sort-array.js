/**
 * 对数组中的元素进行排序
 * @param {string} [key] 可选。当数组中元素为 object 时，按 key 进行排序
 * @param {boolean} [reversal] 可选。true 为降序，false 为升序，默认为升序
 */
function sortBy(key, reversal) {
	return function(o, p) {
		var a = o,
			b = p;

		if (key) {
			if (/^\w+(\.\w+)+$/.test(key)) {  // 'a.b.c' 形式
				var fieldArr = key.split('.');

				a = fieldArr.reduce(function(total, cur) {
					return total[cur];
				}, o);

				b = fieldArr.reduce(function(total, cur) {
					return total[cur];
				}, p);
			} else {
				a = o[key];
				b = p[key];
			}
		}

		if (isNaN(a) || isNaN(b)) {  // 非数字排序
			var locale = navigator.language || navigator.systemLanguage;

			a = String(a);
			b = String(b);

			if (reversal) {
				return b.localeCompare(a, locale);  // 用本地特定顺序来比较
			}
			return a.localeCompare(b, locale);
		} else {
			return (a - b) * (reversal ? -1 : 1);
		}
	}
}
