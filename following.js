const card = document.querySelector(".card");


const createCard = async () => {
    response = await fetch("https://api.github.com/users/janajolovic/following")
    data = await response.json();
    let html = "";
    data.forEach(user => {
        html += `
            <div class="user">
                <div class="img">
                    <img src="${user.avatar_url}" alt="">
                </div>
                <div class="user-data">
                    <a href="${user.html_url}" target="_blank">${user.login}</a>
                </div>
            </div>
        `
    })
    html += `<a href="index.html" class="close-btn"><i class="fas fa-times"></i></a>`
    card.innerHTML = html;
}


createCard();