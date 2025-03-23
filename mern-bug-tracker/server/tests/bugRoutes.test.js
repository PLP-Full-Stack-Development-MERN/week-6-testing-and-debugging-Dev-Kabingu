const request = require("supertest");
const app = require("../server");

describe("Bug API Routes", () => {
  it("should create a new bug", async () => {
    const response = await request(app)
      .post("/api/bugs")
      .send({ title: "Test Bug", description: "Test Description" });
    expect(response.statusCode).toBe(201);
  });
});
