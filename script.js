function startStory() {
    const name = document.getElementById('nameInput').value;
    if (name) {
        document.getElementById('story').textContent = `Hi ${name}! I have to tell you something...`;
        document.getElementById('nameInput').style.display = 'none';
        document.getElementById('choiceContainer').style.display = 'block';
        document.getElementById('choiceText').textContent = "Do you know I've had a crush on you for a while?";
    }
}

function chooseYes() {
    document.getElementById('choiceContainer').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('finalMessage').textContent = `I'm so glad you feel the same! I've liked you for a long time too. 😊❤️`;
}

function chooseNo() {
    document.getElementById('choiceContainer').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('finalMessage').textContent = `Okay, no worries! Just wanted to be honest. 🥺`;
}