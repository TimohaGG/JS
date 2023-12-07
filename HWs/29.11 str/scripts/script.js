// 1. Напишіть функцію, яка приймає рядок та виводить статистику: кількість літер, кількість цифр та кількість інших
// знаків.

function Statistics(str){
    let letter = 0;
    let numbers = 0;
    let others = 0;
   for(let i = 0;i<str.length;i++){
        if((str.charCodeAt(i) > 64 && str.charCodeAt(i)<91) || (str.charCodeAt(i) > 96 && str.charCodeAt(i)<123))
            letter++;
        else if(str.charCodeAt(i) > 47 && str.charCodeAt(i)<58)
            numbers++;
        else    
            others++;

       
   }
   console.log(`Letters: ${letter}\nNumbers: ${numbers}\nOther: ${others}`);
}
//Statistics("Hello world122");

// 2. Напишіть функцію, яка приймає двозначне число і повертає його в текстовому вигляді.
// Наприклад: 35 – тридцять п’ять, 89 – вісімдесят дев’ять,
// 12 – дванадцять.



function numToStr(num){
    const ones = ['', 'один', 'два', 'три', 'чотири', 'п\'ять', 'шість', 'сім', 'вісім', 'дев\'ять'];
    const tens = ['', '', 'двадцять', 'тридцять', 'сорок', 'п\'ятдесят', 'шістдесят', 'сімдесят', 'вісімдесят', 'дев\'яносто'];
    const exceptions = [  
        'десять',
        'одинадцять',
        'дванадцять',
        'тринадцять',
        'чотирнадцять',
        'п\'ятнадцять',
        'шістнадцять',
        'сімнадцять',
        'вісімнадцять',
        'дев\'ятнадцять'
    ];
    const ten = Math.floor(num / 10);
    const one = num % 10;

    let text = tens[ten] + ' ' + ones[one];

    if (num >= 10 && num <= 19) {
        text = exceptions[one];
    }
 
     return text;
}

console.log(numToStr(12));


// 3. Напишіть функцію, яка замінює в отриманому рядку великі літери на маленькі, маленькі – на великі, а цифри – на
// знак нижнього підкреслення.
function Edit(str){
    for(let i = 0;i<str.length;i++){
        if(str.charCodeAt(i) > 64 && str.charCodeAt(i)<91){
            str = str.replace(str[i],String.fromCharCode(str.charCodeAt(i) + 32));
        }
        else if(str.charCodeAt(i) > 96 && str.charCodeAt(i)<123){
            str = str.replace(str[i],String.fromCharCode(str.charCodeAt(i) - 32));
        }
        else if(str.charCodeAt(i) > 47 && str.charCodeAt(i)<58){
            str = str.replace(str[i],'_');
        }
    }
    return str;
}

//onsole.log(Edit("AAA bbb CCC 111"));

// 4. Напишіть функцію, яка перетворює назви CSS-стилів з
// дефісом у назву в Сamelcase-стилі: font-size у fontSize,
// background-color у backgroundColor, text-align у
// textAlign.

function normalizeCss(cssName){
    if(!cssName.includes('-')){
        return;
    }

    let words = cssName.split('-');
    for(let i =1;i<words.length;i++){
        words[i] = words[i].replace(words[i][0],words[i][0].toUpperCase());
    }

    return words.reduce((x,y)=>{return x+y;});
}
//console.log(normalizeCss("font-size"));

// 5. Напишіть функцію, яка приймає словосполучення і перетворює його на абревіатуру.
// Наприклад: cascading style sheets у CSS, об’єктноорієнтоване програмування в ООП.
function Abreviate(str){
    let words = str.split(" ");
    return words.map(x=> x[0]).reduce((x,y)=>{return x+y;});
    
}
//console.log(Abreviate("World Health Organization"));
// 6. Напишіть функцію, яка приймає будь-яку кількість рядків,
// об’єднує їх в один довгий рядок і повертає його. 

function Join(...strings){
    return strings.join("");
}

//console.log(Join("Hw","as"));

// 7. Напишіть функцію – калькулятор. Функція приймає рядок
// із прикладом, визначає, яку дію необхідно виконати (+ - */),
// переводить операнди у числа, розв’язує приклад і повертає
// результат.

function calculate(equotion){
    let operationIndex = equotion.search(/\+|\-|\*|\//);
    equotion = equotion.trim();
    let numbers = equotion.split(/\+|\-|\*|\//).map(x=>x = parseInt(x));
  
    switch(equotion[operationIndex]){
        case '\+':{return numbers.reduce((x,y)=>{return x+y;})}break;
        case '\-':{return numbers.reduce((x,y)=>{return x-y;})}break;
        case '\*':{return numbers.reduce((x,y)=>{return x*y;})}break;
        case '\/':{return numbers.reduce((x,y)=>{return x/y;})}break;
    }
}

//console.log(calculate("22+2"));

// 8. Напишіть функцію, яка отримує url і виводить докладну
// інформацію про нього.
// Наприклад: url "https://itstep.org/ua/about", інформація
// "протокол: https, домен: itstep.org, шлях: /ua/about”.

function siteInfo(website){
    let protocol = website.split("://")[0];
    website = website.replace(protocol+"://","");
   
    let domen = website.split("/")[0];
    website = website.replace(domen,"");

    let result = `Protocol: ${protocol}\nDomen: ${domen}\nPath: ${website}`;
    return result;
}

//console.log(siteInfo("https://itstep.org/ua/about"));

// 9. Напишіть функцію, яка приймає рядок та роздільник, і
// повертає масив підрядків, розбитих за допомогою вказаного роздільника.
// Наприклад: рядок "10/08/2020", роздільник "/", результат:
// "10", "08", "2020".
// Виконуючи завдання, не використовуйте функцію split().
function MySplit(str,splitter){
    //return str.split(splitter);
    
    let ids = getSplitterIds(str,splitter);
    let res = [];
    for(let i =0;i<ids.length+1;i++){
        if(i==0){
            res.push(str.slice(0,ids[0]));
        }
        else if(i===ids.length){
            res.push(str.slice(ids[i-1]+1));
        }
        else{
            res.push(str.slice(ids[i-1]+1,ids[i]));
        }
    }
    return res;
   
}

function getSplitterIds(str,splitter){
    let splittersId = [];
    
    let startIndex = 0;
    let id = -1;
    do{
        id = str.indexOf(splitter,startIndex);
        if(id!=-1){
            startIndex = id +1;
            splittersId.push(id);
        }
            
    }while(id!=-1);
    return splittersId;
}

console.log(MySplit("10/08/2020/123/123/12/123123/12","/"));


// 10. Напишіть функцію виведення тексту за заданим шаблоном.
// Функція приймає першим параметром шаблон, у тексті
// якого може використовуватися %. Після символу % вказується індекс вхідного параметра. При виведенні замість
// %індекс необхідно вивести значення відповідного вхідного параметра.
// Наприклад: print("Today is %1 %2.%3.%4", "Monday", 10,
// 8, 2020) має вивести "Today is Monday 10.8.2020". 

function printFormated(str="",...params){
    let paramsInStr = str.match(/%\d+/g);
    if(params.length!=paramsInStr.length)
        return;

    for(let i = 0;i<params.length;i++){
        str = str.replace(paramsInStr[i],params[i].toString());
    }
   return str;
}

console.log(printFormated("Today is %1 %2.%3.%4", "Monday", 10, 8, 2020));