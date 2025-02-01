document.addEventListener("DOMContentLoaded", function () {
    const articles = {
        "drip-irrigation": {
            title: "Efficient Drip Irrigation Techniques",
            image: "images/drip.jpg",
            content: `<p>Drip irrigation delivers water directly to plant roots, reducing evaporation and water waste.</p>
                      <ul>
                        <li>Saves up to 50% water.</li>
                        <li>Enhances soil moisture.</li>
                      </ul>`
        },
        "mulching": {
            title: "Using Mulching to Retain Soil Moisture",
            image: "images/mulching.jpg",
            content: `<p>Mulching helps retain soil moisture and prevents weed growth.</p>
                      <p>It protects plants and conserves water.</p>`
        },
        "rainwater-harvesting": {
            title: "Rainwater Harvesting Systems",
            image: "images/harvesting.jpg",
            content: `<p>Collecting and storing rainwater helps reduce water scarcity.</p>`
        },
        "gray-water-recycling": {
            title: "Gray Water Recycling",
            image: "images/gray-water.jpg",
            content: `<p>Reusing household wastewater can significantly cut down fresh water usage.</p>`
        },
        "moisture-sensors": {
            title: "Soil Moisture Sensors for Precision Irrigation",
            image: "images/moisture-sensors.jpg",
            content: `<p>Sensors monitor soil moisture levels and prevent overwatering.</p>`
        },
        "drought-resistant-crops": {
            title: "Drought-Resistant Crop Varieties",
            image: "images/drought.jpg",
            content: `<p>Using drought-resistant crops ensures sustainable farming in dry areas.</p>`
        },
        "village-rainwater": {
            title: "The Village That Transformed with Rainwater Harvesting",
            image: "images/harvesting.jpg",
            content: `<p>A village solved its water crisis by implementing rainwater harvesting.</p>`
        },
        "farmer-innovation": {
            title: "A Farmer's Innovation: Saving Water with Smart Solutions",
            image: "images/covercrop.jpg",
            content: `<p>A farmer developed an underground storage system for better water management.</p>`
        },
        "youth-activist": {
            title: "Youth Activist's Mission to Clean Rivers",
            image: "images/story.jpg",
            content: `<p>A young activist inspired a community to clean a polluted river.</p>`
        },
        "women-conservation": {
            title: "Women Leading Water Conservation Efforts",
            image: "images/story.jpg",
            content: `<p>Women in rural areas are leading initiatives for water conservation.</p>`
        },
        "urban-gardening": {
            title: "Urban Gardening: Reducing Water Waste",
            image: "images/soil.jpg",
            content: `<p>Hydroponics and rainwater collection are helping urban farmers save water.</p>`
        },
        "desert-revival": {
            title: "The Desert Revival: How One Group Restored an Ecosystem",
            image: "images/drought.jpg",
            content: `<p>Conservationists revitalized a desert by planting native trees.</p>`
        }
    };

    const params = new URLSearchParams(window.location.search);
    const articleId = params.get("id");

    const articleContainer = document.getElementById("article-content");

    if (articles[articleId]) {
        const article = articles[articleId];
        articleContainer.innerHTML = `
            <h2>${article.title}</h2>
            <img src="${article.image}" alt="${article.title}" class="article-image">
            ${article.content}
        `;
    } else {
        articleContainer.innerHTML = `<h2>Select an article from the homepage.</h2>`;
    }
});
