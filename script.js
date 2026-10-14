const gameNames = [
  "Molah","Fire Kirin","High Streak","Panda Master","Vegas Sweep","Blue Dragon",
  "Mega Spin","Sirius Slot","Ding Ding","Cash Master","Game Vault 2","Golden Treasure",
  "River Pay","Thunder","Cash Frenzy","Cash Machine","VLink","Ultra Panda",
  "E Game","Ace Book","Orion Stars","Milky Way","Juwa","Lucky Star",
  "Game Room","River Sweeps","Casino Ignite","Yolo 777","Mafia","Vega X",
  "Golden Dragon","Lucky Clover","Dragon Fortune"
];
const icons = ["🎰","🔥","⚡","🐼","🎲","🐉","💎","🌌","🔔","💰","🏆","👑","🌊","⛈️","🪙","💵","🎮","🐼","🕹️","🃏","⭐","🌠","🍀","✨","🎯","🌊","🔥","🎰","♠️","🎲","🐲","🍀","🐉"];
const games = document.getElementById("games");
const search = document.getElementById("search");
const empty = document.getElementById("empty");
function render(term=""){
  const filtered = gameNames.map((name,i)=>({name,icon:icons[i]})).filter(g=>g.name.toLowerCase().includes(term.toLowerCase()));
  games.innerHTML = filtered.map(g=>`<article class="game-card"><div class="game-icon" aria-hidden="true">${g.icon}</div><h3>${g.name}</h3><a class="play" href="#" data-game="${g.name.replaceAll('"','&quot;')}">PLAY NOW ↗</a></article>`).join("");
  document.getElementById("gameCount").textContent = `${filtered.length} GAME${filtered.length===1?"":"S"}`;
  empty.hidden = filtered.length>0;
}
search.addEventListener("input",e=>render(e.target.value));
games.addEventListener("click",e=>{
  const link=e.target.closest("[data-game]");
  if(!link)return;
  e.preventDefault();
  alert(`"${link.dataset.game}" is a demo button. Add your authorized game URL in script.js to enable launching.`);
});
document.getElementById("supportLink").addEventListener("click",e=>{
  e.preventDefault();
  alert("Add your official customer-support URL or WhatsApp link to index.html.");
});
document.getElementById("year").textContent=new Date().getFullYear();
render();
