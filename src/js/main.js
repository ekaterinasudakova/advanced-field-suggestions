
const states = [
	"Alabama",
	"Alaska",
	"American Samoa",
	"Arizona",
	"Arkansas",
	"California",
	"Colorado",
	"Connecticut",
	"Delaware",
	"District Of Columbia",
	"Federated States Of Micronesia",
	"Florida",
	"Georgia",
	"Guam",
	"Hawaii",
	"Idaho",
	"Illinois",
	"Indiana",
	"Iowa",
	"Kansas",
	"Kentucky",
	"Louisiana",
	"Maine",
	"Marshall Islands",
	"Maryland",
	"Massachusetts",
	"Michigan",
	"Minnesota",
	"Mississippi",
	"Missouri",
	"Montana",
	"Nebraska",
	"Nevada",
	"New Hampshire",
	"New Jersey",
	"New Mexico",
	"New York",
	"North Carolina",
	"North Dakota",
	"Northern Mariana Islands",
	"Ohio",
	"Oklahoma",
	"Oregon",
	"Palau",
	"Pennsylvania",
	"Puerto Rico",
	"Rhode Island",
	"South Carolina",
	"South Dakota",
	"Tennessee",
	"Texas",
	"Utah",
	"Vermont",
	"Virgin Islands",
	"Virginia",
	"Washington",
	"West Virginia",
	"Wisconsin",
	"Wyoming"
]
//this is as far as I got by 1:30 but I started looking into creating a regex
//to match up the term with the state
//which is what I plan on working on this week and seeing if it works
let $state = document.querySelector(`[name="state"]`);
let $suggestions = document.querySelector(`.suggestions`);
$suggestions.innerHTML = states;

$state.addEventListener('keyup', function(e){
	let term = e.target.value.toLowerCase();
	let autofillState = states.filter(function(state){
	if(state.includes(" term")) return true;
	console.log(term);
})