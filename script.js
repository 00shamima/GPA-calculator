    const subjectList = {
      "C": 3,
      "C++": 3,
      "Java": 4,
      "Microprocessor & alp": 4,
      "Data Structures": 4,
      "Internet basics": 2,
      "Linux": 3,
      "Business accounting": 3
    };

    const gradePoints = {
      "O": 10,
      "A": 9,

      "B+":8,
      "B": 7,
      "B-": 6,
      
      "C": 5,
    
      "F": 0
    };

    let subjects = JSON.parse(localStorage.getItem("subjects")) || [];

    function showSuggestions() {
      const input = document.getElementById("subjectInput").value.toLowerCase();
      const suggestionBox = document.getElementById("suggestions");
      suggestionBox.innerHTML = "";
      if (input.length === 0) return;

      Object.keys(subjectList).filter(sub => sub.toLowerCase().includes(input))
        .forEach(sub => {
          const div = document.createElement("div");
          div.innerText = sub;
          div.onclick = () => {
            document.getElementById("subjectInput").value = sub;
            suggestionBox.innerHTML = "";
          };
          suggestionBox.appendChild(div);
        });
    }

    function addSubject() {
      const subject = document.getElementById("subjectInput").value;
      if (!subject || !subjectList[subject]) {
        alert("Please choose a valid subject!");
        return;
      }
      subjects.push({ subject, credits: subjectList[subject], grade: "O" });
      saveData();
      renderTable();
      document.getElementById("subjectInput").value = "";
    }

    function removeSubject(index) {
      subjects.splice(index, 1);
      saveData();
      renderTable();
    }

    function renderTable() {
      const tbody = document.querySelector("#resultTable tbody");
      tbody.innerHTML = "";
      subjects.forEach((s, index) => {
        const gradePoint = gradePoints[s.grade];
        const row = document.createElement("tr");

        row.innerHTML = `
          <td>${s.subject}</td>
          <td>${s.credits}</td>
          <td></td>
          <td>${gradePoint}</td>
<td>${s.credits} × ${gradePoint} = ${(s.credits * gradePoint).toFixed(2)}</td>
          <td><button class="removeBtn" onclick="removeSubject(${index})">Remove</button></td>
        `;

        const gradeCell = document.createElement("td");
        const select = document.createElement("select");
        for (let g in gradePoints) {
          const option = document.createElement("option");
          option.value = g;
          option.text = g;
          if (s.grade === g) option.selected = true;
          select.appendChild(option);
        }
        select.onchange = () => {
          s.grade = select.value;
          saveData();
          renderTable();
        };
        row.children[2].appendChild(select);

        tbody.appendChild(row);
      });
    }

function calculateGPA() {
   let totalCredits = 0, totalPoints = 0;
      let hasFail = false;
      subjects.forEach(s => {
        if (s.grade === "F") hasFail = true;
        totalCredits += s.credits;
        totalPoints += s.credits * gradePoints[s.grade];

      });
      const tbody = document.querySelector("#resultTable tbody");
      if (subjects.length === 0) {
        alert("No subjects added!");
        return;
      } 

      // Remove old totals before adding new
      document.querySelectorAll("#resultTable tfoot tr.resultRow").forEach(el => el.remove());
      let resultRow = document.createElement("tr");
      resultRow.classList.add("resultRow");
      if (hasFail) {
        resultRow.innerHTML = `<td colspan="6"><b>Fail – GPA not available</b></td>`;
      } else {
        const gpa = (totalPoints / totalCredits).toFixed(2);
       resultRow.innerHTML = `
  <td colspan="6">
    <b>
      Total Points = ${totalPoints}, 
      Total Credits = ${totalCredits}, 
      GPA = ${totalPoints} ÷ ${totalCredits} = ${gpa}
    </b>
  </td>
`;
         
      }
      document.querySelector("#resultTable tfoot").appendChild(resultRow);
    }
    function saveData() {
      localStorage.setItem("subjects", JSON.stringify(subjects));
    }
    renderTable();
  