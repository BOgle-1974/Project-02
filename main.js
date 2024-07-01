// Project 2: Giphy Search Engine
// Completed June 30, 2024 by Brin L. Ogle 

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const resultsElement = document.getElementById('results');


searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const q = searchInput.value;
    search(q);

});

function search(q) {
    let gifCount = 10;
const apikey = 'J1cz5VDWmPeOBKbM65pT9IXkIoFe4wwm';
let url = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${q}&limit=${gifCount}&offset=0`;
fetch(url).then(function(res) {    
    return res.json(); 
}).then(function(json) {
    console.log(json.data[0].images.fixed_width.url);
   let gifCount = 10;
    let resultsHTML = '';
    
    json.data.forEach(function(obj) {
        console.log(obj.images.fixed_width);

        const url = obj.images.fixed_width.url;
        const width = obj.images.fixed_width.width;
        const height = obj.images.fixed_width.height;
        const title = obj.title;
        resultsHTML += `<img 
            class="item";
            src="${url}" 
            width="${width}" 
            height="${height}"
            alt="${title}"
            >`
            
    });

    resultsElement.innerHTML = resultsHTML;
}).catch(function(err) {
    console.log(err.message);

})
}