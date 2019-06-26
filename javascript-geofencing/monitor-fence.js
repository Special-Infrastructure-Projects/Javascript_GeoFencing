getLocation();
var x;

function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.watchPosition(showPosition);
		
	} 
	else {
		x.innerHTML = "Geolocation is not supported by this browser.";
	}
}
function showPosition(position) {
	x = [position.coords.latitude,position.coords.longitude]; 	
}


