feather.replace();

let page = document.getElementById("page");

class table {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  create() {
    this.col = 1;
    this.row = 3;

    let container = document.createElement("div");
    container.className = "container ";
    container.setAttribute("id", "table");
    page.appendChild(container);

    /* Table Name */

    let text = document.createElement("input");
    text.type = "text";
    text.setAttribute("id", "caption");
    text.className = "fs-4";
    text.value = "Table name";
    container.appendChild(text);

    /* Table Name */

    let table = document.createElement("table");
    table.className = "table table-bordered ";
    container.appendChild(table);

    /* Table Parts */

    let thead = document.createElement("thead");
    thead.className = "table-active";
    table.appendChild(thead);

    let tbody = document.createElement("thead");
    table.appendChild(tbody);

    /* Table Parts */

    let tr = document.createElement("tr");
    thead.appendChild(tr);

    let th = document.createElement("th");
    th.innerHTML = "#";
    th.setAttribute("scope", "col");
    tr.appendChild(th);

    for (let i = 0; i < 3; i++) {
      let th = document.createElement("th");
      tr.appendChild(th);

      let content = document.createElement("div");
      content.className = "container d-flex gap-2";
      content.setAttribute("id", "icon");
      th.appendChild(content);

      let text = document.createElement("input");
      text.type = "text";
      text.className = "fw-bold";
      text.setAttribute("id", "caption");
      text.value = "Row";
      content.appendChild(text);

      let a = document.createElement("a");
      content.appendChild(a);
      a.addEventListener("click", () => {
        deleteRow();
      });

      let garbage = document.createElement("i");
      garbage.setAttribute("data-feather", "trash-2");
      a.appendChild(garbage);
      function deleteRow() {
        console.log("DSDDS");
      }
    }

    feather.replace();

    let btnContainer = document.createElement("div");
    btnContainer.className = "container d-flex gap-2";
    container.appendChild(btnContainer);

    /* Save Button */
    let btnSave = document.createElement("button");
    btnSave.className = "btn btn-primary";
    btnSave.innerHTML = "Save table";
    btnSave.addEventListener("click", () => {
      this.save();
    });
    btnContainer.appendChild(btnSave);
    /* Save Button */

    /* Add Row Button */
    let btnRow = document.createElement("button");
    btnRow.className = "btn btn-outline-primary";
    btnRow.innerHTML = "Add row";
    btnRow.addEventListener("click", () => {
      this.row++;
      addRow();
    });
    btnContainer.appendChild(btnRow);
    /* Add Row Button */

    /* Add Col Button */
    let btnCol = document.createElement("button");
    btnCol.className = "btn btn-outline-primary";
    btnCol.innerHTML = "Add column";
    btnCol.addEventListener("click", () => {
      this.col++;
      addCol(this.col, this.row);
    });
    btnContainer.appendChild(btnCol);

    function addCol(col, row) {
      let tr = document.createElement("tr");
      tbody.appendChild(tr);

      let number = document.createElement("th");
      number.innerHTML = col;
      number.setAttribute("scope", "col");
      tr.appendChild(number);

      for (let i = 0; i < row; i++) {
        let th = document.createElement("th");
        tr.appendChild(th);

        let text = document.createElement("input");
        text.type = "text";
        text.className = "fw-normal";
        text.value = "Row";
        th.appendChild(text);
      }
    }
    /* Add Col Button */

    /* Add Row Button */
    function addRow() {
      for (var i = 0, row; (row = table.rows[i]); i++) {

        let th = document.createElement("th");
        row.appendChild(th);

        let content = document.createElement("div");
        content.className = "container d-flex gap-2";
        content.setAttribute("id", "icon");
        th.appendChild(content);

        let text = document.createElement("input");
        text.type = "text";
        text.setAttribute("id", "caption");
        text.value = "Row";
        content.appendChild(text);

        if (i == 0) {
          text.className = "fw-bold";
          let a = document.createElement("a");
          content.appendChild(a);
          a.addEventListener("click", () => {
            deleteRow();
          });

          let garbage = document.createElement("i");
          garbage.setAttribute("data-feather", "trash-2");
          a.appendChild(garbage);
        }
      }
      feather.replace();
    }
    /* Add Row Button */

    /* Delete Button */
    let btnDelete = document.createElement("button");
    btnDelete.className = "btn btn-outline-danger";
    btnDelete.innerHTML = "Delete table";
    btnDelete.addEventListener("click", () => {
      deleteTable();
    });
    btnContainer.appendChild(btnDelete);

    function deleteTable() {
      container.remove();
    }
    /* Delete Button */

    addCol(this.col, this.row);
  }

  save() {
    alert("SSS");
  }
}

function createTable() {
  let thisTable = new table();
  thisTable.create();
}
