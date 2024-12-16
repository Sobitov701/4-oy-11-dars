//find,findIndex

//1-msol
//Massiv ichida 5 ga karrali bo‘lgan birinchi elementni toping.

let num1 = [3, 7, 10, 14, 25];

let sum1 = num1.find((element) => element % 5 === 0);

console.log(sum1);

//2-misol
//Massiv ichida 20 dan kichik bo‘lgan birinchi toq sonning indeksini toping.

let num2 = [22, 18, 17, 15, 20];

let sum2 = num1.find((element) => element < 20);

console.log(sum2);

//3-misol
//Massiv ichida 0 bilan tugaydigan birinchi elementni toping.

let num3 = [3, 70, 25, 50, 14];

let sum3 = num3.find((element) => element % 10 == 0);

console.log(sum3);

//some

//4-misol
// Massivda 50 ga teng yoki undan katta elementlar bor-yo‘qligini aniqlang.

let num4 = [22, 18, 45, 51, 30];

let sum4 = num4.some((element) => element >= 50);

console.log(sum4);

//5-misol
//Massivda manfiy sonlar bor-yo‘qligini aniqlang.

let num5 = [1, 3, 56, -76, 3, -3];

let sum5 = num5.some((element) => element < 0);

console.log(sum5);

//6-misol
//Massivda 3 ga karrali bo‘lgan sonlar bor-yo‘qligini tekshiring.

let num6 = [2, 5, 8, 9, 54, 367];

let sum6 = num6.some((element) => element % 3 == 0);

console.log(sum6);

//every

//7-misol
//Massivdagi barcha sonlar musbat ekanligini tekshiring.

let num7 = [1, 4, 5, 7];

let sum7 = num7.every((element) => element > 0);

console.log(sum7);

//8-misol
//Massivdagi barcha sonlar 10 dan katta ekanligini tekshiring.

let num8 = [12, 3, 454, 32, 97];

let sum8 = num8.every((element) => element > 10);

console.log(sum8);

//9-misol
//Massivdagi barcha sonlar toq ekanligini aniqlang.

let num9 = [3, 5, 7, 9, 1, 13];

let sum9 = num9.every((element) => element % 2 != 0);

console.log(sum9);

//charAt

//10-misol
//Berilgan matnning uchinchi belgisi nima ekanligini aniqlang.

let num10 = "salom, dunyo";

let sum10 = num10.charAt(2);

console.log(sum10);

//11-misol
//Matnning oxiridan ikkinchi belgisini toping.

let num11 = "salom, dunyo, hello world";

let sum11 = num11.charAt(num11.length - 2);

console.log(sum11);

//charCodeAt

//12-misol
// charCodeAt
// Berilgan matnning birinchi belgisi uchun Unicode qiymatini aniqlang.

let num12 = "salom, dunyo,CR7";

let sum12 = num12.charCodeAt(0);

console.log(sum12);

//13-misol
// Matnning beshinchi belgisining Unicode qiymatini toping.

let num13 = "salom, dunyo,BMW,CR7";

let sum13 = num13.charCodeAt(4);

console.log(sum13);

//slice

//14-misol
//Berilgan matndan birinchi 5 ta belgini ajratib oling.

let num14 = "salom, dunyo";

let sum14 = num14.slice(0, 5);

console.log(sum14);

//15-misol
// Matnning oxirgi 3 ta belgisini ajratib oling.

let num15 = "salom, dunyo";

let sum15 = num15.slice(-3);

console.log(sum15);

//substring

//16-misol
// Matnning 2-pozitsiyadan boshlab 6-pozitsiyagacha bo‘lgan qismini ajrating.

let num16 = "salom, dunyo, CR7";

let sum16 = num16.substring(2, 6);

console.log(sum16);

//17-misol
// Matnning oxirgi uchta belgisini substring yordamida oling.

let num17 = "salom, dunyo";

let sum17 = num17.substring(num17.length - 3);

//substr

//18-misol
//Matnning 4-pozitsiyadan boshlab 5 ta belgisini oling.

let num18 = "slom, dunyo";

let sum18 = num18.substr(4, 5);

console.log(sum18);

//19-misol
//Berilgan matnning boshidan 7 ta belgisini substr yordamida ajrating.

let num19 = "salom, dunyo";

let sum19 = num19.substr(0, 7);

console.log(sum19);

//toUpperCase, toLowerCase

//20-misol
//Berilgan matnni faqat katta harflar bilan yozing.

let num20 = "salom, dunyo";

let sum20 = num20.toUpperCase();

console.log(sum20);

//21-misol
//Matnning birinchi yarmidan kichik harflar, ikkinchi yarmidan katta harflar yarating.

//concat

//22-misol
//Berilgan ikkita matnni birlashtiring.

let num22 = "salom";
let num22_2 = "dunyo";

let sum22 = num22.concat(",", num22_2);

console.log(sum22);

//23-misol
//Matnga qo‘shimcha qilib "!" belgisi qo‘shing va yangi matn yarating.

let num23 = "salom";
let num23_2 = "dunyo";

let sum23 = num23.concat("!", num23_2);

console.log(sum23);

// trim, trimStart, trimEnd

//24-misol
//Matnning boshidagi va oxiridagi bo‘sh joylarni olib tashlang.

let num24 = " salom,dunyo ";

let sum24 = num24.trim();

console.log(sum24);

//25-misol
//Matnning faqat boshidagi bo‘sh joylarni olib tashlang.

let num25 = "salom, dunyo ";

let sum25 = num25.trimEnd();

console.log(sum25);

//padStart, padEnd

// 26-misol
//Berilgan matnni boshidan 10 belgiga to‘ldiring, “*” belgisi bilan.

let num26 = "salom, dunyo";

let sum26 = num26.padStart(10, "*");

console.log(sum26);

//27-misol
//Matnni oxiridan 15 belgiga “#” bilan to‘ldiring.

let num27 = "salom, dunyo";

let sum27 = num27.padEnd(15, "#");

console.log(sum27);

//repeat

//28-misol
//Matnni 3 marta takrorlab yangi matn yarating.

let num28 = "salom,dunyo";

let sum28 = num28.repeat(3);

console.log(sum28);

//29-misol
//Belgini 5 marta takrorlab, string yaratib oling.

let num29 = "salom, dunyo";

let sum29 = num29.repeat(5);

console.log(sum29);

//replace, replaceAll

// 30-misol
//Matnning ichidagi birinchi "a" harfini "o" harfiga almashtiring.

let num30 = "salom, dunyo";

let sum30 = num30.replace(a, o);

console.log(sum30);

//31-misol
//Matnning barcha “ ” (bo‘sh joy) belgilarini “_” belgilariga almashtiring.

let num31 = "salom, dunyo";

let sum31 = num31.replaceAll("", "_");

console.log(sum31);

//split

//32-misol
//Matnni har bir so‘zdan ajratib massivga aylantiring.

let num32 = "salom, dunyo";

let sum32 = num32.split("");

console.log(sum32);

//33-misol
//Matnni har bir belgidan ajratib massiv yarating.

let num33 = "salom, dunyo";

let sum33 = num33.split("");

console.log(sum33);

//indexOf, lastIndexOf

//34misol
//Matndagi "a" harfi birinchi marta qayerda uchrayotganini aniqlang.

let num34 = "salom, dunyo";

let sum34 = num34.indexOf("a");

console.log(sum34);

//35-misol
//Matndagi "e" harfi oxirgi marta qayerda uchrayotganini toping.

let num35 = "salom, dunyo";

let sum35 = num35.lastIndexOf("e");

console.log(sum35);

//includes

//36-misol
//Matn ichida "hello" so‘zi bor-yo‘qligini tekshiring.

let num36 = ["salom, hello, world"];

let sum36 = num36.includes("hello");

console.log(sum36);

//37-misol
//Matn ichida "!" belgisi mavjudligini aniqlang.

let num37 = ["salom, dunyo"];

let sum37 = num37.includes("!");

console.log(sum37);

//search

//38-misol
//Matn ichida birinchi "good" so‘zi qayerda joylashganini aniqlang.

let num38 = "salom, good, hello, apple";

let sum38 = num38.search("good");

console.log(sum38);

//39-misol
//Matnda raqam uchraydigan joyni aniqlang.

//startsWith, endsWith

//40-misol
//Matn "Hello" so‘zi bilan boshlanadimi yoki yo‘qmi, tekshiring.

let num40 = "hello, olma, banan, behi, nok";

let sum40 = num40.startsWith("hello");

console.log(sum40);

//41-misol
//Matn oxirida "bye" so‘zi borligini aniqlang.

let num41 = "salom, dunyo, bye";

let sum41 = num41.endsWith("bye");

console.log(sum41);

//Massiv ichida obyektlar

//42-misol
//1. users massivida age qiymati 25 dan katta bo‘lgan foydalanuvchilarni toping.

let users = [
  { id: 1, name: "Ali", age: 25, isActive: true },
  { id: 2, name: "Bobur", age: 30, isActive: false },
  { id: 3, name: "Zara", age: 22, isActive: true },
];

let num42 = users.forEach((value) => {
  if (value.age > 25) {
    console.log(value);
  }
});

//43-misol
//2. products massivida price qiymati 500 dan kichik bo‘lgan mahsulotlarni aniqlang.

let products = [
  { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
  { id: 102, name: "Phone", price: 500, rating: 4.2 },
  { id: 103, name: "Tablet", price: 300, rating: 4.8 },
];

let num43 = products.forEach((value) => {
  if (value.price < 500) {
    console.log(value);
  }
});

//44-misol
//3. 4tasks4 massivida status qiymati "pending" bo‘lgan vazifalarni boshqa massivga ajrating.

let tasks = [
  { id: 1, title: "Do homework", status: "completed" },
  { id: 2, title: "Clean room", status: "pending" },
  { id: 3, title: "Go shopping", status: "pending" },
];

let sum44 = [];

let num44 = tasks.forEach((value) => {
  if (value.status == "pending") {
    sum44.push(value);
  }
});

console.log(sum44);

//45-misol
//4. users massivida isActive qiymati true bo‘lgan foydalanuvchilar sonini hisoblang.

let users2 = [
  { id: 1, name: "Ali", age: 25, isActive: true },
  { id: 2, name: "Bobur", age: 30, isActive: false },
  { id: 3, name: "Zara", age: 22, isActive: true },
];

let sum45 = 0;

let num45 = users2.forEach((value) => {
  if (value.isActive) {
    sum45++;
  }
});

console.log(sum45);

//46-misol
//5. products massivida rating qiymati eng yuqori bo‘lgan mahsulotni toping.

let products2 = [
  { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
  { id: 102, name: "Phone", price: 500, rating: 4.2 },
  { id: 103, name: "Tablet", price: 300, rating: 4.8 },
];

let max = products2[0].rating;
let maxProduct = products2[0];

let num46 = products2.forEach((value) => {
  if (value.rating < max) {
    max = value.rating;
    maxProduct = value;
  }
});

console.log(maxProduct);

//47-misol
//6. users massividagi har bir foydalanuvchining faqat name va age qiymatlarini ajratib oling.

let users3 = [
  { id: 1, name: "Ali", age: 25, isActive: true },
  { id: 2, name: "Bobur", age: 30, isActive: false },
  { id: 3, name: "Zara", age: 22, isActive: true },
];

let num47 = users3.map((value) => {
  delete users3.id;
  delete users3.isActive;
  return users3;
});

console.log(num47);

//48-misol
//7. products massivida price qiymati eng kichik bo‘lgan mahsulotni aniqlang.

let products3 = [
  { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
  { id: 102, name: "Phone", price: 500, rating: 4.2 },
  { id: 103, name: "Tablet", price: 300, rating: 4.8 },
];

let min = products3.price[0];

let minPrice3 = products3[0];

let num48 = products3.forEach((value) => {
  if (value.price > max) {
    max = value.price;
    minPrice3 = value;
  }
});

console.log(num48);

//49-misol
//8. tasks massivida title qiymati "Clean room" bo‘lgan vazifaning indeksini aniqlang.

let tasks2 = [
  { id: 1, title: "Do homework", status: "completed" },
  { id: 2, title: "Clean room", status: "pending" },
  { id: 3, title: "Go shopping", status: "pending" },
];

let num49 = tasks.findIndex((task) => task.title === "Clean room");

console.log(num49);

//50-misol
//9. users massivida barcha foydalanuvchilarning age qiymatlari yig‘indisini hisoblang.

let users4 = [
  { id: 1, name: "Ali", age: 25, isActive: true },
  { id: 2, name: "Bobur", age: 30, isActive: false },
  { id: 3, name: "Zara", age: 22, isActive: true },
];

let sum50 = 0;

let num50 = users4.forEach((value) => {
  sum50 += value.age;
});

console.log(sum50);

//51-misol
//10. products massividagi har bir mahsulotning price qiymatini 10% ga kamaytirib yangi massiv yarating.

let products4 = [
  { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
  { id: 102, name: "Phone", price: 500, rating: 4.2 },
  { id: 103, name: "Tablet", price: 300, rating: 4.8 },
];

let num51 = products4.map((value) => {
  value.price = value.price - value.price / 10;
  return products4;
});

console.log(num51);

//52-misol
//11. users massivida name qiymati "Ali" bo‘lgan foydalanuvchini toping.

let users5 = [
  { id: 1, name: "Ali", age: 25, isActive: true },
  { id: 2, name: "Bobur", age: 30, isActive: false },
  { id: 3, name: "Zara", age: 22, isActive: true },
];

let num52 = users5.find((value) => value.name === "Ali");

console.log(num52);

//53-misol
//12. tasks massivida barcha status qiymatlari "completed" ekanligini tekshiring.

let tasks3 = [
  { id: 1, title: "Do homework", status: "completed" },
  { id: 2, title: "Clean room", status: "completed" },
  { id: 3, title: "Go shopping", status: "completed" },
];

let num53 = tasks3.every((value) => value.status === "completed");

console.log(num53);

//54-misol
//13. products massivida rating qiymati 4 dan katta bo‘lgan mahsulotlar sonini hisoblang.

let products5 = [
  { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
  { id: 102, name: "Phone", price: 500, rating: 3.9 },
  { id: 103, name: "Tablet", price: 300, rating: 4.8 },
];

let num54 = products5.filter((value) => value.rating > 4).length;

console.log(num54);

//55-misol
//14. users massivida age qiymati eng katta bo‘lgan foydalanuvchini aniqlang.

let users6 = [
  { id: 1, name: "Ali", age: 25, isActive: true },
  { id: 2, name: "Bobur", age: 30, isActive: false },
  { id: 3, name: "Zara", age: 22, isActive: true },
];

let max2 = products2[0].rating;
let maxUser = products2[0];

let num55 = products2.forEach((value) => {
  if (value.rating < max2) {
    max2 = value.rating;
    maxUser = value;
  }
});

console.log(maxUser);

//56-misol
//tasks massivida har bir title qiymatini bosh harfini katta qilib yangi massiv yarating.

let tasks4 = [
  { id: 1, title: "do homework", status: "completed" },
  { id: 2, title: "clean room", status: "pending" },
  { id: 3, title: "go shopping", status: "pending" },
];

let num56 = tasks4.map((value) => {
  return (tasks4 = value.title.charAt(0).toUpperCase() + value.title.slice(1));
});

console.log(num56);
