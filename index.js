const containerEl = document.
    querySelector(".container");

const careers = [
    "Happy Birthday baby girl mwankenja"
];
let careerIndex = 0;
let characterIndex = 0;
updateText();

function updateText() {
    characterIndex++
    containerEl.innerHTML = ` <h1> ${careers[careerIndex].
        slice(0, 1) === "E" ? "an" : ""
        } 
    ${careers[careerIndex].slice(0, characterIndex)}</h1>`;

    if (characterIndex === careers[careerIndex].length) {
        careerIndex++
        characterIndex = 0
    }
    if (careerIndex === careers.length) {
        careerIndex = 0;
    }
    setTimeout(updateText, 400);
}

