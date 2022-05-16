import { stopRecording } from "./stopRecording";

test(`start recording on click`, () => {
    const spy = jest.fn();
    const mock = {
        Mp3Recorder: spy,
        setBlob: spy,
        setIsRecording: spy,
        setTimer: spy,
        timer: 0
    }

    stopRecording(mock);
    expect(spy).toBe({setBlob: ``, setIsRecording: false, setTimer: 0});
})