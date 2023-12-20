var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var RandomStringPicker = /** @class */ (function () {
    function RandomStringPicker(strings) {
        this.strings = strings;
    }
    RandomStringPicker.prototype.pickRandomStrings = function () {
        var _this = this;
        if (this.strings.length < 3) {
            throw new Error('Not enough strings in the input array.');
        }
        var randomIndices = this.generateRandomIndices(3);
        return randomIndices.map(function (index) { return _this.strings[index]; });
    };
    RandomStringPicker.prototype.generateRandomIndices = function (count) {
        var indices = [];
        var availableIndices = __spreadArray([], Array(this.strings.length).keys(), true);
        for (var i = 0; i < count; i++) {
            var randomIndex = Math.floor(Math.random() * availableIndices.length);
            indices.push(availableIndices.splice(randomIndex, 1)[0]);
        }
        return indices;
    };
    return RandomStringPicker;
}());
// Example usage:
var inputStrings = ["abcde", "fghijk", "lmnopqr", "stuvwx", "yzabcd", "efghijk"];
var picker = new RandomStringPicker(inputStrings);
var randomStrings = picker.pickRandomStrings();
console.log("Random Strings: ".concat(randomStrings.join(', ')));
