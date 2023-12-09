// Реалізуйте клас, який описує простий маркер. Клас має містити наступні компоненти:
// ■ поле, яке зберігає колір маркера;
// ■ поле, яке зберігає кількість чорнил в маркері (в процентах);
// ■ метод для друку (метод приймає рядок і виводить текст
// відповідним кольором; текст виводиться, доки в маркері є
// чорнила; один не пробільний символ – це 0,5% чорнил в
// маркері).
// Реалізуйте клас, який описує маркер, що заправляється, успадкувавши його від простого маркера і додавши метод для заправки
// маркера.
// Продемонструйте роботу написаних методів.

class Marker{
    color = "black";
    inkAmount = 100.0;

    constructor(color){
        this.color = color;
    }

    Print(text = ""){
        let result = "";
        for(let i =0;i<text.length&&this.inkAmount!=0;i++){
            if(text[i]!==' ')
                this.inkAmount-=0.5;

            result+=text[i];
        }
        document.write(`<p style="color:${this.color}">${result}</p>`);
    }
}

class RefillableMarker extends Marker{
    Refill(){
        this.inkAmount = 100.0;
    }
}

let marker = new Marker("blue");

// let text = "Hello world my name is Tim I am from Ukraine I like dancing...Hello world my name is Tim I am from Ukraine I like dancing...Hello world my name is Tim I am from Ukraine I like dancing...Hello world my name is Tim I am from Ukraine I like dancing...Hello world my name is Tim I am from Ukraine I like dancing...Hello world my name is Tim I am from Ukraine I like dancing...";
// marker.Print(text);



// Реалізуйте клас ExtendedDate, успадкувавши його від стандартного класу Date і додавши такі можливості:
// ■ метод для виведення дати (число та місяць) текстом;
// ■ метод для перевірки минулої або майбутньої дати (якщо
// дата минула, тоді метод повертає false, якщо майбутня
// або поточна – true);
// ■ метод для перевірки високосного року;
// ■ метод, який повертає наступну дату.
// Створіть об’єкт класу ExtendedDate і виведіть на екран результати роботи нових методів

class ExtendedDate extends Date{

    printDate(){
        console.log(`${this.getDate()}.${this.getMonth()+1}`);
    }

    pastOrFuture(){
        let now = new Date();
        if(this.getTime() >= now.getTime())
            return true;
        else 
            return false;
    }

    isEvenYear(){
        return this.getFullYear()%4===0;
    }

    nextDate(){
        let nextDate = new Date(this.getTime());
        nextDate.setDate(this.getDate()+1);
        return nextDate;
    }
}

let date = new ExtendedDate("12.31.2024");

// date.printDate();
// console.log(date.pastOrFuture());
// console.log(date.isEvenYear());
// console.log(date.nextDate());



// Реалізуйте клас Employee, що описує працівника, і створіть
// масив працівників банку.
// Реалізуйте клас EmpTable для генерації HTML-код таблиці зі
// списком працівників банку. Масив працівників необхідно передавати через конструктор, а отримувати HTML-код за допомогою
// методу getHtml().
// Створіть об’єкт класу EmpTable та виведіть на екран результат
// роботи методу getHtml().

class Employee{
    name = "";
    birthday = new Date();
    department = "";
    constructor(name,birthday,department){
        this.name = name;
        this.birthday = birthday;
        this.department = department;
    }

    getHTMLTableRow(){
        //let style = "style=\"border: 1px solid black; padding: 10px\"";

        return `<tr>
            <td>${this.name}</td>
            <td>${this.birthday.toDateString()}</td>
            <td>${this.department}</td>
        </tr>`;
    }
}

class EmployeeTable{
    employees = [];
    constructor(employees){
        this.employees = employees;
    }

    getHtml(){
        let resStr = "";
        for(let i =0;i<this.employees.length;i++){
            resStr+=this.employees[i].getHTMLTableRow();
        }
        
        return `<table style="border-collapse: collapse;">
            ${resStr}
        </table>`;
    }
}

let emp = [new Employee("Bob",new Date(),"dep1"),
new Employee("Frank",new Date(),"dep2"),
new Employee("Martin",new Date(),"dep3"),
new Employee("Amy",new Date(),"dep4"),
new Employee("Lisa",new Date(),"dep5"),];

let table = new EmployeeTable(emp);
//document.write(table.getHtml());


// Реалізуйте клас StyledEmpTable, який успадковується від
// класу EmpTable. Додайте метод getStyles(), який повертає рядок
// зі стилями для таблиці в тегах style. Перевизначте метод getHtml(),
// який додає стилі до того, який повертає метод getHtml() з батьківського класу.
// Створіть об’єкт класу StyledEmpTable та виведіть на екран
// результат роботи методу getHtml()

class StyledEmpTable extends EmployeeTable{
    style = "";

    constructor(employees,tdStyle){
        super(employees);
        this.style = style;
    }

    getHtml(){
        let resStr = "";
        for(let i =0;i<this.employees.length;i++){
            resStr+=this.employees[i].getHTMLTableRow();
        }
        
        let id = resStr.indexOf("<td");
        while(resStr.indexOf("<td",id+1)!=-1){
            id = resStr.indexOf("<td",id+1);
            resStr = resStr.replace("<td>",`<td ${this.style}>`);
        }

        return `<table style="border-collapse: collapse;">
            ${resStr}
        </table>`;
    }

    getStyles(){
        return this.style;
    }
}
 let style = "style=\"border: 4px solid black; padding: 20px\"";
let st = new StyledEmpTable(emp,style);
document.write(st.getHtml());
