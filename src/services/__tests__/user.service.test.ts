import userRouter from '../../routes/user.route';
import request from "supertest";

describe("POST /register", () => {
  it("returns status code 201 if first name is passed", async () => {
    const res = await request(userRouter)
      .post("/register")
      .send({ email: "mutegetsi2000@gmail.com",password:"password123" });
          
    expect(res.statusCode).toEqual(201);
  });

  it("returns bad request if email is missing", async () => {
    const res = await request(userRouter).post("/register").send();
    expect(res.statusCode).toEqual(400);
  });
});


