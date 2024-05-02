let btn = document.getElementById('btn');
let output = document.getElementById('output');

let arr = [
    {
        quote: "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.",
        author: "Albus Dumbledore"
    },
    {
        quote: "It is impossible to manufacture or imitate love",
        author: "Horace Slughorn"
    },
    {
        quote: "Being different isn a bad thing. I mean that you are brave enough to be yourself.",
        author: "Luna Lovegood"
    },
    {
        quote: "Never trust anything that can think for itself if you cant see where it keeps its brain.",
        author: "Arthur Weasley"
    },
    {
        quote: "Every human life is worth the same, and worth saving.",
        author: "Kingsley Shacklebolt"
    },
    {
        quote: "Have a biscuit, Potter.",
        author: "Minerva McGonagall"
    },
    {
        quote: "Happiness can be found even in the darkest of times if one only remembers to turn on the light.",
        author: "Albus Dumbledore"
    },
    {
        quote: "Socks are Dobbys favorite, favorite clothes, sir!",
        author: "Dobby"
    }
];



let colors = ['#FF5733' , '#FA9D89', '#B12C10' , '#FFF000' , '#B4FF47' , '#04FFDD', '#04C6FF' , '#044DFF' ]

btn.addEventListener('click', function(){
    let randomQuote = arr[Math.floor(Math.random() * arr.length)];
    output.innerHTML = randomQuote.quote + " ______ "+ randomQuote.author;
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
})



