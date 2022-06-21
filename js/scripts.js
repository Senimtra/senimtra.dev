// ##########################
// ##  Navbar positioning  ##
// ##########################

window.onload = () => {
	window.onresize();
};

window.onresize = () => {
	const navCenter = document.querySelector('.nav-center');
	if (navCenter) {
		const navHeight = navCenter.clientHeight;
		const winHeight = window.screen.height;
		const navPosY = `${(winHeight - navHeight) / 2}px`;
		navCenter.style.top = navPosY;
	}
};

// ### Event listeners ###
document.querySelector('.nav-home').addEventListener('click', () => navHome());
document
	.querySelectorAll('.nav-general')
	.forEach(el => el.addEventListener('click', () => navGeneral()));

// ### Link home nav style (center) ###
const navHome = () => {
	const navbar = document.querySelector('.navbar');
	if (navbar.classList.contains('nav-top')) {
		navbar.classList.remove('nav-top');
		navbar.classList.add('nav-center');
		window.onresize();
	}
};

// ### Link general nav style (top) ###
const navGeneral = () => {
	const navbar = document.querySelector('.navbar');
	if (navbar.classList.contains('nav-center')) {
		navbar.classList.remove('nav-center');
		navbar.classList.add('nav-top');
		navbar.style.top = '0';
	}
};
