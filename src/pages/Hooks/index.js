import React, { useState, useEffect, useRef } from 'react';

export function Example1() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(1);
    const prevCountRef = useRef();

    useEffect(() => {
        console.log(11111111);
        prevCountRef.current = count;
        return () => {
            console.log(222222222);
        };
    }, []);

    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
        return () => {
            console.log(333333333);
        };
    }, [count]);

    useEffect(() => {
        console.log(4444);
        prevCountRef.current = count;
    });

    /* If you want to run an effect and clean it up only once (on mount and unmount), 
    you can pass an empty array ([]) as a second argument. 
    This tells React that your effect doesn’t 
    depend on any values from props or state, 
    so it never needs to re-run.
    */

    const prevCount = prevCountRef.current;

    return (
        <div>
            <p>You clicked {count} times</p>
            <button type="button" onClick={() => setCount(count + 1)} >
                Click me
            </button>
            <h1>Now: {count}, before: {prevCount}</h1>
        </div>
    );
}

// export Example1;