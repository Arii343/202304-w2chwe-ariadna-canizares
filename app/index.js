const createTable = (totalRow, totalCol) => {
  const table = [];

  for (let rowIndex = 0; rowIndex < totalRow; rowIndex++) {
    const row = [];

    for (let colIndex = 0; colIndex < totalCol; colIndex++) {
      row.push({
        positionY: rowIndex,
        positionX: colIndex,
        isAlive: false,
      });
    }
    table.push(row);
  }
  return table;
};

const counterCellsAlive = (table, rowIndex, columnIndex) => {
  let counter = 0;
  if (table[rowIndex - 1]) {
    if (
      table[rowIndex - 1][columnIndex] &&
      table[rowIndex - 1][columnIndex].isAlive === true
    ) {
      counter++;
    }
    if (
      table[rowIndex - 1][columnIndex + 1] &&
      table[rowIndex - 1][columnIndex + 1].isAlive === true
    ) {
      counter++;
    }
    if (
      table[rowIndex - 1][columnIndex - 1] &&
      table[rowIndex - 1][columnIndex - 1].isAlive === true
    ) {
      counter++;
    }
  }

  if (
    table[rowIndex][columnIndex + 1] &&
    table[rowIndex][columnIndex + 1].isAlive === true
  ) {
    counter++;
  }
  if (
    table[rowIndex][columnIndex - 1] &&
    table[rowIndex][columnIndex - 1].isAlive === true
  ) {
    counter++;
  }
  if (table[rowIndex + 1]) {
    if (
      table[rowIndex + 1][columnIndex] &&
      table[rowIndex + 1][columnIndex].isAlive === true
    ) {
      counter++;
    }
    if (
      table[rowIndex + 1][columnIndex + 1] &&
      table[rowIndex + 1][columnIndex + 1].isAlive === true
    ) {
      counter++;
    }
    if (
      table[rowIndex + 1][columnIndex - 1] &&
      table[rowIndex + 1][columnIndex - 1].isAlive === true
    ) {
      counter++;
    }
  }
  return counter;
};

const updateIsAlive = (cellsAlive) => {
  if (cellsAlive > 3) {
    return false;
  }
  if (cellsAlive < 2) {
    return false;
  }
  if (cellsAlive === 2 || cellsAlive === 3) {
    return true;
  }
};

const updateIsDead = (cellsAlive) => {
  if (cellsAlive === 3) {
    return true;
  }
  return false;
};

const updateTable = (table) => {
  const newTable = [];
  for (let rowIndex = 0; rowIndex < table.length; rowIndex++) {
    const row = [];
    for (
      let columnIndex = 0;
      columnIndex < table[rowIndex].length;
      columnIndex++
    ) {
      let cellsAlive = counterCellsAlive(table, rowIndex, columnIndex);

      if (table[rowIndex][columnIndex].isAlive) {
        row.push({
          positionY: rowIndex,
          positionX: columnIndex,
          isAlive: updateIsAlive(cellsAlive),
        });
      } else {
        row.push({
          positionY: rowIndex,
          positionX: columnIndex,
          isAlive: updateIsDead(cellsAlive),
        });
      }
    }
    newTable.push(row);
  }

  return newTable;
};

let table = createTable(15, 30);

table[0][4].isAlive = true;
table[1][5].isAlive = true;
table[2][5].isAlive = true;
table[2][4].isAlive = true;
table[2][3].isAlive = true;

table[2][24].isAlive = true;
table[2][20].isAlive = true;
table[2][21].isAlive = true;
table[2][22].isAlive = true;
table[3][20].isAlive = true;
table[4][23].isAlive = true;
table[4][24].isAlive = true;
table[5][21].isAlive = true;
table[5][22].isAlive = true;
table[5][24].isAlive = true;
table[6][20].isAlive = true;
table[6][22].isAlive = true;
table[6][24].isAlive = true;

table = updateTable(table);
