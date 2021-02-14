const changerBtn = document.getElementById("changer-btn");
const body = document.querySelector("body");
const hexCodeArea = document.getElementById("hex-code-area");

// 1st approacth with named colors
const colors = [
	"red",
	"green",
	"blue",
	"yellow",
	"pink",
	"purple",
	"orange",
	"royal-blue",
];
function backgroundColorChanger() {
	const colorIndex = Math.floor(Math.random() * colors.length);
	body.style.backgroundColor = colors[colorIndex];
}

// 2nd approach with hex code colors
const hexValues = [
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
];

function backgroundColorChanger1() {
	let hexCodeColor = "#";
	for (let i = 0; i < 6; i++) {
		const hexIndex = Math.floor(Math.random() * hexValues.length);
		hexCodeColor = hexCodeColor + hexValues[hexIndex];
	}
	hexCodeArea.value = hexCodeColor;
	body.style.backgroundColor = hexCodeColor;
}

changerBtn.addEventListener("click", backgroundColorChanger1);

function colorCodeCopier() {
	hexCodeArea.select();
	hexCodeArea.setSelectionRange(0, 99999); /* For mobile devices */

	/* Copy the text inside the text field */
	document.execCommand("copy");

	/* Alert the copied text */
	alert("Copied the text: " + hexCodeArea.value);
}

hexCodeArea.addEventListener("click", colorCodeCopier);

//another approach suggested from one of my linkedin connections(Sultan Mohammad Arif)

const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}



