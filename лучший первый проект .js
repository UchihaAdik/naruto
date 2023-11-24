
const shinobiWorld = [
    {
        name:'Boruto',clan:'Uzumaki',gender:'Male',rang: 'Genin',vallage: 'Leafy Village',age: 16,
        img:"https://w0.peakpx.com/wallpaper/612/169/HD-wallpaper-anime-naruto-2023-ai.jpg"
        ,
        color: "#f79e5c"
    },
    {
         name:'Saske', clan:'Uchiha', gender:'Male', rang: 'Genin', vallage: 'Leafy Village', age: 17,
         img:"https://i.pinimg.com/originals/59/8e/27/598e27f6965ec0732162d90ebbe3b473.jpg"
        ,
        color: "#e610e0"
    },
    {
        name:'Sakura', clan:'Haruno', gender:'Female', rang: 'Jonin', vallage: 'Leafy Village', age: 20,
        img:"https://4kwallpapers.com/images/wallpapers/sakura-haruno-naruto-5k-3840x2160-12184.jpg"
        ,
        color: "#a70c44"
    },
    {
        name:'Kakashi', clan:'hatake', gender:'Male', rang: 'Sennin', vallage: 'Leafy Village', age: 25,
        img:"https://c4.wallpaperflare.com/wallpaper/354/956/929/anime-naruto-kakashi-hatake-wallpaper-preview.jpg"
        ,
        color: "#313b47"
    },
    {
        name:'Madara', clan:'Uchiha', gender:'Male', rang: 'dancer(died)',vallage: 'Leafy Village',
        img: "https://c4.wallpaperflare.com/wallpaper/501/399/582/anime-naruto-madara-uchiha-wallpaper-preview.jpg", 
        color: "#612b71"
    },
    {
        name:'Itachi',
        clan:'Uchiha',
        gender:'Male',
        rang: 'Killer',
        vallage: 'Leafy Village',
        img: "https://c4.wallpaperflare.com/wallpaper/916/812/1002/naruto-uchiha-itachi-mangekyou-sharingan-wallpaper-preview.jpg" ,
        color: "#1f092d"
    },
    {
        name:'Sasori',
        clan:'',
        gender:'Male',
        rang: 'Kuklovod(died)',
        vallage: 'Sand Village',
        img: "https://wallpapers.com/images/hd/akatsuki-splattered-with-red-and-black-0tydaaioqxabopb0.jpg" ,
        color: "#ae030c"
        
    },

]






const $carshinobiBottom = document.querySelector('.carshinobidgrup')

function ganareitcards(arr){
    const res = arr.map(item =>`
    <div class="card" style="background-color:${item.color}">
        <div class="saction">
        <img class="card_img" src=${item.img} />
        <div class="sactionText">
            <h3> name: ${item.name}</h3>
            <h3> clan: ${item.clan}</h3>
            <h3> gender: ${item.gender}</h3>
            <h3> rang: ${item.rang}</h3>
            <h3> vallage: ${item.vallage}</h3>
            <h3> age: ${item.age}</h3>
        </div>
        </div>
    </div>
    `
    ).join('')
    return res
}
$carshinobiBottom.insertAdjacentHTML('beforebegin', ganareitcards(shinobiWorld))