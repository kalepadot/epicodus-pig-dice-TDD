import { Player } from './../src/pig-dice.js';

// describe("coinFlip", () => {
//     test('should correctly determine which palyer goes first', () => {
//         var player = new Player();
//         expect(player.coinFlip()).toEqual("Heads");
//         // expect(player.coinFlip()).toEqual("Tails");
//     }); 
// });

describe("clearTurnScore", () => {
    test("should clear score to 0", () => {
        var player = new Player();
        expect(player.clearTurnScore()).toEqual(0);

   });
});

