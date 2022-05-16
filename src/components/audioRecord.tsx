import { useState } from "react"
import './assets/styles/main.scss'
const MicRecorder = require('mic-recorder-to-mp3')
const Mp3Recorder = new MicRecorder({ bitRate: 128})

const AudioRecord = () => {
    const [blob, setBlob] = useState('');
    const [isReecording, setIsRecording] = useState(false);
    const startRecording = () => {
        Mp3Recorder
        .start()
        .then(() => {
            setBlob('');
            setIsRecording(true);
        }).catch((e: any) => console.error(e))
    }
    const stopRecording = () => {
        Mp3Recorder
        .stop()
        .getMp3()
        .then(({ blob } : { blob : MediaSource}) => {
            if (blob !== undefined) {
                const Blob = URL.createObjectURL(blob)
                setBlob(Blob);
            }
            setIsRecording(false);
        }).catch((e: any) => console.log(e))
    }

    return <div className="container">
        <div className="main-component">
            <button className="startButton" onClick={startRecording} disabled={isReecording}>Record</button>
            <button className="stopButton" onClick={stopRecording}>Stop</button>
            <div>
                {blob && <audio className="blob" src={blob} controls />}
            </div>
        </div>
    </div>
}

export default AudioRecord