import { startRecording } from './startRecording'

test(`start recording on click`, () => {
    const setBlobSpy = jest.fn();
    const setIsRecordingSpy = jest.fn();
    const mock = {
        Mp3Recorder: {
            start: () => {
                return {
                    then: (func: () => void) => {
                        func();
                        return { catch: () => null }
                    }
                }
            }
        },
        isBlocked: false,
        setBlob: setBlobSpy,
        setIsRecording: setIsRecordingSpy,
    }

    startRecording(mock);
    expect(setIsRecordingSpy).toHaveBeenCalledWith(true);
    expect(setBlobSpy).toHaveBeenCalledWith('');

})

test(`blocked`, () => {
    const setBlobSpy = jest.fn();
    const setIsRecordingSpy = jest.fn();
    const alertSpy = jest.fn();
    global.alert = alertSpy;

    const mock = {
        Mp3Recorder: {
            start: () => {
                return {
                    then: (func: () => void) => {
                        func();
                        return { catch: () => null }
                    }
                }
            }
        },
        isBlocked: true,
        setBlob: setBlobSpy,
        setIsRecording: setIsRecordingSpy,
    }

    startRecording(mock);
    expect(alertSpy).toHaveBeenCalled()
})