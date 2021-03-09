const excelToJson = require("convert-excel-to-json");
const result = excelToJson({
  sourceFile:
    "Shttps://cdn.glitch.com/3348e57f-5f6d-4b3a-89df-0f95dc7d3268%2Ftestexcel.xlsx?v=1614987629983"
});

sheet1: [
  {
    A: "data of cell A1",
    B: "data of cell B1",
    C: "data of cell C1"
  }
];
