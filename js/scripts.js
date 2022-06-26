// ##########################
// ##  Navbar positioning  ##
// ##########################

window.onresize = () => navPosition();

// ### Event listeners ###
document.querySelector('.nav-home').addEventListener('click', () => navHome());
document.querySelector('.navbar-toggler').addEventListener('click', () => navPosition());
document.querySelectorAll('.nav-general').forEach(el =>
	el.addEventListener('click', () => {
		navGeneral();
		navPosition();
		navCollapse();
	})
);

// ### DOM elements ###
const navbarElement = document.querySelector('.navbar');
const sectionElement = document.querySelector('.section-container');
const navNameElements = document.querySelectorAll('[id^="nav-name-s"]');
const contactMenuElement = document.querySelector('.contact');
const navItemElements = document.querySelectorAll('.nav-item');
const navbarCollapseElement = document.querySelector('.navbar-collapse');
const collapseContentElement = document.querySelector('#navbarSupportedContent');

// ### Navbar positioning (centered) ###
const navPosition = () => {
	const winWidth = window.innerWidth;
	// Horizontal positioning
	if (navbarElement.classList.contains('nav-center')) {
		if (winWidth < 992) {
			const navWidth = navbarElement.clientWidth;
			const navPosX = `${(winWidth - navWidth) / 2}px`;
			navbarElement.style.left = (winWidth > navWidth && navPosX) || '0';
		} else {
			navbarElement.style.left = `${(winWidth / 100) * 15}px`;
		}
	}
	// Vertical positioning
	if (navbarElement.classList.contains('nav-center')) {
		const navHeight = navbarElement.clientHeight;
		const winHeight = window.innerHeight;
		const navPosY = `${(winHeight - navHeight) / 2}px`;
		navbarElement.style.top = (winHeight > navHeight && navPosY) || '0';
	}
	// ### Handle navbar spacers ###
	navItemElements.forEach(el => (el.style.paddingLeft = '0px'));
	if (navbarElement.classList.contains('nav-top')) {
		let spacerWidth;
		// Brand spacer
		if (winWidth > 375) {
			const sectionWidth = sectionElement.clientWidth;
			spacerWidth = (winWidth - sectionWidth) / 2;
			navNameElements.forEach(
				el => window.getComputedStyle(el).display === 'flex' && (el.style.left = `${spacerWidth}px`)
			);
		}
		// Menu spacer
		if (winWidth > 1200) {
			contactMenuElement.style.marginRight = `${spacerWidth}px`;
		}
		// Nav-link spacers
		if (winWidth < 1200) {
			navItemElements.forEach(el => (el.style.paddingLeft = `${spacerWidth}px`));
		}
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

// ### Close collapsed navbar on nav-link click ###
const navCollapse = () => {
	let navToggle = new bootstrap.Collapse(collapseContentElement, { toggle: false });
	navbarCollapseElement.classList.contains('show') && navToggle.toggle();
};
