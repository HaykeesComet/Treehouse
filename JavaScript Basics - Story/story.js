// 1. Declare variables and capture input.
const adj = prompt("Give me an adjective?");
const verb = prompt("Give me a verb?");
const noun = prompt("Give me a noun?");

// 2. Combine the input with other words to create a story.
const story = `<p>There once was a ${adj} programmer who wanted to use JavaScript to ${verb} the ${noun}.</p>`;

// 3. Display the story as a <p> inside the <main> element.
document.querySelector('main').innerHTML = story;