const addNoteBtn = document.querySelector("#addNote");
const main = document.querySelector("#main");

// Quand on clique sur le bouton, la fonction newNote() est appelée.
addNoteBtn.addEventListener("click", newNote);

function newNote() {
    const note = document.createElement("div");
    note.classList.add("note");

    note.innerHTML = `
    <div class="tool">
        <i class="save fas fa-save"></i>
        <i class="trash fas fa-trash"></i>
    </div>
    <textarea></textarea>
    `;

    const save = note.querySelector(".save");
    const trash = note.querySelector(".trash");
    const textarea = note.querySelector("textarea");

    save.addEventListener("click", saveNotes);

    main.appendChild(note);
}

function saveNotes() {
    const notes = document.querySelectorAll(".note textarea");
    const data = Array.from(notes).map(note => note.value);

    console.log(notes, data);

    if (data.length === 0) {
        localStorage.removeItem("notes");
    } else {
        localStorage.setItem("notes", JSON.stringify(data)); 
}
}