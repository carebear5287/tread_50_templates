document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.getElementById('selector');
    const contentDivs = document.querySelectorAll('.content-div');
    const storedValue = localStorage.getItem('selectedDropdownValue');
    const theme_button = document.getElementById('theme_button')
    const cssElem = document.querySelector('link[rel="stylesheet"]')
    let style = localStorage.getItem('selectedStyle');
    
    if (storedValue) {
        dropdown.value = storedValue;
    }

    if (style) {
        cssElem.href = style
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
    
    theme_button.addEventListener('click', function() {
        if (style == 'otf_style_sheet.css') {
            style = 'otf_dark_style_sheet.css'
        } else {
            style = 'otf_style_sheet.css'
        }
        localStorage.setItem('selectedStyle', style);
        cssElem.href = style;
    });
});
