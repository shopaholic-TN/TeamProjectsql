module.exports=(sequelize,DataTypes)=>{
    const Product=sequelize.define('Product',{
        productName:{
            type:DataTypes.STRING,
            allowNull:false
        },

         productPrice:{
            type:DataTypes.INTEGER,
            allowNull:false
        }, 

         productDescription:{
            type:DataTypes.TEXT,
            allowNull:false
        }, 

         productImage:{
            type: DataTypes.JSON,
            allowNull:false
        }, 


         productCategory:{
            type: DataTypes.ENUM('Phones', 'Computers', 'SmartWatch','Camera','HeadPhones','Gaming') 
        }, 

          productAvailability:{
            type:DataTypes.BOOLEAN,
            defaultValue: false 
        }, 

          newProduct:{
            type:DataTypes.BOOLEAN,
            defaultValue: false 
        }, 

          productRemise:{
            type:DataTypes.DECIMAL,
            defaultValue:0.0
        } 
    })
    const newProduct =  Product.create({
        productName: 'Smartphone X',
        productPrice: 999,
        productDescription: 'A high-end smartphone with advanced features.',
        productImage: { url: 'https://example.com/image.jpg', alt: 'Smartphone' },
        productCategory: 'Phones',
        productAvailability: true,
        newProduct: true,
        productRemise: 10, // Assuming it's a 10% discount
      }).then((data)=>{
        console.log(data)
      }).catch((err)=>{
        console.log(err)
      })
    const anotherProduct =  Product.create({
        productName: 'Laptop Y',
        productPrice: 1499,
        productDescription: 'Powerful laptop with impressive specifications.',
        productImage: { url: 'https://example.com/laptop.jpg', alt: 'Laptop' },
        productCategory: 'Computers',
        productAvailability: false,
        newProduct: false,
        productRemise: 0,
      }).then((data)=>{
        console.log(data)
      }).catch((err)=>{
        console.log(err)
      })
   /* Product.associate=models=>{
        Product.hasMany(models.User,{
            onDelete:"cascade"
        })
    }
*/
    return Product
}
