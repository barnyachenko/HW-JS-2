
/*
1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)
*/

    function makeOrder(hamburgers, fries){
        if (hamburgers >= 4 && fries >= 1) {
            return "Ми поїли"
        } else return "Ми йдемо в інше кафе"    
    }   

    console.log(makeOrder(3,1))

/*
2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.
*/ 

    function checkPrice(itemPrice){
        if (itemPrice >= 1000 && itemPrice <= 1900) {
            return itemPrice + " - знаходиться між 1000 та 1900 включно"
        } else return itemPrice + " - не знаходиться між 1000 та 1900 включно"   
    }   

    console.log(checkPrice(1000))

/*
3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.
*/ 

    function checkPrice2(itemPrice2){
        if (!(itemPrice2 < 1000 || itemPrice2 > 1900)) {
            return itemPrice2 + " - знаходиться між 1000 та 1900 включно"
        } else return itemPrice2 + " - не знаходиться між 1000 та 1900 включно"
    }   

    console.log(checkPrice2(1901))


    function checkPrice3(itemPrice3){
        if (itemPrice3 < 1000 || itemPrice3 > 1900) {
            return itemPrice3 + " - не знаходиться між 1000 та 1900 включно"
        } else return itemPrice3 + " - знаходиться між 1000 та 1900 включно"
    }   

    console.log(checkPrice3(1901))

/*
4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.
*/ 
    
    function defineSeason(seasonNumber){
        if (seasonNumber == 1) {
            return "winter"
        } else if (seasonNumber == 2) {
            return "spring"
        } else if (seasonNumber == 3) {
            return "summer"
        } else if (seasonNumber == 4) {
            return "autumn"
        } else {
            return "Such season does not exist"
        }
    }    

    console.log(defineSeason(5))

/*
5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.
*/ 

    function findAverage(a,b,c){
        if (a > b && a < c) {
            return a + " - середнє значення"
        } else if (b > a && b < c) {
            return b + " - середнє значення"
        } else if (c > b && c < a) {
            return c + " - середнє значення"
        }
    }

    console.log(findAverage(1,2,3))

/*
6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.
*/

    function defineWeekDay(weekDay){
        if (weekDay > 7 || weekDay < 1) {
            return "Such day of a week does not exist"
        } else {
            switch (weekDay) {
                case 1:
                return "Monday"
    
                case 2:
                return "Tuesday"             
    
                case 3:
                return "Wednesday"
    
                case 4:
                return "Thursday"
    
                case 5:
                return "Friday"
    
                case 6:
                return "Saturday"
    
                case 7:
                return "Sunday"
            }
        }
    }

    console.log(defineWeekDay(5))

/*
7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.
*/

    function calculate(a1, b1, mathOperation){
        switch (mathOperation) {
            case "+":
            return a1 + b1
    
            case "-":
            return a1 - b1 
            
            case "*":
            return a1 * b1
    
            case "/":
            return a1 / b1
        }
    }

    console.log(calculate(10, 5, "+"))

/*
8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.
*/

    function deleteVowels(someString){
        const reg = /[aeyiuo]/g
        let someNewStr = someString.replace(reg, "")
        return someNewStr
    }

    console.log(deleteVowels("Hello world abc"))
    
/*
9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закнченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,02 кілометра; 3 кілометри і т.д.

    Відмінювання для "метр" (аналогічні закінчення будуть і для слова "кілометр")

    Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)

    Кейси:
    1. Кілометрів (якщо = 0, якщо закінчується на 0, якщо закінчується на 5, 6, 7, 8, 9)
    2. Кілометр (якщо = 1, якщо закінчується на 1)
    3. Кілометри (якщо = 2, 3, 4, якщо закінчується на 2, 3, 4)
    4. Кілометра (якщо число неціле)
    5. Кілометрів (якщо закінчується на 11, 12, 13, 14)
*/

    function convertToKilometers(meters){
        const kilometer = meters * 0.001
        const lastChar = kilometer.toString().slice(-1)
        const twoLastChars = kilometer.toString().slice(-2)   
        if (!Number.isInteger(kilometer)) {
            console.log(kilometer + " кілометра")
        } else if (lastChar == 0 || lastChar == 5 || lastChar == 6 || lastChar == 7 || lastChar == 8 || lastChar == 9) {
            return kilometer + " кілометрів"
        } else if (twoLastChars == 11) {
            return kilometer + " кілометрів"
        }  else if (twoLastChars == 12) {
            return kilometer + " кілометрів"
        } else if (twoLastChars == 13) {
            return kilometer + " кілометрів"
        }  else if (twoLastChars == 14) {
            return kilometer + " кілометрів"
        } else if (lastChar == 1) {
            return kilometer + " кілометр"
        } else if (lastChar == 2 || lastChar == 3 || lastChar == 4) {
            return kilometer + " кілометри"
        }
    }

    console.log(convertToKilometers(123000))
