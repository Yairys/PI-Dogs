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
    height:{
      type:DataTypes.STRING,
      allowNull: false
    },
    weight:{
      type:DataTypes.STRING,
      allowNull: false
    },
    lifeSpan:{
      type:DataTypes.STRING,
    },
    create:{
      type:DataTypes.BOOLEAN,
      defaultValue: true,
    },
    img: {
      type:DataTypes.STRING,
      defaultValue: "https://img.freepik.com/fotos-premium/tres-perros-blanco_87557-12571.jpg?w=2000"
     },
    
},
  {
    timestamps:false
  }
  );
};
