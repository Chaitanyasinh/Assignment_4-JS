/*
	API retrived from: https://developer.weatherunlocked.com/
*/

let label = document.getElementById('weather_label');

if (navigator.geolocation) 
{
	navigator.geolocation.getCurrentPosition(setLabel);
}
else 
{
	label.textContent = 'Can not locate your position!!!';
}

//getting responses from api
function setLabel(position) 
{
	let link = 'http://api.weatherunlocked.com/api/current/'+
					 + position.coords.latitude + ','
					 + position.coords.longitude
					 + '?app_id=716fea1f' + '&app_key=7f93a07de7c805e034f09c4514042a1e';

	var request = new XMLHttpRequest();
	request.addEventListener("load", weather);
	request.open("GET", link);
	request.responseType = "json";
	request.send();
}

//setting weather's details to label
function weather(insert) {	

	data = insert.currentTarget.response;

	labelText = "&nbsp; Weather at your city: " + "&nbsp;" + data.wx_desc + "&nbsp; - "
					+ "&nbsp; Temperature: " + data.temp_c + "°C" + "&nbsp; - " + "&nbsp; Humidity: " + data.humid_pct + "%&nbsp;" 
	label.innerHTML = labelText;
}
