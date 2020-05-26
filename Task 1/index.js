const deepCopyFunction = (inObject) => {
  let outObject, value, key

  if (typeof inObject !== "object" || inObject === null) {
    return inObject //Возвращает значение, если inObject не является объектом
  }

  //Создание массива или объекта для хранения значений
  outObject = Array.isArray(inObject) ? [] : {}

  for (key in inObject) {
    value = inObject[key]

    //Глубокое копирование объектов
    outObject[key] = deepCopyFunction(value)
  }

  return outObject
}
let originalArray = [37, 3700, "Hello, World!", { insert: "My name is Ivan" }]
console.log("Original array before changes:", ...originalArray)

let shallowCopiedArray = originalArray.slice()
let deepCopiedArray = deepCopyFunction(originalArray)

originalArray[1] = 0 // Изменение оригинала
originalArray[3].insert = "What is your name?" // Изменение оригинала и поверхостной копии

console.log("Original array after changes:", ...originalArray)
console.log("Shallow copy:", ...shallowCopiedArray)
console.log("Deep copy:", ...deepCopiedArray)
