module.exports = (sequelize, dataTypes) => {
    let alias = "Leagues";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        name: {
            type: dataTypes.STRING(30),
            allowNull: false 
        },
        image: {
            type: dataTypes.STRING(100),
        }
    }
    
    let config = {
        tableName: "league",
        timestamps: false
    }

    const League = sequelize.define(alias, cols, config)

    League.associate = models => {
        League.hasMany(models.Mcs, {
            as: "mcs",
            foreignKey: "league_id",
            onDelete: 'cascade',
            hooks: true
        })
    }

    return League;
}