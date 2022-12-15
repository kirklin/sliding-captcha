export function sum(x: number, y: number) {
  return x + y;
}

export function square(x: number) {
  return x * x;
}

export function getRandomNumberByRange(start: number, end: number) {
  return Math.round(Math.random() * (end - start) + start);
}
export const appendStyle = (style: string) => {
  const styleEl = document.createElement("style");
  styleEl.innerHTML = style;
  document.head.append(styleEl);
};
