import exterior1 from './Imagen/exterior1.JPG';
import exterior2 from './Imagen/exterior2.JPG';
import exterior3 from './Imagen/exterior3.JPG';
import interior1 from './Imagen/interior1.JPG';
import interior2 from './Imagen/interior2.JPG';
import interior3 from './Imagen/interior3.JPG';

const data = [
    {
        id:1,
        name: 'Fogonero',
        precio:'$15000',
        stock: 40,
        imagen: exterior1,
        categoria: 'exterior'
    },
    {
        id:2,
        name: 'Colgante de madera',
        precio:'$1800',
        stock: 30,
        imagen: exterior2,
        categoria: 'exterior'
    },
    {
        id:3,
        name: 'Lámpara solar cálida',
        precio:'$2100',
        stock: 40,
        imagen: exterior3,
        categoria: 'exterior'
    },
    {
        id:4,
        name: 'Canasto ovalado',
        precio:'$1500',
        stock: 84,
        imagen: interior1,
        categoria: 'interior'
    },
    {
        id:5,
        name: 'Organizador colgante',
        precio:'$3500',
        stock: 10,
        imagen: interior2,
        categoria: 'interior'
    },
    {
        id:6,
        name: 'Mesitas multiuso',
        precio:'$3500',
        stock: 10,
        imagen: interior3,
        categoria: 'interior'
    }
];

export default data;