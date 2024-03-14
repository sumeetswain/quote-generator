let quote = document.querySelector("#quote")
let author = document.querySelector("#author")
const getQuote = async () => {
    await axios.get("https://api.quotable.io/random").then((res) => {
        quote.innerHTML = `"${res.data.content}"`
        author.innerHTML = `-${res.data.author}`
    })
}
getQuote()


const tweet = () => {
    window.open(`https://twitter.com/intent/tweet?text=${quote.innerHTML}%20${author.innerHTML}`, "Tweet Window", "width=600, height=300")
}