// http://aka.ms/typescript/3

// type Animal = {
//     name: string;
//   };
  
//   type Human = {
//     firstName: string;
//     lastName: string;
//   };
  
//   type GetRequiredInformation<TType> = any;
  
//   export type RequiredInformationForAnimal =
//     GetRequiredInformation<Animal>;
  
//   export type RequiredInformationForHuman =
//     GetRequiredInformation<Human>;


  type Animal = {
    name: string;
  };
  
  type Human = {
    firstName: string;
    lastName: string;
  };
  
  // 1. 把 any 改成泛型
  type GetRequiredInformation<TType> = TType extends Animal 
    ? { age: number}
    : TType extends Human
    ? { socalSecurityNumber: number}
    : TType extends {planet: string}
    ? { whyAreYouHere: string }
    : never

  export type RequiredInformationForAnimal =
    GetRequiredInformation<Animal>;
  
  export type RequiredInformationForHuman =
    GetRequiredInformation<Human>;
 
  export type RequiredInformationForAlien = 
    GetRequiredInformation<{planet: string}>

  
