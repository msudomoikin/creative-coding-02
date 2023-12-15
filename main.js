import alphabet from "./alphabet.js";
import { drawPixel } from "./draw.js";
import { PIXEL_SIZE } from "./consts.js";

// Размер пикселя

// Создаем холст
const canvas = document.getElementById("canvas");
export const ctx = canvas.getContext("2d");

// Функция для закрашивания пикселя

// Функция для "печати" букв
function printWord(word) {
  let x = 1;
  let y = 1;

  for (let i = 0; i < word.length; i++) {
    const letter = word[i].toUpperCase();

    if (alphabet[letter]) {
      alphabet[letter].forEach(([dx, dy]) => {
        drawPixel(x + dx, y + dy);
      });

      x += 8; // Добавляем пробел между буквами
    }
  }
}

function addLabels() {
  ctx.fillStyle = "#000"; // Цвет текста
  ctx.font = "9px Arial"; // Шрифт текста
  for (let x = 0; x <= canvas.width / PIXEL_SIZE; x++) {
    ctx.fillText(x, x * PIXEL_SIZE, 12); // Подписи сверху
  }
  for (let y = 0; y <= canvas.height / PIXEL_SIZE; y++) {
    ctx.fillText(y, 0, y * PIXEL_SIZE + 12); // Подписи сбоку
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// drawGrid();
addLabels();

// Используем функцию
// printWord("Abc");

canvas.style.backgroundColor = "#000";

const columns = canvas.width / PIXEL_SIZE;
const rows = canvas.height / PIXEL_SIZE;

// Функция для рисования пикселей в каждой колонке
function fillCanvas() {
  // Очистка холста
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let x = 0; x < columns; x++) {
    const height = getRandomNumber(0, rows);
    for (let y = rows - 1; y >= rows - height; y--) {
      drawPixel(x, y, height);
    }
  }
  // requestAnimationFrame(fillCanvas);
}

fillCanvas();
