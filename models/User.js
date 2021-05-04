module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            defaultValue: "user"
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    })

    User.associate = (models) => {
        User.hasMany(models.Post, {
            foreignKey: "creator_id"
        })
    }

    return User;
}