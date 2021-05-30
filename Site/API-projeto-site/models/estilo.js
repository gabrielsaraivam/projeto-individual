'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Estilo = sequelize.define('Estilo',{
		idEstiloCartao: {
			field: 'idEstiloCartao',
			type: DataTypes.INTEGER,
			primaryKey: true,
            autoIncrement: true
		},		
		
		corCartao: {
			field: 'corCartao',
			type: DataTypes.STRING,
			allowNull: false
		},

		clube: {
			field: 'clube',
			type: DataTypes.STRING,
			allowNull: true
		}

	}, 
	{
		tableName: 'estiloCartao', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});


    return Estilo;
};