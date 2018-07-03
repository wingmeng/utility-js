function removeRepeat(arr) {
	var result = [];
		hash = {};

	for (var i = 0, elm; i < arr.length; i++) {
		elm = arr[i];

		if (!hash[elm]) {
			result.push(elm);
			hash[elm] = true;
		}
	}

	return result;
}
