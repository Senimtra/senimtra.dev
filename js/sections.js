// ##########################
// ##  'Links' processing  ##
// ##########################

// ### Import links from json-file ###
import links from './../json/links.json' assert { type: 'json' };

// ### DOM link list element ###
const linkSectionElement = document.querySelector('#Links').childNodes[1];

// ### Get category list ###
const linkCategories = [...new Set(links.map(el => el.category))];

// ### Process link list ###
linkCategories.forEach(el => {
	const catLinks = links.filter(elem => el === elem.category);
	linkSectionElement.innerHTML += `<h3>${el}</h3>`;
	catLinks.forEach(el => {
		linkSectionElement.innerHTML += `<a href="${el.url}" target="_blank">${el.name}</a><br>`;
	});
	linkSectionElement.innerHTML += '<br><br>';
});

// #########################################
// ##  'Portfolio (Projects)' processing  ##
// #########################################

// ### Import projects from json-file ###
import projects from './../json/portfolio.json' assert { type: 'json' };

// ### DOM link list element ###
const portfolioSectionElement = document.querySelector('#Portfolio').childNodes[1];

// ### Get category list ###
const projectCategories = [...new Set(projects.map(el => el.category))];

// ### Process link list ###
projectCategories.forEach(el => {
	const projectLinks = projects.filter(elem => el === elem.category);
	portfolioSectionElement.innerHTML += `<h3>${el}</h3>`;
	projectLinks.forEach(el => {
		portfolioSectionElement.innerHTML += `<a href="${el.url}" target="_blank">${el.name}</a><br>`;
	});
	portfolioSectionElement.innerHTML += '<br><br>';
});
