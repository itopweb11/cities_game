import React from 'react';
import './Home.scss';
import Button from "../Button/Button";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <div className="home__header">
                <p>Игра в города на время</p>
            </div>
            <div className="home__desc">
                <p>Цель: Назвать как можно больше реальных городов.</p>
                <ul>
                    <li>
                        Запрещается повторение городов.
                    </li>
                    <li>
                        Названий городов на твердый “ъ” и мягкий “ь” знак нет.
                        Из-за этого бы пропускаем эту букву и игрок должен назвать
                        город на букву стоящую перед ъ или ь знаком.
                    </li>
                    <li>
                        Каждому игроку дается 2 минуты на размышления,
                        если спустя это время игрок не вводит слово он считается проигравшим
                    </li>
                </ul>
                <Link to={"delivery"}>
                    <Button text={"Начать игру"}/>
                </Link>
            </div>
        </div>
    );
};

export default Home;
