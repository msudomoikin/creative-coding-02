import { PIXEL_SIZE } from "./consts.js";
import blue from "./colors.js";

import { getRandomPalleteColor, lightenColor } from "./utls.js";

import { ctx } from "./main.js";

export function drawTriangle(x, y) {
    // Выбираем случайный угол для вершины с углом 90 градусов
    const corner = Math.floor(Math.random() * 4);
  
    // Рисуем треугольник
    ctx.beginPath();
    switch (corner) {
      case 0: // верхний левый угол
        ctx.moveTo(x * PIXEL_SIZE, y * PIXEL_SIZE);
        ctx.lineTo(x * PIXEL_SIZE, (y + 1) * PIXEL_SIZE);
        ctx.lineTo((x + 1) * PIXEL_SIZE, y * PIXEL_SIZE);
        break;
      case 1: // верхний правый угол
        ctx.moveTo((x + 1) * PIXEL_SIZE, y * PIXEL_SIZE);
        ctx.lineTo(x * PIXEL_SIZE, y * PIXEL_SIZE);
        ctx.lineTo((x + 1) * PIXEL_SIZE, (y + 1) * PIXEL_SIZE);
        break;
      case 2: // нижний правый угол
        ctx.moveTo((x + 1) * PIXEL_SIZE, (y + 1) * PIXEL_SIZE);
        ctx.lineTo(x * PIXEL_SIZE, (y + 1) * PIXEL_SIZE);
        ctx.lineTo((x + 1) * PIXEL_SIZE, y * PIXEL_SIZE);
        break;
      case 3: // нижний левый угол
        ctx.moveTo(x * PIXEL_SIZE, (y + 1) * PIXEL_SIZE);
        ctx.lineTo(x * PIXEL_SIZE, y * PIXEL_SIZE);
        ctx.lineTo((x + 1) * PIXEL_SIZE, (y + 1) * PIXEL_SIZE);
        break;
    }
    ctx.closePath();
  
    // Закрашиваем треугольник
    ctx.fillStyle = getRandomPalleteColor(blue); // Цвет треугольника
    ctx.fill();
  }


export  function drawGrid() {
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


  export function drawPixel(x, y, height) {
    // Выбираем случайный цвет
    
    // Изменяем светлоту цвета в зависимости от высоты
    const lightness = (height / canvas.height) * 100; // вычисляем светлоту в процентах
    let color = getRandomPalleteColor(blue);
    color = lightenColor(color, lightness);
    ctx.fillStyle = color;
  
    // Закрашиваем пиксель


    ctx.fillRect(x * PIXEL_SIZE, y * PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);
  
    // Рисуем внутри пикселя треугольник
    drawTriangle(x, y);
  }
