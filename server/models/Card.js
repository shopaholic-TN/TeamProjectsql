module.exports=(sequelize,DataTypes)=>{

    const Card=sequelize.define('Card',{
        productName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        productPrice:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
    })

    const Card=sequelize.define('Card',{})

    
    Card.associate=models=>{
        Card.belongsTo(models.Product,{
            onDelete:"cascade"
        })
    }

    Card.associate=models=>{
        Card.belongsTo(models.User,{
            onDelete:"cascade"
        })
    }

    return Card
}