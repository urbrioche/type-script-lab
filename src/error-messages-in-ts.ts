// https://aka.ms/typescript/9
// export const deepEqualCompare = <Arg>(
//     a: Arg,
//     b: Arg
//   ): boolean => {
//     if (Array.isArray(a) || Array.isArray(b)) {
//       throw new Error(
//         "You cannot compare two arrays using deepEqualCompare"
//       );
//     }
//     return a === b;
//   };

export const deepEqualCompare = <Arg>(
    a: Arg extends any[] ? `Don't pass an array`: Arg,
    b: Arg
  ): boolean => {
    if (Array.isArray(a) || Array.isArray(b)) {
      throw new Error(
        "You cannot compare two arrays using deepEqualCompare"
      );
    }
    return a === b;
  };

deepEqualCompare('a','b');
//  當加上Arg extends any[] ? `Don't pass an array`: Arg後，這個在編譯時就會報錯
// deepEqualCompare([],[])

// 回答額觀眾的問題
// can you explain keyof

interface Letters {
    a: string;
    b: string;
    c: string;
}

type LatterAsUnion = 'a' | 'b' | 'c'

// 這邊只能放'a' 'b' 'c', 否則會報錯
const letter: LatterAsUnion = 'a'

// 改成keyOf
type LatterAsKeyOf = keyof Letters;
// 同樣的, 這邊只能放'a' 'b' 'c', 否則會報錯
const letterUseKeyOf: LatterAsKeyOf = 'c';


// key value
interface Letters2 {
    a: number;
    b: string;
    c: {
        name: string;
    }
}

type LetterValues = Letters2['c' | 'a'];
// 會報錯, 因為'c'是object, 'a'是number
// const letterString: LetterValues = 'this is any string';
const letterNumber: LetterValues = 2;
const letterObjOfC: LetterValues = {name: 'Jerry'};