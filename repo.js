const card = document.querySelector(".card");


const createCard = async () => {
    response = await fetch("https://api.github.com/users/janajolovic/repos")
    data = await response.json();

    data.forEach(repo => {
                
        const repo_div = document.createElement("div");
        repo_div.classList.add("repo");

        const repo_data = document.createElement("div");
        repo_data.classList.add("repo-data")

        const name = document.createElement("a");
        name.href = repo.html_url;
        name.target = "_blank";
        name.innerHTML = repo.name;
        repo_data.appendChild(name);
        
        const vis = document.createElement("div");
        vis.id = "visibility";
        vis.innerHTML = repo.visibility;
        repo_data.appendChild(vis);

        repo_div.appendChild(repo_data);

        if (repo.description) {
            const desc = document.createElement("p");
            desc.classList.add("desc");
            desc.innerHTML = repo.description;
            repo_div.appendChild(desc);
        }
            
        const lang = document.createElement("p");
        lang.innerHTML = repo.language;
        repo_div.appendChild(lang);

        const updated = document.createElement("p");
        updated.classList.add("created");
        updated.innerHTML = `updated at ${(repo.updated_at).slice(0,10)}`;
        repo_div.appendChild(updated);

        card.appendChild(repo_div);

    })

    const btn = document.createElement("a");
    btn.href = "index.html";
    btn.classList.add("close-btn");
    btn.innerHTML = `<i class="fas fa-times"></i>`;

    card.append(btn); 

}

createCard()