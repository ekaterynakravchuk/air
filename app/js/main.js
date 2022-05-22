$(function() {
  
})

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com',
		'X-RapidAPI-Key': '98644d92d9msh23cc79915658e7ap139602jsn35062f96f4d3'
	}
};

fetch('https://aerodatabox.p.rapidapi.com/airports/search/', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));