# important notes
## ✅ 1. Where do the icons come from?
The icons like ➕ fa-plus, 💾 fa-save, 🗑️ fa-trash come from:

```html
<script src="https://kit.fontawesome.com/0c76f271d6.js" crossorigin="anonymous"></script>
```
🔸 This line loads Font Awesome, which is a free icon library.

🔸 Once loaded, you can use icons like this:
```html
<i class="fas fa-plus"></i>   <!-- Plus icon -->
<i class="fas fa-save"></i>   <!-- Save icon -->
<i class="fas fa-trash"></i>  <!-- Trash icon -->
```
👉 fas means "Font Awesome Solid".
👉 fa-plus is the name of the icon.

## ✅ 2. Why are there 3 <div>s ?
`➤ <div id="main">`
🟨 This is the main container that holds all your notes.

`➤ <div class="note">`
🟩 This is one note box.

Every time you click “Add”, JS will create a new note and put it inside the main.

`➤ <div class="tool">`
🟦 This is the toolbar inside each note.

It holds:

The Save button
The Delete button
## NB
💡 This part is often called a CSS Reset — it's used to eliminate default spacing browsers apply.
* It's not mandatory, but it's a best practice—especially in modern web development.

* It helps you start with a clean slate.
                           ||     
                           ||
                           \/
```js
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
```
# important tags:
## cursor: pointer;
🖱️ Changes the mouse cursor to a hand icon when hovering.
## display: flex
This turns a container into a flexbox, which helps you arrange items side-by-side or in a specific direction.
**Items inside the container will now line up in a row by default (like boxes side-by-side).**


```css
.container {
  display: flex;
}
```
## justify-content: flex-start
This controls how items are aligned horizontally in a flex container.
flex-start = **put items at the start (left)** of the container.
Other options: center, flex-end, space-between, etc.
**align items to the left**
```css
.container {
  display: flex;
  justify-content: flex-start; /* align items to the left */
}
```
![alt text](2-Notes-Taking-App/images/image.png)
# Font awesome:
**you use this link to use `font awesome` kit :**
`you can check there website and copy links :)`
```html
    <script src="https://kit.fontawesome.com/0c76f271d6.js" crossorigin="anonymous"></script>
```
**Same for icons :**

```html
        <i class="fas fa-save"></i>
        <i class="fas fa-trash"></i>
        <i class="fas fa-plus"></i>
```
# **JS**: query selector
`example:`
```js
const addBtn = document.querySelector("#addBtn");
```
`document.querySelector():`
This is a method that selects the first element in the HTML document that matches the CSS selector you give it.

`"#addBtn":`
This is a CSS ID selector. It looks for an element with id="addBtn".

`const addBtn =:`
This stores the found element in a variable named addBtn, so you can easily use it later (e.g., to add a click event, change style, etc.).
# Event listener: 
addNote.addEventListener("click", newNote);
<!-- "When someone clicks the addNote button, run the newNote function." -->
## 📝 JavaScript DOM Steps – Summary:

`1-Select from HTML`
Use document.querySelector() to select HTML elements by ID, class, tag, etc.
`→ Example:`
```js
 const btn = document.querySelector("#addBtn");
```
`2-Add an Event`
Use .addEventListener("event", function) to run code when something happens (like a click).
`→ Example:`
```js
 btn.addEventListener("click", addNote);
```
`3-Create an Element`
Use document.createElement("tag") to make a new HTML element in JavaScript.
`→ Example:`
```js
 const div = document.createElement("div");
```
`4-Add a Class`
Use .classList.add("className") to apply a CSS class to the element.
`→ Example:`
```js
 div.classList.add("note");
```
`5-Add Content`
Use .innerHTML = "..." to insert HTML inside the new element.
`→ Example:`
```js
 div.innerHTML = "<p>Text</p>";
```
`6-Insert into the Page`
Use .appendChild(element) to place the new element inside another (like a container).
(After creating the note, you need to insert it into the page using appendChild.)
`→ Example:`
```js
 main.appendChild(div);
 ```
 ##    flex-wrap:wrap;
 `before it:`finma kanzid chi note jdida kayb9aw yda7so w size changes!!
![alt text](2-Notes-Taking-App/images/image-1.png)

 `after it:`kayb9aw ytazdo and the size of the privious ones stay fixed!!
 ![alt text](2-Notes-Taking-App/images/image-2.png)
