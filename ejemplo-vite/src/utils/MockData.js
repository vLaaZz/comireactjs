export const products = [


        {
            //id: 1,
            nombre: "Laptop ASUS VivoBook",
            descripcion: "Laptop delgada y ligera con pantalla Full HD.",
            precio: 899.99,
            stock: 10,
            category: ["computadora"],
            imagen: "https://dlcdnwebimgs.asus.com/gain/d13bab25-68bc-433f-bbe3-8e5a31f16e94/"
        },
        {
            //id: 2,
            nombre: "Monitor LG UltraWide",
            descripcion: "Monitor UltraWide de 34 pulgadas con resolución 3440x1440.",
            precio: 499.99,
            stock: 5,
            category: ["accesorios"],
            imagen: "https://www.lg.com/content/dam/channel/wcms/pe/images/monitores/25um58-p_awf_espr_pe_c/gallery/25UM58_Product%20image_01_Desk.jpg"
        },
        {
            //id: 3,
            nombre: "Teclado mecánico Corsair",
            descripcion: "Teclado mecánico RGB con interruptores Cherry MX.",
            precio: 129.99,
            stock: 15,
            category: ["accesorios"],
            imagen: "https://s3-sa-east-1.amazonaws.com/saasargentina/HXi9GdCZx36ibYOkZppJ/imagen"
        },
        {
            //id: 4,
            nombre: "Auriculares inalámbricos Sony",
            descripcion: "Auriculares inalámbricos con cancelación de ruido.",
            precio: 199.99,
            stock: 8,
            category: ["accesorios"],
            imagen: "https://www.sony.com.ar/image/b789488955522f13ffb4778bd08465c6?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF"
        },
        {
            //id: 5,
            nombre: "Impresora multifuncional HP",
            descripcion: "Impresora multifuncional con conexión Wi-Fi.",
            precio: 149.99,
            stock: 12,
            category: ["computadora"],
            imagen: "https://ar-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/a/z/azure_1f3w2a_1_1_.png"
        },
        {
            //id: 6,
            nombre: "Router ASUS AX1800",
            descripcion: "Router Wi-Fi 6 de alta velocidad con amplia cobertura.",
            precio: 129.99,
            stock: 7,
            category: ["computadora"],
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmFit91QtK-XcROgOXOUTCodRlcBWOa-GjwQhpUU3o5Q&s"
        },
        {
            //id: 7,
            nombre: "Tarjeta gráfica NVIDIA GeForce RTX 3080",
            descripcion: "Potente tarjeta gráfica para gaming con tecnología Ray Tracing.",
            precio: 799.99,
            stock: 3,
            category: ["accesorios"],
            imagen: "https://s3-sa-east-1.amazonaws.com/saasargentina/Fe87ZZwp5qIP8ntxtFNG/imagen"
        },
        {
            //id: 8,
            nombre: "Disco duro externo Samsung 2TB",
            descripcion: "Disco duro externo de gran capacidad con conexión USB-C.",
            precio: 129.99,
            stock: 10,
            category: ["accesorios"],
            imagen: "https://http2.mlstatic.com/D_NQ_NP_896604-MLA41002068528_032020-O.webp"
        },
        {
            //id: 9,
            nombre: "Silla gamer Acer Predator",
            descripcion: "Silla ergonómica para gaming con soporte lumbar ajustable.",
            precio: 299.99,
            stock: 6,
            category: ["accesorios"],
            imagen: "https://i.blogs.es/8c6311/predator_thronos_air_01_recommended/1366_2000.png"
        },
        {
            //id: 10,
            nombre: "Altavoces Logitech Bluetooth",
            descripcion: "Altavoces inalámbricos con tecnología Bluetooth.",
            precio: 79.99,
            stock: 15,
            category: ["accesorios"],
            imagen: "https://i0.wp.com/aptecnologia.com.ar/new/wp-content/uploads/2021/12/logi740.jpg?fit=800%2C800&ssl=1"
        }
];



export const getProducts = () => {
    return new Promise ((resolve, reject)=>{
        setTimeout (()=> {
            resolve(products)
        },1000);
    });
};


export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve, reject)=>{
        setTimeout (()=> {
            resolve(products.filter((elem) => elem.type === categoryId));
        },1000);
    });
};


export const getProductById = (productId) => {
    return new Promise ((resolve, reject)=>{
        setTimeout (()=> {
            console.log(productId);
            const product = products.find((elem) => elem.id === parseInt(productId));
            resolve(product);
        },1000);
    });
};