const pool = require("../pool");
const toCamelCase = require("./utils/to-camel-case");

class UserRepo {
  static async find() {
    const { rows } = await pool.query("SELECT * FROM users");

    return toCamelCase(rows);
  }

  static async findById(id) {
    const { rows } = await pool.query(`SELECT * FROM users WHERE id = ${id};`);

    return toCamelCase(rows)[0];
  }

  static async insert() {
    const { rows } = await pool.query("SELECT * FROM users");

    return rows;
  }

  static async update() {
    const { rows } = await pool.query("SELECT * FROM users");

    return rows;
  }

  static async delete() {
    const { rows } = await pool.query("SELECT * FROM users");

    return rows;
  }
}

module.exports = UserRepo;
