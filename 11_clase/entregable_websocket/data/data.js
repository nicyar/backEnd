const products = [
   ];
   
   class Products {
     //static lastProductId = products[products.length - 1].id;
     
     constructor() {
       this.list = products;
     }
   
     getAll() {
       return [...this.list];
     }
   
     save(product) {
       const { name, price, image } = product;
       if ( !name || !price || !image) {
         return null;
       }
       Products.lastProductId++;
       const newProduct = {
         id: Products.lastProductId,
         name,
         price,
         image
       };
       this.list.push(newProduct);
       return newProduct;
     };

   }
   
   module.exports = Products;