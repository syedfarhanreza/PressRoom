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
                    <button class="fw-bold btn btn-info">Show Details</button>
                </div>
            </div>
        </div>
    </div>
</div>
        `;
    categoryContainer.appendChild(categoryDiv);
  })

}


loadCategory();