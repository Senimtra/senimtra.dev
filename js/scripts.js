// ##########################
// ##  Navbar positioning  ##
// ##########################

window.onload = () => navPosition();

window.onresize = () => {
	// ### Onresize performance timeout ###
	clearTimeout(window.resizeTimeout);
	window.resizeTimeout = setTimeout(() => navPosition(), 100);
};

// ### Event listeners ###
document.querySelector('.nav-home').addEventListener('click', () => navHome());
document
	.querySelectorAll('.nav-general')
	.forEach(el => el.addEventListener('click', () => navGeneral()));

const navbarElement = document.querySelector('.navbar');
const navCenterElement = document.querySelector('.nav-center');

// ### Link home nav style (center) ###
const navHome = () => {
	if (navbarElement.classList.contains('nav-top')) {
		navbarElement.classList.replace('nav-top', 'nav-center');
		navPosition();
	}
};

// ### Link general nav style (top) ###
const navGeneral = () => {
	if (navbarElement.classList.contains('nav-center')) {
		navbarElement.classList.replace('nav-center', 'nav-top');
		navbarElement.style.top = '0';
	}
};

const navPosition = () => {
	const winWidth = window.innerWidth;
	// ### Navbar horizontal positioning ###
	if (navCenterElement && winWidth < 992) {
		const navWidth = navCenterElement.clientWidth;
		const navPosX = `${(winWidth - navWidth) / 2}px`;
		navCenterElement.style.left = (winWidth > navWidth && navPosX) || '0';
	} else {
		navCenterElement.style.left = `${(winWidth / 100) * 15}px`;
	}
	// ### Navbar vertical positioning ###
	if (navCenterElement) {
		const navHeight = navCenterElement.clientHeight;
		const winHeight = window.innerHeight;
		const navPosY = `${(winHeight - navHeight) / 2}px`;
		navCenterElement.style.top = (winHeight > navHeight && navPosY) || '0';
	}
};
