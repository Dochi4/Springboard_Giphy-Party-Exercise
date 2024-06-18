

const textinput = $("#textInput");
const submit = $("#submit");
const searchform = $("#searchform");
const remove = $("#removeButton");
const giphDisplay = $("#giphyDisplay");

searchform.on("submit", async function(e) {
    e.preventDefault(); 
    const phrase = textinput.val(); 
    await addGiphy(phrase);
});

remove.on("click", async function(e) {
    e.preventDefault(); 
    giphDisplay.empty();
});

async function addGiphy(phrase) {
    try {
        const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
            params: {
                q: phrase,
                api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
            }
        });
        
        const resData = res.data.data;
        const randomIndex = Math.floor(Math.random() * resData.length);
        const giphSelect = resData[randomIndex];
        const giphUrl = giphSelect.images.fixed_height.url;

        
        $("#giphyDisplay").append(`<img src="${giphUrl}" alt="GIPHY">`);
    } catch(e) {
        console.log("ooops");
    }
}