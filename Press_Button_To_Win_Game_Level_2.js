const messages = [
    "This will be tricky. Can you find the way?",
    "If you want to win, tap your way in.",
    "You are not very good at this, are you?",
    "Would you like help with this task?",
    "Oops, this is wrong! Try again...and again!",
    "Nope, that's not it. Keep trying!",
    "OMG,I am starting to lose faith here.",
    "Almost there, but not quite there yet.",
    "Better luck next time! Keep going.",
    "Not this way either. You can do it!",
    "Hmm, still not the correct way to do it.",
    "Keep pressing, you'll get it eventually!",
    "Wrong again! Don't give up! Keep trying.",
    "You're getting closer, but this isn't it.",
    "Nope, this is not the one. Keep going!",
    "Not quite. Keep pressing those buttons!",
    "Nope, that's not it. Don't lose hope!",
    "Incorrect again. Keep pressing buttons!",
    "Oh come on, this is getting boring now.",
    "Almost there, I promise. Cross my heart!",
    "Just a little bit more. You can do it!",
];

let currentIndex = 0;
let stopExecution = false;

function cycleMessage() {
    if (stopExecution) return;
    const dText = document.getElementById('dText');
    dText.innerText = messages[currentIndex];
    currentIndex = (currentIndex + 1) % messages.length;
    document.getElementById('dButton').style.backgroundColor = "bisque";
    document.getElementById('dText').style.color = "black";
}

document.getElementById('button3').addEventListener('click', function(event) {
    if (event.detail === 3) {
        stopExecution = true; 
        document.getElementById('dText').textContent = "CONGRATULATIONS. YOU WON!!!";
        document.getElementById('dButton').style.backgroundColor = "cyan";
    }
});


function resetPage() {
    location.reload();
}