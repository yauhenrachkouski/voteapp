export default class Table {
	element;
	subElements = {};

	constructor(headerConfig = [], data = []) {
		this.data = data;
		this.headerConfig = headerConfig;
		this.render();
	}
	getTableHeader() {
		return this.headerConfig
			.map(({ title }) => `<th scope="col">${title}</th>`)
			.join("");
	}
	getTableRow(item) {
		return this.headerConfig
			.map(({ id, template }) => {
				return template
					? `<td>${template(item[id])}</td>`
					: `<td>${item[id]}</td>`;
			})
			.join("");
	}

	getTableRows(data) {
		return data
			.map(
				(item) =>
					`<tr class="elem" data-key="${item.id}">${this.getTableRow(
						item
					)}</tr>`
			)
			.join("");
	}

	getTable() {
		return `<table class="table table-striped table-sm align-middle">
         <thead>
            <tr>${this.getTableHeader()}</tr>
         </thead>
         <tbody>${this.getTableRows(this.data)}</tbody>
      </table>`;
	}

	render() {
		const wrapper = document.createElement("div");
		wrapper.innerHTML = this.getTable();
		console.log(wrapper);
		this.element = wrapper.firstElementChild;
	}
}
