import Client from "../database";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const saltRounds = process.env.SALT_ROUNDS;
const pepper = process.env.BCRYPT_PASSWORD;

export type User = {
  id?: Number;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
};

export class UserStore {
  async index(): Promise<User[]> {
    try {
      // @ts-ignore
      const conn = await Client.connect();
      const sql = "SELECT * FROM users";

      const result = await conn.query(sql);

      conn.release();

      return result.rows;
    } catch (error) {
      throw new Error(`Cannot get users. ${error}`);
    }
  }

  async show(id: string): Promise<User> {
    try {
      const sql = "SELECT * FROM users WHERE id=($1)";
      // @ts-ignore
      const conn = await Client.connect();

      const result = await conn.query(sql, [id]);

      conn.release();

      return result.rows[0];
    } catch (error) {
      throw new Error(`Cannot find user #${id}. Error: ${error}`);
    }
  }

  async create(u: User): Promise<User> {
    try {
      // @ts-ignore
      const conn = await Client.connect();
      const sql = 'INSERT INTO users (username, firstName, lastName, password) VALUES($1, $2, $3, $4) RETURNING *';

      const hash = bcrypt.hashSync(
        u.password + pepper, 
        parseInt(`${saltRounds}`)
      );

      const result = await conn.query(sql, [u.username, u.firstName, u.lastName, hash]);
      const user = result.rows[0];

      conn.release();

      return user;
    } catch(err) {
      throw new Error(`unable create user (${u.username}): ${err}`);
    } 
  }

  async delete(id: string): Promise<User> {
    try {
      const sql = "DELETE FROM users WHERE id=($1)";
      // @ts-ignore
      const conn = await Client.connect();

      const result = await conn.query(sql, [id]);

      const user = result.rows[0];

      conn.release();

      return user;
    } catch (error) {
      throw new Error(`Cannot delete order #${id}. Error: ${error}`);
    }
  }


  async addOrder(quantity: number, userId: string, orderId: string): Promise<User>{
    try {
      const sql = 'INSERT INTO user_orders (quantity, user_id, order_id) VALUES($1, $2, $3) RETURNING *';
      //@ts-ignore
      const conn = await Client.connect();
      const result = await conn.query(sql, [quantity, userId, orderId]);
      const user = result.rows[0];
      conn.release();
      return user;
    } catch (err) {
      throw new Error(`Could not add order ${orderId} to user ${userId}. Error: ${err}`);
    }
  }

  async authenticate(username: string, password: string): Promise<User | null> {
    const conn = await Client.connect();
    const sql = 'SELECT password FROM users WHERE username=($1)';

    const result = await conn.query(sql, [username])

    console.log(password+pepper);

    if(result.rows.length) {

      const user = result.rows[0];

      console.log(user);

      if (bcrypt.compareSync(password+pepper, user.password_digest)) {
        return user;
      }
    }

    return null;
  }


}
