// // /**
// //  * DONE: Update the text in the "Formatted Text" section as a user types in the textarea
// //  * DONE TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
// //  * DONE: Add an .underline class to "Formatted Text" when Underline button is clicked
// //  * DONE: Toggle the align style for "Formatted Text" when the appropriate button is clicked
// //  */

// // /**
// //  * Update the output text as a user types in the textarea
// //  * HINT: Use the onkeydown function inside HTML
// //  */
// // updateText = () =>{
// //   // CODE GOES HERE
// //   let text = document.getElementById("text-input").value;
// //   document.getElementById("text-output").innerText = text;
// // }

// // /**
// //  * Toggle the bold class for the output text
// //  * HINT: Use the onclick function insite HTML
// //  * HINT: Look into using this keyword
// //  * HINT: Use the classList property
// //  * HINT: Toggle .active class for the button
// //  */
// // makeBold = (elem)=> {
// //   //CODE GOES HERE
// //   elem.classList.toggle("active");
// //   document.getElementById("text-output").classList.toggle("bold");
// // }

// // /**
// //  * Toggle the italic class for the output text
// //  */
// // makeItalic = (elem)=> {
// //   elem.classList.toggle("active");
// //   document.getElementById("text-output").classList.toggle("italic");
// // }

// // /**
// //  * Toggle the underline class for the output text
// //  * HINT: Toggle the .active class for the button
// //  * HINT: Use the classList property
// //  * HINT: Use contains, remove, and add functions
// //  */
// // makeUnderline = (elem) => {
// //   //CODE GOES HERE
// //   elem.classList.toggle("active");
// //   if (document.getElementById("text-output").classList.contains("underline")) {
// //     document.getElementById("text-output").classList.remove("underline");
// //   } else {
// //     document.getElementById("text-output").classList.add("underline");
// //   }
// // }

// // /**
// //  * Toggle the style textAlign attribute
// //  * Toggle the active state for the align butttons
// //  * HINT: Use the style property of the element
// //  * HINT: Make sure to untoggle the active state for all other align buttons
// //  */
// // alignText = (elem, alignType) => {
// //   // CODE GOES HERE
// //   document.getElementById("text-output").style.textAlign = alignType;
// //   let buttonList = document.getElementsByClassName("align");
// //   // for (let i = 0; i < buttonList.length; i++) {
// //   //   buttonList[i].classList.remove("active");
// //   // }
// //   for(let value of buttonList ){
// //     value.classList.remove("active");
// //   }
// //     // buttonList.map((value)=>{
// //     //   value.classList.remove("active");
// //     // })
// //   elem.classList.add("active");
// // }

// // //Promise task
// // // let promise = new Promise((resolve, reject) =>{
// // //   setTimeout(()=>{
// // //     // resolve({
// // //     //   firstName: "Ajit",
// // //     //   lastName:"Singh"
// // //     // });
// // //     reject("Something, wrong")
// // //   }, 1000);
// // // })

// // // promise.then((response)=>{
// // //   console.log("Here is the response after 1:")
// // //   console.log(response)
// // // }).catch((error)=>{
// // //   console.log(error)
// // // })

// // // console.log("Part 1")

// // Fetching data from API
// let userPromise = fetch("https://randomuser.me/api/");
// console.log(userPromise);

// userPromise
//   .then((response) => {
//     return response.json();
//   })
//   .then((resData) => {
//     console.log(resData.results[0].name.first);
//   })
//   .catch((error) => {
//     console.log(error);
//   });










// let personOne = new Person("Naz", "Duman", 25);
// let personTwo = new Person("Sonny", "Sangha", 26);

// // attribute
// let friends = [
//   new Person("Ajit", "Singh", 21),
//   new Person("Rafeq", "Qazi", 32),
// ];

//function to add friends
// addFriend = (firstName, lastName, age) => {
//   friendObj = new Person(firstName, lastName, age);
//   friends.push(friendObj);
// };

// addFriend("Ali", "Mohmmad", 22);
// console.log(friends);

// /*Name: Ajit Singh Brar  Phone: 437-788-4638 */

// let NUMBER = parseInt(prompt("Please enter a number (positive): "));

// checkNumber = () => {
//   if (NUMBER > 0) {
//     if (NUMBER % 2 == 0) {
//       console.log("foo");
//     } else if (NUMBER % 7 == 0) {
//       console.log("bar");
//     } else if (NUMBER % 14 == 0) {
//       console.log("foobar");
//     } else {
//       console.log(NUMBER);
//     }
//   } else {
//     NUMBER = parseInt(prompt("Please enter a number again(positive): "));
//     checkNumber();
//   }
// };

// checkNumber();

// if (province == "ONTARIO") {
//   rate = ONTARIO_RATE;
// } 
// else if (province == "QUEBEC" || province == "ALBERTA") {
//   rate = province == "QUEBEC" ? QUEBEC_RATE : ALBERTA_RATE;

//   if (province == "QUEBEC") {
//     points = 2;
//   }
// } 
// else {
//   rate = 1;
// }

// amt = base * rate;
// calc = 2 * basis(amt) + extra(amt) * 1.05;
