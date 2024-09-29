const loadPhone = async () => {
    toggleLoadingSpinner(true);
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    displayPhones(data.posts)
};


// const loadNews = async () => {
//     const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
//     const data = await res.json();
// console.log(data.posts);
// console.log(data.posts[0].id);
//     const allData = data.posts;
//     const newsContainer = document.getElementById('news-container');
//     allData.forEach((item) => {
//         const div = document.createElement("div");
//         div.classList.add("single-news");
//         div.innerHTML = `
//         <div
//         class="relative card card-side bg-[#F3F3F5] sm:pl-1 lg:pl-6 flex flex-col lg:flex-row border">
//         <figure><img class="absolute left-4 top-7 w-16 lg:w-16 rounded-full" src="${item.image}" /></  figure>

//         <div class=" card-body ml-8  rounded-lg">


//             <div class="card-actions gap-6">
//                 <h3 class="text-lg font-extrabold ">${item.category}</h3>
//                 <div class="flex gap-3">
//                     <img src="Images/Frame (2).png" alt="">
//                     <p>Author : ${item.author.name}</p>
//                 </div>
//             </div>
//             <h2 class="card-title">${item.title}</h2>
//             <p>${item.description} </p>

//             <div class="flex gap-4">
//                 <div class="rating gap-2">

//                     <img src="images/tabler-icon-message-2.svg" alt="">
//                     <p>${item.comment_count}</p>
//                 </div>
//                 <div class="flex gap-2">

//                     <img src="images/tabler-icon-eye.svg" alt="">
//                     <p>${item.view_count}</p>
//                 </div>
//                 <div class="flex gap-2">

//                     <img src="images/tabler-icon-clock-hour-9.svg" alt="">
//                     <p>${item.posted_time}</p>
//                 </div>
//                 <div class="flex gap-2">

//                   <img src="images/email 1.svg" alt="">

//                 </div>
//             </div>
//         </div>
//     </div>

//         `;
//         newsContainer.appendChild(div);

//     });
// }




// Let’s Discuss section
const displayPhones = (data) => {
    const phoneCard = document.getElementById('card-section');
    phoneCard.innerHTML = '';
    data.forEach((post) => {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <div id="card-section" class="card card-side bg-base-100 bg-[#F3F3F5] hover:bg-[#797DFC1A] transition">
        <div class="mt-6">
            <figure><img class="w-20 h-20 rounded-xl ml-10  relative" src="${post.image}" alt="Shoes" /></figure>
            <div class="w-4 h-4 rounded-full ${post.isActive ? 'bg-green-500' : 'bg-red-500'} absolute top-3 left-28"></div>
        </div>
        <div class="card-body">
            <div class="flex-1 lg:flex lg:gap-5">
                <h4># ${post.category}</h4>
                <h4>Author : ${post.author.name}</h4>
            </div>
            <h2 class="card-title">${post.title}</h2>
            <p>${post.description}</p>
            <div class="flex-1 space-y-2 lg:flex justify-between">
                <div class="flex-1 lg:flex lg:gap-6">
                    <div class="flex items-center justify-center gap-2">
                        <img src="./images/tabler-icon-message-2.svg" alt="">
                        <p>${post.comment_count}</p>
                    </div>
                    <div class="flex items-center justify-center gap-2">
                        <img src="./images/tabler-icon-eye.svg" alt="">
                        <p> ${post.view_count}</p>
                    </div>
                    <div class="flex items-center justify-center gap-2">
                        <img src="./images/tabler-icon-clock-hour-9.svg" alt="">
                        <p>${post.posted_time} min</p>
                    </div>

                </div>
                <button onclick="otherSide('${post.title.replace(/'/g, '@')}' , '${post.view_count}',)"><img src="./images/email 1.svg" alt=""></button>
            </div>
        </div>
    </div>
        `;
        phoneCard.appendChild(newDiv);
    });

    setTimeout(() => {

        toggleLoadingSpinner(false);
    }, 4000)


};

// Let’s Discuss another side
const otherSide = (title, view) => {

    const showTitle = document.getElementById('show-title');
    const showTitleSection = document.createElement('div');
    const markRead = document.getElementById('mark-read');

    showTitleSection.className = 'flex bg-white rounded-lg p-4';
    showTitleSection.innerHTML = `
    <p class="w-[200px] text-black font-bold">${title}</p>
    <div class="flex items-center justify-center">
        <img src="./images/eye.png" alt="">
        <p>${view}</p>
    </div>
    `;
    showTitle.appendChild(showTitleSection
    );

    const howManyRead = () => {
        let howManyReadCount = parseInt(markRead.innerText);
        howManyReadCount += 1;
        markRead.innerText = howManyReadCount;
    }
    howManyRead()
};
// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------
// handle search button
const handleSearch = () => {
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-discuss')
    const searchText = searchField.value;
    loadSearch(searchText);
}

// handle show all
const loadSearch = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
    const data = await res.json();

    const showPhoneDetails = data.posts;

    displayPhones(showPhoneDetails);
    setTimeout(() => {
        toggleLoadingSpinner(false);
        document.getElementById('search-discuss').value = '';
    }, 4000);
}


// Latest Posts section

// const latestPost = async () => {
//     const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
//     const data = await res.json();


// console.log(data.posts);
// console.log(data.posts[0].id);
// const allData = data.posts;



//     const latestPost = document.getElementById('news-container');
//     allData.forEach((part) => {
//         const div = document.createElement("div");
//         div.classList.add("single-news");
//     });
// }





// Latest Posts section
const latestPost = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    const latestPost = document.getElementById('latest-posts-section');
    data.forEach((item) => {
        const latestCreate = document.createElement('div');
        latestCreate.className = 'card w-96 bg-base-100 shadow-xl mb-3 ml-2 ';
        latestCreate.innerHTML = ` 

        <figure><img class="w-80 h-48 rounded-xl" src="${item.cover_image}"
                            alt="Shoes" />
                    </figure>
                    <div>
                        <div class="card-actions ml-4 mt-3">
                            <img src="images/Frame (5).svg" alt="">
                            <p>${item.author?.posted_date || "No Publish Date"}</p>
                        </div>
                        <div class="card-body">
                            <h2 class="card-title">
                            ${item.title}
                                
                            </h2>
                            <p>${item.description} </p>

                            <div class="flex items-center gap-3">
                                <img class="w-11 h-11 rounded-full" src="${item.profile_image}" alt="">
                                <div>
                                    <h4 class="text-xl font-semibold">${item.author.name}</h4>
                                    <p>${item.author?.designation || "Unknown"}</p>
                                </div>
                            </div>
                        </div>

                    </div>

        
        
        `

        latestPost.appendChild(latestCreate);
    });

};

// loadingSpinner show function
const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    if (isLoading) {
        loadingSpinner.classList.remove('hidden');
    } else {
        loadingSpinner.classList.add('hidden');
    }
};


loadPhone();
latestPost();












