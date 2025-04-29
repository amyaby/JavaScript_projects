
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
    quoteBox.classList = add('quote-box');
    quoteBox.innerText = getRandomQuote();
    document.body.appendChild(quoteBox);
    const sound = new Audio('quote.mp3');
    setTimeout(()=>quoteBox.remove(),5000);
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
    returnquotes[Math.floor(Math.random() * quotes.length)];
  }
  const listContainer = document.getElementById("list-container");
  const inputBox = document.getElementById("input-box");
  function addTask(){
    if(inputBox.value === '')
    {
        alert("por favor, introduzca algunos datos");
    }else

  }
