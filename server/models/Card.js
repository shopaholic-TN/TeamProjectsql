module.exports=(sequelize,DataTypes)=>{
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