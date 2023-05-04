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
const upBtn = document.querySelector("#upBtn");
const leftBtn = document.querySelector("#leftBtn");
const rightBtn = document.querySelector("#rightBtn");
const downBtn = document.querySelector("#downBtn");
const result = document.querySelector("h1");

let row1 = [0, 2, 0, 2];
let row2 = [0, 0, 0, 0];
let row3 = [0, 0, 0, 0];
let row4 = [0, 2, 0, 0];

const sumTile = (direction) => {
  const rowArray = [row1, row2, row3, row4];
  const newRow1 = [];
  const newRow2 = [];
  const newRow3 = [];
  const newRow4 = [];
  const newRowArray = [newRow1, newRow2, newRow3, newRow4];
  switch (direction) {
    case "up":
      //방향에 맞추어 중복되는 숫자 합치기
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
      break;

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
      break;
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
      break;
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
      break;
  }
};

const handleZero = (direction) => {
  // 각 방향으로 정렬했을때 몇칸 가야하는지 확인
  let newColumn1 = [row1[0], row2[0], row3[0], row4[0]];
  let newColumn2 = [row1[1], row2[1], row3[1], row4[1]];
  let newColumn3 = [row1[2], row2[2], row3[2], row4[2]];
  let newColumn4 = [row1[3], row2[3], row3[3], row4[3]];

  const nonZeroColumn1 = newColumn1.filter((e) => e !== 0);
  const nonZeroColumn2 = newColumn2.filter((e) => e !== 0);
  const nonZeroColumn3 = newColumn3.filter((e) => e !== 0);
  const nonZeroColumn4 = newColumn4.filter((e) => e !== 0);

  const zeroColumn1 = newColumn1.filter((e) => e === 0);
  const zeroColumn2 = newColumn2.filter((e) => e === 0);
  const zeroColumn3 = newColumn3.filter((e) => e === 0);
  const zeroColumn4 = newColumn4.filter((e) => e === 0);

  const nonZeroRow1 = row1.filter((e) => e !== 0);
  const nonZeroRow2 = row2.filter((e) => e !== 0);
  const nonZeroRow3 = row3.filter((e) => e !== 0);
  const nonZeroRow4 = row4.filter((e) => e !== 0);

  const zeroRow1 = row1.filter((e) => e === 0);
  const zeroRow2 = row2.filter((e) => e === 0);
  const zeroRow3 = row3.filter((e) => e === 0);
  const zeroRow4 = row4.filter((e) => e === 0);

  switch (direction) {
    case "up":
      //방향에 맞게 0을 제외한 숫자 옮기기
      newColumn1 = nonZeroColumn1.concat(zeroColumn1);
      newColumn2 = nonZeroColumn2.concat(zeroColumn2);
      newColumn3 = nonZeroColumn3.concat(zeroColumn3);
      newColumn4 = nonZeroColumn4.concat(zeroColumn4);

      row1 = [newColumn1[0], newColumn2[0], newColumn3[0], newColumn4[0]];
      row2 = [newColumn1[1], newColumn2[1], newColumn3[1], newColumn4[1]];
      row3 = [newColumn1[2], newColumn2[2], newColumn3[2], newColumn4[2]];
      row4 = [newColumn1[3], newColumn2[3], newColumn3[3], newColumn4[3]];
      break;

    case "down":
      newColumn1 = zeroColumn1.concat(nonZeroColumn1);
      newColumn2 = zeroColumn2.concat(nonZeroColumn2);
      newColumn3 = zeroColumn3.concat(nonZeroColumn3);
      newColumn4 = zeroColumn4.concat(nonZeroColumn4);

      row1 = [newColumn1[0], newColumn2[0], newColumn3[0], newColumn4[0]];
      row2 = [newColumn1[1], newColumn2[1], newColumn3[1], newColumn4[1]];
      row3 = [newColumn1[2], newColumn2[2], newColumn3[2], newColumn4[2]];
      row4 = [newColumn1[3], newColumn2[3], newColumn3[3], newColumn4[3]];
      break;
    case "left":
      row1 = nonZeroRow1.concat(zeroRow1);
      row2 = nonZeroRow2.concat(zeroRow2);
      row3 = nonZeroRow3.concat(zeroRow3);
      row4 = nonZeroRow4.concat(zeroRow4);
      break;
    case "right":
      row1 = zeroRow1.concat(nonZeroRow1);
      row2 = zeroRow2.concat(nonZeroRow2);
      row3 = zeroRow3.concat(nonZeroRow3);
      row4 = zeroRow4.concat(nonZeroRow4);
      break;
  }
};

const handleAnimation = (direction) => {
  handleZero(direction); //타일을 합칠때 0을 제외하기
  sumTile(direction); // 방향에 맞게 타일 합치기
  handleZero(direction); // 방향에 맞게 0이동시키기
};

const handleCalc = () => {
  //각 타일의 합을 계산한 뒤 result에 추가
  sum = 0;
  for (let i = 0; i < 4; i++) {
    sum += row1[i] + row2[i] + row3[i] + row4[i];
  }
  //result 업데이트
  result.innerText = sum;
};

const findZero = () => {
  //array에서 0인 값을 찾아 index 반환; 이때 계산 편의상 하나의 arr로 생각함
  zeroArr = [];
  for (let i = 0; i < 4; i++) {
    if (row1[i] === 0) {
      zeroArr.push(i);
    }
    if (row2[i] === 0) {
      zeroArr.push(i + 4);
    }
    if (row3[i] === 0) {
      zeroArr.push(i + 8);
    }
    if (row4[i] === 0) {
      zeroArr.push(i + 12);
    }
  }
  return zeroArr;
};

const handleNewTile = () => {
  //추가할 타일이 2또는 4일지 계산; 75%확률로 2, 25%확률로 4
  setTileNum = 2;
  if (Math.random() * 4 > 3) {
    setTileNum = 4;
  }

  //타일이 0인 index를 구한 뒤 이들중 랜덤하게 하나를 고름
  zeroArr = findZero();
  newTileIndex = Math.floor(Math.random() * zeroArr.length);

  //기존 배열에 추가해줌
  if (zeroArr[newTileIndex] < 4) {
    row1[zeroArr[newTileIndex]] = setTileNum;
  } else if (zeroArr[newTileIndex] < 8) {
    row2[zeroArr[newTileIndex] - 4] = setTileNum;
  } else if (zeroArr[newTileIndex] < 12) {
    row3[zeroArr[newTileIndex] - 8] = setTileNum;
  } else {
    row4[zeroArr[newTileIndex] - 12] = setTileNum;
  }

  //이중 랜덤한 한 타일을 선택하여 2또는 4 타일을 추가
  //타일추가하는 애니메이션 css형태로 전달
};

const checkEnd = () => {
  findZero();
  //만약 빈 array라면
  check("up");
  check("down");
  check("left");
  check("right");
  //이때 그럼에도 변하지 않는다면 game End출력
};

const renderTile = () => {
  [box1.innerText, box2.innerText, box3.innerText, box4.innerText] = row1;
  [box5.innerText, box6.innerText, box7.innerText, box8.innerText] = row2;
  [box9.innerText, box10.innerText, box11.innerText, box12.innerText] = row3;
  [box13.innerText, box14.innerText, box15.innerText, box16.innerText] = row4;
};

const addAndCalc = () => {
  handleNewTile();
  handleCalc();
  renderTile();
  //checkEnd();
};

const handleRenderUp = () => {
  handleAnimation("up");
  addAndCalc();
};
const handleRenderLeft = () => {
  handleAnimation("left");
  addAndCalc();
};
const handleRenderRight = () => {
  handleAnimation("right");
  addAndCalc();
};
const handleRenderDown = () => {
  handleAnimation("down");
  addAndCalc();
};

upBtn.addEventListener("click", handleRenderUp);
leftBtn.addEventListener("click", handleRenderLeft);
rightBtn.addEventListener("click", handleRenderRight);
downBtn.addEventListener("click", handleRenderDown);

renderTile();
