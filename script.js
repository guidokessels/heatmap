/**
 * Heatmap proof of concept on GamesGames.com
 *
 * Uses heatmap.js from http://www.patrick-wied.at/static/heatmapjs/
 */
(function() {

    var heatmap = h337.create({
        "element" : document.getElementById("heatmap"), 
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