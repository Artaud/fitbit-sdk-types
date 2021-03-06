import { scientific } from 'scientific';
const arr = new Float32Array([1, 2, 3, 4, 5]);
const range1: Float32Array = scientific.range(3);
const range2: Float32Array = scientific.range(1, 3);
const range3: Float32Array = scientific.range(1, 10, 2);
const stride: Float32Array = scientific.stride(arr, 3);
const std: number = scientific.std(arr);
const variance: number = scientific.variance(arr);
const argmax: number = scientific.argmax(arr);
const argmin: number = scientific.argmin(arr);
const max: number = scientific.max(arr);
const min: number = scientific.min(arr);
const mean: number = scientific.mean(arr);
const div1: Float32Array = scientific.div(arr, arr);
const div2: Float32Array = scientific.div(arr, 3);
const div3: Float32Array = scientific.div(3, arr);
const mul1: Float32Array = scientific.mul(arr, arr);
const mul2: Float32Array = scientific.mul(arr, 3);
const mul3: Float32Array = scientific.mul(3, arr);
const sub1: Float32Array = scientific.sub(arr, arr);
const sub2: Float32Array = scientific.sub(arr, 3);
const sub3: Float32Array = scientific.sub(3, arr);
const add1: Float32Array = scientific.add(arr, arr);
const add2: Float32Array = scientific.add(arr, 3);
const add3: Float32Array = scientific.add(3, arr);
const sqrt: Float32Array = scientific.sqrt(arr);
const square: Float32Array = scientific.square(arr);
const abs: Float32Array = scientific.abs(arr);
