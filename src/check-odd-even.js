function checkOddEven(integer) {
	if (!isNaN(integer) && (integer | 0) === integer) {  // 整数
		return !!(integer & 1) ? 'odd' : 'even';
	}

	throw integer + ' is NOT a integer.';
}
