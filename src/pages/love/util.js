export function calcCoords(coords) {
  const width = window.innerWidth;
  const rate = width / 400;
  const coordsArr = coords.split(",");
  for (let i = 0; i < coordsArr.length; i++) {
    coordsArr[i] *= rate;
  }
  return coordsArr.join(",");
}

export function calcCoord(coord) {
  const width = window.innerWidth;
  const rate = width / 400;
  return coord * rate;
}