function studentinfo() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var course = document.querySelector('.course').value;
    var email = document.getElementById("email").value;

    var newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${gender}</td>
        <td>${course}</td>
        <td>${email}</td>
        <td><button onclick="deleteItem(event)" style="background-color:red";>Delete</button></td>
    `;

    var student = document.getElementById("studentdata");
    student.appendChild(newRow);
}

function deleteItem(event) {
    event.target.parentElement.parentElement.remove();
}


