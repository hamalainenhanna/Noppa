//- Toteutat kuuntelijan (funktio) div-elementille (id dice), joka suoritetaan,
// kun käyttäjä painaa (click) diviä jossa nopan kuva on. 
// - Funktiossa arvotaan satunnaisluku välillä 1-6 (esimerkki miten JavaScriptissä arvotaan satunnaisluku 
//   tietyltä väliltä löytynee helposti) 
// - Arvotun luvun mukaan asetetaan uusi kuva img-elementille (src-ominaisuuteen). 

const div = document.querySelector('div')
const img = document.querySelector('img')

div.addEventListener('click', () => {
    const random_number = Math.floor(Math.random() *6) + 1
    img.src = './img/' + random_number + '.png'
})

