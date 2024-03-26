const PRICE_PER_KM = 0.21; //number
const DISCOUNT_UNDER_18 = 20; //number
const DISCOUNT_OVER_65 = 40; //number

// let btn = document.getElementById("invia");
let btn = document.getElementById("submit");
console.log("button element: ", btn);


btn.addEventListener("click", function () {
	console.log("il bottone invia è stato cliccato");

	let userAgeElement = document.getElementById("age");
	console.log("userAgeElement: ", userAgeElement);

	let userAge = userAgeElement.value;
	userAge = parseInt(userAge); //number|null
	console.log("userAge: ", userAge);
	console.log("userAge tipo: ", typeof userAge);

	let kilometersElement = document.getElementById("chilometri");
	console.log("kilometersElement: ", kilometersElement);

	let kilometersToTravel = parseInt(kilometersElement.value);
	kilometersToTravel = parseInt(kilometersToTravel);
	console.log("kilometersToTravel: ", kilometersToTravel);

	//start calcolo del prezzo

	let discountToApply = 0;
	let finalTicketPrice; //di default é undefined

	if (userAge !== null && userAge > 0) {
		//validazione età
		const ticketPrice = PRICE_PER_KM * kilometersToTravel;
		if (userAge < 18) {
			//sconto minorenne
			console.log("hai diritto al 20% di sconto");
			discountToApply = (ticketPrice * DISCOUNT_UNDER_18) / 100;
		} else if (userAge > 65) {
			//sconto over 65
			console.log("hai diritto al 40% di sconto");
			discountToApply = (ticketPrice * DISCOUNT_OVER_65) / 100;
		}
		finalTicketPrice = ticketPrice - discountToApply;
		finalTicketPrice = finalTicketPrice.toFixed(2); //string
		finalTicketPrice = parseFloat(finalTicketPrice); //number
	}

	console.log("prezzo finale del biglietto: ", finalTicketPrice);

	if (finalTicketPrice === undefined) {
		document.getElementById("result").innerHTML = `L'utente ha inserito dati non validi!`;
	} else {
		document.getElementById("result").innerHTML = `
			L'utente ha ${userAge} anni </br>
			Deve percorrere ${kilometersToTravel} chilometro/i </br>
			Gli spetta uno sconto pari a ${discountToApply.toFixed(2)} € </br>
			Il prezzo finlale del tuo biglietto é ${finalTicketPrice} €.
		`;
	}

});

