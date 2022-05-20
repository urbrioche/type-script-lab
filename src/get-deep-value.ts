// https://youtu.be/hBk4nV7q6-w
// export const getDeepValue = (
//     obj: any,
//     firstKey: string,
//     secondKey: string
//   ) => {
//     return obj[firstKey][secondKey];
//   };
  
//   const obj = {
//     foo: {
//       a: true,
//       b: 2,
//     },
//     bar: {
//       c: "12",
//       d: 18,
//     },
//   };
  
//   const value = getDeepValue(obj, "foo", "a");

// 1. 先把obj: any 改成泛型
// 2. 把firstKey 改成泛型
// 3. 把secondKey 改成泛型
export const getDeepValue = <
  TObj, 
  TFirstKey extends keyof TObj,
  TSecondKey extends keyof TObj[TFirstKey]
>(
    obj: TObj,
    firstKey: TFirstKey,
    secondKey: TSecondKey,
  ) => {
    return obj[firstKey][secondKey];
  };
  
  const obj = {
    foo: {
      a: true,
      b: 2,
    },
    bar: {
      c: "12",
      d: 18,
    },
  };
  
  // 4. 上面改成反省後, 這邊就可以做型別檢查, firstKey放foo, secondKey就只能放a或b, 放其他的無法通過編譯, 且value也可自動推論
  const value = getDeepValue(obj, "foo", "b");

  // 另一個範例
  const returnWhatIPassIn = (val: string | number | {} | any[]) =>{
      return val;
  }
  
  const returnWhatIPassInGeneric = <TVal>(val: TVal) =>{
      return val;
  }

  const result = returnWhatIPassInGeneric(1);
