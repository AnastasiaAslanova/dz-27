let userNumber;

function isPolindrom(item) {
    const reverse =  item.split("").reverse().join("");
    return reverse === item;
}

while (true) {
    userNumber = prompt(`Введіть число для перевірки`);
    if (userNumber === null) {
        continue;
    }
    if (isNaN(userNumber)) {
        continue;
    }
    break;
}
isPolindrom(userNumber) ? alert(`Ваше число є поліндромом`) :  alert(`Ваше число НЕ є поліндромом`);
//--------------------------------------------------------------------------------------------------------
let sumPurchase;
let discount = 0 ;

while (true) {
    sumPurchase = +prompt("Введите сумму покупки");
    if (isNaN(sumPurchase)) {
        alert(`Ви ввели не вірне число`);
        continue;
    }
    break;
}

switch (true) {
    case sumPurchase >= 200 && sumPurchase < 300:
        discount = 3;
        break;

    case sumPurchase >= 300 && sumPurchase < 500:
        discount = 5;
        break;

    case sumPurchase >= 500:
        discount = 7;
        break;

}
if (discount) {
    alert( `Ваша знижка становлює ${discount}%. Сумма замовлення ${sumPurchase - (sumPurchase * discount / 100)} грн.`);
} else {
    alert( 'Ваше замовлення поки рахуємо без знижки. Бажаєте щось додати, щоб отримати знижку?' );
}
//---------------------------------------------------------------------------------------------------------------------

let userNumber2;
let positiveNumber = 0;
let negativeNumber = 0;
let zeroNumber = 0;

function getNumber() {
    while (true) {
        userNumber2 = +prompt(`Введіть число`);
        if (isNaN(userNumber2)) {
            alert(`Ви ввели букви, а не цифри. Будьласка тільки цифри`);
            continue;
        }
        break;
    }
    return userNumber2;
}
for(let i=1; i<=10; i++) {
    userNumber2 = getNumber();
    if(userNumber2 < 0) {
        negativeNumber++;
    }
    if (userNumber2 > 0) {
        positiveNumber++;
    }
    if(userNumber2 === 0) {
        zeroNumber++;
    }
}
alert(`Ви ввели ${positiveNumber} додатніх, ${negativeNumber} від’ємних і ${zeroNumber} нулів`);
//----------------------------------------------------------------------------------------------------------------------

let week = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота', 'Неділя'];
let i = 0;
while (true){
    let result = confirm(`${week[i%7]}. Хочеш побачити наступний день? `);
    if (!result) {
        break;
    }
    i++;
}
