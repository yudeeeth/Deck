import { useState } from 'react';
import './stylesheets/Card.css'

export interface ICardProps {
    value: string;
    suit: string;
}

export function Card(props: ICardProps) {
    const [face, setFace] = useState(false);
    const ReturnFace = () => {
        if (face) {
            return (
                <div className="card" onClick={()=>{setFace(false)}}>
                    <div>{props.value}</div>
                    <div>{props.suit}</div>
                </div>
            )
        }
        else {
            return (
                <div className="card" onClick={()=>{setFace(true)}} />
            )
        }
    }
    return (
        <>
            <ReturnFace/>
        </>
    );
}
