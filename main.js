import alphabet from "./alphabet.js";

// Размер пикселя
const PIXEL_SIZE = 25;

// Создаем холст
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Функция для закрашивания пикселя
function drawPixel(x, y) {
    // Выбираем случайный цвет
    ctx.fillStyle = getRandomColor();
  
    // Закрашиваем пиксель
    ctx.fillRect(x * PIXEL_SIZE, y * PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);
  
    // Рисуем внутри пикселя прямоугольный треугольник
    ctx.beginPath();
    ctx.moveTo(x * PIXEL_SIZE, y * PIXEL_SIZE);
    ctx.lineTo(x * PIXEL_SIZE, (y + 1) * PIXEL_SIZE);
    ctx.lineTo((x + 1) * PIXEL_SIZE, (y + 1) * PIXEL_SIZE);
    ctx.closePath();
  
    // Закрашиваем треугольник
    ctx.fillStyle = '#000'; // Цвет треугольника
    ctx.fill();
  }

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

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

      x += 10; // Добавляем пробел между буквами
    }
  }
}

function drawGrid() {
  for (let x = 0; x <= canvas.width; x += PIXEL_SIZE) {
    for (let y = 0; y <= canvas.height; y += PIXEL_SIZE) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
    }
  }
  ctx.strokeStyle = "#ddd"; // Цвет сетки
  ctx.stroke();
}

function addLabels() {
  ctx.fillStyle = "#000"; // Цвет текста
  ctx.font = "12px Arial"; // Шрифт текста
  for (let x = 0; x <= canvas.width / PIXEL_SIZE; x++) {
    ctx.fillText(x, x * PIXEL_SIZE, 12); // Подписи сверху
  }
  for (let y = 0; y <= canvas.height / PIXEL_SIZE; y++) {
    ctx.fillText(y, 0, y * PIXEL_SIZE + 12); // Подписи сбоку
  }
}

drawGrid();
addLabels();

// Используем функцию
printWord("Abc");
