console.log("Flödesövningar! F24");

let egg = 6;

console.log(`Du har ${egg} ägg kvar.`);

for (let i = 0; i < 6; i++) {
	console.log(`Knäck ett ägg i skålen.`);
	egg = egg - 1;
	console.log(`Du har ${egg} ägg kvar.`);
}
