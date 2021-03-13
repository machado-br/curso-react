import React from 'react'


export default (props) => {
    const {min, max} = props;

    const randomBetween = parseInt(Math.random() * (max - min) + min)
    return (
        <>
            <strong>{randomBetween} </strong>
            é um número aleatório entre
            <strong> {props.min} e {props.max}</strong>
        </>
    )
}