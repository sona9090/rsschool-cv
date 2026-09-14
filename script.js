const starryAnimation = () => {
	const starsSpace = document.querySelector("#stars");

	if (!starsSpace) return;

	const animateStars = () => {
		document.querySelectorAll(".star").forEach((star) => {
			star.style.top = `${Math.random() * starsSpace.clientHeight}px`;
			star.style.left = `${Math.random() * starsSpace.clientWidth}px`;
		});
	};

	const generateStars = () => {
		const star = `<div class="star"></div>`;
		starsSpace.innerHTML = star.repeat(100);

		// Первое положение
		animateStars();

		// Ждём, пока браузер его реально отрисует
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				animateStars();
			});
		});
	};

	generateStars();

	setInterval(animateStars, 8000);
};

const menuData = [
	{ name: "About me", link: "#about" },
	{ name: "Contacts", link: "#contacts" },
	{ name: "Skills", link: "#skills" },
	{ name: "Code examples", link: "#examples" },
	{ name: "Experience", link: "#experience" },
	{ name: "Education", link: "#education" },
	{ name: "Projects", link: "#projects" }
];

const generateMenu = () => {
	const menu = document.getElementById("menu");

	const menuItems = menuData
		.map((item) => `<li><a href="${item.link}">${item.name}</a></li>`)
		.join("");

	menu.innerHTML = menuItems;
};

document.addEventListener("DOMContentLoaded", () => {
	starryAnimation();
	generateMenu();
});
