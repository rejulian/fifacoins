let button = document.querySelectorAll('.buy-btn');

button.forEach(btn => {
    btn.addEventListener(`click`, ()=>{
        let value = btn.value;
        let message = encodeURI(`*HOLA* estoy interesado en comprar la promo de ${value} monedas!`)
        window.open(`https://api.whatsapp.com/send?phone=3364631393&text=${message}`)
    })
});