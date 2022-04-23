const randomKleur = () => {
    let getal = Math.floor(Math.random() * 3);
    if (getal === 1) return '#0800a8';
    else if (getal === 2) return '#fcfcfc';
    else return '#030202';

}

module.exports = {
    randomKleur
};


