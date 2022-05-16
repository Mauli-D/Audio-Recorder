import { stopRecordingTypes } from './types'

export const stopRecording = ({Mp3Recorder, setBlob, setIsRecording }: stopRecordingTypes) => {
    Mp3Recorder
        .stop()
        .getMp3()
        .then((blob: any) => {
            if (blob !== undefined) {
                const blobURL = URL.createObjectURL(new Blob(blob, { type: "audio/mp3" }))
                setBlob(blobURL);
            }
            setIsRecording(false);
        }).catch((e: any) => console.log(e)
        );
}