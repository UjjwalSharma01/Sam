document.addEventListener('DOMContentLoaded', function () {
    const styleLink = document.getElementById('style-link');
    const checkbox = document.getElementById('checkbox');

    // Check the initial state of the checkbox and set the stylesheet accordingly
    updateStylesheet();

    // Listen for changes in the checkbox state
    checkbox.addEventListener('change', function () {
        updateStylesheet();
    });

    function updateStylesheet() {
        // Toggle between two CSS files based on the checkbox state
        const newStyle = checkbox.checked ? 'portfoliodark.css' : 'portfolio.css';

        // Set the new href attribute to apply the new stylesheet
        styleLink.setAttribute('href', newStyle);
    }
});
