// Display Random Quote
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    document.getElementById('quoteText').innerText = `"${selectedQuote.text}"`;
    document.getElementById('quoteAuthor').innerText = `- ${selectedQuote.author}`;
}

// Create a CEO entry block
function createCriminalEntry(criminal) {
    const criminalDiv = document.createElement('div');
    criminalDiv.className = 'criminal';
    criminalDiv.dataset.country = criminal.country;

    const img = document.createElement('img');
    img.src = criminal.image;
    img.alt = criminal.name;

    const name = document.createElement('h2');
    name.innerText = criminal.name;

    const crimesDiv = document.createElement('div');
    crimesDiv.className = 'crimes';

    const ul = document.createElement('ul');
    criminal.crimes.forEach(crime => {
        const li = document.createElement('li');
        li.innerText = crime;
        ul.appendChild(li);
    });

    crimesDiv.appendChild(ul);

    // Toggle crimes list on image click
    img.addEventListener('click', () => {
        crimesDiv.style.display = crimesDiv.style.display === 'none' ? 'block' : 'none';
    });

    criminalDiv.appendChild(name);
    criminalDiv.appendChild(img);
    criminalDiv.appendChild(crimesDiv);

    return criminalDiv;
}

// Load the CEO list and setup filters
function loadCriminalList() {
    const listContainer = document.getElementById('criminalList');
    const filterBar = document.getElementById('filterBar');
    const quoteSection = document.getElementById('quoteSection');
    const continueButton = document.getElementById('continueButton');
    const searchBar = document.getElementById('searchBar');

    // Hide intro elements
    quoteSection.style.display = 'none';
    continueButton.style.display = 'none';

    // Show filter bar, search bar & criminal list
    filterBar.style.display = 'flex';
    searchBar.style.display = 'block';
    listContainer.style.display = 'grid';

    // Populate the list
    criminalList.forEach(criminal => {
        const entry = createCriminalEntry(criminal);
        listContainer.appendChild(entry);
    });

    // Setup filter buttons
    setupFilterButtons();

    // Setup search bar
    setupSearchBar();
}

// Setup country filter buttons
function setupFilterButtons() {
    const filterBar = document.getElementById('filterBar');
    const countries = [...new Set(criminalList.map(criminal => criminal.country))];
    const countryFlags = {
        'Switzerland': '🇨🇭',
        'USA': '🇺🇸',
        'Israel': '🇮🇱',
        'Saudi Arabia': '🇸🇦',
        'Russia': '🇷🇺',
        'Italy': '🇮🇹', // Added Italy flag
        'Australia': '🇦🇺' // Added Australia flag
    };

    const allButton = document.createElement('button');
    allButton.innerText = 'All';
    allButton.dataset.country = 'All';
    filterBar.appendChild(allButton);

    countries.forEach(country => {
        const button = document.createElement('button');
        button.innerText = countryFlags[country] || country;
        button.dataset.country = country;
        filterBar.appendChild(button);
    });

    const buttons = document.querySelectorAll('#filterBar button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedCountry = button.dataset.country;
            const allCriminals = document.querySelectorAll('.criminal');

            allCriminals.forEach(criminal => {
                if (selectedCountry === 'All' || criminal.dataset.country === selectedCountry) {
                    criminal.style.display = 'block';
                } else {
                    criminal.style.display = 'none';
                }
            });
        });
    });
}

function setupSearchBar() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const allCriminals = document.querySelectorAll('.criminal');

        allCriminals.forEach(criminal => {
            const name = criminal.querySelector('h2').innerText.toLowerCase();
            const crimes = criminal.querySelector('.crimes').innerText.toLowerCase();
            
            if (name.includes(searchTerm) || crimes.includes(searchTerm)) {
                criminal.style.display = 'block';
            } else {
                criminal.style.display = 'none';
            }
        });
    });
}

// Initialize Page
window.onload = () => {
    displayRandomQuote();
    document.getElementById('continueButton').addEventListener('click', loadCriminalList);
};