var userName = prompt("ENTER USERNAME>>")
var enterAge = prompt("ENTER AGE>>")
var userGreeting = console.log("Welcome, " + userName + "! This is a fun quiz to see how well you know your Bengal Tiger...")
// Starting the actual game
var q1 = prompt("Okay, first question: Is the Bengal Tiger the biggest sub-species of Tiger? - y/n")

if q1 == "n" {
  console.log("WOW!")
}
if q1 == "y" {
  console.log("Er...nice try.")
}

var q2 = prompt("India is home to 65% of all Tigers. -  true/false")
if q2 == "false" {
  console.log("Correct!")
}
if q2 == "true" {
  console.log("...")
}

// More questions coming!
