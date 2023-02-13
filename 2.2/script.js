const ButtonsStar = document.querySelectorAll("img");
const ButtonsRating = document.querySelectorAll(".ratingButton");

for (const iterator of ButtonsRating) {
    iterator.addEventListener("click", (e) => {
        e.preventDefault();
        iterator.style.backgroundColor = "yellow";
    });
}

ButtonsStar[1].addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Opção escolhida - 1 Estrela")
    ButtonsStar[1].src = "/2.2/assets/iconeCheio.png";
    ButtonsStar[2].src = "/2.2/assets/iconeVazio.png";
    ButtonsStar[3].src = "/2.2/assets/iconeVazio.png";
    ButtonsStar[4].src = "/2.2/assets/iconeVazio.png";
    ButtonsStar[5].src = "/2.2/assets/iconeVazio.png";
});

ButtonsStar[2].addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Opção escolhida - 2 Estrela")
    ButtonsStar[1].src = "/2.2/assets/iconeCheio.png";
    ButtonsStar[2].src = "/2.2/assets/iconeCheio.png";
    ButtonsStar[3].src = "/2.2/assets/iconeVazio.png";
    ButtonsStar[4].src = "/2.2/assets/iconeVazio.png";
    ButtonsStar[5].src = "/2.2/assets/iconeVazio.png";
});

ButtonsStar[3].addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Opção escolhida - 3 Estrela")
    ButtonsStar[1].src = "/2.2/assets/iconeCheio.png";
    ButtonsStar[2].src = "/2.2/assets/iconeCheio.png";
    ButtonsStar[3].src = "/2.2/assets/iconeCheio.png";
    ButtonsStar[4].src = "/2.2/assets/iconeVazio.png";
    ButtonsStar[5].src = "/2.2/assets/iconeVazio.png";
});

ButtonsStar[4].addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Opção escolhida - 4 Estrela")
    ButtonsStar[1].src = "/2.2/assets/iconeCheio.png";
    ButtonsStar[2].src = "/2.2/assets/iconeCheio.png";
    ButtonsStar[3].src = "/2.2/assets/iconeCheio.png";
    ButtonsStar[4].src = "/2.2/assets/iconeCheio.png";
    ButtonsStar[5].src = "/2.2/assets/iconeVazio.png";
});

ButtonsStar[5].addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Opção escolhida - 5 Estrela")
    ButtonsStar[1].src = "/2.2/assets/iconeCheio.png";
    ButtonsStar[2].src = "/2.2/assets/iconeCheio.png";
    ButtonsStar[3].src = "/2.2/assets/iconeCheio.png";
    ButtonsStar[4].src = "/2.2/assets/iconeCheio.png";
    ButtonsStar[5].src = "/2.2/assets/iconeCheio.png";
})