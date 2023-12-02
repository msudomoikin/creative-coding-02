export function getRandomPalleteColor(pallet) {
  const randomIndex = Math.floor(Math.random() * pallet.length);
  return pallet[randomIndex];
}



export function getRandomShade() {
    const shade = Math.floor(Math.random() * 256);
    return `rgb(${shade}, ${shade}, ${shade})`;
  }
  

export function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
 export function lightenColor(color, percent) {
    const num = parseInt(color.replace("#",""), 16),
          amt = Math.round(2.55 * percent),
          R = (num >> 16) + amt,
          G = (num >> 8 & 0x00FF) + amt,
          B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1);
}