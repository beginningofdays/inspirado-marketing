class FormDataTable {
    #config;
    #data = [];
    #componentRoot;

    constructor(config) {
        this.#config = config;
        this.#componentRoot = document.getElementById("form-data-table-component");
        this.render();
    }

    getComponentRoot() {
        return this.#componentRoot;
    }

    render() {
        const capitaliseFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);
        const tableData = this.#data;
        const propNames = this.#config.columnNames;

        let outputHtml = `<h2>${this.#config.title}</h2>
        <div class="table-container">
            <table class="blueTable">
                <thead>
                    <tr>`;
        propNames.forEach((prop) => {
            outputHtml += `<th>${capitaliseFirstLetter(prop)}</th>`;
        });                
        outputHtml += `</tr></thead><tbody>`;

        for (let i in tableData) {
            outputHtml += '<tr>';
            propNames.forEach((prop) => {
                outputHtml += `<td>${tableData[i][prop]}</td>`;
            });                
            outputHtml += '</tr>';
        }
        outputHtml += `</tbody>
            </table>
        </div>`;

        this.#componentRoot.innerHTML = outputHtml;
    }

    addFormData(formData) {
        const formDataEntry = {
            date: new Date().toISOString().split('T')[0], // Using current date for simplicity
            localName: formData.firstname + ' ' + formData.lastname,
            name: formData['company-name'],
            message: formData.message
        };
        this.#data = [formDataEntry, ...this.#data];
        this.render();
    }
}

export { FormDataTable };
