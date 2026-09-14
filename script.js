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

const mobileMenuButton = document.getElementById("mobile_menu_button");
const menu = document.getElementById("menu");

const closeMobileMenu = () => {
	mobileMenuButton.classList.remove("active");
	menu.classList.remove("active");
	document.body.classList.remove("menu-open");

	mobileMenuButton.setAttribute("aria-expanded", "false");
	mobileMenuButton.setAttribute("aria-label", "Open menu");
};

const openMobileMenu = () => {
	mobileMenuButton.classList.add("active");
	menu.classList.add("active");
	document.body.classList.add("menu-open");

	mobileMenuButton.setAttribute("aria-expanded", "true");
	mobileMenuButton.setAttribute("aria-label", "Close menu");
};

mobileMenuButton.addEventListener("click", () => {
	const isOpen = menu.classList.contains("active");

	if (isOpen) {
		closeMobileMenu();
	} else {
		openMobileMenu();
	}
});

menu.addEventListener("click", (event) => {
	if (event.target.closest("a")) {
		closeMobileMenu();
	}
});

window.addEventListener("resize", () => {
	if (window.innerWidth > 768) {
		closeMobileMenu();
	}
});

document.addEventListener("DOMContentLoaded", () => {
	starryAnimation();
	generateMenu();
});
