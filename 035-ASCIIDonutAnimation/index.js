(function () {
    var preTag = document.getElementById('donut');

    // Angles. Radius and Contants
    var A = 1;
    var B = 1;
    var R1 = 1;
    var R2 = 2;
    var K1 = 150;
    var K2 = 5;

    // Function to render ASCII frame
    function renderAsciiFrame() {
        var b = []; // Array to stay ascii charts
        var z = []; // Array to store depth values

        var width = 280; // Width of frame
        var height = 160; // Height of frame

        A += 0.07; // Increament angle a
        B += 0.03; // Increament angle b
        // Sin and Cosine of angles
        var cA = Math.cos(A),
            sA = Math.sin(A),
            cB = Math.cos(B),
            sB = Math.sin(B);
    }
})




