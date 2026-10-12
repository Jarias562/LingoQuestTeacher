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

const verifiedLessons = [{"grade":"1","unit":"Let’s Start!","pages":"6–7","topic":"Alphabet and classroom language","outcomes":["Master the alphabet with “The Alphabet Song.”","Master writing the alphabet."],"focus":"Listening, Speaking, Vocabulary","vocab":["alphabet","letters","vowels","consonants"],"materials":["Student Book","Audio CD / Track 01","CD player","Worksheet 0-1","Elfin flashcards (optional)"],"sequence":[["Warm-up","5 minutes","Ask students if they know the alphabet; invite them to recite it; introduce the lesson."],["Look and Learn","5 minutes","Use page 6. Ask students to recognize, say, and point to the letters."],["Listen and Point","5 minutes","Play Track 01. Students follow the letters, point, and repeat; sing the alphabet song."],["Let’s Do It!","15 minutes","Use page 7. Students identify pictures and trace letters, following arrow direction and order."],["Worksheet 0-1","10 minutes","Explain vowels and consonants. Students color words beginning with vowels red and consonants blue; check answers."]],"script":["Do you know your alphabet?","Let’s say the alphabet together.","Today, we will learn about the alphabet.","Can you recognize all the letters?","Listen to the CD and look at the letters.","Trace over the letters."]},{"grade":"2","unit":"Weather","pages":"6–7","topic":"Weather vocabulary and expressions","outcomes":["Learn words relating to weather and use them correctly."],"focus":"Listening, Vocabulary","vocab":["weather","sunny","rainy","cloudy","windy","snowy","stormy","foggy"],"materials":["Student Book","Audio CD","CD player","Stickers","Elfin flashcards (optional)"],"sequence":[["Look and Learn","—","Present the weather vocabulary using the Student Book visuals."],["Let’s Do It!","page 7","Listen, trace, and match the weather expressions and pictures."]],"script":[]},{"grade":"3","unit":"My Toys","pages":"6–7","topic":"Toy vocabulary, reading and invitations","outcomes":["Read and write the names of some toys.","Read and understand a passage about toys in a toy box."],"focus":"Listening, Reading, Vocabulary","vocab":["robot","spaceship","puppet","teddy bear","yo-yo","dollhouse","toy box","share","favorite","doll","car","train set","play"],"materials":["Student Book","Audio CD / Track 01, 02, 03","CD player","English dictionary","Unknown Word List 1","Worksheet 1-1"],"sequence":[["Warm-up","5 minutes","Introduce toys; ask which toys students like and who they play with."],["Let’s Listen A","10 minutes · page 6","Discuss the pictures, play Track 01, check the correct picture, then listen again and repeat."],["Let’s Listen B","10 minutes · page 6","Name and spell the pictured toys; play Track 02 and complete missing letters; repeat each word."],["Let’s Read","15 minutes · page 7","Skim the passage, play Track 03, listen once, then listen again and repeat each sentence."],["Unknown Word List 1","As indicated","Students identify known words, guess unfamiliar meanings, consult a dictionary, complete the table, and check answers."]],"script":["Do you like toys? What toys do you like?","Who do you play your toys with?","Today, we are going to learn the names of some toys. We will also read a passage about toys in a toy box.","Listen to the CD and check the correct picture.","Listen to the passage and repeat after each sentence."]},{"grade":"4","unit":"Music Club","pages":"6–7","topic":"Musical instruments and music clubs","outcomes":["Read and write the names of musical instruments.","Read and understand a passage about music clubs."],"focus":"Listening, Reading, Vocabulary","vocab":["music club","flute","guitar","drums","harmonica","accordion","tambourine","xylophone","leader","beat","gather","practice","member"],"materials":["Student Book","Audio CD / Track 01, 02","CD player","English dictionary","Unknown Word List 1","Worksheet 1-1"],"sequence":[["Warm-up","5 minutes","Introduce the topic of musical instruments."],["Let’s Listen A","— · page 6","Listen and check the correct picture."],["Let’s Listen B","— · page 6","Listen and unscramble letters to form instrument names. Audio tracks 01 and 02 are indicated in the guide."]],"script":[]},{"grade":"5","unit":"Plants","pages":"6–7","topic":"Plants as living things and plant vocabulary","outcomes":["Learn words related to plants.","Read and learn about plants as living things.","Use vocabulary-building strategies to expand word knowledge."],"focus":"Reading, Listening, Speaking, Vocabulary","vocab":["plants","flower","seed","leaves"],"materials":["Student Book","Audio CD","CD player","Vocabulary notebook (page 110)"],"sequence":[["Before reading","—","Introduce the unit about plants and activate prior knowledge."],["Reading to Learn","pages 6–7","Use the unit reading and vocabulary shown in the Student Book. Refer to the Teacher’s Guide for the full sequence."]],"script":[]},{"grade":"6","unit":"Deserts","pages":"6–7","topic":"Deserts: climate, landforms, plants and animals","outcomes":["Learn words related to deserts.","Read and learn about the climate and features of deserts.","Use vocabulary-building strategies to expand word knowledge."],"focus":"Reading, Listening, Speaking, Vocabulary","vocab":["rainfall","climate","lakes","rivers","temperature","hot","cactus","camel","sand","land"],"materials":["Student Book","Audio CD / Track 01","CD player","Vocabulary notebook (page 110)","World map or globe"],"sequence":[["Before You Read","— · page 7","Listen to words related to deserts; the guide lists cactus, camel, hot, land, sand, and temperature."],["Reading to Learn","pages 6–7","Read “What Is a Desert?” and use the map/globe to discuss desert climate and features. Refer to the guide for the complete lesson sequence."]],"script":[]}];
const lessonProgressKey = "lqtLessonProgressV1";
function readProgress(){try{return JSON.parse(localStorage.getItem(lessonProgressKey)||"{}")}catch(e){return {}}}
function saveProgress(p){localStorage.setItem(lessonProgressKey,JSON.stringify(p))}
function openGradeHub(grade){
  const g=gradeInfo.find(x=>x.id===grade);
  $("hubTitle").textContent = g ? g.name + " · " + g.book : "Lecciones";
  $("hubSubtitle").textContent = "Lecciones iniciales extraídas de la guía docente. La información no disponible queda señalada para verificación.";
  $("hubGrade").value=grade;
  showView("lessonHub");
  renderLessonHub();
}
function renderLessonHub(){
 const grade=$("hubGrade").value;
 const items=verifiedLessons.filter(x=>x.grade===grade);
 const p=readProgress();
 $("lessonHubGrid").innerHTML=items.map((l)=> {
   const key=l.grade+"-"+l.unit;
   const status=p[key]||"Pendiente";
   return `<article class="resource-card lesson-card">
    <div class="resource-head"><div class="resource-icon">📖</div><div><span class="muted">Unidad 1 · páginas ${l.pages}</span><h3>${escapeHtml(l.unit)}</h3></div></div>
    <p><strong>${escapeHtml(l.topic)}</strong></p>
    <div class="tag-row"><span class="tag">${escapeHtml(l.focus)}</span><span class="tag">${escapeHtml(status)}</span></div>
    <div class="lesson-quick"><p><strong>Objetivos de la guía</strong></p><ul>${l.outcomes.map(x=>`<li>${escapeHtml(x)}</li>`).join("")}</ul><p><strong>Materiales</strong></p><p>${l.materials.map(escapeHtml).join(" · ")}</p></div>
    <label class="progress-label">Estado de la lección <select class="lesson-progress" data-key="${escapeHtml(key)}"><option ${status==="Pendiente"?"selected":""}>Pendiente</option><option ${status==="En curso"?"selected":""}>En curso</option><option ${status==="Completada"?"selected":""}>Completada</option></select></label>
    <button class="button button-primary auto-plan" data-lesson="${escapeHtml(key)}" type="button">Abrir clase y generar planeación →</button>
   </article>`;
 }).join("");
 document.querySelectorAll(".lesson-progress").forEach(el=>el.addEventListener("change",()=>{const p=readProgress();p[el.dataset.key]=el.value;saveProgress(p);renderLessonHub()}));
 document.querySelectorAll(".auto-plan").forEach(btn=>btn.addEventListener("click",()=>autoGeneratePlan(btn.dataset.lesson)));
}
function autoGeneratePlan(key){
 const l=verifiedLessons.find(x=>x.grade+"-"+x.unit===key);if(!l)return;
 $("gradeSelect").value=l.grade;$("unitInput").value=l.unit;$("topicInput").value=l.topic;
 $("objectiveInput").value=l.outcomes.map((x,i)=>(i+1)+". "+x).join("\n");
 $("vocabInput").value=l.vocab.join(", ");$("materialsInput").value=l.materials.join("\n");
 $("warmupInput").value=l.sequence.find(x=>/warm-up/i.test(x[0]))?.slice(1).join(": ")||"No se especifica una actividad de warm-up independiente en el extracto indexado de la guía.";
 $("presentInput").value=l.sequence.filter(x=>/look and learn|before reading|before you read|let’s listen/i.test(x[0])).map(x=>x[0]+": "+x[2]).join("\n")||"Consultar la secuencia completa de la guía docente.";
 $("gameInput").value=l.sequence.filter(x=>/game|activity|do it/i.test(x[0])).map(x=>x[0]+": "+x[2]).join("\n")||"La guía consultada no indica un juego independiente en el extracto indexado.";
 $("practiceInput").value=l.sequence.map(x=>x[0]+(x[1]&&x[1]!=="—"? " ("+x[1]+")":"")+": "+x[2]).join("\n");
 $("exitInput").value="La guía consultada no especifica un exit ticket independiente.";
 $("closingInput").value="Revisar las respuestas y cerrar conforme a las indicaciones completas del Teacher’s Guide.";
 $("assessmentInput").value="Evidencia basada en los objetivos de aprendizaje de la guía: "+l.outcomes.join(" ");
 $("notesInput").value="Fuente: "+gradeInfo.find(g=>g.id===l.grade).book+" Teacher’s Guide. Páginas de la lección: "+l.pages+". Los datos marcados como no especificados deben verificarse en el documento completo.";
 $("durationSelect").value="50 minutos";$("saveMessage").textContent="Planeación generada automáticamente a partir del contenido docente indexado. Verifica los campos señalados como no especificados.";
 showView("planner");
}
function renderGrades() {
  $("gradeGrid").innerHTML = gradeInfo.map(g => `
    <button class="grade-card" data-grade="${g.id}" type="button">
      <div class="grade-top"><span class="grade-icon" style="background:${g.color}">${g.icon}</span><span class="status-dot">${g.status}</span></div>
      <h3>${g.name}</h3><p>${g.book} · ${g.desc}</p>
    </button>`).join("");
  document.querySelectorAll("[data-grade]").forEach(btn => btn.addEventListener("click", () => {
    openGradeHub(btn.dataset.grade);
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
