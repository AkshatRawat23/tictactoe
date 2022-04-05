import React, { useState } from 'react';
import './Tictactoe.css';

const Tictactoe = () => {

    const [turn, setTurn] = useState('x')

    const handleClick = (num) => {
        if (turn === 'x') {
            setTurn('o');
        } else {
            setTurn('x');
        }
        alert(num);
    }

    const Cell = ({ num }) => {
        return <td onClick={() => handleClick(num)}>-</td>
    }
    return (
        <div>
            <h2>TIC-TAC-TOE </h2>
            <table>
                <h3>Turn : {turn}</h3>
                <tbody>
                    <tr>
                        <Cell num={0} />
                        <Cell num={1} />
                        <Cell num={2} />
                    </tr>
                    <tr>
                        <Cell num={3} />
                        <Cell num={4} />
                        <Cell num={5} />
                    </tr>
                    <tr>
                        <Cell num={6} />
                        <Cell num={7} />
                        <Cell num={8} />
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Tictactoe