import { useEffect, useState } from "react"
import './assets/styles/main.scss'
const MicRecorder = require('mic-recorder-to-mp3')
const Mp3Recorder = new MicRecorder({ bitRate: 128 })

const AudioRecord = () => {
    const [blob, setBlob] = useState('');
    const [isReecording, setIsRecording] = useState(false);
    const [isBlocked, setIsBlocked] = useState(false);

    const startRecording = () => {
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

    const stopRecording = () => {
        Mp3Recorder
            .stop()
            .getMp3()
            .then((blob : any) => {
                if (blob !== undefined) {
                    const blobURL = URL.createObjectURL(new Blob(blob, {type: "audio/mp3"}))
                    setBlob(blobURL);
                }
                setIsRecording(false);
            }).catch((e: any) => console.log(e)
        );
    }

    useEffect(() => {
        let newVariable: any;
        newVariable = navigator;

        newVariable.getUserMedia({ audio: true },
            () => {
                console.log('Permission Granted');
                setIsBlocked(false);
            },
            () => {
                console.log('Permission Denied');
                setIsBlocked(true)
            },
        );
    })

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