module.exports=(sequelize,DataTypes)=>{
    const Card=sequelize.define('Card',{},{ timestamps: false })
    
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