import { formatTime } from "./formatTimer";

test('check time formating', () => {
    const spy = jest.fn();
    const mock = {
        timer: 130
    }

    const result = formatTime(mock);
    expect(result).toBe(`02 : 10`)
})