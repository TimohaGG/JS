// Реалізуйте клас PrintMaсhine, який складається з:
// ■ розміру шрифту;
// ■ кольори шрифту;
// ■ сімейства шрифту;
// ■ методу print(), який приймає текст і друкує його відповідним шрифтом за допомогою document.write().
// Створіть об’єкт такого класу та продемонструйте роботу методу.



class PrintMachine{
    fontSize = 120;
    fontColor = "red";
    fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
    constructor(fontSize,fontColor,fontFamily){
        this.fontSize = fontSize;
        this.fontColor = fontColor;
        this.fontFamily = fontFamily;
    }
   
    Print(text){
        document.write(`<p style="font-size:${this.fontSize}px; color:${this.fontColor}; font-family:${this.fontFamily}">${text}</p>`);
    }
}

let pm = new PrintMachine(16,"red","'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif");
//pm.Print("Hello");

// Реалізуйте клас, що описує новину (заголовок, текст, масив
//     тегів, дата публікації). У класі необхідно реалізувати один метод
//     print, який виводить всю інформацію у такому вигляді, як на
//     рисунку 1.
//     Зверніть увагу, як виводиться дата:
//     ■ якщо з дати публікації пройшло менше дня, то виводиться
//     «сьогодні»;
//     ■ якщо з дати публікації пройшло менше тижня, то виводиться «N днів тому»;
//     2
//     ■ в інших випадках – повна дата у форматі «день.місяць.
//     рік».

class News{
    constructor(header,text,tags,date){
        this.header = header;
        this.text = text;
        this.tags = tags;
        this._date = date;
    }

    get date(){

        let today = new Date();
        
        let difference = today - this._date;

        let daysAmount = Math.floor(difference / (1000*60*60*24));

        if(daysAmount==0)
            return "Сьогодні";
        else if(daysAmount <=7)
            return `${daysAmount} днів назад`;
        else    
            return this._date.toLocaleDateString('en-GB');
    }
    set date(value){
        this._date = value;
    }
    Print(){
        let newsDiv = document.getElementById("newsDiv");
        let str = 
        `<div style="width:500px; display:block; margin:0 auto;">
            <h1>${this.header}</h1>
            <i>${this.date}</i>
            <p>${this.text}</p>
            <p>${this.tags}</p>
        </div>`;
        newsDiv.innerHTML += str;
    }
}

let news = new  News("Header","text1",['#tag1','#tag2'], new Date('December 4, 2023'));
let news2 = new  News("Header2","text2",['#tag1','#tag2','#tag3'], new Date('December 5, 2023'));
let news3 = new  News("Header3","text3",['#tag1','#tag2','#tag3'], new Date('December 6, 2023'));


//news.Print();


// Завдання 3
// Реалізуйте клас, що описує стрічку новин.
// Клас має містити:
// ■ масив новин;
// ■ get-властивість, яка повертає кількість новин;
// ■ метод виведення на екран усіх новин;
// ■ метод додавання новини;
// ■ метод видалення новини;
// ■ метод сортування новин за датою (від останніх новин до
// старих);
// ■ метод пошуку новин за тегом (повертає масив новин, в
// яких вказано переданий тег у метод).
// Продемонструйте роботу написаних методів.

class NewsList
{ 
    _news = new Array();

    get news(){
        return this._news.length;
    }
    set news(value){
        this._news = value;
    }

    addNews(newsToAdd){
       console.log(newsToAdd instanceof News);
        if(newsToAdd instanceof News){
            this._news.push(newsToAdd);
        }
        
    }

    deleteNews(newsToDelete){
        if(newsToDelete instanceof News){
            let index = this._news.findIndex(x=>x.header === newsToDelete.header && x.date === newsToDelete.date);
            this._news.splice(index,1);
        }
    }

    sortByDate(){
        this._news.sort((x,y)=> {
            if(x.date > y.date)
            return 1;
            else if(x.date<y.date)
            return -1;
            else
            return 0;

        });
    }

    searchByTag(tag){
        let res = [];
        for(let i =0;i<this._news.length;i++){
            if(this._news[i].tags.find(x=>x==tag))
                res.push(this._news[i]);
        }
        return res;
    }

    print(){
        for(let i=0;i<this._news.length;i++){
            this._news[i].Print();
        }
    }
}

let list = new NewsList();
let i = 0;
list.addNews(news);
list.addNews(news2);
list.addNews(news3);

list.sortByDate();
console.log(list.searchByTag("#tag3"));

list.print();

