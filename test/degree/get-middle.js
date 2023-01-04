import { Degree } from "../../src/degree";

// get-middle
// 中間値の取得テスト

describe("Degree.getMiddle", () => {
    // 1:
    it("1: 評価関数が未定義の場合、例外を投げる", () => {
        const instance = new Degree();
        expect(() => instance.getMiddle(0, 1, 0, 1)).toThrow();
    });

    // 2:
    it("2: 下限を下回る場合は、下限を返す", () => {
        const instance = new Degree();
        instance.evaluate = obj => obj;

        const min = 200;
        const result = instance.getMiddle(min - 1, min - 1, min, min * 2);
        expect(result).toBe(min);
    });

    // 3:
    it("3: 上限を上回る場合は、上限を返す", () => {
        const instance = new Degree();
        instance.evaluate = obj => obj;

        const max = 200;
        const result = instance.getMiddle(max + 1, max + 1, max / 2, max);
        expect(result).toBe(max);
    });

    // 4
    it("4: 調整レート0.0の場合、オブジェクト1の評価値を返す", () => {
        const instance = new Degree();
        instance.evaluate = obj => obj;

        const value1 = 100;
        const result = instance.getMiddle(value1, 200, 0, 99999, 0);
        expect(result).toBe(value1);
    });

    // 5
    it("5: 調整レート0.5の場合、中間値を返す", () => {
        const instance = new Degree();
        instance.evaluate = obj => obj;

        const result = instance.getMiddle(100, 200, 0, 99999, 0.5);
        expect(result).toBe(150);
    });

    // 6
    it("6: 調整レート1.0の場合、オブジェクト1の評価値を返す", () => {
        const instance = new Degree();
        instance.evaluate = obj => obj;

        const value2 = 200;
        const result = instance.getMiddle(100, value2, 0, 99999, 1);
        expect(result).toBe(value2);
    });
});