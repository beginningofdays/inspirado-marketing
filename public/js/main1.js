import { FormDataTable } from "./form-data-table.js";

function init() {
    let formDataTable = null;
    try {
        formDataTable = new FormDataTable({
            title: "Submitted Form Data",
            columnNames: ['date', 'localName', 'name', 'message'],
        });

        document.getElementById('dataForm').addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
            const formObject = Object.fromEntries(formData.entries());
            formDataTable.addFormData(formObject);
        });
    } catch(err) {
        console.error(err);
        const componentRoot = document.getElementById("form-data-table-component");
        componentRoot.innerHTML += '<h2>Error</h2><p>No form data to display.</p><p>' + err + '</p>';
    }
}

window.addEventListener("load", (event) => {
    init();
});
