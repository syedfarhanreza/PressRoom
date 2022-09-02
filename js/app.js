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
        <button onclick="loadCategoryDetailes('${name.category_id}')" class="btn btn-light text-secondary">${name.category_name}</button>
        `;
        nameContainer.appendChild(nameDiv);
    });
}
  const loadCategoryDetailes = async id => {
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`
    const res = await fetch(url);
    const data = await res.json();
    displayCategoryDetails(data.data);
  }

  const displayCategoryDetails = categories => {
    // console.log(categories);
    const categoryContainer = document.getElementById('category-container');
    categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('row');
        categoryDiv.innerHTML= `
        <div class="col-md-4">
                    <img src="${category.image_url}" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${category.title}</h5>
                      <p class="card-text">${category.details}</p>
                      
                    </div>
                    <div class="card-footer border border-0">
                        <div class="d-flex justify-content-evenly p-3">
                            <div class="d-flex">
                                <div>
                                    <img src="" class="img-thumbnail rounded" alt="...">
                                </div>
                                <div>
                                    <h5>${category.author.name}</h5>
                                <small>${category.author.published_date}</small>
                                </div>
                            </div>
                            <div>
                                <i class="fa-regular fa-eye fw-bold"> ${category.total_view}</i>
                            </div>
                            <div>
                                <button class="btn btn-primary">Show Details</button>
                            </div>
                        </div>
                      </div>
                  </div>
        `;
        categoryContainer.appendChild(categoryDiv);
    })

  }


loadCategory();