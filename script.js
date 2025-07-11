class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getDetails() {
    return `${this.name} earns ₹${this.salary}`;
  }
}

class Developer extends Employee {
  constructor(name, salary, specialization) {
    super(name, salary);
    this.specialization = specialization;
  }

  getDetails() {
    return `👨‍💻 ${this.name} earns ₹${this.salary} - Specialization: ${this.specialization}`;
  }
}

class Manager extends Employee {
  constructor(name, salary, teamSize) {
    super(name, salary);
    this.teamSize = teamSize;
  }

  getDetails() {
    return `👔 ${this.name} earns ₹${this.salary} - Manages ${this.teamSize} people`;
  }
}

// DOM logic
const addBtn = document.getElementById("addBtn");
const roleSelect = document.getElementById("role");
const extraField = document.getElementById("extra-field");
const employeeList = document.getElementById("employee-list");

roleSelect.addEventListener("change", () => {
  const role = roleSelect.value;
  if (role === "Developer") {
    extraField.innerHTML = `<input type="text" id="special" placeholder="Specialization" />`;
  } else {
    extraField.innerHTML = `<input type="number" id="special" placeholder="Team Size" />`;
  }
});

addBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const salary = document.getElementById("salary").value;
  const role = document.getElementById("role").value;
  const special = document.getElementById("special").value;

  let emp;

  if (role === "Developer") {
    emp = new Developer(name, salary, special);
  } else {
    emp = new Manager(name, salary, special);
  }

  const p = document.createElement("p");
  p.innerText = emp.getDetails();
  employeeList.appendChild(p);

  // Clear inputs
  document.getElementById("name").value = "";
  document.getElementById("salary").value = "";
  document.getElementById("special").value = "";
});
