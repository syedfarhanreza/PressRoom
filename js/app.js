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
        <button onclick="loadCategoryDetailes('${name.category_id}')" class="btn btn-light text-secondary" data-bs-toggle="modal" data-bs-target="#categoryModal">${name.category_name}</button>
        `;
        nameContainer.appendChild(nameDiv);
    });
}
  const loadCategoryDetailes = async id => {
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`
    const res = await fetch(url);
    const data = await res.json();
    displayCategoryDetailes(data.data);
  }

  const displayCategoryDetailes = categories => {
    console.log(categories);
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
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      
                    </div>
                    <div class="card-footer border border-0">
                        <div class="d-flex justify-content-evenly p-3">
                            <div class="d-flex">
                                <div>
                                    <img src="" class="img-fluid rounded" alt="...">
                                </div>
                                <div>
                                    <h5>Jane Cooper</h5>
                                <small>jan 10, 2022</small>
                                </div>
                            </div>
                            <div>
                                <i class="fa-regular fa-eye fw-bold"> 1.5 M</i>
                            </div>
                            <div>
                                <button class="btn btn-primary">Show Details</button>
                            </div>
                        </div>
                      </div>
                  </div>
        `;
        categoryContainer.appendChild(categoryDiv);c
    })

  }


loadCategory();