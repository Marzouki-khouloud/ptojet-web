const addToCartButtons = document.querySelectorAll('button');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Le produit a été ajouté au panier ! 🛒');
    });
});
 
