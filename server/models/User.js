module.exports=(sequelize,DataTypes)=>{
    const User=sequelize.define('User',{

        firstName:{
            type:DataTypes.STRING,
            allowNull:false
        },

        lastName:{
            type:DataTypes.STRING,
            allowNull:false
        },

        email:{
            type:DataTypes.STRING,
            allowNull:false
        },

        password:{
            type:DataTypes.STRING,
            allowNull:false
        },

        address:{
            type:DataTypes.STRING,
            allowNull:false
        },

          role:{
            type: DataTypes.ENUM('user', 'admin', 'seller')
            
        } 
    },{ timestamps: false });

    User.associate=models=>{
            
        User.associate=models=>{
            User.hasMany(models.Card,{
                onDelete:"cascade",
                foreignKey:"UserID"
            })
        }
    
        User.hasOne(models.WishList),{
            onDelete:"cascade"
        }
    }

    return User
}