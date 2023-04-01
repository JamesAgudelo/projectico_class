const {Router} = require('express');
const router = Router()
const dato = [{
    
        "id": 0,
        "titulo": "Super Mario Bros.",
        "genero": "Plataformas",
        "año_lanzamiento": 1985,
        "desarrolladora": "Nintendo"
    },
    {
        "id": 1,
        "titulo": "The Legend of Zeld: Breath of the wild",
        "genero": "Aventura",
        "año_lanzamiento": 2017,
        "desarrolladora": "Nintendo"
    },
    {
        "id": 2,
        "titulo": "Grand Thef Auto V",
        "genero": "Acción-Aventura-SandBox",
        "año_lanzamiento": 2013,
        "desarrolladora": "Rockstar North"
    },
    {
        "id": 3,
        "titulo": "Def Jam: Figth For NY",
        "genero": "Accion",
        "año_lanzamiento": 2004,
        "desarrolladora": "Electronic Arts"
    },
    {
        "id": 4,
        "titulo": "Minecraft",
        "genero": "SandBox",
        "año_lanzamiento": 2011,
        "desarrolladora": "Mojang Studios" 
    },
];

router.get('/api', (req,res)=>{
    res.send(dato)
})

router.post('/api', (req,res)=>{
 dato.push(req.body);
    res.send(dato);

})

module.exports = router;