var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["section"] = document.getElementById("section").value;
    formData["admission no"] = document.getElementById("admission no").value;
    formData["university"] = document.getElementById("university").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.section;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.admissionno;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.university;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a  onClick="onEdit(this)">Edit</a>
                       <a  onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("section").value = "";
    document.getElementById("admission no").value = "";
    document.getElementById("university").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("section").value = selectedRow.cells[1].innerHTML;
    document.getElementById("admission no").value = selectedRow.cells[2].innerHTML;
    document.getElementById("university").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.section;
    selectedRow.cells[2].innerHTML = formData.admissionNo;
    selectedRow.cells[3].innerHTML = formData.university;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}