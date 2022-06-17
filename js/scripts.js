// ##########################
// ##  Navbar positioning  ##
// ##########################

const navHome = () => {
	console.log('nav-home');
};

const navGeneral = () => {
	console.log('nav-general');
};

// ###  Event listeners ###

document.querySelector('.nav-home').addEventListener('click', () => navHome());
document
	.querySelectorAll('.nav-general')
	.forEach(el => el.addEventListener('click', () => navGeneral()));
