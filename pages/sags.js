class Team {
    constructor(id, ner, hojilt, hojigdolt) {
      this.id = id;
      this.ner = ner;
      this.hojilt = hojilt;
      this.hojigdolt = hojigdolt;
    }
  }
  
const myCar = [
    new Team(1, "ZAYA", 10, 0),
    new Team(2, "DUL", 8, 2),
    new Team(3, "DUL", 8, 2),
    new Team(4, "DUL", 8, 2),
    new Team(5, "DUL", 8, 2),
    new Team(6, "DUL", 8, 2),
    new Team(7, "DUL", 8, 2),
    new Team(8, "DUL", 8, 2),
    new Team(9, "DUL", 8, 2),
    new Team(10, "DUL", 8, 2),
    new Team(11, "DUL", 8, 2),
    new Team(12, "DUL", 8, 2),
    new Team(13, "DUL", 8, 2),
    new Team(14, "DUL", 8, 2),
    new Team(15, "DUL", 8, 2),
    new Team(16, "DUL", 8, 2),
    new Team(17, "DUL", 8, 2),
    
];
  
  var table = document.getElementById("customers");
  var tbody = document.getElementById("tbodyjs");
  
  for (var i = 0; i < myCar.length; i++) {
    var tr = document.createElement("tr");
    var tdId = document.createElement("td");
    tdId.appendChild(document.createTextNode(myCar[i].id));
    tr.appendChild(tdId);
    var tdNer = document.createElement("td");
    tdNer.appendChild(document.createTextNode(myCar[i].ner));
    tr.appendChild(tdNer);
    var tdHojilt = document.createElement("td");
    tdHojilt.appendChild(document.createTextNode(myCar[i].hojilt));
    tr.appendChild(tdHojilt);
    var tdHojigdolt = document.createElement("td");
    tdHojigdolt.appendChild(document.createTextNode(myCar[i].hojigdolt));
    tr.appendChild(tdHojigdolt);
    tbody.appendChild(tr);
    
  }
  table.appendChild(tbody);
  