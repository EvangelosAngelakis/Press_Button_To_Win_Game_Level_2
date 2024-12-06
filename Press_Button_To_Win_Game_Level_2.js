const messages = [
    "I said the correct button. No this one.",
    "If you want to win, press the CORRECT button.",
    "You are not very good at this, are you?",
    "Would you like help with this trivial task?",
    "Even a baby can do this. Are you a Baby?",
    "Oh come on, this is getting boring now.",
    "Oops, wrong button! Try again...and again!",
    "Nope, that's not the one. Keep trying!",
    "OMG,I am starting to lose faith here.",
    "Almost there, but not quite there yet.",
    "Better luck next time! Keep going.",
    "Not this one either. You can do it!",
    "Hmm, still not the correct button.",
    "Keep pressing, you'll get it eventually!",
    "Wrong again! Don't give up! Keep trying.",
    "This isn't the right button. Try another one.",
    "You're getting closer, but this isn't it.",
    "Nope, this is not the one. Keep going!",
    "Incorrect button. Try a different one.",
    "Not quite. Keep pressing those buttons!",
    "This isn't the correct button. Keep trying!",
    "Nope, that's not it. Don't lose hope!",
    "Still not the right button. You can do it!",
    "Incorrect again. Keep pressing buttons!",
    "No, Not this one. Try another button.",
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
        document.getElementById('dText').style.color = "white";
        document.getElementById('dButton').style.backgroundColor = "red";
    }
});

document.getElementById('dText').addEventListener('click', function() {
    if (stopExecution) return; 
    document.getElementById('dText').textContent = "CONGRATULATIONS. YOU WON!!! You are a Super Intelligent being from outer Space!";
    document.getElementById('dText').style.color = "white";
    document.getElementById('dButton').style.backgroundColor = "red";
    clearTimeout(timeoutId);
});

function resetPage() {
    location.reload();
}