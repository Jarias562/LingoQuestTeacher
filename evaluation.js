/* LingoQuest Teacher — local attendance and assessment module */
(() => {
 const $ = id => document.getElementById(id);
 const key = "lingoquestTeacherEvaluationV1";
 const fields = {
  unitActivities:"Actividades completadas", unitParticipation:"Participación en inglés",
  unitVocabulary:"Comprensión del vocabulario", unitGrammar:"Comprensión de estructuras", unitTasks:"Tareas y materiales"
 };
 const read = () => { try { return JSON.parse(localStorage.getItem(key)) || {rosters:{},daily:[],units:[]}; } catch(e) { return {rosters:{},daily:[],units:[]}; } };
 const write = data => localStorage.setItem(key, JSON.stringify(data));
 const roster = grade => read().rosters[grade] || [];
 const recordKey = () => [ $("evalGrade").value, $("evalGroup").value.trim(), $("evalDate").value ].join("|");
 const esc = s => String(s ?? "").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;',"'":"&#39;"}[c]));
 function renderRows(){
  const saved=read().daily.find(r=>r.key===recordKey());
  $("evalStudentRows").innerHTML=roster($("evalGrade").value).map((name,i)=>{
   const s=saved?.students?.[name]||{};
   const select=(field,opts)=>'<select data-student="'+esc(name)+'" data-field="'+field+'"><option value="">—</option>'+opts.map(v=>'<option '+(s[field]===v?'selected':'')+'>'+v+'</option>').join("")+'</select>';
   return '<tr><td>'+(i+1)+'</td><td class="eval-student-name">'+esc(name)+'</td><td>'+select("attendance",["Asistió","Faltó"])+'</td><td>'+select("work",["Sí","Parcialmente","No"])+'</td><td>'+select("support",["Ninguno","Algunas veces","Constante"])+'</td><td>'+select("level",["Logrado","En proceso","Necesita apoyo"])+'</td></tr>';
  }).join("") || '<tr><td colspan="6">Agrega los nombres con el botón “Editar lista de alumnos”.</td></tr>';
  $("evalClassNotes").value=saved?.notes||"";
 }
 function rowData(){const students={};document.querySelectorAll("#evalStudentRows select").forEach(el=>{students[el.dataset.student]??={};students[el.dataset.student][el.dataset.field]=el.value;});return students;}
 function loadUnit(){
  const d=read(),r=d.units.find(x=>x.grade===$("evalGrade").value&&x.group===$("evalGroup").value.trim()&&x.unit===$("evalUnit").value.trim());
  Object.keys(fields).forEach(id=>$(id).value=r?.indicators?.[id]||"");$("unitNotes").value=r?.notes||"";
 }
 function saveDay(){
  if(!$("evalDate").value){$("evalStatus").textContent="Selecciona la fecha de clase.";return;}
  const d=read(),entry={key:recordKey(),grade:$("evalGrade").value,group:$("evalGroup").value.trim(),date:$("evalDate").value,unit:$("evalUnit").value.trim(),students:rowData(),notes:$("evalClassNotes").value};
  d.daily=d.daily.filter(x=>x.key!==entry.key);d.daily.push(entry);write(d);$("evalStatus").textContent="Registro diario guardado en este dispositivo.";renderRows();
 }
 function saveUnit(){
  const unit=$("evalUnit").value.trim();if(!unit){$("evalStatus").textContent="Escribe el nombre de la unidad.";return;}
  const d=read(),entry={grade:$("evalGrade").value,group:$("evalGroup").value.trim(),unit,indicators:{},notes:$("unitNotes").value};
  Object.keys(fields).forEach(id=>entry.indicators[id]=$(id).value);
  d.units=d.units.filter(x=>!(x.grade===entry.grade&&x.group===entry.group&&x.unit===unit));d.units.push(entry);write(d);$("evalStatus").textContent="Indicadores de la unidad guardados localmente.";
 }
 function report(){
  const d=read(),grade=$("evalGrade").value,group=$("evalGroup").value.trim(),from=$("evalFrom").value,to=$("evalTo").value,students=roster(grade);
  const days=d.daily.filter(r=>r.grade===grade&&r.group===group&&(!from||r.date>=from)&&(!to||r.date<=to)).sort((a,b)=>a.date.localeCompare(b.date));
  const units=d.units.filter(r=>r.grade===grade&&r.group===group);
  const counts=name=>{let present=0,absent=0,worked=0,partial=0,no=0,support=0,levels={};days.forEach(r=>{const s=r.students[name]||{};if(s.attendance==="Asistió")present++;if(s.attendance==="Faltó")absent++;if(s.work==="Sí")worked++;if(s.work==="Parcialmente")partial++;if(s.work==="No")no++;if(["Algunas veces","Constante"].includes(s.support)||s.level==="Necesita apoyo")support++;});return {present,absent,worked,partial,no,support};};
  $("evalReportPreview").innerHTML='<div class="print-report"><h2>Primaria Rosario Castellanos</h2><h3>Reporte de asistencia y evaluación de inglés</h3><p><b>Turno:</b> Matutino · <b>Grado:</b> '+grade+'º · <b>Grupo:</b> '+esc(group)+' · <b>Periodo:</b> '+esc(from||"No indicado")+' a '+esc(to||"No indicado")+'</p><p><b>Clases registradas:</b> '+days.length+' &nbsp; <b>Indicadores por unidad:</b> '+units.length+'</p><div class="evaluation-table-wrap"><table class="evaluation-table"><thead><tr><th>Alumno</th><th>Asistencias</th><th>Faltas</th><th>Trabajó</th><th>Parcial</th><th>No trabajó</th><th>Apoyo</th></tr></thead><tbody>'+students.map(n=>{const c=counts(n);return '<tr><td>'+esc(n)+'</td><td>'+c.present+'</td><td>'+c.absent+'</td><td>'+c.worked+'</td><td>'+c.partial+'</td><td>'+c.no+'</td><td>'+c.support+'</td></tr>';}).join("")+'</tbody></table></div><h4>Indicadores por unidad</h4>'+(units.length?'<div class="evaluation-table-wrap"><table class="evaluation-table"><thead><tr><th>Unidad</th>'+Object.values(fields).map(esc).map(x=>'<th>'+x+'</th>').join("")+'<th>Observaciones</th></tr></thead><tbody>'+units.map(u=>'<tr><td>'+esc(u.unit)+'</td>'+Object.keys(fields).map(id=>'<td>'+esc(u.indicators[id]||"Sin evaluar")+'</td>').join("")+'<td>'+esc(u.notes||"")+'</td></tr>').join("")+'</tbody></table></div>':'<p>Sin indicadores de unidad guardados.</p>')+'<p class="muted">Los días sin registro no se cuentan como faltas. Datos guardados localmente en este dispositivo.</p><p class="report-signature">Docente: Mr. Arias ____________________ &nbsp;&nbsp; Dirección: ____________________</p></div>';
  $("evalStatus").textContent="Reporte preparado. No se envía automáticamente a nadie.";
 }
 function exportBackup(){const a=document.createElement("a"),url=URL.createObjectURL(new Blob([JSON.stringify(read(),null,2)],{type:"application/json"}));a.href=url;a.download="LingoQuestTeacher-respaldo-evaluacion.json";a.click();URL.revokeObjectURL(url);}
 function init(){
  const today=new Date(),date=new Date(today.getTime()-today.getTimezoneOffset()*60000).toISOString().slice(0,10);$("evalDate").value=date;$("evalFrom").value=date.slice(0,4)+"-01-01";$("evalTo").value=date;
  $("evalLoadBtn").addEventListener("click",()=>{renderRows();loadUnit();});
  ["evalGrade","evalGroup","evalDate"].forEach(id=>$(id).addEventListener("change",()=>{renderRows();loadUnit();}));
  $("evalUnit").addEventListener("change",loadUnit);
  $("evalRosterBtn").addEventListener("click",()=>{$("evalRosterEditor").classList.toggle("hidden");$("evalRosterText").value=roster($("evalGrade").value).join("\n");});
  $("evalRosterSaveBtn").addEventListener("click",()=>{const list=$("evalRosterText").value.split(/\r?\n/).map(x=>x.trim()).filter(Boolean);if(!list.length){$("evalStatus").textContent="Agrega al menos un nombre.";return;}const d=read();d.rosters[$("evalGrade").value]=list;write(d);$("evalRosterEditor").classList.add("hidden");renderRows();$("evalStatus").textContent="Lista de alumnos guardada localmente.";});
  $("evalSaveDayBtn").addEventListener("click",saveDay);
  $("evalClearDayBtn").addEventListener("click",()=>{document.querySelectorAll("#evalStudentRows select").forEach(x=>x.value="");$("evalClassNotes").value="";$("evalStatus").textContent="Marcas limpiadas solo en pantalla; no se guardaron.";});
  $("evalSaveUnitBtn").addEventListener("click",saveUnit);$("evalReportBtn").addEventListener("click",report);$("evalPrintBtn").addEventListener("click",()=>{if(!$("evalReportPreview").querySelector(".print-report"))report();window.print();});$("evalExportBtn").addEventListener("click",exportBackup);
  renderRows();loadUnit();
 }
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();