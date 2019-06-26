var y;

function getMax(arr){
	highest = 0;
	for(i=0;i<arr.length;i++){
		if(parseFloat(arr[i]) > highest){
			highest = arr[i];
		}
		else {
			
		}
	}
	return highest;
}
function getMin(arr){
	lowest = 1000;
	for(i=0;i<arr.length;i++){
		if(parseFloat(arr[i]) < lowest){
			lowest = arr[i];
		}
		else {
			
		}
	}
	return lowest;
}

setTimeout(function(){
	y = x;
	for (var key in locations) {
		var latitudes = [];
		var longitudes = [];
		var value = locations[key];
		for (var key2 in locations[key]) {
			latitudes.push((locations[key][key2][0]));
			longitudes.push(locations[key][key2][1]);
		}
		highest_lat = getMax(latitudes);
		highest_lon = getMax(longitudes);
		lowest_lat = getMin(latitudes);
		lowest_lon = getMin(longitudes);
		if(y[0] > lowest_lat && y[0] < highest_lat){
			if(y[1] > lowest_lon && y[1] < highest_lon){
				document.write("You're in " + key + "<br>");
				document.write(x);
			}
		}
	}
},10);

