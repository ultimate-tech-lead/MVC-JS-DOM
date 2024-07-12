// Create a button element
// ovo kreira novo dugme u memoriji 
const button = document.createElement('button');
button.textContent = 'test';

// DOM level 3 event listener
button.addEventListener('click', () => {
    console.log('Button clicked!');

    const objekat = {
        name: 'Pera'
    };
    // 
    //const Objekat objekat = new Objekat();

    const dummyEventEvent = new CustomEvent('analitika', {
        detail: {
            message: 'dummyEvent event fired!',
            product: 'dummyEvent product'
        }
    });
    // ispaljiti
    document.dispatchEvent(dummyEventEvent);
});

// dodaje u DOM
document.body.appendChild(button);

