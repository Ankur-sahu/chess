import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { timeUp } from '../Redux/Actions';

function Timer({ reset }) {
    const [seconds, setSeconds] = useState(300);
    const dispatch = useDispatch()
    let intervalId
    const startTimer = () => {
        intervalId = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds => seconds - 1);
            }
        }, 1000);
    }
    useEffect(() => {
        if (seconds === 0) {
            dispatch(timeUp())
        }
    }, [seconds]);


    useEffect(() => {
        setSeconds(300)
        startTimer()

        return () => {
            clearInterval(intervalId);
        };
    }, [reset]);


    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return (
        <div>
            <h1>Timer: {minutes.toString().padStart(2, '0')}:{remainingSeconds.toString().padStart(2, '0')}</h1>
        </div>
    );
}

export default Timer;
