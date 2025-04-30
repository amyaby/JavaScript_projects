
//floating mucis icons
function createMusicIcon() {
    const icon = document.createElement('span');
    icon.classList.add('music-icon');
    const icons = ['🎵','🎵', '🎶', '🎤', '🎧'];
    icon.innerText = icons[Math.floor(Math.random() * icons.length)];
  
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
  
    icon.style.left = `${startX}px`;
    icon.style.top = `${startY}px`;
  
    const endX = startX + (Math.random() * 200 - 100);
    const endY = startY - 200 - Math.random() * 300;
  
    icon.animate([
      { transform: `translate(0, 0)`, opacity: 1 },
      { transform: `translate(${endX - startX}px, ${endY - startY}px)`, opacity: 0 }
    ], {
      duration: 4000,
      easing: 'linear'
    });
  
    document.body.appendChild(icon);
  
    setTimeout(() => icon.remove(), 4000);
  }
  
  // Create a music icon every second
  setInterval(createMusicIcon, 1000);
  //create a box
  function showQuoteBox(){
    const quoteBox = document.createElement('div');
    quoteBox.classList.add('quote-box');
    quoteBox.innerText = getRandomQuote();
    document.body.appendChild(quoteBox);
    quoteBox.style.position = 'absolute';
  const startX = Math.random() * window.innerWidth;
  const endX = startX + ( 200 - 100);
  const startY = window.innerHeight - 100;  // Start from the bottom of the page
  const endY = startY - 200 - Math.random() * 200;
  quoteBox.style.left = `${startX}px`;
  quoteBox.style.top = `${startY}px`;

  // Animation for the quote moving upwards
  quoteBox.animate([
    { transform: `translate(0, 0)`, opacity: 1 },
    { transform: `translate(${endX - startX}px, ${endY - startY}px)`, opacity: 1 }
  ], {
    duration: 6000,
    easing: 'linear',
    fill: 'forwards'
  });
    setTimeout(() => quoteBox.remove(), 5000);
  }
  function getRandomQuote(){
    const quotes = [
    "nunca pierdas la fe",
    "mira adelante,Solo adelante, no mires atrás",
    "Cree en ti, incluso cuando nadie más lo haga",
    "Cada día es una nueva oportunidad",
    "Tú puedes con esto y más",
    "El fracaso es parte del camino al éxito",
    "Sé fuerte. Todo mejora con el tiempo",
    "No te rindas, lo mejor está por venir",
    "Hoy es un buen día para comenzar de nuevo",
    "No estás solo",
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
  const listContainer = document.getElementById("list-container");
  const inputBox = document.getElementById("input-box");
  function addTask(){
    if(inputBox.value === '')
    {
        alert("por favor, introduzca algunos datos");
    }else{
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;
      listContainer.appendChild(li);
    }
    showQuoteBox();
  inputBox.value = "";
  saveTask();
  }
  listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        // Toggle checked state
        const isChecked = e.target.classList.toggle("checked");
        
        // If it was just unchecked (second click), remove it
        if (!isChecked) {
            
            // Animate removal
            e.target.style.transform = 'translateX(100%)';
            e.target.style.opacity = '0';
            
            // Remove after animation completes
            setTimeout(() => {
                e.target.remove();
                saveTask();
            }, 300);
        } else {
            showQuoteBox();
            saveTask();
        }
    }
});
  function saveTask(){
    localStorage.setItem("myTask",listContainer.innerHTML);
  }
  function showTask(){
    listContainer.innerHTML = localStorage.getItem("myTask");
  }
  showTask();

