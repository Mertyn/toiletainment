// Set favicon depending on theme
//===========================================================================

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    var favicon = document.querySelector("link[rel='icon']");
    favicon.href = "images/appicons/favicon_dark.png";
}
else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    var favicon = document.querySelector("link[rel='icon']");
    favicon.href = "images/appicons/favicon_light.png";
}


// Init link tiles
//===========================================================================
var links = [
    {
        topText: "Random",
        image: "images/icons/youtube.svg",
        bottomText: "YouTube Videos",
        href: "https://random-ize.com/random-youtube/#refresh2"
    },
    {
        topText: "Random",
        image: "images/icons/reddit.svg",
        bottomText: "Subreddit",
        href: "https://reddit.com/r/random"
    },
    {
        topText: "Useless",
        image: "images/icons/uselessweb.svg",
        bottomText: "Websites",
        href: "https://theuselessweb.com"
    },
    {
        topText: "Random",
        image: "images/icons/wikipedia.svg",
        bottomText: "Wikipedia article",
        href: "https://en.wikipedia.org/wiki/Special:Random"
    },
    {
        topText: "Random",
        image: "images/icons/minecraft-wiki.svg",
        bottomText: "MC Wiki Article",
        href: "https://minecraft.gamepedia.com/Special:RandomRootpage"
    },
    {
        topText: "Random",
        image: "images/icons/gallery.svg",
        bottomText: "Classic Art",
        href: "https://random-ize.com/random-art-gallery/#refresh"
    },
    {
        topText: "Make",
        image: "images/icons/draw.svg",
        bottomText: "Random Art",
        href: "http://www.random-art.org/online/"
    },
    {
        topText: "Other",
        image: "images/icons/random.svg",
        bottomText: "Random Stuff",
        href: "http://random.org"
    }
];

function addTile(obj) {
    var link = document.createElement("a");
    link.target = "_blank";
    if (obj.href) link.href = obj.href;

    var color = randomColor({
        format: "rgba",
        luminosity: "bright",
        hue: "blue",
        alpha: 0.5
    });

    link.style.backgroundColor = color;

    var topSpan = document.createElement("span");
    var image = document.createElement("img");
    var bottomSpan = document.createElement("span");
    
    if (obj.topText) topSpan.innerText = obj.topText;
    if (obj.image) image.src = obj.image;
    if (obj.bottomText) bottomSpan.innerText = obj.bottomText;

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