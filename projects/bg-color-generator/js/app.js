document.addEventListener('DOMContentLoaded', () => {
	generateColor();
	setBackgroundColor("#F3F4F6");
	selectColor();
});

const selectColor = () => {
	const colorPicker = document.querySelector('#colorPicker');
	colorPicker.addEventListener('input', () => {
		let color = colorPicker.value;

		setBackgroundColor(color);
	});
};

const setBackgroundColor = (color) => {
	const colorPicker = document.querySelector('#colorPicker');
	const bgColor = document.querySelector('#backgroundColor');
	const colorCode = document.querySelector('#colorCode');

	colorPicker.value = color;
	bgColor.style.backgroundColor = `${color}`;
	colorCode.textContent = `${color}`;
};

const generateColor = () => {
	const generateColor = document.querySelector('#generateColor');
	generateColor.addEventListener('click', () => {
		const randomColor = Math.floor(Math.random() * 16777215).toString(16);

		setBackgroundColor(`#${randomColor}`);
	});
};
