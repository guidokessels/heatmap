/**
 * Heatmap proof of concept on GamesGames.com
 *
 * Uses heatmap.js from http://www.patrick-wied.at/static/heatmapjs/
 */
(function() {

    var heatmapElement = document.getElementById('heatmap'),
        iframeElement  = document.getElementById('source');

    // Resize heatmap and iframe to use full browser width
    var viewPortWidth  = window.innerWidth,     // window.innerWidth should work with most modern browsers
        viewPortHeight = 2078;                  // Hardcoded for now, we have to figure out a way to find the height of the iframe's source

    heatmapElement.style.width  = iframeElement.width  = viewPortWidth;
    heatmapElement.style.height = iframeElement.height = viewPortHeight;

    var heatmap = h337.create({
        "element" : heatmapElement, 
        "radius"  : 10, 
        "visible" : true
    });


    // Add dots on mousemove
    heatmap.get("canvas").onmousemove = function(ev) {
        var pos = h337.util.mousePosition(ev);

        if (pos) {
            heatmap.store.addDataPoint(pos[0], pos[1]);
        }
    };


/*
    // Enable the "Generate random set" button
    var button = document.getElementById("gen");
    button.onclick = function(){
        heatmap.store.generateRandomDataSet(1000);
    }
    button.style.display = 'block';
*/

/*
    // Add a new point every X milliseconds
    var floor   = Math.floor, 
        random  = Math.random,
        count   = 0,
        generatePoint = function(max) { return floor(random() * max + 1) };

    setInterval(function() {

        heatmap.store.addDataPoint(
            generatePoint(1295), // x
            generatePoint(2078)  // y
        );

        count++;

    }, 10);

    // Log the amount of points added every 2.5 seconds
    setInterval(function() { 
        console.log('Total points added:', count); 
    }, 2500);
*/

})();