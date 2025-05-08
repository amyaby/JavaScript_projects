const addNoteBtn = document.querySelector("#addNote");
const main = document.querySelector("#main");

addNoteBtn.addEventListener("click", newNote);

function newNote() {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
    <div class="tool">
        <i class="fas fa-save"></i>
        <i class="fas fa-trash"></i>
    </div>
    <textarea></textarea>
    `;
    main.appendChild(note);
}
