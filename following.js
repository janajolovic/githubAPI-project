const card = document.querySelector(".card");


const createCard = () => {
    fetch("https://api.github.com/users/janajolovic/following")
        .then(response => response.json())
        .then(data => {
            let html = "";
            data.forEach(user => {
                html += `
                    <div class="user">
                        <a href="index.html"class='close-btn'><i class="fas fa-times"></i></a>
                        <div class="img">
                            <img src="${user.avatar_url}" alt="">
                        </div>
                        <div class="user-data">
                            <a href="${user.html_url}" target="_blank">${user.login}</a>
                        </div>
                    </div>
                `

            })
            card.innerHTML = html;
        })
}


createCard();