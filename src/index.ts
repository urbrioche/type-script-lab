// ---基本類型---
let str: string = 'bruce'
let str1: string;
str1 = "bruce2";

let num: number = 1000;
let boo: boolean = true;
let n: null = null;
let un: undefined = undefined;
let test: any = true;

// 陣列
let arr: string[] = ['a', 'b'];
let arr2: string[][] = [['aa', 'bb']];

// 元組
let tuple: [number, string, boolean] = [1, 'a', true];
let tuple2: [string, string][] = [['a', 'b']];

// ---enum---
// 開直播api -> 獲取直播狀態
// 成功 失敗 直播中
enum LiveStatus {
    SUCCESS = 0,
    FAIL = -1,
    STREAMING = 1
}

const status1 = LiveStatus.SUCCESS;
console.log(status1);

// ---union---
let aaa: number | string;
aaa = 1000;
aaa = 'str';

// ---type---
type A = number | string;
let a1: A;
a1 = 999;
a1 = 'str';
// 這個會報錯
// a1 = true;

type B = boolean | string;
let b1: B;
b1 = true;

// ---interface---
interface User {
    name: string;
    age: number;
}

// ---object---
type Card = {
    name: string
    desc: string
}

interface Card2 {
    name: string
    desc: string
}

interface Card2 {
    age: number
    // optional
    //age?: number
}

// 少寫一個property就會警告
const obj: Card2 = {
    name: 'bruce',
    desc: '...',
    age: 100,
}

// type vs interface 差別
// type可擴充，interface不可擴充

// 上面宣告兩個名稱一樣的interfce -> Card2 
// -> 不會報錯，表示可擴充
// -> 相對的obj也要包含age，不然會報錯
// -> 如果不讓obj報錯的話，要宣告成age?，表示可選

// ---object---
// 參數
// function hello(){}
function hello(a: string, b: string) {
    // 推論型別
    return a + b;
}

function hello2(a: string, b: string): number {
    // 指定型別
    console.log(a, b);
    return 999;
}

function hello3(a: number, b: boolean, c: string) {
    return 100;
}

// undefined
function test2(a: number) {
    console.log(a);
}


function hello4(name: string, age?: number) {
    // 直接這樣寫會報錯，因為test2的age必須是number，但這邊的age可能是undefined
    // test2(age);
    // 改成下面的寫法
    if (age === undefined) {
        return -1;
    }
    test2(age)

    // 因為age為可選，所以回傳值的型別可能是number|undefined
    return age;
}

// 箭頭函式
const func = () => {

}

const func2 = () => {
    // 自動推導為number型別
    return 1;
}

// ---斷言 as unknown---
// 常用在api的部分

type Data = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    // 這邊類型會變any，因為type script無法推導
    const data = await res.json();
}

const data1: Data = {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false
}

type Beta = {
    name: string,
}

// 假設data1是動態的
const beta = data1 as unknown as Beta


// ---class---
// private 私有
// public 公開
// protected 受保護

class Live {
    roomName: string
    private id: string
    protected name: string

    constructor(roomName1: string, id1: string, name1: string) {
        console.log('建立直播中...');
        this.roomName = roomName1;
        this.id = id1;
        this.name = name1;
    }

    start() {

    }
}

const live = new Live('1號', '0001', 'bruce');
console.log(live);

class Live2 {
    // 真正的JavaScript私有變數
    #name

    constructor(name: string) {
        this.#name = name;
    }
}

interface CarProps {
    name: string
    age: number
}

// 實作interface
class Car implements CarProps {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

// ---泛型---

function print<T>(data: T) {
    console.log('data', data);
}

print<number>(1);
// 會報錯
// print<number>("123");

print<string>('Hello');
print<boolean>(true);

class Print<T> {
    data: T;

    constructor(d: T) {
        this.data = d;
    }
}

const p = new Print<number>(999);
const p1 = new Print<string>('Bruce');
console.log('p', p);
console.log('p1', p1);

// ---utility---
// record
// https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type
interface CatInfo {
    age: number;
    breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
    miffy: {age: 10, breed: "Persian"},
    boris: {age: 5, breed: "Maine Coon"},
    mordred: {age: 16, breed: "British Shorthair"},
};

console.log(cats.boris);

// pick
// https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
};

console.log(todo);

// Omit
// https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys