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
    });
const user1 = User.create({
    firstName:'zakaria',
    lastName:'askri',
    email:'zakaria@gmail',
    password:'pass123',
    address:'tunis',
    role:'user'
   
}).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})
    User.associate=models=>{
        
        User.hasMany(models.Product),{
            onDelete:"cascade"
        }
      
        User.hasOne(models.Card),{
            onDelete:"cascade"
        }

        User.hasOne(models.WishList),{
            onDelete:"cascade"
        }
    }

    return User
}