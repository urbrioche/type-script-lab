+ 安裝type script
    + npm install typescript -g
+ 安裝完看一下type script版本
    + tsc -v
+ type scirpt編譯
    + 特定檔案
        + tsc file-name.ts 
    + 檔案有變動自動編譯
        + tsc --watch 
+ 產生type script config
    + tsc --init
+ 設定rootDir in tsconfig.json
    + 建立src資料夾
    + "rootDir": "./src"
+ 設定outDir in tsconfig.json
    + 建立dist資料夾
    + "outDir": "./dist"
+ 執行tsc指令，看一下結果
    + tsc (不加檔名)
+ 在dist建立index.html檔案
    + 在vs code打一個 ！，會出現html的模板
+ 到vs code的extension安裝Live Server
+ 設定inlineSourceMap
    + "inlineSourceMap": true
+ 基本類型介紹
    + string, number, boolean, null, undefined, any
    + 通常可以省略，因為會自動推論
+ enum介紹
+ union介紹
    + 一個變數多個型別
+ type介紹
+ interface介紹
+ object介紹
+ function介紹
+ unknown介紹
+ class介紹
+ 泛型介紹
+ utility介紹
