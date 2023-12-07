let selectedRow = null ; 
// OnSubmit function
function onFormSubmit(e) {
    let formData = readFormData();

    // Check if validation passes
    if (validate(formData)) {
        if (selectedRow == null) {
            // If no row is selected, insert new data
            insertData(formData);
        } else {
            // If a row is selected, update the record
            updateRecord(formData);
        }

        resetForm();
    }

    e.preventDefault();
}
// Read function
function readFormData() {
    let formData = {};
    formData["fname"] = document.getElementById("fname").value;
    formData["lname"] = document.getElementById("lname").value;
    formData["email"] = document.getElementById("email").value;
    return formData;
}
// Inserting rows/column (Create function)
function insertData(data) {
    let table = document.getElementById("employeeList").getElementsByTagName("tbody")[0];

    // Insert a new row at the end of the table(length)
    let newRow = table.insertRow(table.length);

    // Insert cells and set their inner HTML
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onclick="onEdit(this)">Edit</a> <a onclick="onDelete(this)">Delete</a>`
}
// Reset function
function resetForm(){
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
    selectedRow = null;
}
// Edit function
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
}
// Update function
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.fname;
    selectedRow.cells[1].innerHTML = formData.lname;
    selectedRow.cells[2].innerHTML = formData.email;
}
// Delete function
function onDelete(td){
    if(confirm("Do you want to delete this record")){
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate(formData) {
    if (!formData.fname || !formData.lname || !formData.email) {
        alert("All fields are required");
        return false; // Validation failed
    }

    return true; // Validation passed
}





