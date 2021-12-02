// viết 1 function tạo ra thông báo ,đổi tiêu đề
const createNoti = (title = "Welcome to the notification", url = "https://source.unsplash.com/random") => {
    const template = `
    <div class="noti">
        <img src = ${url} alt="" class="noti-img">
        <div class="noti-content">
            <h3 class="noti-title">${title}</h3>
            <p class="noti-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate delectus iusto illum exercitationem maiores numqua</p>

        </div>
    </div>`;
    // dùng insertadjHtml
    document.body.insertAdjacentHTML("afterbegin", template);

}
const randomImg = ["https://media2.giphy.com/media/N3yLGQ1oMYfGU/200w.webp?cid=ecf05e47gemi56rnzfxqzcu43olo82kdfijj1518tby6vulw&rid=200w.webp&ct=g", "https://media1.giphy.com/media/5e25aUTZPcI94uMZgv/200w.webp?cid=ecf05e47gemi56rnzfxqzcu43olo82kdfijj1518tby6vulw&rid=200w.webp&ct=g", "https://media1.giphy.com/media/9B7XwCQZRQfQs/200w.webp?cid=ecf05e47gemi56rnzfxqzcu43olo82kdfijj1518tby6vulw&rid=200w.webp&ct=g"];
const randomTitles = ["wealcome to js", "wealcome to react", "wealcome to vue", "wealcome Nhat"];
let lastTitle;
let lastUrl;
// createNoti();
const timer = setInterval(() => {
    const title = randomTitles[Math.floor(Math.random() * randomTitles.length)];
    const url = randomImg[Math.floor(Math.random() * randomImg.length)];
    // createNoti();
    //kiểm tra có rồi thì sẽ xóa cái trước đó để 4s sau cái khác hiện lên
    const item = document.querySelector(".noti");
    if (item) {
        item.parentNode.removeChild(item);
    }

    createNoti(title, url);
    // if (lastTitle === !title) {

    // }
    // lastTitle = title;
    // lastUrl = url;
}, 4000);