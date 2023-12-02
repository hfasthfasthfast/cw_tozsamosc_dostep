// Requiring module
const express = require("express");
var path = require('path');

// inicjalizacja aplikacji express
const app = express();

// funkcja sluzy do autentykacji http
function authentication(req, res, next) {
	var authheader = req.headers.authorization;
	console.log(req.headers);

	if (!authheader) {
		var err = new Error('You are not authenticated!');
		res.setHeader('WWW-Authenticate', 'Basic');
		err.status = 401;
		return next(err)
	}

	var auth = new Buffer.from(authheader.split(' ')[1],
	'base64').toString().split(':');
	var user = auth[0];
	var pass = auth[1];
	
	// weryfikacja, czy login i haslo sa puste
	if (user == '' && pass == '') {

		// jezeli if zwraca True, to przechodzimy dalej
		// w przeciwnym wypadku wyswietla sie blad
		next();
	} else {
		var err = new Error('You are not authenticated!');
		res.setHeader('WWW-Authenticate', 'Basic');
		err.status = 401;
		return next(err);
	}

}

// autentykacja klienta i udostepnienie plikow z folderu public
app.use(authentication)
app.use(express.static(path.join(__dirname, 'public')));

// uruchamianie serwera na porcie 3000 i rozpoczynanie jego nasluchiwania + wyswietlenie tekstu w konsoli
app.listen((3000), () => {
	console.log("Server is Running");
})
