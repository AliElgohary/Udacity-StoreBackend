import { NextFunction, Request, Response } from "express";

export const authMiddleWare = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.log("user authenticated Successfully!");
  next();
};


/*
class authen{
    async authenticate(username: string, password: string): Promise<user | null> {
    const conn = await client.connect()
    const sql = 'SELECT password FROM user WHERE firtName=($1)'

    const result = await conn.query(sql, [username])

    console.log(password+(config.pepper))

    if(result.rows.length) {

      const user = result.rows[0]

      console.log(user)

      if (bcrypt.compareSync(password+(config.pepper), user.password)) {
        return user
      }
    }

    return null
  }
}
*/