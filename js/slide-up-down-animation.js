document.querySelectorAll('.toggle').forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        let targetClass = this.dataset.target; // Get target class
        let targets = document.querySelectorAll("." + targetClass); // Select all elements with that class
        targets.forEach(target => {
            if (this.checked) {
                target.classList.add('dissappear'); // Hide all elements with the class
            } else {
                target.classList.remove('dissappear'); // Show all elements with the class
            }
        });
    });
});


// choose a player filter button
function toggleFilter() {
    document.getElementById('filterMenu').classList.toggle('active');
}