class Article{
    header = "";
    paragraphs = [];

    constructor(header,text){
        this.header = header;
        this.paragraphs = text;
    }

    static FindText(articles, header) {
        let result = articles.find(x => x.header === header);
        return result.paragraphs;
    }
}

function pasteTextFrom(header){
    let parags = Article.FindText(Articles,header);
    let textField = document.getElementById("text");
    for(paragraph of parags){
        textField.innerHTML+=`<p>${paragraph}</p>`;
    }
}


let Articles = [
    new Article("HTML",
        ["HTML",
        "Lorem ipsum"]
    ),
    new Article("CSS",
         ["CSS ipsum dolor sit amet consectetur adipisicing elit. Impedit et eos eligendi quos beatae ducimus perferendis ipsum magni aliquam rem libero ad labore error temporibus accusantium nihil amet similique nesciunt eum consequatur, deserunt itaque. Eos magni dolorum dignissimos! Libero explicabo dolor quam ex recusandae fugit error omnis aliquid reiciendis, non laborum ea saepe, repellat corrupti. Quos veniam facere voluptatibus? Quo deleniti nobis necessitatibus, est laboriosam quaerat error recusandae eum, maiores explicabo, laborum iusto. Aliquid corrupti sunt illo repudiandae? Repellat ullam delectus esse pariatur, quo nesciunt sapiente ipsam velit cum id, porro dolorem ut unde? Dolorem quis expedita id fugiat fugit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit et eos eligendi quos beatae ducimus perferendis ipsum magni aliquam rem libero ad labore error temporibus accusantium nihil amet similique nesciunt eum consequatur, deserunt itaque. Eos magni dolorum dignissimos! Libero explicabo dolor quam ex recusandae fugit error omnis aliquid reiciendis, non laborum ea saepe, repellat corrupti. Quos veniam facere voluptatibus? Quo deleniti nobis necessitatibus, est laboriosam quaerat error recusandae eum, maiores explicabo, laborum iusto. Aliquid corrupti sunt illo repudiandae? Repellat ullam delectus esse pariatur, quo nesciunt sapiente ipsam velit cum id, porro dolorem ut unde? Dolorem quis expedita id fugiat fugit."    
    ]),
    new Article("JS",
         ["JS ipsum dolor sit amet consectetur adipisicing elit. Impedit et eos eligendi quos beatae ducimus perferendis ipsum magni aliquam rem libero ad labore error temporibus accusantium nihil amet similique nesciunt eum consequatur, deserunt itaque. Eos magni dolorum dignissimos! Libero explicabo dolor quam ex recusandae fugit error omnis aliquid reiciendis, non laborum ea saepe, repellat corrupti. Quos veniam facere voluptatibus? Quo deleniti nobis necessitatibus, est laboriosam quaerat error recusandae eum, maiores explicabo, laborum iusto. Aliquid corrupti sunt illo repudiandae? Repellat ullam delectus esse pariatur, quo nesciunt sapiente ipsam velit cum id, porro dolorem ut unde? Dolorem quis expedita id fugiat fugit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit et eos eligendi quos beatae ducimus perferendis ipsum magni aliquam rem libero ad labore error temporibus accusantium nihil amet similique nesciunt eum consequatur, deserunt itaque. Eos magni dolorum dignissimos! Libero explicabo dolor quam ex recusandae fugit error omnis aliquid reiciendis, non laborum ea saepe, repellat corrupti. Quos veniam facere voluptatibus? Quo deleniti nobis necessitatibus, est laboriosam quaerat error recusandae eum, maiores explicabo, laborum iusto. Aliquid corrupti sunt illo repudiandae? Repellat ullam delectus esse pariatur, quo nesciunt sapiente ipsam velit cum id, porro dolorem ut unde? Dolorem quis expedita id fugiat fugit."    
    ]),
];

let menu = document.getElementById("menu");
menu.addEventListener("click",openArticle);

function openArticle(event){
    let header = event.target.outerText;

    let menuItem = document.getElementById("menu");
    let element = menuItem.getElementsByClassName("selected")[0];
    element.classList.remove("selected");

    let textField = document.getElementById("text");
    textField.innerHTML = "";
    pasteTextFrom(header);
    
    let item = document.getElementById(header);
    item.classList.add("selected");
   
}

