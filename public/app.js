// console.log("Flödesövningar! F24");

// let egg = 6;

// console.log(`Du har ${egg} ägg kvar.`);

// for (let i = 0; i < 6; i++) {
// 	console.log(`Knäck ett ägg i skålen.`);
// 	egg = egg - 1;
// 	console.log(`Du har ${egg} ägg kvar.`);
// }

// Övning 1

// 1) Skriv ett program som skriver ut (console.log)
// instruktioner för att skala en potatis i taget. Vi har 10 potatisar.

// for (let p = 1; p <= 10; p++) {
// 	console.log(`Skala en potatis! Potatis ${p} av 10.`);
// }

// vad är p? antal potatisar vi har skalat!

// let maxPotatoes = prompt("Hur många potatisar ska vi skala?");

// console.log(maxPotatoes, typeof maxPotatoes);

// // if (maxPotatoes > 10) maxPotatoes = 10;

// for (let peeledPotatoes = 1; peeledPotatoes <= maxPotatoes; peeledPotatoes++) {
// 	console.log(
// 		`Skala en potatis! ${
// 			maxPotatoes - peeledPotatoes
// 		} potatisar kvar att skala.`
// 	);
// }

let answer = prompt("Äpplen?");

answer = Number(answer);

console.log(
	"Du och två kompisar äter " +
		answer +
		" äpplen var, vilket är " +
		answer +
		answer +
		answer +
		" äpplen"
);
