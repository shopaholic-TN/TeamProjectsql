module.exports=(sequelize,DataTypes)=>{
    const WishList=sequelize.define('WishList',{

       wishListName:{
            type:DataTypes.STRING,
            allowNull:false
        },

       wishListPrice:{
            type:DataTypes.INTEGER,
            allowNull:false
        },

       wishListDescription:{
            type:DataTypes.TEXT,
            allowNull:false
        },

       wishListImage:{
            type: DataTypes.JSON,
            allowNull:false
        } 
     

    },{ timestamps: false })

    WishList.associate=models=>{
        WishList.belongsTo(models.User,{
            onDelete:"cascade"
        })
    }

    return WishList
}