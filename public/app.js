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

// let answer = prompt("Äpplen?"); // "2"

// answer = Number(answer); // 2

// console.log(
// 	"Du och två kompisar äter " +
// 		answer +
// 		" äpplen var, vilket är " +
// 		answer +
// 		answer +
// 		answer +
// 		" äpplen"
// );

// console.log(
// 	`Du och två kompisar äter ${answer} äpplen var, vilket är ${
// 		answer + answer + answer
// 	} äpplen totalt.`
// );

// let orderMore = true;
// let order = [];
// let item = "";

// while (orderMore) {
// 	// fråga: vad vill du ha?
// 	item = prompt("Vad vill du ha?");

// 	// spara svaret i en array
// 	order.push(item);

// 	// fråga: vill du ha ngt mer?
// 	orderMore = confirm("Vill du ha något mer?");

// 	// Om ja: börja om, annars visa beställning
// }
// console.log(order);

// const a = "";
// const b = [];
// const c = {};

// // hund = new Dog()

// const student = {
// 	firstName: "Kim",
// 	hobbies: ["knitting", "motorcycles", "cooking"],
// 	age: 27,
// };

// student.lastName = "Nilsson";

// console.log(student.age);
// student.age += 1;
// console.log(student["age"]);

// student.lastName = "Svensson";

// foo = {
// 	go: function () {
// 		console.log("foo.go");
// 	},
// };

// foo.go();

// const students = [
// 	{ firstName: "Niklas", lastName: "Mårdby" },
// 	{ firstName: "Mio", lastName: "Nilsson" },
// ];

// console.log(students[0].firstName);

// let i = 5;
// if (i > 12) {
// 	console.log("i är större än 12");
// } else {
// 	console.log("i är INTE större än 12");
// }

// 2024-09-11

// const animals = ["gorilla", "hund", "gris", "panda"];
// animals.mat = "glass";

// for (const element of animals) {
// 	console.log(element);
// }

// for (const i in animals) {
// 	console.log(`Index: ${i}: Värde ${animals[i]}`);
// }

const obj = {
	namn: "Mio",
	ålder: 12,
};

obj.klass = "FE24";

console.log(obj.namn);
console.log(obj["namn"]);
console.log(obj);

// loopa igenom objekt

for (const key in obj) {
	console.log(`Key: ${key}: Value ${obj[key]}`);
}

const key = "namn";
console.log(obj[key]);
