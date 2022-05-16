import { stopRecordingTypes } from './types'

export const stopRecording = ({ Mp3Recorder, setBlob, setIsRecording }: stopRecordingTypes) => {
    Mp3Recorder
        .stop()
        .getMp3()
        .then((blob: any) => {
            const blobURL = URL.createObjectURL(new Blob(blob))
            setBlob(blobURL)
            setIsRecording(false);
        }).catch((e: any) => console.log(e)
    );
}