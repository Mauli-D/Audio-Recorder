import { startRecording } from './startRecording'

test(`start recording on click`, () => {
    const spy = jest.fn();
    const mock = {
        Mp3Recorder: spy,
        isBlocked: false,
        setBlob: spy,
        setIsRecording: spy,
        setTimer: spy,
        timer: 0
    }

    startRecording(mock);
    expect(spy).toBe({setBlob: '', setIsRecording: true, setTimer: 1});
})

test(`recording is blocked`, () => {
    const spy = jest.fn();
    const mock = {
        Mp3Recorder: spy,
        isBlocked: true,
        setBlob: spy,
        setIsRecording: spy,
        setTimer: spy,
        timer: 0
    }

    expect(alert('Permission Denied'))
})