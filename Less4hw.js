//створити функцію яка виводить масив
let array=[1,6,7,8];
function showArray(arr) {
let temp=arr;
console.log(temp)
}
showArray(array);

//створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
let num=prompt("enter number of array elements ");
function fillRandomArray() {
    let arr1=[];
    for (let i = 0; i <num; i++) {
        arr1[i]=parseInt(Math.random()*10);

    }
    return arr1
}
showArray(fillRandomArray());


// створити функцію яка приймає три числа та виводить та повертає найменьше
let num1=prompt("enter 1st number");
let num2=prompt("enter 1st number");
let num3=prompt("enter 1st number");
function getMin(a,b,c) {

    let temp = [a, b, c];

    temp.sort(function (a, b) {
        return a - b;
    });
    console.log(temp[0]);
    return temp[0];
}
    getMin(num1, num2, num3);

//створити функцію яка приймає три числа та виводить та повертає найбільше.
function getMax(a,b,c) {
    let temp = [a, b, c];

    temp.sort(function (a, b) {
        return b - a;
    });
    console.log(temp[0]);
    return temp[0];

}

getMax(num1,num2,num3);

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

function f() {
    let args = [];
    for (let i = 0; i < arguments.length; i++) {
        args[i] = arguments[i];
    }
    args.sort(function (a, b) {
        return  a-b;
    });
    console.log(args[args.length-1]);
return args[0];
}
f(1,2,3,4,5);

//- створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
function sumArraysElements(arr) {
   let array=[];
   array=arr;
   let temp=0;
    for ( i = 0; i <array.length ; i++) {
       temp+= array[i];

    }
    console.log(array);
    console.log(temp);
return temp;
}
sumArraysElements([1,2,3,4,5]);
//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function middleValueArraysElements(arr) {
    let array=[];
    array=arr;
    let temp=0;
    for ( i = 0; i <array.length ; i++) {
        temp+= array[i];

    }
    temp/=array.length;
    console.log(array);
    console.log(temp);
    return temp;
}
middleValueArraysElements([1,2,3,4,5]);
//Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
function getNumberObjInArr(arr) {
    let array=[];
    array=arr;
    let i=0;
    for (const arrElement of array) {
        if(typeof arrElement==="object"){
            i++
        }
    }
    console.log(i);
    return i;
}
getNumberObjInArr([{},{},{},{}]);

//Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

function getNumberObjValInArr(arr) {
    let array = [];
    array = arr;
    let i = 0;
    for (const arrElement of array) {
        if (typeof arrElement === 'object'&& Array.isArray(arrElement)===false) {
            for (const arrElementElement in arrElement) {


                i++

            }
        }

    }
    console.log(i);
    return i;
}
getNumberObjValInArr([{a:0,b:"o"},{c:7,d:99,e:"koko"},{asd:"dsa"},["a","b","c"]]);

/* створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
Приклад
[1,2,3,4]
[2,3,4,5]
результат
[3,5,7,9]*/

function f1(a,b) {
    let arr1=[];
    let arr2=[];
    let result=[];
    arr1=a;
    arr2=b;
   if(arr1.length>arr2.length){
       result.length=arr1.length;
   }
   else {result.length=arr2.length}
    for (let i = 0; i <result.length ; i++) {
      result[i] = arr1[i]+arr2[i];
    }
console.log(result);
return result;
}

f1([1,2,3,4],[2,3,4,5]);

//- *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
function exchangeElem(arr,i) {
    let arr3 = [];
    arr3 = arr;
    let b = i;
    for (let j = 0; j < arr3.length; j++) {
        if (j === b) {
            b = arr3[j + 1];
            arr3[j + 1] = arr3[j];
            arr3[j] = b;
        }


    }
    console.log(arr3);
    return arr3
}

exchangeElem([1,2,3,4,5,6,7,8,9],5);





/* *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
Двожина масиву від 2 до 100
Приклад
[1,0,6,0,3] => [1,6,3,0,0]
[0,1,2,3,4] => [1,2,3,4,0]
[0,0,1,0]   => [1,0,0,0]
*/
//1 варіант
function f2(arr) {
    let array=arr;

    let k=0;
    for(let i=0;i<array.length;i++){
        if(array[i]===0){
            k++
        }
    }
    array=array.toString();
    array=array.replace(/0/g,'');
    array=array.replace(/,/g,'');
    array=array.split('');
    for(let j=0;j<k;j++){
        array.push(0);
    }
    for (let i = 0; i <array.length ; i++) {
       array[i] = parseInt(array[i]);
    }
console.log(array);
    }
    f2([0,1,2,0,0,3,4]);
// 2 варіант

function f3(arr) {
    let array=arr;
let array2=[];
    let k=0;
    for(let i=0;i<array.length;i++){
        if(array[i]===0){
            k++
        }
    }
    for (let arrayElement of array) {
        if (arrayElement !== 0) {
            array2.push(arrayElement);
        }
    }
    for (let i = 0; i <k ; i++) {
        array2.push(0)
    }
    console.log(array2);
}
f3([0,1,2,0,0,3,4]);



/*Створити функцію яка :
- Додає в боді блок з текстом "Hello owu"
- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
 Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
Для кожної властивості створити всередені блока автомоблія свій блок*/

function addDiv(i) {

    let str = "Hello owu";
   i= document.createElement('div');
   i.id=`${i}`;
    i.innerText=str;

    document.body.appendChild(i);

}

addDiv("div1");

// function addToBodyEl(arguments) {
//     for (let i = 0; i <arguments.length ; i++) {
//         let argument;
//         if(i===0){
//
//             for ( argument of arguments[0]) {
//                 argument = document.createElement(argument);
//             argument.id=`${i++}`;
//                 document.body.appendChild(argument);
//             }
//     }
//     if(i!==0){
//
//                 for (let arg of arguments[1]) {
//                    argument.innerText = arg;
//                 }
//
//         }
//
//     }
//
// }

//addToBodyEl([['div','p','h1'],['lorem','paragrath','заголовок']]);

function addToBodyEl1(arguments) {
    let c;
   let arrn;
    let arrs;
    let m=[];

    arrs= arguments.slice(-3);
   arrn= arguments.slice(0,3);

    for (const Element of arrn) {
         c = document.createElement(Element);
        m.push(c);
        document.body.appendChild(c);
}
    for (let i = 0; i < arrs.length; i++) {

        m[i].innerText=arrs[i];
    }

}

addToBodyEl1([`div`,'p','h1','lorem','paragrath','заголовок']);

//- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
function f4(arr,id) {


   let arrr= document.getElementsByTagName('*');
 console.log(arrr);
    for (const argument of arrr) {

       if(document.getElementById(id)){
          document.getElementById(id).innerHTML=arr;
       }
      else{
           alert("такого інденеіфікатора немає в документі");
        break;

      }
       }




}
f4(["запорожец",'жигули','москвич','lada'],'car');

//Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці

function f5(arr,id) {
    let m=[];
    let arrr= document.getElementsByTagName('*');
     console.log(arrr);
    let divcar=document.getElementById(id);


            for (let i = 0; i <arr.length ; i++) {
            let dd= document.createElement('div');
                  m.push(dd);
               divcar.appendChild(dd);
            }
   for (let i = 0; i <arr.length ; i++) {
        m[i].innerText=arr[i];
     }



}
f5(["запорожец",'жигули','москвич','lada'],'car');


/*  **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",

та повертає масив цих з'єднаних об'єктів.

    Приклад масивів:*/

    let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true},
     {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];

let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];



function concat2Objects(arr1,arr2) {
    let obj;
    let newarr=[];
    for (let i = 0; i <arr1.length ; i++) {
        for (let j = 0; j <arr2.length ; j++) {
            if (arr1[i].id === arr2[j].user_id) {
            obj=Object. assign(arr1[i],arr2[j]);
           newarr.push(obj);
        }
        }
    }
console.log(newarr);
return newarr;
}
concat2Objects(usersWithId,citiesWithId);

/* ***- беремо завдання з правилами з укроку №3 :
 Та робимо це функцією.При цьому правила отримувати через аргумент.
 "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
 При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
 Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
 //todo add rules
 */
let rules = [

    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },

    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {

        title: 'Пятое правило Бойцовского клуба.',

        body: 'Бойцы сражаются без обуви и голые по пояс.'

    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },
];

function createDocument(arguments) {
    let a;
    for (const element of arguments) {
        a= document.createElement('div');
        document.body.appendChild(a);
        if(element.title){
            let b=   document.createElement('h2');
            b.innerText=JSON.stringify(element.title);
            a.appendChild(b);
        }
        if(element.body){
      let c = document.createElement('p');
         c.innerText=JSON.stringify(element.body);
        a.appendChild(c);
        }

    }
}
createDocument(rules);


