import ethRouter from '../../routes/eth.route';
import request from "supertest";

describe("GET /eth", () => {
  it("returns status code 201 if first name is passed", async () => {
    const res = await request(ethRouter)
      .get("/")
      .send({ address: "the crypto address" });
          
    expect(res.statusCode).toEqual(201);
  });

  it("returns bad request if email is missing", async () => {
    const res = await request(ethRouter).get("/").send();
    expect(res.statusCode).toEqual(400);
  });
});


