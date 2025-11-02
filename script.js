    document.addEventListener('DOMContentLoaded', function() {
        const dropdown = document.getElementById('selector');
        const contentDivs = document.querySelectorAll('.content-div');
        const storedValue = localStorage.getItem('selectedDropdownValue');
        
        if (storedValue) {
            dropdown.value = storedValue;
        }

        dropdown.addEventListener('change', function() {
            const selectedDivId = this.value;
            localStorage.setItem('selectedDropdownValue', this.value);

            // Hide all content divs
            contentDivs.forEach(div => {
                div.style.display = 'none';
            });

            // Show the selected div
            const selectedDiv = document.getElementById(selectedDivId);
            if (selectedDiv) {
                selectedDiv.style.display = 'block';
            }
        });

        // Optional: Trigger change event on page load to show initial div
        dropdown.dispatchEvent(new Event('change'));
    });