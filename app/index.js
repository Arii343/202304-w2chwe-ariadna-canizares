const createTable = (totalRow, totalCol) => {
  const table = [];

  for (let rowIndex = 0; rowIndex < totalRow; rowIndex++) {
    const row = [];

    for (let colIndex = 0; colIndex < totalCol; colIndex++) {
      row.push({
        positionY: colIndex,
        positionX: rowIndex,
        isAlive: false,
      });
    }
    table.push(row);
  }
  return table;
};

console.table(createTable(3, 3));
