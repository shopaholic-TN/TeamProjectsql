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

    Product.associate=models=>{
        Product.hasMany(models.User,{
            onDelete:"cascade"
        })
    }

    return Product
}

