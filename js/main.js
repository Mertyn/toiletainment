$(document).ready(function() {
    $("a").each(function() {
        var link = $(this);
        var color = randomColor({
            format: "rgba",
            luminosity: "light",
            hue: "blue",
            alpha: 0.9
        });
        
        link.css("background-color", color);
    });
});