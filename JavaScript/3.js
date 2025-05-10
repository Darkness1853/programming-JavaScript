
const messages = [
    "Пойдем гулять в парк?",
    "Кажется, дождь собирается. Лучше пойдем в кино!",
    "Давай, сегодня как раз вышел новый фильм.",
    "Встречаемся через час у кинотеатра."
];

for (let i = 0; i < messages.length; i++) {
    let sender;
    if (i % 2 === 0) {
        sender = "Друг";
    } else {
        sender = "Вы";
    }
    console.log(`${sender}: ${messages[i]}`);
}
