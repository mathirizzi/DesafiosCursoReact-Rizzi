const productos = [
    {id:'01', name:'Nutribon', description:"Esta es la descripcion del producto", img:"imgs/producto1.png", stock:10, category:"mordidagrande"},
    {id:'02', name:'Pedigree cachorros', description:"Esta es la descripcion del producto", img:"imgs/producto2.jpg", stock:9, category:"mordidamediana"},
    {id:'03', name:'Thor', description:"Esta es la descripcion del producto", img:"imgs/producto3.jpg", stock:5, category:"mordidachica"},
    {id:'04', name:'Pedigree adultos', description:"Esta es la descripcion del producto", img:"imgs/producto4.jpg", stock:15, category:"mordidachica"},
    {id:'05', name:'Complete', description:"Esta es la descripcion del producto", img:"imgs/producto5.jpg", stock:3, category:"mordidamediana"},
    {id:'06', name:'Ultima', description:"Esta es la descripcion del producto", img:"imgs/producto6.jpg", stock:20, category:"mordidagrande"}
]

export const getProducts = new Promise ((resolve, reject) => {

    let condition = true
    if(condition){
        setTimeout(() =>{
            resolve(productos)
        },1000)
    }else{
        reject('Error')
    }
})