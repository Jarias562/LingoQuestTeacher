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
  {grade:"1", title:"Elfin 1 — Let’s Start! — Verbs in the classroom", type:"Teacher’s Guide · contenido verificado", icon:"📘", desc:"Lección sobre verbos frecuentes en el aula y presentación del alumno y del maestro.", tags:["Grammar","Writing","Teacher’s Script"], details:{outcomes:["Comprender verbos frecuentes usados en el aula.","Presentarse y presentar al maestro."],focus:"Grammar, Writing",vocabulary:["read","ask","speak","listen","write","friends"],materials:["Student Book","Worksheet 0-3"],steps:["Warm-up (5 min): repasar la lección anterior e introducir el objetivo.","Extension activity: jugar Simon Says con read, ask, speak, listen y write.","Worksheet 0-3 (10 min): completar ejercicios con los verbos.","Let’s Write (10 min): dibujarse con el maestro y completar los nombres.","Closing (5 min): revisar el trabajo y anticipar Unit 1 — Farm Animals."],script:["Let’s play Simon Says!","Look at the pictures on the worksheet.","Draw yourself and your teacher in the box.","Let’s check our answers!"]}},
  {grade:"1", title:"Elfin 1 — Unit 1: Farm Animals", type:"Teacher’s Guide · contenido verificado", icon:"🐄", desc:"Animales de granja; saludos básicos, plurales con -s y estructuras There is / There are.", tags:["Unit 1","Vocabulary","Listening"], details:{outcomes:["Leer y escribir nombres de distintos animales de granja."],focus:"Listening, Speaking, Vocabulary",vocabulary:["farm","animals","bull","cow","cat","dog","duck","rooster","hen","sheep","donkey"],grammar:["Plural nouns with -s","There is…","There are…"],materials:["Student Book","Audio CD / audio tracks","Worksheet 1-1","Elfin flashcards (optional)"],steps:["Warm-up (5 min): preguntar qué es una granja y qué animales hay allí.","Look and Learn: presentar los nombres de los animales con las imágenes.","Listen and Point: escuchar y señalar las imágenes.","Let’s Do It!: escuchar, trazar y relacionar las palabras.","Closing: repasar vocabulario y comprobar las respuestas."]}},
  {grade:"5", title:"Elfin 5 — Reading to Learn: How Plants Grow From Seeds", type:"Teacher’s Guide · contenido verificado", icon:"🌱", desc:"Ciclo de vida de las plantas y vocabulario para describir sus etapas.", tags:["Reading","Listening","Vocabulary"], details:{outcomes:["Aprender el ciclo de vida de una planta.","Comprender la importancia de las plantas.","Usar estrategias para ampliar el vocabulario."],focus:"Reading, Listening, Speaking, Vocabulary",vocabulary:["seeds","warmth","seedlings","adult","cycle","roots","leaves","flowers","fruit"],materials:["Student Book","Audio CD / tracks","Vocabulary notebook"],steps:["Warm-up: repasar lo visto previamente y presentar el tema.","Leer y escuchar los pasajes sobre cómo crecen las plantas.","Comentar qué necesitan las semillas para crecer.","Completar el cuaderno de vocabulario con palabras nuevas.","Closing: asignar repaso de la lectura y vocabulario."]}},
  {grade:"5", title:"Elfin 5 — Reading to Learn: Plants Are Important", type:"Teacher’s Guide · contenido verificado", icon:"🌿", desc:"Lectura sobre los beneficios de las plantas, el oxígeno y la salud del suelo.", tags:["Reading","Comprehension","Speaking"], details:{outcomes:["Comprender por qué las plantas son importantes para las personas y el entorno."],focus:"Reading, Listening, Speaking, Vocabulary",vocabulary:["plants","oxygen","soil","healthy","important"],materials:["Student Book","Audio CD / tracks","Vocabulary notebook"],steps:["Leer el pasaje y comprobar la comprensión.","Responder la pregunta del libro: Why are plants important?","Registrar palabras desconocidas en el cuaderno de vocabulario.","Releer o escuchar el texto y practicar la lectura en voz alta."]}},
  {grade:"5", title:"Elfin 5 — Unit 6: Greek Myths", type:"Teacher’s Guide · contenido verificado", icon:"🏛️", desc:"Introducción a los mitos griegos, sus dioses y diosas y la explicación de fenómenos naturales.", tags:["Unit 6","Reading","Culture"], details:{outcomes:["Aprender vocabulario relacionado con los mitos griegos.","Leer y aprender sobre mitos.","Discutir y escribir un final para un mito."],focus:"Reading, Listening, Speaking, Vocabulary",vocabulary:["goddesses","gods","human","lightning","power","siblings","ancient","curious","events","imaginary"],materials:["Student Book","Audio CD","Vocabulary notebook"],steps:["Introducir vocabulario y conocimientos previos sobre mitos.","Leer el texto y escuchar el audio correspondiente.","Conversar sobre cómo los antiguos griegos explicaban los fenómenos naturales.","Realizar las actividades de comprensión y discusión de la unidad."]}},
  {grade:"2", title:"Elfin 2 — Catálogo por indexar", type:"Pendiente de verificación", icon:"📂", desc:"Añadiremos unidades y lecciones después de revisar la guía original.", tags:["Pendiente"]},
  {grade:"3", title:"Elfin 3 — Catálogo por verificar", type:"Pendiente de verificación", icon:"📂", desc:"Los temas preliminares anteriores aún deben contrastarse con el Teacher’s Guide original.", tags:["Pendiente"]},
  {grade:"4", title:"Elfin 4 — Catálogo por verificar", type:"Pendiente de verificación", icon:"📂", desc:"Los temas preliminares anteriores aún deben contrastarse con el Teacher’s Guide original.", tags:["Pendiente"]},
  {grade:"6", title:"Elfin 6 — Catálogo por indexar", type:"Pendiente de verificación", icon:"📂", desc:"Añadiremos unidades y lecciones después de revisar la guía original.", tags:["Pendiente"]}
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
  const filtered = resources.filter(r => (grade === "all" || r.grade === grade) && `${r.title} ${r.type} ${r.desc} ${r.tags.join(" ")} ${r.details ? JSON.stringify(r.details) : ""}`.toLowerCase().includes(q));
  $("libraryGrid").innerHTML = filtered.length ? filtered.map((r,i) => `
    <article class="resource-card"><div class="resource-head"><div class="resource-icon">${r.icon}</div><div><h3>${r.title}</h3><span class="muted">Grado ${r.grade} · ${r.type}</span></div></div>
    <p>${r.desc}</p><div class="tag-row">${r.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div>
    ${r.details ? `<button class="small-button detail-toggle" data-resource="${i}">Ver contenido de la guía ↓</button><div class="resource-detail hidden" id="resourceDetail${i}">
      ${r.details.outcomes ? `<h4>Objetivos de aprendizaje</h4><ul>${r.details.outcomes.map(x=>`<li>${x}</li>`).join("")}</ul>` : ""}
      ${r.details.focus ? `<p><strong>Enfoque:</strong> ${r.details.focus}</p>` : ""}
      ${r.details.vocabulary ? `<h4>Vocabulario</h4><p>${r.details.vocabulary.join(", ")}</p>` : ""}
      ${r.details.grammar ? `<h4>Estructuras</h4><p>${r.details.grammar.join(", ")}</p>` : ""}
      ${r.details.materials ? `<h4>Materiales</h4><ul>${r.details.materials.map(x=>`<li>${x}</li>`).join("")}</ul>` : ""}
      ${r.details.steps ? `<h4>Secuencia de la lección</h4><ol>${r.details.steps.map(x=>`<li>${x}</li>`).join("")}</ol>` : ""}
      ${r.details.script ? `<h4>Teacher’s Script — ejemplos</h4><ul>${r.details.script.map(x=>`<li>${x}</li>`).join("")}</ul>` : ""}
    </div>` : ""}
    <button class="small-button use-resource" data-grade="${r.grade}" data-title="${r.title.replaceAll('"','&quot;')}">Usar en una planeación →</button></article>`).join("") : `<p class="muted">No hay resultados para este filtro.</p>`;
  document.querySelectorAll(".use-resource").forEach(btn => btn.addEventListener("click", () => {
    $("gradeSelect").value = btn.dataset.grade;
    $("unitInput").value = btn.dataset.title;
    $("topicInput").value = btn.dataset.title;
    showView("planner");
  }));
  document.querySelectorAll(".detail-toggle").forEach(btn => btn.addEventListener("click", () => {
    const panel = $(`resourceDetail${btn.dataset.resource}`);
    panel.classList.toggle("hidden");
    btn.textContent = panel.classList.contains("hidden") ? "Ver contenido de la guía ↓" : "Ocultar contenido ↑";
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
