import { startRecordingTypes } from './types'

export const startRecording = ({ Mp3Recorder, isBlocked, setBlob, setIsRecording } : startRecordingTypes) => {
    if (isBlocked) {
        alert('Permission Denied');
    } else {
        Mp3Recorder
            .start()
            .then(() => {
                setBlob('');
                setIsRecording(true);
            }).catch((e: any) => console.error(e)
            )
    }
}