import { expect} from "@open-wc/testing";
import { Utils } from "./services/utils";

describe('Curso', () => {
    // it("Mi Primera Prueba", () => {
    //     expect(true).equal(true)
    // })

    it("Test FizzBuzz", () => {
        const util_service = new Utils();
        expect(util_service.fizzBuzz(1)).deep.equal(['1'])
    })
})

