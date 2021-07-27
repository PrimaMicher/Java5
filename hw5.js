// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"

 let content = document.getElementById ('content');
 console.log(content.textContent);

// -- отримує текст з блоку з id "rules"

// let rules = document.getElementById("rules");
// console.log(rules.textContent);

// -- замініть текст параграфа з id 'content' на будь-який інший
document.getElementById("content").textContent= 'Hello';

// -- замініть текст параграфа з id 'rules' на будь-який інший
document.getElementById('rules').textContent='Now we create new Rules';

// -- змініть кожному елементу колір фону на червоний
 let p =document.getElementsByTagName('p');
console.log(p);
for (let i = 0; i < p.length; i++) {
 p[i].style.background= 'red';
}

let divEl = document.getElementsByTagName('div');
console.log(divEl);

for (let i = 0; i < divEl.length; i++) {
 divEl[i].style.background= 'red';
}

let ulElem = document.getElementsByTagName('ul');
console.log(ulElem);


for (let i = 0; i < ulElem.length; i++) {
 ulElem[i].style.background = 'red';
}

// -- змініть кожному елементу колір тексту на синій
for (let i = 0; i < p.length; i++) {
 p[i].style.color= 'blue';
}

for (let i = 0; i < divEl.length; i++) {
 divEl[i].style.color = 'blue';

}

for (let i = 0; i < ulElem.length; i++) {
 ulElem[i].style.color = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

let rules = document.getElementById('rules');
console.log(rules.classList);

// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ексь
let fc_rules = document.getElementsByClassName('fc_rules');
console.log(fc_rules);



// -- поміняти колір тексту у всіх елементів fc_rules на червоний



for (let i = 0; i < fc_rules.length; i++) {
 fc_rules[i].style.color= 'red';

}

