module.exports=(sequelize,DataTypes)=>{
    const Card=sequelize.define('Card',{


        productName:{
            type:DataTypes.STRING,
            allowNull:false
        },

        productPrice:{
            type:DataTypes.INTEGER,
            allowNull:false
        },

        productImage:{
            type: DataTypes.JSON,//FIX ARRAY
            allowNull:false
        },

        productQuantity:{
            type:DataTypes.INTEGER,
            defaultValue:1
        }
    })
    
    Card.associate=models=>{
        Card.belongsTo(models.User,{
            onDelete:"cascade"
        })
    }
console.log("Card",Card);
    return Card
}