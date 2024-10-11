// Задача 1.

class PrintEditionItem {   //печатное издание
    constructor(name, releaseDate, pagesCount) {//(название, дата выхода, количество страниц)
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;                        //состояние
        this.type = null;                        //тип
    }

    fix() {
        //debugger
        return(this.state *= 1.5);
    }

    set state(number) {
        if(this.state < 0) {
            return this._state = 0;
        } 

        if(this.state > 100) {
            return this._state = 100;

        } else{
            return this._state = number;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        //super(releaseDate);
        //super(pagesCount);
        this.type = "magazine";
    }
}    

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        //debugger
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "novel";
    }    
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "fantastic";
    }    
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "detective";
    }    
}


// Задача 2.

class Library {   //библиотека
    constructor(name, books) {
        this.name = name;
        this.books = [];
        
    }

    addBook(book) {  
        if(book.state > 30) {
            this.books.push(book);            
        }

        return;
    }

    findBookBy(type, value) {
        const findBookByParam = this.books.find(item => item[type] === value);
        return !!findBookByParam ? findBookByParam : null;        
    }

    giveBookByName(bookName) {
        const Index = this.books.findIndex(book => book.name === bookName);
        if(Index !== -1) {
            return this.books.splice(Index, 1)[0];
        }
        return null;
    }

}