const card = document.querySelector(".card");


const createCard = async () => {
    response = await fetch("https://api.github.com/users/janajolovic/following")
    data = await response.json();

    data.forEach(user => {
        const user_div = document.createElement("div");
        user_div.classList.add("user");

        const img_div = document.createElement("div");
        img_div.classList.add("img")
        const img = document.createElement("img");
        img.src = user.avatar_url;
        img_div.appendChild(img);

        const user_data = document.createElement("div");
        user_data.classList.add("user-data")
        const name = document.createElement("a");
        name.href = user.html_url;
        name.innerHTML = user.login;
        user_data.appendChild(name);

        user_div.appendChild(img_div);
        user_div.appendChild(user_data);

        card.appendChild(user_div);
    })
    
    const btn = document.createElement("a");
    btn.href = "index.html";
    btn.classList.add("close-btn");
    btn.innerHTML = `<i class="fas fa-times"></i>`;

    card.append(btn); 
}


createCard();