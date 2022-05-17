import { useEffect, useState } from "react"
import './assets/styles/main.scss'
import { startRecording } from "../utils/startRecording"
import { stopRecording } from "../utils/stopRecording"
import { formatTime } from "../utils/formatTimer"
const MicRecorder = require('mic-recorder-to-mp3')
const Mp3Recorder = new MicRecorder({ bitRate: 128 })

const AudioRecord = () => {
    const [blob, setBlob] = useState('');
    const [isRecording, setIsRecording] = useState(false);
    const [isBlocked, setIsBlocked] = useState(false);
    const [timer, setTimer] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (isRecording) {
                setTimer(seconds => seconds + 1);
            }
        }, 1000);
        return () => {
            clearInterval(interval);
            setTimer(0)
        };
    }, [isRecording])

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
    }, [])

    return (
        <div className="container">
            <div className="main-component">
                <button className="startButton" onClick={(e) => startRecording({ Mp3Recorder, isBlocked, setBlob, setIsRecording })} disabled={isRecording}>Record</button>
                <button className="stopButton" onClick={(e) => stopRecording({ Mp3Recorder, setBlob, setIsRecording })}>Stop</button>
    
                <div className="blob">
                    {blob ?
                        <audio src={blob} controls /> : <p className="timer">{formatTime({ timer })}</p>
                    }
                </div>
            </div>
        </div>
    );
}
export default AudioRecord