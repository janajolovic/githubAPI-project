const card = document.querySelector(".card");


const createCard = async  () => {
    response = await fetch("https://api.github.com/users/janajolovic")
    data = await response.json()

    const img = document.createElement("img");
    img.src = data.avatar_url;

    const name = document.createElement("h2");
    name.innerHTML = data.name;

    const username = document.createElement("a");
    username.href = data.html_url;
    username.target = "_blank";
    username.classList.add("username");
    username.innerHTML = data.login;

    const bio = document.createElement("p");
    bio.innerHTML = data.bio;

    const info = document.createElement("div");
    info.classList.add("info");
    const follow = document.createElement("div");
    follow.classList.add("follow");
    followers = document.createElement("a");
    followers.href = "followers.html";
    followers.innerHTML = `<i class="fas fa-user-friends"></i>${data.followers} followers`;
    following = document.createElement("a");
    following.href = "following.html";
    following.innerHTML = `<i class="fas fa-user-friends"></i>${data.following} following`;

    const repo = document.createElement("a");
    repo.href = "repo.html";
    repo.classList.add("repos");
    repo.innerHTML = `${data.public_repos} repositories`;
    
    follow.appendChild(followers);
    follow.appendChild(following);
    info.appendChild(follow);
    info.appendChild(repo);
    
    if (data.location) {
        const loc = document.createElement("p");
        loc.innerHTML = `<i class="fas fa-map-marker-alt"></i>${data.location}`;
        info.appendChild(loc);
    }

    const created = document.createElement("p");
    created.classList.add("created");
    created.innerHTML = `created at ${(data.created_at).slice(0,10)}`;
    info.appendChild(created);

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(username);
    card.appendChild(bio);
    card.appendChild(info);
}


createCard()