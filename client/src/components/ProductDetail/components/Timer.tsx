import { useState, useRef, useEffect } from 'react'
import '../../../scss/components/ProductDetail/components/Timer.scss'

export default function Timer() {
    const Ref = useRef<any>(null);
    const [timer, setTimer] = useState('00:00:00');

    const getTimeRemaining = (e: any) => {
        const total = Date.parse(e) - Date.parse(new Date().toString());        
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }

    const startTimer = (e: any) => {
        let { total, hours, minutes, seconds } = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }

    const clearTimer = (e: any) => {
        setTimer('00:00:00');
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }

    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 10801);
        return deadline;
    }

    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);

    return (
        <div className="timer-container">
            <h2>{timer}</h2>
        </div>
    )
}