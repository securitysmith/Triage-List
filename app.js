const patientList = [
  'Paul',
  'Jan',
  'Tri',
  'Maryam'
]

let origList = [];

for (let i=0; i < patientList.length; i++) {
	origList[i] = patientList[i];
}

alert(patientList);

const command = prompt('Choose one: update, delete, add, reorder');

switch (command) {
	case "update":
	  updList();
	  break;
	case "delete":
	  delList();
	  break;
	case "add":
	  addList();
	  break;
	case "reorder":
	  reoList();
	  break;
	default:
	  alert("List not changed.\r\n" + patientList);
	  wrList(patientList);
}

function updList() {
    let patient = prompt("Enter patient name to be updated:");
    while (patientList.indexOf(patient) < 0) {
       patient = prompt("Please enter a name from the list\r\n" + patientList);
    }    
    let newName = prompt("Enter new patient name:")
    patientList[patientList.indexOf(patient)] = newName;
    alert("Name updated.\r\n" + patientList);
	wrList(patientList);
}

function delList() {
    let patient = prompt("Enter patient name to be removed:");
    while (patientList.indexOf(patient) < 0) {
       patient = prompt("Please enter a name from the list\r\n" + patientList);
    }    
    patientList.splice(patientList.indexOf(patient), 1);
    alert("Name removed.\r\n" + patientList);
	wrList(patientList);
}

function addList() {
	let patient = prompt("Enter patient's name:")
	patientList.push(patient);
    alert("Name added.\r\n" + patientList);
	wrList(patientList);
}

function reoList() {
	let patient1 = prompt("Please enter first patient name:");
	while (patientList.indexOf(patient1) < 0) {
       patient1 = prompt("Please enter a name from the list\r\n" + patientList);
    }    
    let patient2 = prompt("Please enter second patient name:");
	while (patientList.indexOf(patient2) < 0) {
       patient2 = prompt("Please enter a name from the list\r\n" + patientList);
    }
    patientList[patientList.indexOf(patient1)] = patient2;
    patientList[patientList.indexOf(patient2)] = patient1;
    alert("List reordered.\r\n" + patientList);
	wrList(patientList);
}

function wrList() {
    document.write("<table><tr><td colspan=2><h1>ER Triage List</h1></td></tr><tr><td><table><tr><td colspan=2><h3>new list</h3></td></tr>");
    i = patientList.length;
    let j = 0;
    for (j = 1; j <= i; j++) {
       document.write("<tr><td>" + j + "</td><td>" + patientList[j-1] + "</td></tr>");
    } 
    document.write("</table></td><td><table><tr><td colspan=2><h3>initial list</h3></td></tr>")
    i = origList.length;
    for (j = 1; j <= i; j++) {
       document.write("<tr><td>" + j + "</td><td>" + origList[j-1] + "</td></tr>");
    }
    document.write("</table></td></tr></table>")    
}


