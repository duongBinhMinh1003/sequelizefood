import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class like_res extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    res_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'restaurant',
        key: 'res_id'
      }
    },
    date_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'like_res',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "res_id",
        using: "BTREE",
        fields: [
          { name: "res_id" },
        ]
      },
    ]
  });
  }
}
