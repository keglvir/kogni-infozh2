class RandomStringPicker {
    private strings: string[];

    constructor(strings: string[]) {
        this.strings = strings;
    }

    pickRandomStrings(): string[] {
        if (this.strings.length < 3) {
            throw new Error('Not enough strings in the input array.');
        }

        const randomIndices = this.generateRandomIndices(3);
        return randomIndices.map(index => this.strings[index]);
    }

    private generateRandomIndices(count: number): number[] {
        const indices: number[] = [];
        const availableIndices = [...Array(this.strings.length).keys()];

        for (let i = 0; i < count; i++) {
            const randomIndex = Math.floor(Math.random() * availableIndices.length);
            indices.push(availableIndices.splice(randomIndex, 1)[0]);
        }

        return indices;
    }
}

// Example usage:
const inputStrings = ["abcde", "fghijk", "lmnopqr", "stuvwx", "yzabcd", "efghijk"];
const picker = new RandomStringPicker(inputStrings);
const randomStrings = picker.pickRandomStrings();

console.log(`Random Strings: ${randomStrings.join(', ')}`);
