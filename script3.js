const editor = document.getElementById("editor");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");
const typingStatus = document.getElementById("typingStatus");
const themeBtn = document.getElementById("themeBtn");

editor.addEventListener("input", () => {
    const text = editor.innerText.trim();

    wordCount.innerText = text.split(/\s+/).filter(word => word.length > 0).length;
    charCount.innerText = text.length;

    typingStatus.innerText = "User is typing...";

    setTimeout(() => {
        typingStatus.innerText = "No one is typing...";
    }, 1000);
});

function formatText(command) {
    document.execCommand(command, false, null);
}

function saveDocument() {
    const content = editor.innerText;
    localStorage.setItem("savedDoc", content);
    alert("Document Saved Successfully!");
}

window.onload = () => {
    const saved = localStorage.getItem("savedDoc");
    if(saved){
        editor.innerText = saved;
    }
};

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});