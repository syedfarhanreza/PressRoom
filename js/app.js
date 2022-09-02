const loadCategory = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
    displayCategory(data.data.news_category)
}

const displayCategory = names => {
    const nameContainer = document.getElementById('name-container');
    names.forEach(name => {
        const nameDiv = document.createElement('div');
        nameDiv.innerHTML =` 
        <button id="category_id-$01" class="btn btn-light text-secondary">${name.category_name}</button>
        `;
        nameContainer.appendChild(nameDiv);
    });
}

loadCategory();