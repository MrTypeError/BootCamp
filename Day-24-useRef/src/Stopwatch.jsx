import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'

export default function Stopwatch() {
    const startTime = useRef(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null)
    const [laps , setLaps] = useState([]);


    function trackLap(){
        setLaps([...laps, secondsElapsed])
    }
    let secondsElapsed = 0;

    function startStopWatch(){
        startTime.current = Date.now()
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);

    }

    function stopStopWatch(){
        clearInterval(intervalRef.current); 
    }
    secondsElapsed = (now - startTime.current)/1000;

  return (
    // react Fragment 
    <> 
    <section>
        <h1>{secondsElapsed.toFixed(2)}</h1>
        <button onClick={startStopWatch}>Start</button>
        <button onClick={stopStopWatch}>Stop</button>
        <button onClick={trackLap}>Lap</button>
    </section>

    {/* This is known as Conditional Rendering */}
    
    {laps?.length ? (<article>
        <h2>Laps</h2>
        {laps.map((lap) =>(<p key={lap}>{lap}</p>))}
    </article>):null}
    </>

  )
}
