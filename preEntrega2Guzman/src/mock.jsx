const inventory = [
    {
        id: '0001',
        brand: 'Royal Enfield',
        model: 'Continental GT',
        year: '2023',
        category: 'clasica',
        img: '../src/assets/continentalGT.jpeg',
        price: '144,900',
        stock: '7',
        description: 'La nueva Continental GT 650 es una evolución del Continental GT 535, que a su vez, fue una evolución del Continental GT 250 – La original Royal Enfield British café racer. Impulsada por el nuevo motor 650 Twin, se parece en todo a su predecesor y funciona aún mucho mejor. Una joya clásica con gran tecnología.',
        details: {
            cc: '650',
            hp: '47',
            nm: '52'
        }
    },
    {
        id: '0002',
        brand: 'BMW',
        model: 'R1250GS',
        year: '2023',
        category: 'doble_proposito',
        img: '../src/assets/r1250gs.jpeg',
        price: '480,200',
        stock: '3',
        description: 'Curiosidad incontenible, la valentía de descubrir siempre algo nuevo: para eso está la R 1250 GS. Desde hace cuatro décadas es todo un icono que sigue emocionando con nuevas prestaciones. Con esta moto, tus ganas de descubrir rincones nuevos no tienen límites.',
        details: {
            cc: '1250',
            hp: '136',
            nm: '143'
        }
    },
    {
        id: '0003',
        brand: 'Suzuki',
        model: 'GSX-R',
        year: '2023',
        category: 'deportiva',
        img: '../src/assets/gsxr600.jpg',
        price: '226,990',
        stock: '4',
        description: 'Libera toda la adrenalina y sé parte de la pasión biker deportiva con GSX-R600, tu experiencia de manejo más emocionante, segura y confiable. Como toda la serie deportiva Suzuki, GSX-R600 te brinda la tecnología y la innovación a más alto nivel para que tú vivas al máximo el poder de su motor, la velocidad y la emoción.',
        details: {
            cc: '600',
            hp: '104',
            nm: '60'
        }
    },
    {
        id: '0004',
        brand: 'Harley Davidson',
        model: 'Road King',
        year: '2023',
        category: 'crucero',
        img: '../src/assets/roadKing.jpeg',
        price: '562,900',
        stock: '2',
        description:'Estilo bagger personalizado con potencia de gama alta y presencia en la conducción.',
        details: {
            cc: '1868',
            hp: '93',
            nm: '158'
        }
    }
]

export const getInventory = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(inventory)
        }, 300)
    })
}

export const getBikeByID = (detailID) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(inventory.find(bike => bike.id === detailID))
        }, 300)
    })
}

export const getBikeByCategory = (categoryID) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(inventory.find(bike => bike.category === categoryID))
        }, 300)
    })
}