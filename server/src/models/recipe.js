import { checkArrayData } from '../helpers/arrayCheck';

export default (sequelize, DataTypes) => {
  const Recipe = sequelize.define(
    'Recipe', {
      recipeName: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: 'This is a required field'
        },
        validate: {
          is: {
            args: /^[a-z 0-9 ,.'-()\s]+$/i,
            msg: 'Input is not valid'
          },
          notEmpty: {
            args: true,
            msg: 'Input cannot be empty'
          }
        }
      },
      recipeImage: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          isUrl: true,
          notEmpty: {
            args: true,
            msg: 'Input cannot be empty'
          }
        }
      },
      prepTime: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          is: {
            args: /^[a-zA-Z0-9\s]*$/,
            msg: 'Input is not valid'
          }
        }
      },
      cookTime: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          is: {
            args: /^[a-zA-Z0-9\s]*$/,
            msg: 'Input is not valid'
          }
        }
      },
      totalTime: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: 'This is a required field'
        },
        validate: {
          is: {
            args: /^[a-zA-Z0-9\s]*$/,
            msg: 'Input is not valid'
          },
          notEmpty: {
            args: true,
            msg: 'Input cannot be empty'
          }
        }
      },
      difficulty: {
        type: DataTypes.ENUM,
        allowNull: true,
        values: ['Easy', 'Normal', 'A Bit Difficult', 'Difficult', 'Very Difficult'],
        validate: {
          isIn: {
            args: [
              ['Easy', 'Normal', 'A Bit Difficult', 'Difficult', 'Very Difficult']
            ],
            msg: 'Please select a valid field'
          }
        }
      },
      extraInfo: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          is: {
            args: /^[a-z 0-9 ,.'-()\s]+$/i,
            msg: 'Input is not valid'
          }
        }
      },
      vegetarian: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
        validate: {
          isIn: {
            args: [
              [false, true]
            ],
            msg: 'Please select a field'
          }
        }
      },
      ingredients: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: {
          args: false,
          msg: 'This is a required field'
        },
        defaultValue: [],
        validate: {
          is: {
            args: /^[a-z 0-9 ,.'-()\s]+$/i,
            msg: 'Input is not valid'
          },
          notEmpty: {
            args: true,
            msg: 'Input cannot be empty'
          }
        }
      },
      preparations: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: true,
        defaultValue: ['No preparation necessary'],
        validate: {
          is: {
            args: /^[a-z 0-9 ,.'-()\s]+$/i,
            msg: 'Input is not valid'
          }
        }
      },
      directions: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: {
          args: false,
          msg: 'This is a required field'
        },
        defaultValue: [],
        validate: {
          is: {
            args: /^[a-z 0-9 ,.'-()\s]+$/i,
            msg: 'Input is not valid'
          },
          notEmpty: {
            args: true,
            msg: 'Input cannot be empty'
          }
        }
      },
      upvotes: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        validate: {
          isInt: {
            args: true,
            msg: 'Input is not valid'
          }
        }
      },
      downvotes: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        validate: {
          isInt: {
            args: true,
            msg: 'Input is not valid'
          }
        }
      },
      views: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        validate: {
          isInt: {
            args: true,
            msg: 'Input is not valid'
          }
        }
      },
    },
    {
      hooks: {
        beforeCreate: (recipe) => {
          recipe.ingredients = checkArrayData(recipe.ingredients);
          recipe.preparations = checkArrayData(recipe.preparations);
          recipe.directions = checkArrayData(recipe.directions);
        },
      }
    }
  );
  Recipe.associate = (models) => {
    Recipe.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
    Recipe.hasMany(models.Like, {
      foreignKey: 'recipeId',
      as: 'likes',
    });
    Recipe.hasMany(models.Review, {
      foreignKey: 'recipeId',
      as: 'reviews',
    });
    Recipe.hasMany(models.Favorite, {
      foreignKey: 'recipeId',
      as: 'favorites',
    });
  };

  return Recipe;
};
