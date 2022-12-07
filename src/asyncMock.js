const products = [
    {
        id: '1',
        name: 'A1 Sportback',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus placerat sapien eu finibus. Vestibulum efficitur eget mauris sit amet lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. In elementum viverra urna, et maximus nunc. Ut tempor, dolor interdum molestie pellentesque, erat magna imperdiet justo, vitae rhoncus leo dolor sit amet sem. Proin scelerisque tincidunt semper. Nunc congue nisi at mi fringilla, ut imperdiet nisi porttitor. Integer maximus ut orci ac pharetra. Nam est orci, lobortis ut porta volutpat, efficitur vel orci. Curabitur lorem lorem, varius a sapien non, tempor dignissim turpis.',
        price: '40.000',
        category: 'audi',
        img: 'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_d294ce20c19a4358bad8b68d7f087917.jpg',
        stock: '3'
    },
    {
        id: '2',
        name: 'Serie 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus placerat sapien eu finibus. Vestibulum efficitur eget mauris sit amet lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. In elementum viverra urna, et maximus nunc. Ut tempor, dolor interdum molestie pellentesque, erat magna imperdiet justo, vitae rhoncus leo dolor sit amet sem. Proin scelerisque tincidunt semper. Nunc congue nisi at mi fringilla, ut imperdiet nisi porttitor. Integer maximus ut orci ac pharetra. Nam est orci, lobortis ut porta volutpat, efficitur vel orci. Curabitur lorem lorem, varius a sapien non, tempor dignissim turpis.',
        price: '49.600',
        category: 'bmw',
        img: 'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_eba2017d97ca498fba485544d860d761.jpg',
        stock: '5'
    },
    {
        id: '3',
        name: 'A4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus placerat sapien eu finibus. Vestibulum efficitur eget mauris sit amet lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. In elementum viverra urna, et maximus nunc. Ut tempor, dolor interdum molestie pellentesque, erat magna imperdiet justo, vitae rhoncus leo dolor sit amet sem. Proin scelerisque tincidunt semper. Nunc congue nisi at mi fringilla, ut imperdiet nisi porttitor. Integer maximus ut orci ac pharetra. Nam est orci, lobortis ut porta volutpat, efficitur vel orci. Curabitur lorem lorem, varius a sapien non, tempor dignissim turpis.',
        price: '57.900',
        category: 'audi',
        img: 'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_c88631ea35814ee9a4e29a313763d8fc.jpg',
        stock: '2'
    },
    {
        id: '4',
        name: 'X2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus placerat sapien eu finibus. Vestibulum efficitur eget mauris sit amet lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. In elementum viverra urna, et maximus nunc. Ut tempor, dolor interdum molestie pellentesque, erat magna imperdiet justo, vitae rhoncus leo dolor sit amet sem. Proin scelerisque tincidunt semper. Nunc congue nisi at mi fringilla, ut imperdiet nisi porttitor. Integer maximus ut orci ac pharetra. Nam est orci, lobortis ut porta volutpat, efficitur vel orci. Curabitur lorem lorem, varius a sapien non, tempor dignissim turpis.',
        price: '79.900',
        category: 'bmw',
        img: 'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_2db342aa219449379a6392adbbf9d5f0.jpg',
        stock: '8'
    },
    {
        id: '5',
        name: 'X4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus placerat sapien eu finibus. Vestibulum efficitur eget mauris sit amet lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. In elementum viverra urna, et maximus nunc. Ut tempor, dolor interdum molestie pellentesque, erat magna imperdiet justo, vitae rhoncus leo dolor sit amet sem. Proin scelerisque tincidunt semper. Nunc congue nisi at mi fringilla, ut imperdiet nisi porttitor. Integer maximus ut orci ac pharetra. Nam est orci, lobortis ut porta volutpat, efficitur vel orci. Curabitur lorem lorem, varius a sapien non, tempor dignissim turpis.',
        price: '117.900',
        category: 'bmw',
        img: 'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_a4edf3b54bbb4844aa14e47fcc919177.jpg',
        stock: '12'
    },
]

export const getProducts = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },500)
    })
}

export const getProductsById = (id) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products[id-1])
        },500)
    })
}

export const getProductsByCategory = (category) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve(products.filter(product => product.category === category))
        }, 500)
      })
}

export default products