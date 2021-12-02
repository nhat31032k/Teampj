//cách 1 
const modal = document.querySelector(".modal");
if (modal) {
    setTimeout(() => {
        modal.classList.add("is-show");
    }, 3000);
}