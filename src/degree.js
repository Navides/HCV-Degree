/**
 * 程度を扱う処理を提供します。
 */
class Degree {
    /**
     * オブジェクトを評価します。
     * @param {any} object 評価対象。
     * @returns {Number} 評価値を返します。
     */
    evaluate (object) {
        throw new Error("Error: not implemented.");
    }

    /**
     * 中間値を計算します。
     * @param {any} object1 評価対象1。
     * @param {any} object2 評価対象2。
     * @param {Number} min 評価値の下限。
     * @param {Number} max 評価値の上限。
     * @param {Number} ratio 反映レート(0-1)。0に近いほどobject1、1に近いほどobject2の評価値に近くなる。
     * @returns {Number} 中間値を返します。
     */
    getMiddle (object1, object2, min, max, ratio=0.5) {
        // 中間値の計算
        const value1 = this.evaluate(object1);
        const value2 = this.evaluate(object2);
        const gap = value2 - value1;

        // 中間値を計算
        let value = value1 + Math.round(gap * ratio);

        // 許容範囲に補正して返す
        if (value < min) value = min;
        if (value > max) value = max;
        return value;
    }
}

export { Degree };