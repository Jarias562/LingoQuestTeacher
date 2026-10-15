const gradeInfo = [
  {id:"1", name:"1.º de primaria", book:"Elfin 1", icon:"🌱", color:"#e8f8ef", status:"Completed", desc:"Catálogo de lecciones organizado; visor de guía disponible."},
  {id:"2", name:"2.º de primaria", book:"Elfin 2", icon:"🧩", color:"#efedff", status:"In Progress", desc:"En proceso de verificar unidades, páginas y actividades."},
  {id:"3", name:"3.º de primaria", book:"Elfin 3", icon:"🚀", color:"#e6f6ff", status:"In Progress", desc:"En proceso de verificar unidades, páginas y actividades."},
  {id:"4", name:"4.º de primaria", book:"Elfin 4", icon:"🧭", color:"#fff3dc", status:"In Progress", desc:"En proceso de verificar unidades, páginas y actividades."},
  {id:"5", name:"5.º de primaria", book:"Elfin 5", icon:"🏆", color:"#ffeaf0", status:"In Progress", desc:"Falta completar y verificar el catálogo con el Teacher’s Guide."},
  {id:"6", name:"6.º de primaria", book:"Elfin 6", icon:"🎓", color:"#e9efff", status:"In Progress", desc:"Falta completar y verificar el catálogo con el Teacher’s Guide."}
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

const preliminaryLessons = [{"grade":"1","unit":"Let’s Start!","pages":"6–7","topic":"Alphabet and classroom language","outcomes":["Master the alphabet with “The Alphabet Song.”","Master writing the alphabet."],"focus":"Listening, Speaking, Vocabulary","vocab":["alphabet","letters","vowels","consonants"],"materials":["Student Book","Audio CD / Track 01","CD player","Worksheet 0-1","Elfin flashcards (optional)"],"sequence":[["Warm-up","5 minutes","Ask students if they know the alphabet; invite them to recite it; introduce the lesson."],["Look and Learn","5 minutes","Use page 6. Ask students to recognize, say, and point to the letters."],["Listen and Point","5 minutes","Play Track 01. Students follow the letters, point, and repeat; sing the alphabet song."],["Let’s Do It!","15 minutes","Use page 7. Students identify pictures and trace letters, following arrow direction and order."],["Worksheet 0-1","10 minutes","Explain vowels and consonants. Students color words beginning with vowels red and consonants blue; check answers."]],"script":["Do you know your alphabet?","Let’s say the alphabet together.","Today, we will learn about the alphabet.","Can you recognize all the letters?","Listen to the CD and look at the letters.","Trace over the letters."]},{"grade":"2","unit":"Weather","pages":"6–7","topic":"Weather vocabulary and expressions","outcomes":["Learn words relating to weather and use them correctly."],"focus":"Listening, Vocabulary","vocab":["weather","sunny","rainy","cloudy","windy","snowy","stormy","foggy"],"materials":["Student Book","Audio CD","CD player","Stickers","Elfin flashcards (optional)"],"sequence":[["Look and Learn","—","Present the weather vocabulary using the Student Book visuals."],["Let’s Do It!","page 7","Listen, trace, and match the weather expressions and pictures."]],"script":[]},{"grade":"3","unit":"My Toys","pages":"6–7","topic":"Toy vocabulary, reading and invitations","outcomes":["Read and write the names of some toys.","Read and understand a passage about toys in a toy box."],"focus":"Listening, Reading, Vocabulary","vocab":["robot","spaceship","puppet","teddy bear","yo-yo","dollhouse","toy box","share","favorite","doll","car","train set","play"],"materials":["Student Book","Audio CD / Track 01, 02, 03","CD player","English dictionary","Unknown Word List 1","Worksheet 1-1"],"sequence":[["Warm-up","5 minutes","Introduce toys; ask which toys students like and who they play with."],["Let’s Listen A","10 minutes · page 6","Discuss the pictures, play Track 01, check the correct picture, then listen again and repeat."],["Let’s Listen B","10 minutes · page 6","Name and spell the pictured toys; play Track 02 and complete missing letters; repeat each word."],["Let’s Read","15 minutes · page 7","Skim the passage, play Track 03, listen once, then listen again and repeat each sentence."],["Unknown Word List 1","As indicated","Students identify known words, guess unfamiliar meanings, consult a dictionary, complete the table, and check answers."]],"script":["Do you like toys? What toys do you like?","Who do you play your toys with?","Today, we are going to learn the names of some toys. We will also read a passage about toys in a toy box.","Listen to the CD and check the correct picture.","Listen to the passage and repeat after each sentence."]},{"grade":"4","unit":"Music Club","pages":"6–7","topic":"Musical instruments and music clubs","outcomes":["Read and write the names of musical instruments.","Read and understand a passage about music clubs."],"focus":"Listening, Reading, Vocabulary","vocab":["music club","flute","guitar","drums","harmonica","accordion","tambourine","xylophone","leader","beat","gather","practice","member"],"materials":["Student Book","Audio CD / Track 01, 02","CD player","English dictionary","Unknown Word List 1","Worksheet 1-1"],"sequence":[["Warm-up","5 minutes","Introduce the topic of musical instruments."],["Let’s Listen A","— · page 6","Listen and check the correct picture."],["Let’s Listen B","— · page 6","Listen and unscramble letters to form instrument names. Audio tracks 01 and 02 are indicated in the guide."]],"script":[]},{"grade":"5","unit":"Plants","pages":"6–7","topic":"Plants as living things and plant vocabulary","outcomes":["Learn words related to plants.","Read and learn about plants as living things.","Use vocabulary-building strategies to expand word knowledge."],"focus":"Reading, Listening, Speaking, Vocabulary","vocab":["plants","flower","seed","leaves"],"materials":["Student Book","Audio CD","CD player","Vocabulary notebook (page 110)"],"sequence":[["Before reading","—","Introduce the unit about plants and activate prior knowledge."],["Reading to Learn","pages 6–7","Use the unit reading and vocabulary shown in the Student Book. Refer to the Teacher’s Guide for the full sequence."]],"script":[]},{"grade":"6","unit":"Deserts","pages":"6–7","topic":"Deserts: climate, landforms, plants and animals","outcomes":["Learn words related to deserts.","Read and learn about the climate and features of deserts.","Use vocabulary-building strategies to expand word knowledge."],"focus":"Reading, Listening, Speaking, Vocabulary","vocab":["rainfall","climate","lakes","rivers","temperature","hot","cactus","camel","sand","land"],"materials":["Student Book","Audio CD / Track 01","CD player","Vocabulary notebook (page 110)","World map or globe"],"sequence":[["Before You Read","— · page 7","Listen to words related to deserts; the guide lists cactus, camel, hot, land, sand, and temperature."],["Reading to Learn","pages 6–7","Read “What Is a Desert?” and use the map/globe to discuss desert climate and features. Refer to the guide for the complete lesson sequence."]],"script":[]}];

const elfin1UnitNames = ["Let’s Start!","Farm Animals","Numbers and Age","Colors and Clothes","Seven Days","Food","My Body","Classroom","Shapes"];
const fullElfin1Lessons = (window.elfin1CatalogRows || []).map(row => {
  const [unitNo, pageStart, pdfPage, lessonTitle, topic, focus, vocabText, materialsText, stepsText] = row;
  const sequence = (stepsText || "").split(";").filter(Boolean).map(step => {
    const match = step.match(/^(.*?)(?:\|(\d+))?$/);
    const name = (match?.[1] || step).trim();
    const minutes = match?.[2] ? Number(match[2]) : null;
    return [name, minutes ? minutes + " minutes" : "See guide", "See the original instructions and Teacher’s Script on Teacher’s Guide PDF page " + (pdfPage + 1) + "."];
  });
  const duration = sequence.reduce((sum, item) => sum + (parseInt(item[1], 10) || 0), 0);
  return {
    id: "g1-p" + pageStart, grade: "1", unitNo, unit: elfin1UnitNames[unitNo] || "Elfin 1",
    pages: pageStart + "–" + (pageStart + 1), pdfPage, teacherPdfPage: pdfPage + 1, lessonTitle, topic,
    outcomes: [topic], focus: focus || "Not specified in the indexed section",
    vocab: vocabText ? vocabText.split(";").map(x => x.trim()).filter(Boolean) : [],
    materials: materialsText ? materialsText.split(";").map(x => x.trim()).filter(Boolean) : [],
    sequence, script: [], duration: duration || null
  };
});
const fullElfin2to6Lessons = Object.entries(window.elfin2to6Catalog || {}).flatMap(([grade, book]) =>
  book.units.flatMap((unitTitle, unitIndex) => book.offsets.map((offset, lessonIndex) => {
    const unitNo=unitIndex+1, pageStart=6+unitIndex*10+lessonIndex*2;
    const pdfPage=book.starts[unitIndex]+offset, lessonTitle=book.heads[lessonIndex];
    const focus=book.focus[lessonIndex] || "Consulta la página original de la guía";
    const review=lessonIndex===4;
    return {id:"g"+grade+"-p"+pageStart,grade,unitNo,unit:unitTitle,pages:pageStart+"–"+(pageStart+1),pdfPage,teacherPdfPage:pdfPage+1,lessonTitle,topic:review?"Repaso de la unidad "+unitNo+" · "+unitTitle:unitTitle+" — "+lessonTitle,outcomes:[],focus,vocab:[],materials:[],sequence:[["Consultar la página original","Ver guía","Teacher’s Guide: PDF página "+pdfPage+"; revisa objetivos, vocabulario y materiales directamente en la página original."]],script:[],duration:null};
  }))
);
const verifiedLessons = [...fullElfin1Lessons, ...fullElfin2to6Lessons];
function lessonKeyOf(lesson) { return lesson.id || (lesson.grade + "-" + lesson.unit); }

/* Each Teacher's Guide is stored separately in this browser; nothing is published publicly. */
const guidePdfBlobs={},guidePdfUrls={},guidePdfLoads={};
let activePdfMode="book";
function guideStorageKey(grade){return "elfin"+grade+"TeacherGuide";}
function openGuideDb(){return new Promise((resolve,reject)=>{if(!("indexedDB" in window)){reject(new Error("IndexedDB unavailable"));return;}const request=indexedDB.open("LingoQuestTeacherLocalFiles",1);request.onupgradeneeded=()=>{const db=request.result;if(!db.objectStoreNames.contains("pdfs"))db.createObjectStore("pdfs");};request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error||new Error("DB open failed"));});}
async function saveGuidePdfToBrowser(file,grade){const db=await openGuideDb();await new Promise((resolve,reject)=>{const tx=db.transaction("pdfs","readwrite");tx.objectStore("pdfs").put(file,guideStorageKey(grade));tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error||new Error("DB write failed"));});db.close();}
async function readGuidePdfFromBrowser(grade){const db=await openGuideDb();const blob=await new Promise((resolve,reject)=>{const tx=db.transaction("pdfs","readonly");const request=tx.objectStore("pdfs").get(guideStorageKey(grade));request.onsuccess=()=>resolve(request.result||null);request.onerror=()=>reject(request.error||new Error("DB read failed"));});db.close();return blob;}
async function ensureLocalGuideLoaded(grade){if(guidePdfBlobs[grade])return guidePdfBlobs[grade];if(guidePdfLoads[grade])return guidePdfLoads[grade];guidePdfLoads[grade]=readGuidePdfFromBrowser(grade).then(blob=>{if(blob){guidePdfBlobs[grade]=blob;guidePdfUrls[grade]=URL.createObjectURL(blob);}return blob;}).catch(()=>null).finally(()=>{delete guidePdfLoads[grade];});return guidePdfLoads[grade];}
let guidePdfDocumentLoads={};
async function getGuidePdfDocument(grade){
 if(guidePdfDocumentLoads[grade])return guidePdfDocumentLoads[grade];
 const blob=await ensureLocalGuideLoaded(grade);
 if(!blob)throw new Error("No hay un PDF guardado para este grado.");
 if(!window.pdfjsLib)throw new Error("El visor de páginas no se pudo cargar. Usa Abrir PDF completo.");
 guidePdfDocumentLoads[grade]=window.pdfjsLib.getDocument({data:await blob.arrayBuffer()}).promise;
 try{return await guidePdfDocumentLoads[grade];}catch(error){delete guidePdfDocumentLoads[grade];throw error;}
}
async function renderGuidePdfPages(mode){
 activePdfMode=mode;
 const lesson=verifiedLessons.find(x=>lessonKeyOf(x)===activeLessonKey),status=$("guidePdfStatus"),frame=$("guidePdfFrame"),viewer=$("guidePdfPages");
 if(!lesson){status.textContent="Selecciona una lección.";return;}
 const grade=lesson.grade;
 const blob=await ensureLocalGuideLoaded(grade);
 if(!blob){status.textContent="No se encontró el PDF guardado para Elfin "+grade+". Adjunta el Teacher’s Guide desde la pantalla del grado.";viewer.classList.add("hidden");frame.classList.add("hidden");return;}
 try{
  const doc=await getGuidePdfDocument(grade);
  const firstPage=mode==="teacher"?(lesson.teacherPdfPage||lesson.pdfPage):(lesson.pdfPage||1);
  const lastPage=Math.min(doc.numPages,firstPage+1);
  viewer.innerHTML="";
  for(let pageNo=firstPage;pageNo<=lastPage;pageNo++){
   const page=await doc.getPage(pageNo);
   const viewport=page.getViewport({scale:1});
   const scale=Math.min(2,Math.max(1,((viewer.clientWidth||600)-20)/viewport.width));
   const scaled=page.getViewport({scale});
   const card=document.createElement("section");card.className="guide-page-card";
   const heading=document.createElement("div");heading.className="guide-page-heading";heading.textContent="Elfin "+grade+" Teacher’s Guide · Página "+pageNo;
   const canvas=document.createElement("canvas");canvas.className="guide-page-canvas";canvas.width=Math.floor(scaled.width);canvas.height=Math.floor(scaled.height);
   card.append(heading,canvas);viewer.appendChild(card);
   await page.render({canvasContext:canvas.getContext("2d"),viewport:scaled}).promise;
  }
  viewer.classList.remove("hidden");frame.classList.add("hidden");
  $("openGuidePdfBtn").disabled=false;
  status.textContent="Mostrando "+(lastPage-firstPage+1)+" páginas consecutivas del "+(mode==="teacher"?"Lesson Plan / Teacher’s Script":"Teacher’s Guide")+" · Elfin "+grade+" · páginas "+firstPage+"–"+lastPage+".";
 }catch(error){
  viewer.classList.add("hidden");
  status.textContent="No se pudieron dibujar las páginas dentro de la app. Usa “Abrir PDF completo” para ver el archivo en el lector del teléfono.";
 }
}
function showGuidePdfPage(mode){renderGuidePdfPages(mode);}

$("guidePdfInput").addEventListener("change",async()=>{
 const file=$("guidePdfInput").files&&$("guidePdfInput").files[0];if(!file)return;
 const lesson=verifiedLessons.find(x=>lessonKeyOf(x)===activeLessonKey);if(!lesson)return;
 const signature=await file.slice(0,5).text().catch(()=> "");
 if(!file.name.toLowerCase().endsWith(".pdf")&&signature!=="%PDF-"){$("guidePdfStatus").textContent="Selecciona un PDF válido de Elfin "+lesson.grade+" Teacher’s Guide.";return;}
 try{await saveGuidePdfToBrowser(file,lesson.grade);if(guidePdfUrls[lesson.grade])URL.revokeObjectURL(guidePdfUrls[lesson.grade]);guidePdfBlobs[lesson.grade]=file;guidePdfUrls[lesson.grade]=URL.createObjectURL(file);$("guidePdfStatus").textContent="Elfin "+lesson.grade+" Teacher’s Guide guardado localmente. Ya puedes abrir sus páginas.";showGuidePdfPage(activePdfMode);}
 catch(error){$("guidePdfStatus").textContent="No se pudo guardar el PDF en este navegador. Selecciónalo de nuevo e inténtalo otra vez.";}
});
$("openGuidePdfBtn").addEventListener("click",()=>{const lesson=verifiedLessons.find(x=>lessonKeyOf(x)===activeLessonKey);if(!lesson)return;const url=guidePdfUrls[lesson.grade];if(url)window.open(url+"#page="+Math.max(0,(activePdfMode==="teacher"?lesson.teacherPdfPage:lesson.pdfPage)-1),"_blank");});
$("showBookPdfBtn").addEventListener("click",()=>showGuidePdfPage("book"));
$("showTeacherPdfBtn").addEventListener("click",()=>showGuidePdfPage("teacher"));
const lessonProgressKey = "lqtLessonProgressV1";
function readProgress(){try{return JSON.parse(localStorage.getItem(lessonProgressKey)||"{}")}catch(e){return {}}}
function saveProgress(p){localStorage.setItem(lessonProgressKey,JSON.stringify(p))}

async function refreshGradeGuideStatus(grade){
 const blob=await ensureLocalGuideLoaded(grade);const status=$("hubGuideUploadStatus");if($("hubGrade").value!==grade)return;
 status.textContent=blob?"PDF guardado para Elfin "+grade+" en este navegador. Abre cualquier lección para ver sus páginas.":"Aún no hay un PDF guardado para Elfin "+grade+".";status.classList.toggle("guide-ready",!!blob);
}
$("hubGuidePdfInput").addEventListener("change",async()=>{
 const file=$("hubGuidePdfInput").files&&$("hubGuidePdfInput").files[0];if(!file)return;const grade=$("hubGrade").value;
 const signature=await file.slice(0,5).text().catch(()=> "");
 if(!file.name.toLowerCase().endsWith(".pdf")&&signature!=="%PDF-"){$("hubGuideUploadStatus").textContent="Selecciona un archivo PDF válido.";return;}
 try{await saveGuidePdfToBrowser(file,grade);if(guidePdfUrls[grade])URL.revokeObjectURL(guidePdfUrls[grade]);guidePdfBlobs[grade]=file;guidePdfUrls[grade]=URL.createObjectURL(file);$("hubGuideUploadStatus").textContent="Listo: Teacher’s Guide de Elfin "+grade+" guardado en este navegador.";$("hubGuideUploadStatus").classList.add("guide-ready");}
 catch(error){$("hubGuideUploadStatus").textContent="No se pudo guardar el PDF. Intenta seleccionarlo de nuevo.";}
});

function openGradeHub(grade){
  const g=gradeInfo.find(x=>x.id===grade),items=verifiedLessons.filter(x=>x.grade===grade);
  $("hubTitle").textContent=g ? g.name+" · "+g.book : "Lecciones";
  $("hubSubtitle").textContent="Elige una unidad y una lección. Adjunta el Teacher’s Guide de este grado para abrir las páginas originales desde la aplicación.";
  $("hubGuideUploadTitle").textContent="Adjuntar Teacher’s Guide de Elfin "+grade;
  $("hubGuideUploadNote").textContent="Selecciona el PDF de Elfin "+grade+" una sola vez. Se guarda en este navegador, separado de los demás grados, y no se publica en GitHub.";
  $("hubGuidePdfInput").value="";
  $("hubCatalogCount").innerHTML="<strong>"+items.length+" referencias de lección</strong> · "+(grade==="1"?"Catálogo de Elfin 1":"Catálogo inicial de Elfin "+grade)+"; la ficha detallada debe verificarse con el PDF original.";
  refreshGradeGuideStatus(grade);
  $("hubGrade").value=grade;
  const filter=$("hubUnitFilter"),choices=new Map();
  items.forEach(item=>{const value=String(item.unitNo===undefined?item.unit:item.unitNo);const label=item.unitNo===0?"Let’s Start!":(item.unitNo?"Unit "+item.unitNo+" — "+item.unit:item.unit);if(!choices.has(value))choices.set(value,label);});
  filter.innerHTML='<option value="all">Todas las unidades y lecciones</option>'+Array.from(choices.entries()).map(([value,label])=>'<option value="'+escapeHtml(value)+'">'+escapeHtml(label)+'</option>').join("");
  filter.value="all";showView("lessonHub");renderLessonHub();
}
function renderLessonHub(){
 const grade=$("hubGrade").value,filterValue=$("hubUnitFilter").value;
 const items=verifiedLessons.filter(x=>x.grade===grade&&(filterValue==="all"||String(x.unitNo===undefined?x.unit:x.unitNo)===filterValue)),p=readProgress();
 $("lessonHubGrid").innerHTML=items.map(l=>{
  const key=lessonKeyOf(l),status=p[key]||"Pendiente",unitLabel=l.unitNo===0?"Introducción":(l.unitNo?"Unit "+l.unitNo:"Lección"),sourcePages=l.pdfPage?" · guía PDF p. "+l.pdfPage:"";
  return `<article class="resource-card lesson-card">
   <div class="resource-head"><div class="resource-icon">📖</div><div><span class="muted">${escapeHtml(unitLabel)} · Student Book pp. ${escapeHtml(l.pages||"sin indicar")}${escapeHtml(sourcePages)}</span><h3>${escapeHtml(l.lessonTitle||l.unit)}</h3></div></div>
   <p><strong>${escapeHtml(l.topic||"Lección de la guía")}</strong></p>
   <div class="tag-row"><span class="tag">${escapeHtml(l.focus||"Skills por verificar")}</span><span class="tag">${escapeHtml(status)}</span></div>
   <div class="lesson-quick"><p><strong>Objetivo / resumen de la guía</strong></p><ul>${(l.outcomes||[]).map(x=>`<li>${escapeHtml(x)}</li>`).join("")}</ul><p><strong>Materiales</strong></p><p>${(l.materials||[]).map(escapeHtml).join(" · ")||"Consulta la página original del Teacher’s Guide."}</p></div>
   <label class="progress-label">Estado de la lección <select class="lesson-progress" data-key="${escapeHtml(key)}"><option ${status==="Pendiente"?"selected":""}>Pendiente</option><option ${status==="En curso"?"selected":""}>En curso</option><option ${status==="Completada"?"selected":""}>Completada</option></select></label>
   <button class="button button-primary auto-plan" data-lesson="${escapeHtml(key)}" type="button">Abrir guía y planeación →</button>
  </article>`;
 }).join("")||'<p class="muted">No hay lecciones para este filtro.</p>';
 document.querySelectorAll(".lesson-progress").forEach(el=>el.addEventListener("change",()=>{const p=readProgress();p[el.dataset.key]=el.value;saveProgress(p);renderLessonHub()}));
 document.querySelectorAll(".auto-plan").forEach(btn=>btn.addEventListener("click",()=>openLessonDetails(btn.dataset.lesson)));
}


let activeLessonKey = "";
function openLessonDetails(key){
 const l=verifiedLessons.find(x=>lessonKeyOf(x)===key);if(!l)return;
 activeLessonKey=key;
 $("detailTitle").textContent=gradeInfo.find(g=>g.id===l.grade).book+" · "+(l.lessonTitle||l.unit);
 $("detailSubtitle").textContent=l.topic||"Consulta las páginas de la guía docente.";
 $("guidePages").textContent=(l.pages?"Student Book pp. "+l.pages:"Páginas no indicadas")+(l.pdfPage?" · Teacher’s Guide PDF p. "+l.pdfPage:"");
 const list=(title,items)=>items&&items.length?'<h3>'+escapeHtml(title)+'</h3><ul>'+items.map(x=>'<li>'+escapeHtml(x)+'</li>').join("")+'</ul>':"";
 $("guideContent").innerHTML=list("Objetivo / resumen",l.outcomes)+'<h3>Language focus</h3><p>'+escapeHtml(l.focus||"No especificado")+'</p>'+list("Vocabulary",l.vocab)+list("Materials needed for this lesson",l.materials)+'<h3>Lesson Plan — apartados localizados en la guía</h3><ol>'+l.sequence.map(x=>'<li><strong>'+escapeHtml(x[0])+(x[1]&&x[1]!=="—"?' · '+escapeHtml(x[1]):"")+'</strong><p>'+escapeHtml(x[2])+'</p></li>').join("")+'</ol>'+list("Teacher’s Script",l.script);
 $("planPreview").innerHTML='<p><strong>Lección:</strong> '+escapeHtml(l.lessonTitle||l.unit)+' · páginas '+escapeHtml(l.pages||"por verificar")+'</p><p><strong>Objetivo:</strong> '+(l.outcomes||[]).map(escapeHtml).join(" ")+'</p><p><strong>Enfoque:</strong> '+escapeHtml(l.focus||"No especificado")+'</p><p><strong>Vocabulario:</strong> '+(l.vocab||[]).map(escapeHtml).join(", ")+'</p><p><strong>Materiales:</strong> '+(l.materials||[]).map(escapeHtml).join(", ")+'</p><ol>'+l.sequence.map(x=>'<li><strong>'+escapeHtml(x[0])+(x[1]&&x[1]!=="—"?' ('+x[1]+')':"")+'</strong><p>'+escapeHtml(x[2])+'</p></li>').join("")+'</ol>';
 const extras=[{title:"Repaso oral por turnos",desc:"Complementaria · 5 minutos",steps:"Practicar por turnos usando el objetivo y vocabulario de esta lección."},{title:"Práctica en parejas",desc:"Complementaria · 5–10 minutos",steps:"En parejas, practicar la habilidad objetivo mientras el maestro observa y registra apoyos necesarios."},{title:"Exit ticket",desc:"Complementaria · 3 minutos",steps:"Cada alumno demuestra individualmente una palabra o habilidad del objetivo."}];
 $("extraActivities").innerHTML=extras.map(x=>'<article class="extra-activity"><strong>'+x.title+'</strong><span class="tag">'+x.desc+'</span><p>'+x.steps+'</p></article>').join("");
 document.querySelectorAll(".lesson-tab").forEach(b=>b.classList.toggle("active",b.dataset.tab==="guidePanel"));
 document.querySelectorAll(".lesson-tab-panel").forEach(p=>p.classList.toggle("hidden",p.id!=="guidePanel"));
 $("guidePdfInput").value="";
 const fileLabel=$("guidePdfInput").previousElementSibling.querySelector("strong");
 const fileNote=$("guidePdfInput").previousElementSibling.querySelector("span");
 fileLabel.textContent="Abrir Elfin "+l.grade+" Teacher’s Guide";
 fileNote.textContent="Selecciona el PDF de Elfin "+l.grade+". Se guarda solo en este navegador, no se publica en GitHub.";
 $("guidePdfFrame").classList.add("hidden");$("guidePdfPages").classList.add("hidden");
 showView("lessonDetail");ensureLocalGuideLoaded(l.grade).then(()=>showGuidePdfPage("book")).catch(()=>{});
}
document.querySelectorAll(".lesson-tab").forEach(btn=>btn.addEventListener("click",()=>{
 document.querySelectorAll(".lesson-tab").forEach(b=>b.classList.toggle("active",b===btn));
 document.querySelectorAll(".lesson-tab-panel").forEach(p=>p.classList.toggle("hidden",p.id!==btn.dataset.tab));
}));
$("backToLessons").addEventListener("click",()=>showView("lessonHub"));
$("generatePlanFromDetail").addEventListener("click",()=>autoGeneratePlan(activeLessonKey));



function autoGeneratePlan(key){
 const l=verifiedLessons.find(x=>lessonKeyOf(x)===key);if(!l)return;
 $("gradeSelect").value=l.grade;$("unitInput").value=l.unit+" — pp. "+(l.pages||"ver guía");$("topicInput").value=(l.lessonTitle?l.lessonTitle+". ":"")+(l.topic||l.unit);
 $("objectiveInput").value=(l.outcomes||[]).map((x,i)=>(i+1)+". "+x).join("\n");
 $("vocabInput").value=(l.vocab||[]).join(", ");$("materialsInput").value=(l.materials||[]).join("\n");
 $("warmupInput").value=l.sequence.find(x=>/warm-up/i.test(x[0]))?.slice(1).join(": ")||"Revisar el warm-up en la página del Teacher’s Guide indicada en la ficha.";
 $("presentInput").value=l.sequence.filter(x=>/look and learn|before reading|before you read|let’s listen|listen and point/i.test(x[0])).map(x=>x[0]+": "+x[2]).join("\n")||"Consultar la página original indicada del Teacher’s Guide.";
 $("gameInput").value=l.sequence.filter(x=>/game|activity|do it|chant|speak/i.test(x[0])).map(x=>x[0]+": "+x[2]).join("\n")||"Consultar las actividades indicadas en la guía original.";
 $("practiceInput").value=l.sequence.map(x=>x[0]+(x[1]&&x[1]!=="—"?" ("+x[1]+")":"")+": "+x[2]).join("\n");
 $("exitInput").value="Actividad complementaria sugerida: pedir a cada alumno demostrar un objetivo de la lección.";
 $("closingInput").value=l.sequence.filter(x=>/closing/i.test(x[0])).map(x=>x[0]+": "+x[2]).join("\n")||"Cerrar según las indicaciones del Teacher’s Guide.";
 $("assessmentInput").value="Observar el logro del objetivo de la guía: "+(l.outcomes||[]).join(" ");
 $("notesInput").value="Fuente: "+gradeInfo.find(g=>g.id===l.grade).book+" Teacher’s Guide. Student Book pp. "+(l.pages||"no indicadas")+". PDF físico p. "+(l.pdfPage||"no indexada")+"; Lesson Plan / Teacher’s Script en PDF p. "+(l.teacherPdfPage||"consultar guía")+". Abre las páginas escaneadas desde Guía original después de cargar tu PDF en este navegador.";
 const duration=l.duration?l.duration+" minutos":"50 minutos",select=$("durationSelect");if(!Array.from(select.options).some(o=>o.value===duration)){const option=document.createElement("option");option.value=duration;option.textContent=duration;select.add(option);}select.value=duration;
 $("saveMessage").textContent="Planeación generada desde el catálogo del Teacher’s Guide. Las actividades adicionales están identificadas como complementarias.";
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
