// ##########################
// ##  Navbar positioning  ##
// ##########################

window.onresize = () => {
	// ### Onresize performance timeout ###
	clearTimeout(window.resizeTimeout);
	window.resizeTimeout = setTimeout(() => navPosition(), 50);
};

// ### Event listeners ###
document.querySelector('.nav-home').addEventListener('click', () => navHome());
document
	.querySelectorAll('.nav-general')
	.forEach(el => el.addEventListener('click', () => navGeneral()));

const navbarElement = document.querySelector('.navbar');

const navPosition = () => {
	const winWidth = window.innerWidth;
	// ### Navbar horizontal positioning (centered) ###
	if (navbarElement.classList.contains('nav-center')) {
		if (winWidth < 992) {
			const navWidth = navbarElement.clientWidth;
			const navPosX = `${(winWidth - navWidth) / 2}px`;
			navbarElement.style.left = (winWidth > navWidth && navPosX) || '0';
		} else {
			navbarElement.style.left = `${(winWidth / 100) * 15}px`;
		}
	}
	// ### Navbar vertical positioning (centered) ###
	if (navbarElement.classList.contains('nav-center')) {
		const navHeight = navbarElement.clientHeight;
		const winHeight = window.innerHeight;
		const navPosY = `${(winHeight - navHeight) / 2}px`;
		navbarElement.style.top = (winHeight > navHeight && navPosY) || '0';
	}
};

navPosition();

// ### Link home nav style (center) ###
const navHome = () => {
	if (navbarElement.classList.contains('nav-top')) {
		navbarElement.classList.replace('nav-top', 'nav-center');
		navbarElement.classList.replace('navbar-expand-xl', 'navbar-expand-lg');
		navPosition();
	}
};

// ### Link general nav style (top) ###
const navGeneral = () => {
	if (navbarElement.classList.contains('nav-center')) {
		navbarElement.classList.replace('nav-center', 'nav-top');
		navbarElement.classList.replace('navbar-expand-lg', 'navbar-expand-xl');
		navbarElement.style.top = '0';
	}
};
