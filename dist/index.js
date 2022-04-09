"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Live2_name;
// ---基本類型---
let str = 'bruce';
let str1;
str1 = "bruce2";
let num = 1000;
let boo = true;
let n = null;
let un = undefined;
let test = true;
// 陣列
let arr = ['a', 'b'];
let arr2 = [['aa', 'bb']];
// 元組
let tuple = [1, 'a', true];
let tuple2 = [['a', 'b']];
// ---enum---
// 開直播api -> 獲取直播狀態
// 成功 失敗 直播中
var LiveStatus;
(function (LiveStatus) {
    LiveStatus[LiveStatus["SUCCESS"] = 0] = "SUCCESS";
    LiveStatus[LiveStatus["FAIL"] = -1] = "FAIL";
    LiveStatus[LiveStatus["STREAMING"] = 1] = "STREAMING";
})(LiveStatus || (LiveStatus = {}));
const status1 = LiveStatus.SUCCESS;
console.log(status1);
// ---union---
let aaa;
aaa = 1000;
aaa = 'str';
let a1;
a1 = 999;
a1 = 'str';
let b1;
b1 = true;
// 少寫一個property就會警告
const obj = {
    name: 'bruce',
    desc: '...',
    age: 100,
};
// type vs interface 差別
// type可擴充，interface不可擴充
// 上面宣告兩個名稱一樣的interfce -> Card2 
// -> 不會報錯，表示可擴充
// -> 相對的obj也要包含age，不然會報錯
// -> 如果不讓obj報錯的話，要宣告成age?，表示可選
// ---object---
// 參數
// function hello(){}
function hello(a, b) {
    // 推論型別
    return a + b;
}
function hello2(a, b) {
    // 指定型別
    console.log(a, b);
    return 999;
}
function hello3(a, b, c) {
    return 100;
}
// undefined
function test2(a) {
    console.log(a);
}
function hello4(name, age) {
    // 直接這樣寫會報錯，因為test2的age必須是number，但這邊的age可能是undefined
    // test2(age);
    // 改成下面的寫法
    if (age === undefined) {
        return -1;
    }
    test2(age);
    // 因為age為可選，所以回傳值的型別可能是number|undefined
    return age;
}
// 箭頭函式
const func = () => {
};
const func2 = () => {
    // 自動推導為number型別
    return 1;
};
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
        // 這邊類型會變any，因為type script無法推導
        const data = yield res.json();
    });
}
const data1 = {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false
};
// 假設data1是動態的
const beta = data1;
// ---class---
// private 私有
// public 公開
// protected 受保護
class Live {
    constructor(roomName1, id1, name1) {
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
    constructor(name) {
        // 真正的JavaScript私有變數
        _Live2_name.set(this, void 0);
        __classPrivateFieldSet(this, _Live2_name, name, "f");
    }
}
_Live2_name = new WeakMap();
// 實作interface
class Car {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
// ---泛型---
function print(data) {
    console.log('data', data);
}
print(1);
// 會報錯
// print<number>("123");
print('Hello');
print(true);
class Print {
    constructor(d) {
        this.data = d;
    }
}
const p = new Print(999);
const p1 = new Print('Bruce');
console.log('p', p);
console.log('p1', p1);
const cats = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};
console.log(cats.boris);
const todo = {
    title: "Clean room",
    completed: false,
};
console.log(todo);
// Omit
// https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxhQUFhO0FBQ2IsSUFBSSxHQUFHLEdBQVcsT0FBTyxDQUFBO0FBQ3pCLElBQUksSUFBWSxDQUFDO0FBQ2pCLElBQUksR0FBRyxRQUFRLENBQUM7QUFFaEIsSUFBSSxHQUFHLEdBQVcsSUFBSSxDQUFDO0FBQ3ZCLElBQUksR0FBRyxHQUFZLElBQUksQ0FBQztBQUN4QixJQUFJLENBQUMsR0FBUyxJQUFJLENBQUM7QUFDbkIsSUFBSSxFQUFFLEdBQWMsU0FBUyxDQUFDO0FBQzlCLElBQUksSUFBSSxHQUFRLElBQUksQ0FBQztBQUVyQixLQUFLO0FBQ0wsSUFBSSxHQUFHLEdBQWEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDL0IsSUFBSSxJQUFJLEdBQWUsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBRXRDLEtBQUs7QUFDTCxJQUFJLEtBQUssR0FBOEIsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3RELElBQUksTUFBTSxHQUF1QixDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFFOUMsYUFBYTtBQUNiLG1CQUFtQjtBQUNuQixZQUFZO0FBQ1osSUFBSyxVQUlKO0FBSkQsV0FBSyxVQUFVO0lBQ1gsaURBQVcsQ0FBQTtJQUNYLDRDQUFTLENBQUE7SUFDVCxxREFBYSxDQUFBO0FBQ2pCLENBQUMsRUFKSSxVQUFVLEtBQVYsVUFBVSxRQUlkO0FBRUQsTUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQztBQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRXJCLGNBQWM7QUFDZCxJQUFJLEdBQW9CLENBQUM7QUFDekIsR0FBRyxHQUFHLElBQUksQ0FBQztBQUNYLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFJWixJQUFJLEVBQUssQ0FBQztBQUNWLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFDVCxFQUFFLEdBQUcsS0FBSyxDQUFDO0FBS1gsSUFBSSxFQUFLLENBQUM7QUFDVixFQUFFLEdBQUcsSUFBSSxDQUFDO0FBeUJWLG1CQUFtQjtBQUNuQixNQUFNLEdBQUcsR0FBVTtJQUNmLElBQUksRUFBRSxPQUFPO0lBQ2IsSUFBSSxFQUFFLEtBQUs7SUFDWCxHQUFHLEVBQUUsR0FBRztDQUNYLENBQUE7QUFFRCx1QkFBdUI7QUFDdkIsd0JBQXdCO0FBRXhCLGdDQUFnQztBQUNoQyxnQkFBZ0I7QUFDaEIseUJBQXlCO0FBQ3pCLCtCQUErQjtBQUUvQixlQUFlO0FBQ2YsS0FBSztBQUNMLHFCQUFxQjtBQUNyQixTQUFTLEtBQUssQ0FBQyxDQUFTLEVBQUUsQ0FBUztJQUMvQixPQUFPO0lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCLENBQUM7QUFFRCxTQUFTLE1BQU0sQ0FBQyxDQUFTLEVBQUUsQ0FBUztJQUNoQyxPQUFPO0lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEIsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDO0FBRUQsU0FBUyxNQUFNLENBQUMsQ0FBUyxFQUFFLENBQVUsRUFBRSxDQUFTO0lBQzVDLE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQUVELFlBQVk7QUFDWixTQUFTLEtBQUssQ0FBQyxDQUFTO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkIsQ0FBQztBQUdELFNBQVMsTUFBTSxDQUFDLElBQVksRUFBRSxHQUFZO0lBQ3RDLG9EQUFvRDtJQUNwRCxjQUFjO0lBQ2QsVUFBVTtJQUNWLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtRQUNuQixPQUFPLENBQUMsQ0FBQyxDQUFDO0tBQ2I7SUFDRCxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7SUFFVix1Q0FBdUM7SUFDdkMsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDO0FBRUQsT0FBTztBQUNQLE1BQU0sSUFBSSxHQUFHLEdBQUcsRUFBRTtBQUVsQixDQUFDLENBQUE7QUFFRCxNQUFNLEtBQUssR0FBRyxHQUFHLEVBQUU7SUFDZixnQkFBZ0I7SUFDaEIsT0FBTyxDQUFDLENBQUM7QUFDYixDQUFDLENBQUE7QUFZRCxTQUFlLE9BQU87O1FBQ2xCLE1BQU0sR0FBRyxHQUFHLE1BQU0sS0FBSyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7UUFDeEUsOEJBQThCO1FBQzlCLE1BQU0sSUFBSSxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2xDLENBQUM7Q0FBQTtBQUVELE1BQU0sS0FBSyxHQUFTO0lBQ2hCLE1BQU0sRUFBRSxDQUFDO0lBQ1QsRUFBRSxFQUFFLENBQUM7SUFDTCxLQUFLLEVBQUUsb0JBQW9CO0lBQzNCLFNBQVMsRUFBRSxLQUFLO0NBQ25CLENBQUE7QUFNRCxjQUFjO0FBQ2QsTUFBTSxJQUFJLEdBQUcsS0FBd0IsQ0FBQTtBQUdyQyxjQUFjO0FBQ2QsYUFBYTtBQUNiLFlBQVk7QUFDWixnQkFBZ0I7QUFFaEIsTUFBTSxJQUFJO0lBS04sWUFBWSxTQUFpQixFQUFFLEdBQVcsRUFBRSxLQUFhO1FBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDMUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsS0FBSztJQUVMLENBQUM7Q0FDSjtBQUVELE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUVsQixNQUFNLEtBQUs7SUFJUCxZQUFZLElBQVk7UUFIeEIsb0JBQW9CO1FBQ3BCLDhCQUFLO1FBR0QsdUJBQUEsSUFBSSxlQUFTLElBQUksTUFBQSxDQUFDO0lBQ3RCLENBQUM7Q0FDSjs7QUFPRCxjQUFjO0FBQ2QsTUFBTSxHQUFHO0lBSUwsWUFBWSxJQUFZLEVBQUUsR0FBVztRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNuQixDQUFDO0NBQ0o7QUFFRCxXQUFXO0FBRVgsU0FBUyxLQUFLLENBQUksSUFBTztJQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM5QixDQUFDO0FBRUQsS0FBSyxDQUFTLENBQUMsQ0FBQyxDQUFDO0FBQ2pCLE1BQU07QUFDTix3QkFBd0I7QUFFeEIsS0FBSyxDQUFTLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZCLEtBQUssQ0FBVSxJQUFJLENBQUMsQ0FBQztBQUVyQixNQUFNLEtBQUs7SUFHUCxZQUFZLENBQUk7UUFDWixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNsQixDQUFDO0NBQ0o7QUFFRCxNQUFNLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBUyxHQUFHLENBQUMsQ0FBQztBQUNqQyxNQUFNLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBUyxPQUFPLENBQUMsQ0FBQztBQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztBQVl0QixNQUFNLElBQUksR0FBNkI7SUFDbkMsS0FBSyxFQUFFLEVBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDO0lBQ2xDLEtBQUssRUFBRSxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBQztJQUNwQyxPQUFPLEVBQUUsRUFBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBQztDQUNqRCxDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFZeEIsTUFBTSxJQUFJLEdBQWdCO0lBQ3RCLEtBQUssRUFBRSxZQUFZO0lBQ25CLFNBQVMsRUFBRSxLQUFLO0NBQ25CLENBQUM7QUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRWxCLE9BQU87QUFDUCxnRkFBZ0YifQ==