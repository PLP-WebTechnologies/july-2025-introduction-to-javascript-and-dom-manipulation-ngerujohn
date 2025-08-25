// Part 1: Variables and Conditionals
let userName = "John";
let hour = new Date().getHours();
let greetingText = "";

if (hour < 12) {
    greetingText = `Good morning, ${userName}!`;
} else if (hour < 18) {
    greetingText = `Good afternoon, ${userName}!`;
} else {
    greetingText = `Good evening, ${userName}!`;
}

// Part 2: Custom Functions
function multiplyNumbers(a, b) {
    return a * b;
}

function createNumberList(limit) {
    let numbers = "";
    for (let i = 1; i <= limit; i++) {
        numbers += i + " ";
    }
    return numbers;
}

// Part 3: Loops
let evenNumbers = [];
for (let i = 2; i <= 10; i += 2) {
    evenNumbers.push(i);
}

let counter = 0;
while (counter < 3) {
    console.log(`Counter: ${counter}`);
    counter++;
}

// Part 4: DOM Interactions
document.getElementById("greeting").textContent = greetingText;
document.getElementById("number-list").textContent = "Even Numbers: " + evenNumbers.join(", ");

document.getElementById("actionBtn").addEventListener("click", function() {
    alert("Multiplication Example: 5 × 3 = " + multiplyNumbers(5, 3));
});
