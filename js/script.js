class Student {
    constructor(name, surname, year, rating) {
        this.name = name;
        this.surname = surname;
        this.year = year;
        this.rating = rating;
        this.visits = [];
    }
    
    getAgeStudent () {
        console.log('Вік студента:', 2023 - this.year);
    }

    present () {
        if (this.visits.length <= 25) {
            this.visits.push(true);
        } else {
            console.log('Помилка!!!');
        }
    }

    absent () {
        if (this.visits.length <= 25) {
            this.visits.push(false);
        } else {
            console.log('Помилка!!!');
        }
    }

    summary () {
        const sumOfRating = this.rating.reduce((prevElement, currElement) => { return prevElement + currElement});
        const avarageRating = sumOfRating / this.rating.length;

        const numberVisits = this.visits.map((element) => { return Number(element)}).reduce((prevElement, currElement) => { return prevElement + currElement});
        const avarageVisits = numberVisits / this.visits.length;
        
        if (avarageRating > 90 && avarageVisits > 0.9) {
            console.log('Молодець!');
        } else if (avarageRating < 90 && avarageVisits < 0.9) {
            console.log('Редиска!');
        } else {
            console.log('Добре, але можно краще!');
        }
    }

}

const firstStundent = new Student('Oleg', 'Borovskyi', 1993, [90, 30, 23, 43]);
firstStundent.present();
firstStundent.absent();
firstStundent.present();
firstStundent.absent();
firstStundent.present();
firstStundent.present();

console.log(firstStundent);
firstStundent.getAgeStudent();
firstStundent.summary();