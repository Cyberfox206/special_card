let cli = document.getElementById("conter");
let cont = 0;
cli.addEventListener("click", () => {
    cont++;
    cli.textContent = `${cont}`;
})