var links = [
    {
        topText: "Random",
        image: "images/youtube.svg",
        bottomText: "YouTube Videos",
        href: "https://random-ize.com/random-youtube/#refresh2"
    },
    {
        topText: "Random",
        image: "",
        bottomText: "Subreddit",
        href: "https://reddit.com/r/random"
    },
    {
        topText: "Useless",
        image: "",
        bottomText: "Websites",
        href: "https://theuselessweb.com"
    },
    {
        topText: "Random",
        image: "",
        bottomText: "Wikipedia article",
        href: "https://en.wikipedia.org/wiki/Special:Random"
    },
    {
        topText: "Random",
        image: "",
        bottomText: "Minecraft Wiki Article",
        href: "https://minecraft.gamepedia.com/Special:RandomRootpage"
    },
    {
        topText: "Random",
        image: "",
        bottomText: "Classic Art",
        href: "https://random-ize.com/random-art-gallery/#refresh"
    },
    {
        topText: "Make",
        image: "",
        bottomText: "Random Art",
        href: "http://www.random-art.org/online/"
    },
    {
        topText: "Other",
        image: "",
        bottomText: "Random Stuff",
        href: "http://random.org"
    }
];

function addTile(obj) {
    var link = document.createElement("a");
    link.href = obj.href;
    link.target = "_blank";

    var color = randomColor({
        format: "rgba",
        luminosity: "light",
        hue: "blue",
        alpha: 0.95
    });
    link.style.backgroundColor = color;

    var topSpan = document.createElement("span");
    topSpan.innerText = obj.topText;

    var image = document.createElement("img");
    image.src = obj.image;

    var bottomSpan = document.createElement("span");
    bottomSpan.innerText = obj.bottomText;

    link.appendChild(topSpan);
    link.appendChild(image);
    link.appendChild(bottomSpan);

    var grid = document.getElementsByClassName("grid")[0];
    grid.appendChild(link);
}

function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}

function addAllTiles(array) {
    array = shuffleArray(array);

    for (var i in array) {
        addTile(array[i]);
    }
}

addAllTiles(links);