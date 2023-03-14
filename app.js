const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");
const box10 = document.getElementById("box10");
const box11 = document.getElementById("box11");
const box12 = document.getElementById("box12");
const box13 = document.getElementById("box13");
const box14 = document.getElementById("box14");
const box15 = document.getElementById("box15");
const box16 = document.getElementById("box16");
const Btn = document.querySelector("button");

let row1 = [2, 2, 4, 2];
let row2 = [2, 2, 2, 4];
let row3 = [2, 4, 2, 2];
let row4 = [4, 4, 4, 2];

const check = (direction) => {
  const rowArray = [row1, row2, row3, row4];
  const newRow1 = [];
  const newRow2 = [];
  const newRow3 = [];
  const newRow4 = [];
  const newRowArray = [newRow1, newRow2, newRow3, newRow4];
  switch (direction) {
    case "up":
      for (let i = 0; i < 4; i++) {
        if (row1[i] === row2[i]) {
          newRow1.push(row1[i] * 2);
          newRow2.push(0);
          if (row3[i] === row4[i]) {
            newRow3.push(row3[i] * 2);
            newRow4.push(0);
          } else {
            newRow3.push(row3[i]);
            newRow4.push(row4[i]);
          }
        } else if (row2[i] === row3[i]) {
          newRow1.push(row1[i]);
          newRow2.push(row2[i] * 2);
          newRow3.push(0);
          newRow4.push(row4[i]);
        } else if (row3[i] === row4[i]) {
          newRow1.push(row1[i]);
          newRow2.push(row2[i]);
          newRow3.push(row3[i] * 2);
          newRow4.push(0);
        } else {
          newRow1.push(row1[i]);
          newRow2.push(row2[i]);
          newRow3.push(row3[i]);
          newRow4.push(row4[i]);
        }
      }
      row1 = newRow1;
      row2 = newRow2;
      row3 = newRow3;
      row4 = newRow4;

    case "down":
      for (let i = 0; i < 4; i++) {
        if (row4[i] === row3[i]) {
          newRow4.push(row4[i] * 2);
          newRow3.push(0);
          if (row2[i] === row1[i]) {
            newRow2.push(row2[i] * 2);
            newRow1.push(0);
          } else {
            newRow2.push(row2[i]);
            newRow1.push(row1[i]);
          }
        } else if (row3[i] === row2[i]) {
          newRow4.push(row4[i]);
          newRow3.push(row3[i] * 2);
          newRow2.push(0);
          newRow1.push(row1[i]);
        } else if (row2[i] === row1[i]) {
          newRow4.push(row4[i]);
          newRow3.push(row3[i]);
          newRow2.push(row2[i] * 2);
          newRow1.push(0);
        } else {
          newRow4.push(row4[i]);
          newRow3.push(row3[i]);
          newRow2.push(row2[i]);
          newRow1.push(row1[i]);
        }
      }
      row1 = newRow1;
      row2 = newRow2;
      row3 = newRow3;
      row4 = newRow4;
    case "left":
      rowArray.forEach((arr, index) => {
        if (arr[0] === arr[1]) {
          newRowArray[index].push(arr[0] * 2);
          newRowArray[index].push(0);
          if (arr[2] === arr[3]) {
            newRowArray[index].push(arr[2] * 2);
            newRowArray[index].push(0);
          } else {
            newRowArray[index].push(arr[2]);
            newRowArray[index].push(arr[3]);
          }
        } else if (arr[1] === arr[2]) {
          newRowArray[index].push(arr[0]);
          newRowArray[index].push(arr[1] * 2);
          newRowArray[index].push(0);
          newRowArray[index].push(arr[3]);
        } else if (arr[2] === arr[3]) {
          newRowArray[index].push(arr[0]);
          newRowArray[index].push(arr[1]);
          newRowArray[index].push(arr[2] * 2);
          newRowArray[index].push(0);
        } else {
          newRowArray[index].push(arr[0]);
          newRowArray[index].push(arr[1]);
          newRowArray[index].push(arr[2]);
          newRowArray[index].push(arr[3]);
        }
      });
      row1 = newRow1;
      row2 = newRow2;
      row3 = newRow3;
      row4 = newRow4;
    case "right":
      rowArray.forEach((arr, index) => {
        if (arr[3] === arr[2]) {
          newRowArray[index].push(arr[3] * 2);
          newRowArray[index].push(0);
          if (arr[1] === arr[0]) {
            newRowArray[index].push(arr[1] * 2);
            newRowArray[index].push(0);
          } else {
            newRowArray[index].push(arr[1]);
            newRowArray[index].push(arr[0]);
          }
        } else if (arr[2] === arr[1]) {
          newRowArray[index].push(arr[3]);
          newRowArray[index].push(arr[2] * 2);
          newRowArray[index].push(0);
          newRowArray[index].push(arr[0]);
        } else if (arr[1] === arr[0]) {
          newRowArray[index].push(arr[3]);
          newRowArray[index].push(arr[2]);
          newRowArray[index].push(arr[1] * 2);
          newRowArray[index].push(0);
        } else {
          newRowArray[index].push(arr[3]);
          newRowArray[index].push(arr[2]);
          newRowArray[index].push(arr[1]);
          newRowArray[index].push(arr[0]);
        }
      });
      row1 = newRow1.reverse();
      row2 = newRow2.reverse();
      row3 = newRow3.reverse();
      row4 = newRow4.reverse();
  }
};

const handleRender = () => {
  check("right");
  console.log(row1);
  console.log(row2);
  console.log(row3);
  console.log(row4);
};

Btn.addEventListener("click", handleRender);
