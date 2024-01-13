function NEWYEAR() {
    let num = document.getElementById("num").value;
    let PACK;
    if (num = 1) {
        num = "С новым годом, с новым счастьем!"
    } 
    if (num = 2) {
        num = "С наступившим вас!"
    }
    if (num = 3) {
        num = "УРА С Новым годом!"
    }
    if (num = 4) {
        num = "С Наступающим"
    }
    if (num = 5) {
        num = "Пусть волшебство будет с вами!"
    } else {
        num = "всё без подарка(";
    }
document.getElementById("PRES").innerHTML = PACK;
}