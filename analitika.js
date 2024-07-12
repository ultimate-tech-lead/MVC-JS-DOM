document.addEventListener('analitika', (event) => { 

    console.log('Analitika event fired!',
     event.detail.message, 
     event.detail.product);
    //console.log('Analitika event fired!', event.detail.message, event.detail.product);
});