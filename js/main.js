const loadNews = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    // console.log(data.posts);
    // console.log(data.posts[0].id);
    const allData = data.posts;
    const newsContainer = document.getElementById('news-container');
    allData.forEach((item) => {
        const div = document.createElement("div");
        div.classList.add("single-news");
        div.innerHTML = `
        <div
        class="relative card card-side bg-[#F3F3F5] sm:pl-1 lg:pl-6 flex flex-col lg:flex-row border">
        <figure><img class="absolute left-4 top-7 w-16 lg:w-16 rounded-full" src="${item.image}" /></figure>

        <div class=" card-body ml-8  rounded-lg">


            <div class="card-actions gap-6">
                <h3 class="text-lg font-extrabold ">${item.category}</h3>
                <div class="flex gap-3">
                    <img src="Images/Frame (2).png" alt="">
                    <p>Author : ${item.author.name}</p>
                </div>
            </div>
            <h2 class="card-title">${item.title}</h2>
            <p>${item.description} </p>

            <div class="flex gap-4">
                <div class="rating gap-2">

                    <img src="images/tabler-icon-message-2.svg" alt="">
                    <p>${item.comment_count}</p>
                </div>
                <div class="flex gap-2">

                    <img src="images/tabler-icon-eye.svg" alt="">
                    <p>${item.view_count}</p>
                </div>
                <div class="flex gap-2">

                    <img src="images/tabler-icon-clock-hour-9.svg" alt="">
                    <p>${item.posted_time}</p>
                </div>
                <div class="flex gap-2">

                    <img src="images/email 1.svg" alt="">

                </div>
            </div>
        </div>
    </div>
        
        `;
        newsContainer.appendChild(div);

    });
}

loadNews()