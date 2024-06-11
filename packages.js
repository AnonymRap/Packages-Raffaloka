document.addEventListener('DOMContentLoaded', function() {
    const packageList = document.getElementById('packageList');

    const packages = [
        {
            name: 'Bali Adventure',
            price: 1200,
            image: 'img/bali.jpg',
            description: 'Experience the beauty of Bali with our adventure package, including guided tours, cultural experiences, and relaxing beach days.'
        },
        {
            name: 'Paris Getaway',
            price: 1500,
            image: 'img/paris.jpg',
            description: 'Enjoy a romantic getaway in Paris, the city of love. Our package includes a Seine River cruise, Eiffel Tower visit, and gourmet dining.'
        },
        {
            name: 'Tokyo Experience',
            price: 1800,
            image: 'img/tokyo.jpg',
            description: 'Immerse yourself in the vibrant culture of Tokyo with our experience package. Includes city tours, traditional tea ceremonies, and shopping sprees.'
        }
    ];

    displayPackages(packages);

    function displayPackages(packages) {
        packageList.innerHTML = '';

        if (packages.length === 0) {
            packageList.innerHTML = '<p>No packages available</p>';
            return;
        }

        packages.forEach(pkg => {
            const packageItem = document.createElement('div');
            packageItem.classList.add('package-item');

            const image = document.createElement('img');
            image.src = pkg.image;
            image.alt = pkg.name;
            packageItem.appendChild(image);

            const packageDetails = document.createElement('div');
            packageDetails.classList.add('package-details');
            packageDetails.innerHTML = `
                <strong>${pkg.name}</strong><br>
                Price: $${pkg.price}<br>
                <p>${pkg.description}</p>
            `;
            packageItem.appendChild(packageDetails);

            const bookBtn = document.createElement('button');
            bookBtn.classList.add('book-btn');
            bookBtn.textContent = 'Book';
            bookBtn.addEventListener('click', function() {
                bookPackage(pkg.name, pkg.price);
            });
            packageItem.appendChild(bookBtn);

            packageList.appendChild(packageItem);
        });
    }

    function bookPackage(name, price) {
        packageList.innerHTML = `<p>Thank you for booking the ${name} package for $${price}! Enjoy your trip!</p>`;
    }
});
