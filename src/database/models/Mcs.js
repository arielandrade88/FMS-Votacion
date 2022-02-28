module.exports = (sequelize, dataTypes) => {
    let alias = "Mcs";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        name: {
            type: dataTypes.STRING(40),
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(100),
        },
        league_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    }
    let config = {
        tableName: "mcs",
        timestamps: true,
    }

    const Mc = sequelize.define(alias, cols, config)

    Mc.associate = models => {
        Mc.belongsTo(models.Leagues, {
            as: "leagues",
            foreignKey: "league_id",
            onDelete: 'cascade'
        })
    }

    return Mc;
}