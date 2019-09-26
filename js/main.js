function input_val( dir, el ) {
	let input = document.getElementById(el);
	let value = parseInt(input.value, 10);
    if (isNaN(value)) {
        value = 0;
    }

    if (dir == "dec") {
        value--;
        if (value < 0) {
            value = 0;
        }
    } else if (dir == "inc") {
        value++;
    }
		
    input.value = value;
}