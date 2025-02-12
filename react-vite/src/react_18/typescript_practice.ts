// function getTriangleAria(base: number, height: number): number {
//   return (base * height) / 2;
// }
// function getTriangleAriaVoid(base: number, height: number): void {
//   console.log((base * height) / 2);
// }

// import { readFile } from 'fs';

// console.log(getTriangleAria(2, 4));
// getTriangleAriaVoid(2, 5);

// console.log('Start');
// readFile('./StateParent.tsx', (data) => {
//   console.log(data);
// });
// console.log('Endはしない');

// function sleep(duration: number): Promise<void> {
//   console.log(3);
//   return new Promise<void>((resolve) => {
//     setTimeout(resolve, duration);
//   });
// }

// async function returnNumber(num: number): Promise<number> {
//   console.log(2);
//   await sleep(2);
//   console.log(5);
//   return num;
// }

// console.log(1);
// returnNumber(100);
// console.log(4);

// const sleep = (duration: number): Promise<void> => {
//   const p = new Promise<void>((resolve) => {
//     setTimeout(resolve, duration);
//   });
//   return p;
// };

// console.log('1');
// sleep(2000).then(() => {
//   console.log('3');
//   console.log('待ったぞ');
// });
// console.log('2');
