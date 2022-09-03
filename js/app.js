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
    nameDiv.innerHTML = ` 
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
  console.log(categories);
  const categoryContainer = document.getElementById('category-container');
  categoryContainer.textContent = '';
  categories.forEach(category => {
    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('p-3');
    categoryDiv.innerHTML = `
    <div class="rounded-4 row">
        
    <div class="col-3">
        <img src="${category.thumbnail_url}" alt="">
    </div>

    <!-- details -->
    <div class="col-9">

        <!-- Tittle -->
        <h3 class="fw-semibold">${category.title}</h3>
        <p class="text-muted">
            ${category.details}
        </p>

        <div class="">
            <div class="row d-flex justify-content-between">
                <div class="col">
                    <div class="row">
                        <div class="col-3 ">
                            <img class="img-fluid rounded-circle" src="${category.author.img}" alt="">
                        </div>
                        <div class="col-9">
                            <h6>
                                ${category.author.name}
                            </h6>
                            <p>
                            ${category.author.published_date}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col d-flex align-items-center">
                    <p class="fw-semibold"><i class="fa-regular fa-eye"></i>${category.total_view}</p>
                </div>
                <div class="col d-flex align-items-center">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <div class="col d-flex align-items-center">
                    <button onclick="showDetails('${category._id}')" class="fw-bold btn btn-info" data-bs-toggle="modal" data-bs-target="#categoryModal">Show Details</button>
                </div>
            </div>
        </div>
    </div>
</div>
        `;
    categoryContainer.appendChild(categoryDiv);
  })

}

const showDetails = async news_id => {
  const url =` https://openapi.programming-hero.com/api/news/${news_id}`
  const res = await fetch(url);
  const data = await res.json();
  displayShowDetails(data.data);
}

const displayShowDetails = showNews => {
  console.log(showNews)
  const modalTitle = document.getElementById('categoryModalLabel');
  modalTitle.innerText = showNews[0].title;
  const newsDetails = document.getElementById('news-details');
  newsDetails.innerHTML = `
  <p>${showNews[0].details ? showNews[0].details: 'no news found'}</p>
  <small>Author Name: ${showNews[0].author.name ? showNews[0].author.name: 'no author found'}</small>
  `
}


loadCategory();