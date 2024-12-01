export function diff(a: number, b: number): number {
  return Math.abs(b - a);
}

export function count(a: number, l: number[]): number {
  let times: number = 0;
  for (let val of l) {
    if (val == a) {
      times += 1;
    }
  }
  return times;
}

//Input file lecture
let text: string = await Deno.readTextFile("input.txt");
let list1: number[] = [];
let list2: number[] = [];

for (let val of text.split("\n")) {
  let arr: string[] = val.split("   ");
  if (arr.length == 2) {
    let num1: number = Number(arr[0]);
    let num2: number = Number(arr[1]);
    list1.push(num1);
    list2.push(num2);
  }
}
list1 = list1.sort();
list2 = list2.sort();

//First part
let suma: number = 0;
for (let i: number = 0; i < list1.length; i++) {
  suma += diff(list1[i], list2[i]);
}
console.log("First part: ", suma);

//Second Part
let similarity: number = 0;
for (let val of list1) {
  similarity += val * count(val, list2);
}
console.log("Second part: ", similarity);
