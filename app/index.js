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

const updateIsAlive = (cellsAlive) => {};

const updateIsDead = (cellsAlive) => {};

const updateTable = (table) => {
  for (let rowIndex = 0; rowIndex < table.length; rowIndex++) {
    for (
      let columnIndex = 0;
      columnIndex < table[rowIndex].length;
      columnIndex++
    ) {
      let cellsAlive = counterCellsAlive(table, rowIndex, columnIndex);

      if (table[rowIndex][columnIndex].isAlive) {
        updateIsAlive(cellsAlive);
      }
      updateIsDead(cellsAlive);
    }
  }
};

const table = createTable(3, 3);

table[0][0].isAlive = true;

updateTable(table);
