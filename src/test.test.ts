import {server} from "./testServer";

describe("test", () => {
    beforeAll(() => {
        server.listen();
    });
    afterAll(() => {
        server.close();
    });
    it("should test", () => {
        expect(1).toBe(1)
    });
});
