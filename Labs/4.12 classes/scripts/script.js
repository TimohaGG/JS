
// Реалізуйте клас Button, який містить ширину, висоту, текст
// кнопки, і метод showBtn(), який виводить кнопку на екран за допомогою тегу button і функції document.write().
// Реалізуйте клас BootstrapButton, успадкувавши його від
// класу Button. Додайте поле color і перевизначте метод showBtn()
// так, щоб кнопка виводилася зі стилями і вказаним кольором.

class Button{
    constructor(width, height, text){
        this.width = width;
        this.height = height;
        this.text = text;
    }

    showButton(){
        document.write(`<button style="width:${this.width}px; height: ${this.height}px">${this.text}</button>`);
    }
}

class BootstrapButton extends Button{
    constructor(width, height,text, color){
        super(width,height,text);
        this.color = color;
    }

    showButton(){
        document.write(`<button style="width:${this.width}px; height: ${this.height}px; background-color: ${this.color}">${this.text}</button>`);
    }
}

let butt = new BootstrapButton(200,100,"Hello","red");
butt.showButton();


// Реалізуйте клас, що описує геометричну фігуру з властивостями та методами:
// ■ get-властивість для отримання назви фігури;
// ■ метод для виведення інформації про фігуру (сторони та їх
// довжина);
// ■ метод для обчислення площі фігури;
// ■ метод для обчислення периметра фігури.
// Реалізуйте класи-спадкоємці: квадрат, прямокутник, трикутник. Перевизначте методи виведення та обчислень у класах-спадкоємцях.
// Створіть масив з різними фігурами та виведіть інформацію
// про кожну з них, включаючи площу та периметр.

class Shape{
    constructor(name,sides){
        this._name = name;
        this._sides = sides;
    }

    Print(){
        console.log(`Shape ${this._name} with sides: ${this._sides}`);
    }

    Area(){
        return 0;
    }
    Perimeter(){
        return this._sides.reduce((x,y)=>{return x+y;})
    }
    
}

Object.defineProperty(Shape.prototype,"name",{
    get:function(){return this._name;}
});

class Square extends Shape{
    constructor(name,sides){
        super(name,sides);
        this.sides = sides;
    }

    Area(){
        return this._sides[0]**2;
    }
}
Object.defineProperty(Square.prototype,"sides",{
    get(){return this._sides;},
    set(newSides){
        if(newSides.find(x=>x <=0)!=undefined){
            console.log("Can`t make a figure");
            this._sides.length = 0;
        }   
        else if(newSides.reduce((x,y)=>{return x!=y;})){
            console.log("Can`t make a figure");
            this._sides.length = 0;
        }
        else if(newSides.length>4){
            console.log("Can`t make a figure");
            this._sides.length = 0;
        }
        else    
            this._sides = newSides;
    }
})

class Rectangle extends Shape{
    Area(){
        return this._sides[0] * this._sides[1];
    }
}

class Triangle extends Shape{
    Area(){
        let halfPer = this.Perimeter()/2;
        return Math.sqrt(halfPer * (halfPer-this._sides[0]) * (halfPer - this._sides[1]) * (halfPer - this._sides[2]));
    }
}



// let shapes = [
//     new Square("Square",[2,2,2,2]),
//     new Rectangle("Rec1",[2,4,2,4]),
//     new Triangle("Tri",[2,4,3])
// ];

// for(shape of shapes){
//     shape.Print();
//     console.log(shape.Area());
//     console.log(shape.Perimeter());
// }


// Реалізуйте клас ExtentedArray, успадкувавши його від стандартного класу Array і додавши такі методи:
// ■ метод getString(separator) для отримання рядка з усіма
// елементами масиву, переліченими через зазначений роздільник: кома, тире, пробіл тощо;
// ■ метод getHtml(tagName) для отримання рядка з HTMLкодом, де кожен елемент масиву буде поміщений у вказаний тег 
// (врахуйте, якщо вказується тег li, тоді всі елементи додатково необхідно буде помістити в ul).
// Створіть об’єкт класу ExtentedArray, заповніть його даними
// та виведіть на екран результати роботи методів getString() і
// getHtml().

class ExtentedArray extends Array{
    getString(separator){
        return this.join(separator);
    }

    getHtml(tagName){
        let str = this.map(elem=>`<${tagName}>${elem}</${tagName}>`).reduce((x,y)=>{return x+y;});
        if(tagName==="li"){
            str = `<ul>${str}</ul>`;
        } 
        document.write(str);
    }
}

let arr = new ExtentedArray(1,2,3);

console.log(arr.getString("s"));
arr.getHtml("li");