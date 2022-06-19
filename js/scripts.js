// ##########################
// ##  Navbar positioning  ##
// ##########################

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
	}
};

// ### Link general nav style (top) ###
const navGeneral = () => {
	const navbar = document.querySelector('.navbar');
	if (navbar.classList.contains('nav-center')) {
		navbar.classList.remove('nav-center');
		navbar.classList.add('nav-top');
	}
};
