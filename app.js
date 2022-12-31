function randomColor(){
    let symbols, color;
    symbols = '0123456789ABCDEF';
    color = '#';

    for (let i = 0; i < 6; i++){
        color = color + symbols[Math.floor(Math.random() * 16 )]
    }
    document.body.style.backgroundColor = color;
    document.getElementById('colorHash').innerHTML = color;
}