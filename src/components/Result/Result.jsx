import React from 'react';
import Button from "../Button/Button";
import './Result.scss'; // Подключение стилей компонента

const Result = ({setSeconds, textArray, setTextArray, isDivisibleByTwo, setProgress}) => {
const f = () => {
    if (textArray.length >= 1) {
        setTextArray([]);
    } else {
        setProgress(576)
        setSeconds(120)
    }
}

    return (
        <div className="result">
            {!isDivisibleByTwo ? <p className="result__matchOutcome">Поздравляем тебя с победой! <br/> Твой противник не вспомнил нужный город!</p>
                : <p className="result__matchOutcome">К сожалению твое время вышло! <br/> Твой противник победил!</p>
            }
            <p className={!isDivisibleByTwo ? 'result__timeVictory' : 'result__timeDefeat'}>00:00</p>
            <p className="result__numberOfCities">Всего было перечислено городов: {textArray.length} <br/> очень не плохой результат!</p>
            <p className="result__theLastCity">Последний город названный победителем</p>
            <p className="result__city">{textArray.slice(-1)[0]}</p>
            <div onClick={f}>
                <Button text={"Начать новую игру"}/>
            </div>
        </div>
    );
};

export default Result;
