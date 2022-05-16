import { useEffect, useState } from "react"
import './assets/styles/main.scss'
import { startRecording } from "../utils/startRecording"
import { stopRecording } from "../utils/stopRecording"
const MicRecorder = require('mic-recorder-to-mp3')
const Mp3Recorder = new MicRecorder({ bitRate: 128 })

const AudioRecord = () => {
    const [blob, setBlob] = useState('');
    const [isReecording, setIsRecording] = useState(false);
    const [isBlocked, setIsBlocked] = useState(false);

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
            <button className="startButton" onClick={(e) => startRecording({ Mp3Recorder, isBlocked, setBlob, setIsRecording })} disabled={isReecording}>Record</button>
            <button className="stopButton" onClick={(e) => stopRecording({ Mp3Recorder, setBlob, setIsRecording })}>Stop</button>
            <div>
                {blob && <audio className="blob" src={blob} controls />}
            </div>
        </div>
    </div>
}

export default AudioRecord