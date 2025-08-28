const subjectList = {
  "BSc.IT": {
    "Semester I": {
      "Language - I": 4,
      "English - I": 4,
      "Computing Fundamentals & C Programming": 4,
      "Digital Computer Fundamentals": 4,
      "Allied 1: Discrete Mathematics": 5,
      "Core Lab 1: Programming Lab – C": 3,
      "Foundation Course – I": 2
    },
    "Semester II": {
      "Language - II": 4,
      "English - II": 4,
      "Data Structures and C++": 4,
      "Computer Organization": 4,
      "Allied 2: Numerical & Statistical Methods": 5,
      "Core Lab 2: Programming Lab – C++": 3,
      "Environmental Studies": 2
    },
    "Semester III": {
      "Language - III": 4,
      "English - III": 4,
      "Database Management Systems": 4,
      "Programming in Java": 4,
      "Allied 3: Operations Research": 5,
      "Core Lab 3: DBMS Lab": 3,
      "Core Lab 4: Programming Lab – Java": 3,
      "Value Education – Human Rights": 2
    },
    "Semester IV": {
      "Language - IV": 4,
      "English - IV": 4,
      "Operating Systems": 4,
      "Software Engineering": 4,
      "Allied 4: Computer Networks": 5,
      "Core Lab 5: Programming Lab – VB": 3,
      "Skill Based Subject 1: Software Engineering Lab": 2
    },
    "Semester V": {
      "Programming in PHP": 4,
      "Resource Management Techniques": 4,
      "Core Lab 6: Programming Lab – PHP": 3,
      "Elective I: Software Project Management / Data Mining and Warehousing / Digital Signal Processing": 5,
      "Elective II: Artificial Intelligence / Compiler Design / Computer Graphics": 5,
      "Skill Based Subject 2: Web Technology Lab": 2
    },
    "Semester VI": {
      "Computer Architecture": 4,
      "Graphics & Multimedia": 4,
      "Core Lab 7: Graphics & Multimedia Lab": 3,
      "Core Lab 8: Project Work Lab": 6,
      "Elective III: Data Science / Cloud Computing / Cyber Security": 5,
      "Extension Activities": 1
    }
  },

  "BSc CT": {
    "Semester I": {
      "Language – I": 4,
      "English – I": 4,
      "Core 1: Programming in C": 4,
      "Core Lab 1: Programming Lab – C": 3,
      "Allied 1: Computer Based Optimization Techniques": 5,
      "First Allied Practical: Optimization Techniques Lab": 2,
      "Environmental Studies": 2
    },
    "Semester II": {
      "Language – II": 4,
      "English – II": 4,
      "Core 2: Programming in C++": 4,
      "Core Lab 2: Programming Lab – C++": 3,
      "Allied 2: Operations Research": 5,
      "Second Allied Practical: Operations Research Lab": 2,
      "Value Education – Human Rights": 2
    },
    "Semester III": {
      "Language – III": 4,
      "English – III": 4,
      "Core 3: Computer Organization": 4,
      "Core 4: Data Structures": 4,
      "Core Lab 3: Data Structures Lab": 3,
      "Allied 3: Numerical Methods": 5,
      "Skill Based Subject 1: Office Automation Lab": 2,
      "NME 1: Web Scripting Languages (or) Personality Development": 2
    },
    "Semester IV": {
      "Language – IV": 4,
      "English – IV": 4,
      "Core 5: Database Management Systems": 4,
      "Core 6: Java Programming": 4,
      "Core Lab 4: Programming Lab – Java": 3,
      "Allied 4: Probability and Statistics": 5,
      "Skill Based Subject 2: Programming Lab – R": 2,
      "NME 2: Programming in Python (or) Soft Skills": 2
    },
    "Semester V": {
      "Core 7: Operating Systems": 4,
      "Core 8: Computer Networks": 4,
      "Core 9: Software Engineering": 4,
      "Core Lab 5: Network Lab": 3,
      "Elective I: Data Mining / Web Technology / Digital Image Processing": 5,
      "Skill Based Subject 3: Programming Lab – PHP": 2
    },
    "Semester VI": {
      "Core 10: Data Communication and Cloud Computing": 4,
      "Core 11: Artificial Intelligence": 4,
      "Core 12: Compiler Design": 4,
      "Core Lab 6: Project Work": 6,
      "Elective II: Mobile Computing / Cryptography / Internet of Things": 5,
      "Extension Activities": 1
    }
  },

  "BSc AI&DS": {
    "Semester I": {
      "Language – I": 4,
      "English – I": 4,
      "Core 1: Programming in C": 4,
      "Core Lab 1: Programming Lab – C": 3,
      "Allied 1: Discrete Mathematics": 5,
      "Environmental Studies": 2
    },
    "Semester II": {
      "Language – II": 4,
      "English – II": 4,
      "Core 2: Object Oriented Programming in C++": 4,
      "Core Lab 2: Programming Lab – C++": 3,
      "Allied 2: Probability and Statistics": 5,
      "Value Education – Human Rights": 2
    },
    "Semester III": {
      "Language – III": 4,
      "English – III": 4,
      "Core 3: Data Structures": 4,
      "Core 4: Database Management Systems": 4,
      "Core Lab 3: Data Structures Lab": 3,
      "Allied 3: Design and Analysis of Algorithms": 5,
      "Skill Based Subject 1: Programming in R Lab": 2,
      "NME 1: Web Designing (or) Personality Development": 2
    },
    "Semester IV": {
      "Language – IV": 4,
      "English – IV": 4,
      "Core 5: Python Programming": 4,
      "Core 6: Artificial Intelligence": 4,
      "Core Lab 4: Programming Lab – Python": 3,
      "Allied 4: Machine Learning": 5,
      "Skill Based Subject 2: Programming Lab – Java": 2,
      "NME 2: Programming in PHP (or) Soft Skills": 2
    },
    "Semester V": {
      "Core 7: Data Science": 4,
      "Core 8: Deep Learning": 4,
      "Core Lab 5: Data Science Lab": 3,
      "Elective I: Natural Language Processing / Big Data Analytics / Cloud Computing": 5,
      "Elective II: Computer Vision / Web Mining / Robotics": 5,
      "Skill Based Subject 3: Programming Lab – PHP": 2
    },
    "Semester VI": {
      "Core 9: Reinforcement Learning": 4,
      "Core 10: Neural Networks": 4,
      "Core 11: Project Work": 6,
      "Elective III: Internet of Things / Bioinformatics / Information Security": 5,
      "Extension Activities": 1
    }
  },

  "BSc CS Cyber Security": {
    "Semester I": {
      "Language – I": 4,
      "English – I": 4,
      "Core 1: Problem Solving using C": 4,
      "Core Lab 1: C Programming Lab": 3,
      "Allied 1: Mathematical Foundations – I": 5,
      "Environmental Studies": 2
    },
    "Semester II": {
      "Language – II": 4,
      "English – II": 4,
      "Core 2: Python Programming": 4,
      "Core Lab 2: Python Programming Lab": 3,
      "Allied 2: Mathematical Foundations – II": 5,
      "Value Education – Human Rights": 2
    },
    "Semester III": {
      "Language – III": 4,
      "English – III": 4,
      "Core 3: Data Structures": 4,
      "Core 4: Digital Principles": 4,
      "Core Lab 3: Data Structures Lab": 3,
      "Allied 3: Computer Networks": 5,
      "Skill Based Subject 1: Open Source Tools Lab": 2,
      "NME 1: Introduction to Cyber Security (or) Personality Development": 2
    },
    "Semester IV": {
      "Language – IV": 4,
      "English – IV": 4,
      "Core 5: Java Programming": 4,
      "Core 6: Operating Systems": 4,
      "Core Lab 4: Java Programming Lab": 3,
      "Allied 4: Cryptography": 5,
      "Skill Based Subject 2: Web Technology Lab": 2,
      "NME 2: Ethical Hacking (or) Soft Skills": 2
    },
    "Semester V": {
      "Core 7: Information Security": 4,
      "Core 8: Computer Forensics": 4,
      "Core Lab 5: Security Lab": 3,
      "Elective I: Cyber Law / Cloud Security / Intrusion Detection Systems": 5,
      "Elective II: Mobile Security / Blockchain Technology / Secure Coding": 5,
      "Skill Based Subject 3: Security Tools Lab": 2
    },
    "Semester VI": {
      "Core 9: Cyber Threat Intelligence": 4,
      "Core 10: Penetration Testing": 4,
      "Core 11: Project Work": 6,
      "Elective III: Digital Forensics / IoT Security / Malware Analysis": 5,
      "Extension Activities": 1
    }
  },

  "BSc AI & ML": {
    "Semester I": {
      "Language - I": 4,
      "English - I": 4,
      "Core 1: Object Oriented Programming in C++": 4,
      "Core 2: Data Structures": 4,
      "Core Lab 1: Programming Lab – C++": 3,
      "Allied 1: Discrete Mathematics": 4,
      "Environmental Studies": 2
    },
    "Semester II": {
      "Language - II": 4,
      "English - II": 4,
      "Core 3: Java Programming": 4,
      "Core Lab 2: Programming Lab – Java": 3,
      "Core Lab 3: Internet Basics Lab": 2,
      "Allied 2: Applied Mathematics": 4,
      "Value Education – Human Rights": 2
    },
    "Semester III": {
      "Language - III": 4,
      "English - III": 4,
      "Core 4: Programming in Python": 4,
      "Core 5: Fuzzy Logic and Neural Networks": 4,
      "Core Lab 4: Python Programming Lab": 3,
      "Allied 3: Design and Analysis of Algorithms": 4,
      "Skill Based Subject 1: Internet of Things": 2,
      "Tamil / Advanced Tamil / Non-major Elective – I (Yoga / Human Excellence / Women’s Rights)": 2
    },
    "Semester IV": {
      "Language - IV": 4,
      "English - IV": 4,
      "Core 6: Artificial Intelligence & Knowledge Representation": 4,
      "Core 7: R Programming": 4,
      "Core Lab 5: R Programming Lab": 3,
      "Allied 4: Machine Learning – Basics": 4,
      "Skill Based Subject 2 Lab + Capstone Project Work (Based on AI & ML)": 2,
      "Tamil / Advanced Tamil / Non-major Elective – II (General Awareness)": 2
    },
    "Semester V": {
      "Core 8: Machine Learning Techniques": 4,
      "Core 9: Deep Learning": 4,
      "Core Lab 6: Machine Learning Lab": 3,
      "Elective I: Business Data Analytics / Social Network Analysis / Software Agents": 4,
      "Skill Based Subject 3: Ethical Hacking": 2
    },
    "Semester VI": {
      "Core 10: Natural Language Processing": 4,
      "Core Project & Project Work Lab": 6,
      "Core Practical – VII: Natural Language Processing Lab": 3,
      "Elective II: Artificial Neural Networks and Fuzzy Systems / Web Application Security / Fundamentals of Robotics": 4,
      "Elective III: Embedded Systems / Principles of Secure Coding / Open Source Software": 4,
      "Skill Based Subject 4: Capstone Project Work Phase II (Based on AI & ML)": 2,
      "Extension Activities": 1
    }
  }
};

     












  
    // Add Bsc.IT semesters and subjects here if needed
  

const gradePoints = {
  "O": 10,
  "A": 9,
  "B+": 8,
  "B": 7,
  "B-": 6,
  "C": 5,
  "F": 0
};

let subjects = JSON.parse(localStorage.getItem("subjects")) || [];

// Show suggestions based on selected department & semester
function showSuggestions() {
  const dept = document.getElementById("departmentSelect").value;
  const semester = document.getElementById("semesterSelect").value;
  const input = document.getElementById("subjectInput").value.toLowerCase();
  const suggestionBox = document.getElementById("suggestions");
  suggestionBox.innerHTML = "";

  if (!dept || !semester || !subjectList[dept] || !subjectList[dept][semester] || input.length === 0) {
    return;
  }

  Object.keys(subjectList[dept][semester])
    .filter(sub => sub.toLowerCase().includes(input))
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
  const dept = document.getElementById("departmentSelect").value;
  const semester = document.getElementById("semesterSelect").value;
  const subject = document.getElementById("subjectInput").value;

  if (!dept || !semester || !subjectList[dept] || !subjectList[dept][semester] || !subjectList[dept][semester][subject]) {
    alert("Please choose a valid subject for the selected department and semester!");
    return;
  }

  // Prevent duplicate subjects
  if(subjects.some(s => s.subject === subject)) {
    alert("Subject already added!");
    return;
  }

  subjects.push({ subject, credits: subjectList[dept][semester][subject], grade: "O" });
  saveData();
  renderTable();
  document.getElementById("subjectInput").value = "";
  document.getElementById("suggestions").innerHTML = "";
}

function populateSubjects() {
  // Clear suggestions and input on semester change
  document.getElementById("subjectInput").value = "";
  document.getElementById("suggestions").innerHTML = "";
}

function removeSubject(index) {
  subjects.splice(index, 1);
  saveData();
  renderTable();
}

function addCustomSubject() {
  const subject = document.getElementById("customName").value.trim();
  const credits = parseFloat(document.getElementById("customCredits").value);

  if (!subject || isNaN(credits) || credits <= 0) {
    alert("Please enter a valid subject name and credits.");
    return;
  }

  subjects.push({ subject, credits, grade: "O" });
  saveData();
  renderTable();

  document.getElementById("customName").value = "";
  document.getElementById("customCredits").value = "";
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
      <td>${(s.credits * gradePoint).toFixed(2)}</td>
      <td><button class="removeBtn" onclick="removeSubject(${index})">Remove</button></td>
    `;

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

  if (subjects.length === 0) {
    alert("No subjects added!");
    return;
  }

  subjects.forEach(s => {
    if (s.grade !== "F") {  // Fail subjects excluded
      totalCredits += s.credits;
      totalPoints += s.credits * gradePoints[s.grade];
    }
  });

  // Remove old totals before adding new
  document.querySelectorAll("#resultTable tfoot tr.resultRow").forEach(el => el.remove());

  let resultRow = document.createElement("tr");
  resultRow.classList.add("resultRow");

  if (totalCredits === 0) {
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

function resetAll() {
  subjects = [];
  saveData();
  renderTable();
}


function preventInvalidCredit(input) {
  let value = parseFloat(input.value);
  if (value < 1 || value > 4 || isNaN(value)) {
    input.value = "";
  }
}

renderTable();
