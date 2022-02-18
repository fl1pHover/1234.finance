// Delgetstei ajillah contoller
var uiController = (function() {})();

// Sanhuutei ajilah contoller
var financialController = (function() {})();

// Programmiin holboch controller
var appController = (function(uiController, financialController) {
    var ctrlAddItem = function() {
        //    1. Oruulah ugugdlig delgetseees olj avna
        console.log('asdas');
        //    2. Olj avsan ugugdluude sanhuugiin controllerd damjuulj tend hadgalna

        //    3. Olj avsan ugugdluude webdeeree tohiroh heesegt ni gargana.

        //    4. Tusviig tootsoolno.

        //    5. Etssiin uldegdel tootsoog delgtsend gargana,

    };
    document.querySelector(".add__btn").addEventListener("click", function() {
        ctrlAddItem();
    })

    document.addEventListener("keypress", function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });
})(uiController, financialController);