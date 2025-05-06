## Important Notes

### 1. Linking CSS to HTML
Use the `<link>` tag inside the `<head>` section to connect your HTML file to an external CSS file.

**Example:**
```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```

- `rel="stylesheet"` tells the browser that this file contains CSS styles.
- `href="styles.css"` specifies the path to your CSS file.

### 2. Linking JavaScript to HTML
Use the `<script>` tag, usually placed right before the closing `</body>` tag, to connect your HTML file to an external JavaScript file.

**Example:**
```html
<body>
  <h1>Hello!</h1>
  <script src="script.js"></script>
</body>
```

- `src="script.js"` specifies the path to your JavaScript file.

### `<div>` Element - Quick Summary

![alt text](1-To-do-list/readme-images/image-1.png)

- **Purpose**: The `<div>` element is used to create a **container** or **wrapper** for grouping HTML elements.
- **Block-level**: Takes up the full width by default and starts on a new line.
- **Common Use**: Organizing content, applying styles, creating layouts, and structuring sections of a page.

**Example:**
```html
<div class="container">
  <h1>Welcome</h1>
  <p>This is inside a container.</p>
</div>
```

### 3. Commands

- **`!enter`**: Automatically adds `DOCTYPE` and other boilerplate code.
- **`.row`**: In CSS frameworks like Bootstrap, `.row` is used to create a container for columns and align them properly in a grid layout (inside a `<div>` container).

---

## Button with `onclick` Event

The `<button>` tag creates a clickable button that can trigger JavaScript functions when clicked (in our case, the function `addTask()`).

**Example:**
```html
<button onclick="addTask()">Add Task</button>

<script>
  function addTask() {
    alert('Task Added!');
  }
</script>
```
## Difference between %, vh, and px

![alt text](1-To-do-list/readme-images/image.png)
![alt text](1-To-do-list/readme-images/image-3.png)
![alt text](1-To-do-list/readme-images/image-5.png)

## Remember

The `class` attribute is primarily used in HTML to apply styling to elements via CSS. By specifying a class in a tag, you can target that element in your CSS and apply specific styles.

## LASSE9
```css
display: flex;
justify-content: center;
align-items: center;
```
`This combo is the key to putting anything (like an image, text, div...) perfectly in the center (both horizontally and vertically).`
![alt text](1-To-do-list/readme-images/image-4.png)

```css
     border-radius: 10px;
```

 `border-radius rounds the corners of an element (like a button, a div, an image, etc.).`
 Here's a **simple Markdown summary** for your `README.md` to explain `::before`, `::after`, and how we use CSS selectors:

---

## 🎨 CSS Selectors & Pseudo-elements (Easy Guide)

### 🔹 Basic CSS Selectors

| Selector        | Meaning                            | Example        |
|----------------|------------------------------------|----------------|
| `tag {}`        | Selects all tags of that type       | `p { color: red; }` |
| `.class {}`     | Selects all elements with the class | `.box { ... }` |
| `#id {}`        | Selects a specific ID               | `#header { ... }` |
| `tag tag {}`    | Selects a tag **inside** another    | `ul li { ... }` |
| `tag.class {}`  | Selects a specific tag with a class | `button.primary {}` |

---

### 🔹 What is `::before` and `::after`?

They are **pseudo-elements** in CSS.  
They **add virtual content** *before* or *after* an element **without changing the HTML**.

#### ✅ `::before`
Adds content **before** the actual element.

```css
li::before {
  content: "🔥 ";
}
```

✅ Output:
```html
<li>Task 1</li>
```

👀 Appears as:
> 🔥 Task 1

---

#### ✅ `::after`
Adds content **after** the actual element.

```css
li::after {
  content: " ✔️";
}
```

✅ Output:
```html
<li>Done</li>
```

👀 Appears as:
> Done ✔️

---

### ✅ Notes
- You **must use** `content: "";` inside `::before` or `::after`, even if it's empty.
- It's perfect for adding **icons**, **symbols**, or **decorations** without changing your HTML.
### Custum animations with css and js:
**->for animations we use keyframes:**
🔍 What this does:
  ```css
  @keyframes floatMusic {
    0% {
      transform: translate(0, 0) scale(1);
      opacity: 1;
    }
    100% {
      transform: translate(calc(-200px + 400px * random()), -500px) scale(1.5);
      opacity: 0;
    }
  }
  ```
At 0% (start): the icon is at the bottom (translateY(0)), not rotated (rotate(0deg)), and fully visible (opacity: 1).

At 100% (end): the icon moves up the entire viewport height (-100vh), spins (rotate(360deg)), and fades (opacity: 0).

**`you don’t need @keyframes when you use element.animate() in JavaScript.JavaScript provides the flexibility to create and animate elements dynamically, making it the suitable choice.`**
🎯 This makes the icons fly upwards and disappear smoothly.
**->Why you don’t need to add <span class="music-icon">🎵</span> in HTML?**
Because JavaScript does it for you dynamically!

Here’s what’s happening:
```js
const icon = document.createElement('span');  // Create <span>
icon.classList.add('music-icon');             // Give it class for styling
icon.innerText = '🎵';                         // Add music note as text
document.body.appendChild(icon);              // Add to page
```
So, instead of adding dozens of `<span>` tags in HTML,

JS creates them in real-time every few seconds.

👉 That’s what makes the animation automatic and never-ending.
 **Set a Random Start Point**
```js
const startX = Math.random() * window.innerWidth;
const startY = Math.random() * window.innerHeight;
icon.style.left = `${startX}px`;
icon.style.top = `${startY}px`;
```
✅ Pick a random X and random Y on the screen
✅ Set the icon's starting position (where it will appear)
Add It to the Page + Remove It Later
```js
document.body.appendChild(icon);
setTimeout(() => icon.remove(), 4000);
```
✅ You put the icon into the page
✅ After 4 seconds (4000ms), it disappears — so the page doesn't get full of emojis forever.
## Random emojies animation:
🔍 What this code does:
```js
const icons = ['🎵', '🎶', '🎼', '🎤', '🎧', '🎷', '🎸', '🎺', '🥁', '🪕'];
icon.innerText = icons[Math.floor(Math.random() * icons.length)];
```
`👉 Line-by-line explanation:`
```js
const icons = [...]
```
`You’re creating a list (array) of different music-related emoji/icons.`

```js
Math.random()
```
`Gives a random number between 0 and 1.`

```js
Math.random() * icons.length
```
`Gives a random number between 0 and the number of icons.`

```js
Math.floor(...)
```
`Converts that number to a whole number (0, 1, 2, etc.).`

```js
icons[ ... ]
```
`Picks a random icon from the array.`

```js
icon.innerText = ...
```
`Sets the content (emoji) of the icon element to be that random music icon.`
Here’s your **"Stupid Explanation" code** fully transformed into **Markdown format** — clean, readable, and easy to memorize 🤓:

---

## 💻 `createMusicIcon()` — Stupid Explanation in Markdown

```js
function createMusicIcon() {
```
👉 I’m making a machine (function) called `createMusicIcon` to build floating music emojis.

---

```js
const icon = document.createElement('span');
```
👉 I'm creating a tiny tag from HTML called `<span>` — it's like a little empty sticker.

---

```js
icon.classList.add('music-icon');
```
👉 I slap a class name `"music-icon"` on it so I can style it later with CSS.

---

```js
const icons = ['🎵', '🎶', '🎤', '🎧'];
icon.innerText = icons[Math.floor(Math.random() * icons.length)];
```
👉 I have a bag full of music emojis 🎵🎶🎤🎧.  
👉 I close my eyes and grab one at random, and stick it inside the `<span>`.

---

```js
const startX = Math.random() * window.innerWidth;
const startY = Math.random() * window.innerHeight;
```
👉 I choose a random starting place on the screen (somewhere across your window width & height).

---

```js
icon.style.left = `${startX}px`;
icon.style.top = `${startY}px`;
```
👉 I tell that emoji sticker where to start on the screen using `left` and `top` in pixels.

---

```js
const endX = startX + (Math.random() * 200 - 100);
const endY = startY - 200 - Math.random() * 300;
```
👉 I figure out where the emoji should float up to, kind of randomly upward and sideways.

---

```js
icon.animate([
  { transform: `translate(0, 0)`, opacity: 1 },
  { transform: `translate(${endX - startX}px, ${endY - startY}px)`, opacity: 0 }
], {
  duration: 4000,
  easing: 'linear'
});
```
👉 I animate the emoji from its starting point to the end point, fading out as it goes up like it's saying goodbye. 👋

---

```js
document.body.appendChild(icon);
```
👉 I slap it onto the page so it shows up in real life (on the screen).

---

```js
setTimeout(() => icon.remove(), 4000);
```
👉 After 4 seconds, I clean it up and throw it away like a used napkin. 🧻

---

```js
setInterval(createMusicIcon, 1000);
```
👉 Every second, this whole thing happens again!  
👉 A new emoji floats up every second. 🎉

## Create a function with js:
```js
const element = document.createElement('tag');
element.classList.add('class-name');
element.innerText = someText;
document.body.appendChild(element);
```
![alt text](1-To-do-list/reademe-images/image-6.png)
Sure! Here's your code explanation rewritten in clean **Markdown** format:

---

## 🧠 Explanation of `addTask` function in js:
```js
const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");
```

🔹 These two lines are grabbing **HTML elements** by their `id`:
- `listContainer`: refers to the `<ul>` or `<ol>` element where the tasks will be added.
- `inputBox`: refers to the `<input>` field where the user types their task.

---

### Function: `addTask`
```js
function addTask() {
  if (inputBox.value === '') {
    alert("por favor, introduzca algunos datos");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
  }
}
```

### ✅ What does this function do?

This is your **task-adding function**. Here's what happens:

1. **Check if input is empty**:
   ```js
   if (inputBox.value === '')
   ```
   - If it is, the function shows an alert:
     ```js
     alert("por favor, introduzca algunos datos");
     ```
   - This prevents users from adding empty tasks.

2. **If input is not empty**:
   - A new `<li>` element is created:
     ```js
     let li = document.createElement("li");
     ```
   - The content of the task is added to that `<li>`:
     ```js
     li.innerHTML = inputBox.value;
     ```
   - Finally, the `<li>` is added to the `listContainer`:
     ```js
     listContainer.appendChild(li);
     ```
## LOCAL STORAGE && setItem :
 **localStorage – What is it?**

`localStorage is part of the Web Storage API. It allows you to store data in the browser – even after the user closes or reloads the page.`

**setItem() – What does it do?**
`This method saves a value in localStorage.`
```js
localStorage.setItem("key", "value");
```
![alt text](1-To-do-list/readme-images/image-7.png)
![alt text](1-To-do-list/readme-images/image-8.png)
**localStorage.getItem(key)**
`It retrieves data that was saved in the local storage using a given key, so you can see the tasks again even after refreshing the page.`



---

### 🧠 Event listener : What does this do?

```js
listContainer.addEventListener("click", function(e) {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
    saveTask();
  }
});
```

This code says:

> “When someone **clicks** on something **inside** the `listContainer`, check **what** they clicked. If they clicked a **list item (`<li>`)**, then mark it as done or not done (toggle a ‘checked’ class), and then save the new state to localStorage.”

---

### 🔍 Line by line breakdown:

#### ✅ `listContainer.addEventListener("click", function(e) { ... });`
- This means:  
  “Listen for a click anywhere **inside** the `listContainer` (where all your tasks are).”

#### ✅ `e` is the event object.
- It contains details about **what was clicked**.

#### ✅ `e.target.tagName == "LI"`
- This checks:  
  > “Did the person **click directly on a `<li>`** (a task item)?”

#### ✅ `e.target.classList.toggle("checked");`
- This **adds or removes** the class `"checked"` from that `<li>`.  
- It makes it **look done or not done** (like crossing it out).

#### ✅ `saveTask();`
- This calls your function that saves all tasks (including which ones are marked done) into **localStorage**, so it stays there after refreshing the page.

---

### 🧠 Simple analogy:

Imagine a **notebook** full of tasks.

- You tap on a task → it gets a ✔️ check mark.
- You tap again → the ✔️ disappears.
- Each time, your notebook (localStorage) saves the updated list.

## 🧱 JavaScript DOM Element Creation – Summary:
# ✅ 1. document.createElement("tagName")
Creates a new HTML element in memory (not yet on the page).

`Example:`
```js
const div = document.createElement("div");
```
You can create any tag like div, span, li, p, button, etc.

# ✅ 2. element.innerText or element.innerHTML
Sets the content of an element.

**innerText: adds plain text.**

**innerHTML: can insert HTML tags.**

Example:
```js
div.innerText = "Hello World";
li.innerHTML = "<strong>Task</strong>";
```
# ✅ 3. parentElement.appendChild(childElement)
Adds a child element to a parent in the page.

Makes your created element visible.

Example:

```js
document.body.appendChild(div);
listContainer.appendChild(li);
```
# ✅ 4. Adding a Class with JavaScript
Instead of writing a class in HTML like:

```js
<div class="box"></div>
```
You can do it in JS:
```js
div.classList.add("box");
```
# 🧠 Summary: Building an Element Step-by-Step

` Step 1:` Create the element
```js
const span = document.createElement("span");
```
` Step 2:` Add content
```js
span.innerText = "🎵 Music";
```
` Step 3:` Add a class (for styling)
```js
span.classList.add("music-icon");
```
` Step 4:` Add it to the page (inside a parent)
```js
document.body.appendChild(span);
```
# ✅ When to use JavaScript instead of writing HTML:
![alt text](1-To-do-list/readme-images/image-9.png)

`**NB:**any <span> element that is inside an <li>, which is inside a <ul>.`
```js
element.classList.add("done");       // Adds a class
element.classList.remove("done");    // Removes a class
element.classList.toggle("done");    // Adds it if it's missing, removes it if it's there
```