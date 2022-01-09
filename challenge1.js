/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */

function printName() {
	console.log("Abdullah AlKhareji");
}

printName();

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */

function printAge(yearOfBirth) {
	const age = 2022 - yearOfBirth;
	console.log(age);
}

printAge(1993);

/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */

function printHello(name, lang) {
	let msg;
	if (lang === "en") {
		msg = "Hello name";
	} else if (lang === "es") {
		msg = "Hola name";
	} else if (lang === "fr") {
		msg = "Bonjour name";
	} else if (lang === "tr") {
		msg = "Merhaba name";
	} else {
		msg = "Select Language Please";
	}

	console.log(msg);
}

printHello("Abdullah", "en");
printHello("Abdullah", "es");
printHello("Abdullah", "fr");
printHello("Abdullah", "tr");

/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */

function printMax(x, y) {
	if (x < y) {
		console.log(y);
	} else if (y < x) {
		console.log(x);
	} else {
		console.log(`x = y`);
	}
}

printMax(4, 8);
printMax(8, 4);
printMax(10, 10);
