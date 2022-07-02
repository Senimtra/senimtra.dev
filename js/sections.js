// ##########################
// ##  'Links' processing  ##
// ##########################

// ### Import links from json-file ###
import links from './../json/links.json' assert { type: 'json' };

// ### DOM link list element ###
const linkSectionElement = document.querySelector('#Links').childNodes[1];

// ### Get category list ###
const categories = [...new Set(links.map(el => el.category))];

// ### Process link list ###
categories.forEach(el => {
	const catLinks = links.filter(elem => el === elem.category);
	linkSectionElement.innerHTML += `<h3>${el}</h3>`;
	catLinks.forEach(el => {
		linkSectionElement.innerHTML += `<a href="${el.url}" target="_blank">${el.name}</a><br>`;
	});
	linkSectionElement.innerHTML += '<br><br>';
});
