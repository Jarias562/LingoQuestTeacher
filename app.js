const gradeInfo = [
  {id:"1", name:"1.º de primaria", book:"Elfin 1", icon:"🌱", color:"#e8f8ef", status:"En organización", desc:"Primer contacto con el inglés."},
  {id:"2", name:"2.º de primaria", book:"Elfin 2", icon:"🧩", color:"#efedff", status:"En organización", desc:"Práctica y ampliación de bases."},
  {id:"3", name:"3.º de primaria", book:"Elfin 3", icon:"🚀", color:"#e6f6ff", status:"En organización", desc:"Vocabulario y comunicación."},
  {id:"4", name:"4.º de primaria", book:"Elfin 4", icon:"🧭", color:"#fff3dc", status:"En organización", desc:"Más gramática y expresión."},
  {id:"5", name:"5.º de primaria", book:"Elfin 5", icon:"🏆", color:"#ffeaf0", status:"Pendiente de verificar", desc:"Catálogo por confirmar con los documentos."},
  {id:"6", name:"6.º de primaria", book:"Elfin 6", icon:"🎓", color:"#e9efff", status:"Pendiente de verificar", desc:"Catálogo por confirmar con los documentos."}
];

// Estos ejemplos provienen de información preliminar del proyecto y deben contrastarse con los archivos originales.
const resources = [
  {grade:"1", title:"Guía del maestro", type:"Teacher's Guide", icon:"📘", desc:"Organización didáctica y orientación de las unidades.", tags:["Guía","Elfin 1"]},
  {grade:"1", title:"Resumen de unidades", type:"Summary", icon:"🗂️", desc:"Mapa de unidades y contenidos por confirmar contra el documento fuente.", tags:["Unidades","Elfin 1"]},
  {grade:"2", title:"Paquete docente", type:"Teacher's Guide + Summary", icon:"📘", desc:"Material de enseñanza para organizar por unidad.", tags:["Guía","Elfin 2"]},
  {grade:"2", title:"Audios y evaluaciones", type:"Audio Script / Question Bank", icon:"🎧", desc:"Registrar las pistas y los bancos de preguntas al indexar los archivos.", tags:["Audio","Evaluación"]},
  {grade:"3", title:"Unit 1 — My Toys", type:"Tema preliminar", icon:"🧸", desc:"Tema citado en el resumen de Elfin 3; verificar detalles en el original.", tags:["Vocabulario","Elfin 3"]},
  {grade:"3", title:"Unit 2 — Three Meals", type:"Tema preliminar", icon:"🍎", desc:"Tema citado en el resumen de Elfin 3; verificar detalles en el original.", tags:["Vocabulario","Elfin 3"]},
  {grade:"3", title:"Unit 3 — Amusement Park", type:"Tema preliminar", icon:"🎡", desc:"Tema citado en el resumen de Elfin 3; verificar detalles en el original.", tags:["Vocabulario","Elfin 3"]},
  {grade:"3", title:"Unit 4 — Moon and Stars", type:"Tema preliminar", icon:"🌙", desc:"Tema citado en el resumen de Elfin 3; verificar detalles en el original.", tags:["Vocabulario","Elfin 3"]},
  {grade:"4", title:"Unit 1 — Music Club", type:"Tema preliminar", icon:"🎵", desc:"Tema citado en el resumen de Elfin 4; verificar detalles en el original.", tags:["Gramática","Elfin 4"]},
  {grade:"4", title:"Unit 2 — My Pets", type:"Tema preliminar", icon:"🐾", desc:"Tema citado en el resumen de Elfin 4; verificar detalles en el original.", tags:["Vocabulario","Elfin 4"]},
  {grade:"4", title:"Unit 3 — My Hero", type:"Tema preliminar", icon:"🦸", desc:"Tema citado en el resumen de Elfin 4; verificar detalles en el original.", tags:["Gramática","Elfin 4"]},
  {grade:"4", title:"Unit 4 — Laura's Garden", type:"Tema preliminar", icon:"🌷", desc:"Tema citado en el resumen de Elfin 4; verificar detalles en el original.", tags:["Vocabulario","Elfin 4"]},
  {grade:"5", title:"Recursos por indexar", type:"Pendiente de verificación", icon:"📂", desc:"Añadir aquí solo después de identificar los archivos originales.", tags:["Pendiente"]},
  {grade:"6", title:"Recursos por indexar", type:"Pendiente de verificación", icon:"📂", desc:"Añadir aquí solo después de identificar los archivos originales.", tags:["Pendiente"]}
];

const activities = [
  {title:"Listen and Point", duration:5, material:"audio", icon:"👂", level:"Todos los grados", desc:"Reproduce o di una palabra. Los alumnos señalan la flashcard correcta.", steps:["Coloca de 4 a 6 tarjetas a la vista.","Di la palabra o reproduce el audio.","Los alumnos señalan; después pide a algunos que repitan la palabra.","Cambia el orden de las tarjetas y repite."]},
  {title:"Teacher Says", duration:5, material:"none", icon:"🙌", level:"Principalmente 1.º–3.º", desc:"Practican instrucciones como stand up, clap, turn around y sit down.", steps:["Modela cada instrucción con un gesto.","Explica que solo deben actuar cuando digas “Teacher says…”.","Aumenta la velocidad poco a poco.","Termina con tres instrucciones que recuerden sin ayuda."]},
  {title:"Pass the Flashcard", duration:10, material:"cards", icon:"🃏", level:"Todos los grados", desc:"Pasan una tarjeta mientras suena música; quien la tiene practica una palabra o frase.", steps:["Forma un círculo o filas seguras.","Pon música a volumen moderado.","Pausa la música y el alumno muestra la tarjeta.","Adapta la respuesta: nombrar, deletrear o usar la palabra en una frase."]},
  {title:"Guess the Sound", duration:10, material:"audio", icon:"🔊", level:"1.º–4.º", desc:"Escuchan un sonido y eligen la imagen o palabra correspondiente.", steps:["Muestra las opciones visuales.","Reproduce un sonido corto.","Da tiempo para pensar y responder por turnos.","Pide al grupo repetir la palabra en inglés."]},
  {title:"Team Challenge", duration:15, material:"cards", icon:"🏅", level:"3.º–6.º", desc:"Equipos clasifican tarjetas o responden preguntas sobre el tema de la unidad.", steps:["Forma equipos y explica las reglas.","Entrega el mismo conjunto de tarjetas a cada equipo.","Pide clasificar, describir o construir frases.","Da puntos por precisión, colaboración y uso del inglés."]},
  {title:"Exit Ticket", duration:5, material:"none", icon:"🎟️", level:"Todos los grados", desc:"Comprobación rápida individual antes de cerrar la clase.", steps:["Elige una palabra, imagen o pregunta del objetivo del día.","Cada alumno responde oralmente, señala o escribe según su nivel.","Registra logrado, en proceso o necesita apoyo.","Usa las respuestas para planear el siguiente repaso."]}
];

const $ = (id) => document.getElementById(id);
function showView(name) {
  document.querySelectorAll(".view").forEach(v => v.classList.add("hidden"));
  $(`${name}View`).classList.remove("hidden");
  document.querySelectorAll(".nav-item").forEach(b => b.classList.toggle("active", b.dataset.view === name));
  window.scrollTo({top:0, behavior:"smooth"});
}
document.querySelectorAll("[data-view]").forEach(btn => btn.addEventListener("click", () => showView(btn.dataset.view)));
document.querySelectorAll("[data-go]").forEach(btn => btn.addEventListener("click", () => showView(btn.dataset.go)));

function renderGrades() {
  $("gradeGrid").innerHTML = gradeInfo.map(g => `
    <button class="grade-card" data-grade="${g.id}" type="button">
      <div class="grade-top"><span class="grade-icon" style="background:${g.color}">${g.icon}</span><span class="status-dot">${g.status}</span></div>
      <h3>${g.name}</h3><p>${g.book} · ${g.desc}</p>
    </button>`).join("");
  document.querySelectorAll("[data-grade]").forEach(btn => btn.addEventListener("click", () => {
    $("gradeSelect").value = btn.dataset.grade;
    $("libraryGradeFilter").value = btn.dataset.grade;
    showView("library");
    renderLibrary();
  }));
}
function renderLibrary() {
  const grade = $("libraryGradeFilter").value;
  const q = $("librarySearch").value.trim().toLowerCase();
  const filtered = resources.filter(r => (grade === "all" || r.grade === grade) && `${r.title} ${r.type} ${r.desc} ${r.tags.join(" ")}`.toLowerCase().includes(q));
  $("libraryGrid").innerHTML = filtered.length ? filtered.map(r => `
    <article class="resource-card"><div class="resource-head"><div class="resource-icon">${r.icon}</div><div><h3>${r.title}</h3><span class="muted">Grado ${r.grade} · ${r.type}</span></div></div>
    <p>${r.desc}</p><div class="tag-row">${r.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div>
    <button class="small-button use-resource" data-grade="${r.grade}" data-title="${r.title.replaceAll('"','&quot;')}">Usar en una planeación →</button></article>`).join("") : `<p class="muted">No hay resultados para este filtro.</p>`;
  document.querySelectorAll(".use-resource").forEach(btn => btn.addEventListener("click", () => {
    $("gradeSelect").value = btn.dataset.grade;
    $("unitInput").value = btn.dataset.title;
    $("topicInput").value = btn.dataset.title;
    showView("planner");
  }));
}
$("libraryGradeFilter").addEventListener("change", renderLibrary);
$("librarySearch").addEventListener("input", renderLibrary);

function renderActivities() {
  const duration = $("activityDuration").value;
  const material = $("activityMaterial").value;
  const filtered = activities.filter(a => (duration === "all" || String(a.duration) === duration) && (material === "all" || a.material === material));
  $("activityGrid").innerHTML = filtered.map((a,i) => `
    <article class="activity-card"><div class="resource-head"><div class="resource-icon">${a.icon}</div><div><span class="activity-meta">${a.duration} min · ${a.level}</span><h3>${a.title}</h3></div></div>
    <p>${a.desc}</p><div class="tag-row"><span class="tag">${a.material === "audio" ? "Celular / bocina" : a.material === "cards" ? "Flashcards" : "Sin materiales"}</span></div>
    <button class="small-button activity-toggle" data-activity="${i}">Ver instrucciones ↓</button><div class="activity-detail hidden" id="activityDetail${i}"><strong>Pasos:</strong><ol>${a.steps.map(s=>`<li>${s}</li>`).join("")}</ol></div></article>`).join("");
  document.querySelectorAll(".activity-toggle").forEach(btn => btn.addEventListener("click", () => {
    const panel = $(`activityDetail${btn.dataset.activity}`);
    panel.classList.toggle("hidden");
    btn.textContent = panel.classList.contains("hidden") ? "Ver instrucciones ↓" : "Ocultar instrucciones ↑";
  }));
}
$("activityDuration").addEventListener("change", renderActivities);
$("activityMaterial").addEventListener("change", renderActivities);

const planFields = ["gradeSelect","unitInput","dateInput","durationSelect","topicInput","objectiveInput","vocabInput","warmupInput","presentInput","gameInput","practiceInput","exitInput","closingInput","materialsInput","assessmentInput","notesInput"];
const storageKey = "lingoquestTeacherPlansV1";
function readPlans(){try{return JSON.parse(localStorage.getItem(storageKey)||"[]")}catch(e){return []}}
function writePlans(plans){localStorage.setItem(storageKey,JSON.stringify(plans))}
function formData(){const data={};planFields.forEach(id=>data[id]=$(id).value);data.id=Date.now().toString();data.createdAt=new Date().toISOString();return data}
function fillForm(plan){planFields.forEach(id=>$(id).value=plan[id]||"");showView("planner");}
function resetForm(){ $("plannerForm").reset(); $("durationSelect").value="50 minutos"; $("warmupInput").value="Saluda en inglés. Usa una canción corta o una rutina oral para activar conocimientos previos."; $("presentInput").value="Presenta de 4 a 8 palabras o una estructura breve con gestos, imágenes y repetición."; $("gameInput").value="Organiza una actividad oral o de movimiento en la que todos tengan turnos para participar."; $("practiceInput").value="Usa la hoja de trabajo del libro o una actividad imprimible relacionada con el objetivo."; $("exitInput").value="Pide a cada alumno señalar, decir o reconocer una palabra o expresión de la clase."; $("closingInput").value="Repasa el objetivo, reconoce el esfuerzo y despide al grupo en inglés."; $("materialsInput").value="Celular, bocina, flashcards y lápices."; $("assessmentInput").value="Registrar: logrado, en proceso o necesita apoyo."; }
$("plannerForm").addEventListener("submit",e=>{e.preventDefault();const plans=readPlans();plans.unshift(formData());writePlans(plans);renderSavedPlans();$("saveMessage").textContent="Planeación guardada en este navegador.";});
$("clearBtn").addEventListener("click",()=>{resetForm();$("saveMessage").textContent="Ficha limpia. Puedes crear una nueva planeación.";});
function renderSavedPlans(){
 const plans=readPlans();$("savedCount").textContent=plans.length;
 if(!plans.length){$("savedPlans").innerHTML='<p class="muted">Todavía no hay planeaciones guardadas.</p>';return;}
 $("savedPlans").innerHTML=plans.map(p=>`<div class="saved-plan"><div><h4>${escapeHtml(p.topicInput||"Planeación sin tema")}</h4><p>${escapeHtml(gradeInfo.find(g=>g.id===p.gradeSelect)?.name||"Grado")} · ${escapeHtml(p.unitInput||"Sin unidad")} · ${escapeHtml(p.dateInput||"Sin fecha")}</p></div><div class="saved-actions"><button class="small-button load-plan" data-id="${p.id}">Abrir</button><button class="small-button delete-plan" data-id="${p.id}">Eliminar</button></div></div>`).join("");
 document.querySelectorAll(".load-plan").forEach(b=>b.addEventListener("click",()=>{const p=readPlans().find(x=>x.id===b.dataset.id);if(p)fillForm(p);}));
 document.querySelectorAll(".delete-plan").forEach(b=>b.addEventListener("click",()=>{writePlans(readPlans().filter(x=>x.id!==b.dataset.id));renderSavedPlans();}));
}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
$("printBtn").addEventListener("click",()=>{showView("planner");window.print();});
renderGrades();renderLibrary();renderActivities();renderSavedPlans();


// Instalación como aplicación web (PWA) y opción para compartir.
let installPromptEvent = null;
const installButton = document.getElementById("installBtn");
const shareButton = document.getElementById("shareBtn");
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPromptEvent = event;
  installButton.hidden = false;
});
installButton?.addEventListener("click", async () => {
  if (!installPromptEvent) {
    alert("En Android, abre esta página en Chrome, toca ⋮ y selecciona ‘Instalar aplicación’ o ‘Añadir a pantalla de inicio’. ");
    return;
  }
  installPromptEvent.prompt();
  await installPromptEvent.userChoice;
  installPromptEvent = null;
  installButton.hidden = true;
});
window.addEventListener("appinstalled", () => {
  installButton.hidden = true;
  installPromptEvent = null;
});
shareButton?.addEventListener("click", async () => {
  const shareData = {title: "LingoQuest Teacher — By Mr. Arias", text: "Prueba LingoQuest Teacher, una herramienta para organizar clases de inglés.", url: window.location.href};
  try {
    if (navigator.share) await navigator.share(shareData);
    else if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(window.location.href);
      alert("¡Enlace copiado! Ya puedes pegarlo en WhatsApp o enviarlo a tus compañeros.");
    } else {
      window.prompt("Copia este enlace para compartir LingoQuest Teacher:", window.location.href);
    }
  } catch (error) { if (error.name !== "AbortError") alert("Puedes compartir este enlace: " + window.location.href); }
});
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
}
