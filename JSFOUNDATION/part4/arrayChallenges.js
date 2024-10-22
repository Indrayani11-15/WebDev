/*
1.Declare and array named ` teaFlavors` that contains the strings `"green tea"`,`"black tea"`, and `"oolong tea"`.
Access the first element of the array and store it in a variable name `firstTea` .
*/

let teaFlavors = ["green tea", "black tea", "oolong tea"]
let firstTea = teaFlavors[0]


/*
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`.
Access the third element in the array and store it in a variable named `favoriteCity`.
*/

let cities = ["London", "tokyo", "Paris", "New york"];
let favCity = cities[2]

/* 3.You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`.
Change the second element of the array to `"jasmine tea"`.
 */

let teaTypes = ["herbal tea", "white tea", "masala chai"]
teaTypes[1] = "jasmine tea"
// console.log(teaTypes);

/*4. Declare an array named 'citiesVisited' containing `"Mumbai"` and `"Sydney"`.
Add `"Berlin"` to the array using the 'push' method.
 */

let citiesVisited = ["Mumbai", "Sydney"]
citiesVisited.push("Berlin")
// console.log(citiesVisited);

/*5.You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`.
Remove the last element of the array using the 'pop' method and store it in a variable named 'lastorder'.
 */

let teaOrders = ["chai", "iced tea","matcha", "earl grey"];
const lastOrder = teaOrders.pop();
// console.log(teaOrders);
// console.log(lastOrder);


/*6.You have an array named 'popularTeas' containing `"green tea"`, `"oolong tea"`, and `"chai"`.
Create a soft copy of this array named 'softCopyTeas'
 */

let popularTeas = ["green tea", "oolong tea", "chai"]
let softCopyTeas = popularTeas;
// console.log(softCopyTeas);
// console.log(popularTeas);

/*7.You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`.
Create a hard copy of this array named `hardCopyCitites`.
 */
let topCitites = ["Berlin", "Singapore", "New York"]
let hardCopyCitites = [...topCitites];
// let hardCopyCitites = topCitites.slice()


/*8. You have two arrays:`europeanCities` containing `"paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`.
Merge these two arrays into a new array named `wroldCities`.*/

let europeanCities = ["Paris", "Rome"]
let asianCities = ["Tokyo", "Bangkok"]
let wroldCities = europeanCities.concat(asianCities)
// console.log(wroldCities);

/*9.You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`.
Find the length of the array and store it in a variable named `menulength`. */

let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"]
let menulength = teaMenu.length;

/*10.You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape town"`, and `"Vancouver"`.
 Check if `"London"` is in the array and store the result in a variable named `isLondonInList`. */

let cityBucketList = ["Kyoto","London","Capre town","Vancouver"] 
let isLondonInList = cityBucketList.includes("London")
console.log(isLondonInList);
