let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("#select");

if ('speechSynthesis' in window) {
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice, i) => {
        let option = new Option(voice.name, i);
        voiceSelect.add(option);
    });
};
} else {
    alert("Speech synthesis is not supported in your browser.");
}
document.querySelector(".neumorphic-button").addEventListener("click", () => {
    speech.text = document.querySelector("#text").value;
    speech.voice = voices[voiceSelect.value];
    window.speechSynthesis.speak(speech);
});

document.querySelector("#stop-button").addEventListener("click", () => {
    window.speechSynthesis.cancel();
});
