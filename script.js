let year = prompt('input year');
let city = prompt('input city');
let sport = prompt('input sport');

switch (year) {
    case null:
        year = 'Шкода що Ви не захотіли ввести свій вік\n';
        break;
    default:
        year = 'Тобі ' + `${year}` + '\n'
}

switch (city) {
    case 'Kyiv':
        city = 'Ти живеш y столиці України\n';
        break;
    case 'Washington':
        city = 'Ти живеш y столиці USA\n';
        break;
    case 'London':
        city = 'Ти живеш y столиці UK\n';
        break;
    case null:
        city = 'Шкода, що Ви не захотіли ввести своє місто\n';
        break;
}

switch (sport) {
    case 'swiming':
        sport = 'Круто! Хочеш стати як Клочкова Яна\n';
        break;
    case 'box':
        sport = 'Круто! Хочеш стати як Ломаченко Василій\n';
        break;
    case 'gymnastics':
        sport = 'Круто! Хочеш стати як Подкопаєва Лілія\n';
        break;
    case null:
        sport = 'Шкода, що Ви не захотіли ввести свій улюблений спорт\n';
        break;
}

alert(year + '\n' + city + '\n' + sport)