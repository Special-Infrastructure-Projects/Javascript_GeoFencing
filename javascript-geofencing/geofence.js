function north($lat,$lon,$R,size,pi){
	$dn = size;
	$de = 0;
	$dLat = $dn/$R;
	$dLon = $de/($R*Math.cos(pi*$lat/180));
	$latO = $lat + $dLat * 180/pi;
	$lonO = $lon + $dLon * 180/pi;
	return [$latO, $lonO];
}
function south($lat,$lon,$R,size,pi){
	$dn = -size;
	$de = 0;
	$dLat = $dn/$R;
	$dLon = $de/($R*Math.cos(pi*$lat/180));
	$latO = $lat + $dLat * 180/pi;		
	$lonO = $lon + $dLon * 180/pi;
	return [$latO, $lonO];
}
function east($lat,$lon,$R,size,pi){
	$dn = 0;
	$de = size;
	$dLat = $dn/$R;
	$dLon = $de/($R*Math.cos(pi*$lat/180));
	$latO = $lat + $dLat * 180/pi;		
	$lonO = $lon + $dLon * 180/pi;
	return [$latO, $lonO];
}
function west($lat,$lon,$R,size,pi){
	$dn = 0;
	$de = -size;
	$dLat = $dn/$R;
	$dLon = $de/($R*Math.cos(pi*$lat/180));
	$latO = $lat + $dLat * 180/pi;		
	$lonO = $lon + $dLon * 180/pi;
	return [$latO, $lonO];
}
function geoFence(arr){
	pi = Math.PI;
	lat = arr['Center'][0];
	lon = arr['Center'][1];
	size = arr['Size'];
	R = 6378137;
	n = (north(lat,lon,R,size,pi));
	s = (south(lat,lon,R, size,pi));
	e = (east(lat,lon,R, size,pi));
	w = (west(lat,lon,R, size,pi));
	fencing = {
			"north"	:	n,
			"south"	:	s,
			"east"	:	e,
			"west"	:	w
	}
	return fencing;
}



