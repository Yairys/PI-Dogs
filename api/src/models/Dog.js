const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.


module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Dog", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    max_height:{
      type:DataTypes.STRING,
      allowNull: false
    },
    min_height:{
      type:DataTypes.STRING,
      allowNull: false
    },
    max_weight:{
      type:DataTypes.STRING,
      allowNull: false
    },
    min_weight:{
      type:DataTypes.STRING,
      allowNull: false
    },
    max_lifeSpan:{
      type:DataTypes.STRING,
    },
    min_lifeSpan:{
      type:DataTypes.STRING,
    },
    create:{
      type:DataTypes.BOOLEAN,
      defaultValue: true,
    },
    image: {
      type:DataTypes.STRING,
      defaultValue: "https://img.freepik.com/fotos-premium/tres-perros-blanco_87557-12571.jpg?w=2000"
     },
    create:{
      type:DataTypes.STRING,
      defaultValue: 'Yairys'
    }
    
},
  {
    timestamps:false
  }
  );
};
