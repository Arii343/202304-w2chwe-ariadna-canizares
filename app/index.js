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

const table = createTable(3, 3);

table[0][0].isAlive = true;
