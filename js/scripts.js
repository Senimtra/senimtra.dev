// ##########################
// ##  Navbar positioning  ##
// ##########################

window.onload = () => {
	window.onresize();
};

window.onresize = () => {
	const navCenter = document.querySelector('.nav-center');
	const winWidth = window.innerWidth;
	// ### Navbar horizontal positioning ###
	if (navCenter && winWidth < 992) {
		const navWidth = navCenter.clientWidth;
		const navPosX = `${(winWidth - navWidth) / 2}px`;
		navCenter.style.left = (winWidth > navWidth && navPosX) || '0';
	} else {
		console.log(winWidth, winWidth / 100);
		navCenter.style.left = `${(winWidth / 100) * 15}px`;
	}
	// ### Navbar vertical positioning ###
	if (navCenter) {
		const navHeight = navCenter.clientHeight;
		const winHeight = window.innerHeight;
		const navPosY = `${(winHeight - navHeight) / 2}px`;
		navCenter.style.top = (winHeight > navHeight && navPosY) || '0';
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
