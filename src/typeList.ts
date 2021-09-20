/* eslint-disable @typescript-eslint/no-unused-vars */

// boolean
let bool: boolean = true;

// number
let num: number = 0;

// string
let str: string = "A";

// Array　書き方が二通りある。
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple 要素の順番の型を指定することができる
let tuple: [number, string] = [0, "A"];

// any なんでもこい！！！！
let any1: any = false;

// void 関数がなにも返却してない場合。JSは暗黙的にvoid型にしてくれるので何も書かなくてもいい
const funcA = (): void => {
  const test = "TEST";
};

// null
let null1: null = null;

// undefinded
let undefined1: undefined = undefined;

// object あんまり使わん。2行目のやつはつかうよ
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "AAAAAA" };
