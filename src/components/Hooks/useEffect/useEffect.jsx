import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UseEffectDemo = () => {
    const [value, setValue] = useState(1)
    const [value2, setValue2] = useState(1)

    useEffect(() => {
        console.log('usEffect with empty dependency array')
    }, [])

    useEffect(() => {
        console.log('usEffect with no dependency array')
    })

    useEffect(() => {
        console.log('usEffect with some (Add) dependencies ', value)
    }, [value])

    return (
        <div style={{ margin: '4rem' }}>
            <h1>UseEffect</h1><p>Add useEffect notes here</p>
            <p><Link to={'https://www.youtube.com/watch?v=tGXbiU2jcs4'}> Reference</Link></p>
            <div>{value},{value2}</div>
            <button onClick={() => { setValue(value + 1) }}>Add</button>
            <button onClick={() => { setValue2(value2 - 1) }}>Remove</button>
        </div>
    );
}

export default UseEffectDemo;