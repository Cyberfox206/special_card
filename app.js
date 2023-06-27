let cli = document.getElementById("conter");
let all_card = document.getElementById("card");
let cont = 0;

cli.addEventListener("click", () => {
    all_card.classList.add("animation");
    setTimeout(() => {
        all_card.classList.remove("animation");
        cont++;
        cli.textContent = `${cont}`;
    }, 3 * 1000);
})