import React, {useEffect, useRef, useState} from 'react';
import './Main.scss'; // Подключение стилей компонента
import ImgButton from '../../img/Button.png'; // Подключение изображения
import ImgButton1 from '../../img/Button1.png'; // Подключение изображения
import arrayOfCities from '../../Data/Data';
import Result from "../Result/Result"; // Подключение массива городов

// Основной компонент Main
const Main = () => {
    // Состояния компонента
    const progressMax = 576;
    const [seconds, setSeconds] = useState(120); // начальное значение в секундах
    const [progress, setProgress] = useState(progressMax); // начальное значение прогресс-бара
    const progressPercent = (progress / progressMax) * 100; // прогресс в процентах
    const [inputText, setInputText] = useState(''); // Текст из поля ввода
    const [lastElem, setLastElem] = useState('');
    const [hasWord, setHasWord] = useState(''); // Проверка наличия слова в массиве
    const [arrCiti, setArrCiti] = useState(''); // Проверка наличия города в массиве городов
    const [firstElement, setFirstElement] = useState(''); // Первая буква введенно��о слова
    const [matchingLetters, setMatchingLetters] = useState(false); // Проверка совпадения букв
    const [isDivisibleByTwo, setIsDivisibleByTwo] = useState(true); // Проверка совпадения букв
    const [resultPage, setResultPage] = useState(false);
    const [error, setError] = useState(''); // Ошибка при вводе
    const [textArray, setTextArray] = useState([]); // Массив введенных городов
    const [inputValue, setInputValue] = useState('');



    // Определяем функцию handleInputChange, которая будет вызвана при изменении текстового поля.
    // Эта функция принимает один параметр: event, который представляет собой событие, инициировавшее изменение.
    const handleInputChange = (event) => {
        // Обновляем состояние inputText значением введенным пользователем в текстовом поле.
        setInputText(event.target.value);

        // setHasWord будет установлено в true, если введенный текст уже присутствует в массиве textArray, иначе будет false.
        setHasWord(textArray.includes(event.target.value));

        // setArrCiti будет установлено в true, если введенный текст существует в массиве arrayOfCities, иначе будет false.
        setArrCiti(arrayOfCities.includes(event.target.value));

        // setFirstElement обновляет состояние, устанавливая первый символ введенного текста.
        // Обратите внимание, что здесь может быть ошибка, так как inputText может быть не обновленным на момент вызова.
        setFirstElement(inputText[0]);

        // Получаем последнее слово из массива textArray.
        let lastCiti = textArray.slice(-1)[0];

        // Определяем последнюю букву этого слова, учитывая особые правила - игнорируем 'ы' и 'ь' на конце.
        let lastElement = lastCiti ?
            lastCiti.charAt(lastCiti.length - 1) === 'ы' || lastCiti.charAt(lastCiti.length - 1) === 'ь' ?
                lastCiti.charAt(lastCiti.length - 2) :
                lastCiti.charAt(lastCiti.length - 1) : '';

        // Проверяем, совпадает ли последняя буква последнего слова из textArray (приведенная к верхнему регистру) с первой буквой введенного текста.
        // Если массив textArray не пустой, setMatchingLetters устанавливается в true или false в зависимости от результата сравнения.
        // Если textArray пустой, то setMatchingLetters устанавливается в true по умолчанию.
        textArray.length > 0 ?
            setMatchingLetters(lastElement.toUpperCase() === firstElement ? true : false) :
            setMatchingLetters(true);

        setInputValue(event.target.value);
    };


    // Эффект для обновления массива городов после ввода
    useEffect(() => {
        // Получение последнего элемента из массива textArray. Если массив пуст, lastCiti2 будет undefined.
        let lastCiti2 = textArray.slice(-1)[0];

        // Вычисление последнего символа учитывая специфические условия для русских букв "ы" и "ь".
        let lastElement2 = lastCiti2
            ? lastCiti2.charAt(lastCiti2.length - 1) === 'ы' || lastCiti2.charAt(lastCiti2.length - 1) === 'ь'
                ? lastCiti2.charAt(lastCiti2.length - 2)
                : lastCiti2.charAt(lastCiti2.length - 1)
            : '';

        // Создание нового массива, исключающего те города, которые уже есть в textArray.
        const filteredArray = arrayOfCities.filter(city => !textArray.includes(city));

        // Установка таймера, который через 10 секунд добавляет новый город в textArray или удаляет последний, в зависимости от условия.
        setTimeout(() => {
            if (textArray.length > 0) {
                textArray.push(filteredArray.find(item => item[0] === lastElement2.toUpperCase()))
            }
        }, 3000);
    }, [textArray]); // useEffect будет повторно вызван, если textArray обновится.


    // Создаем ref-объект для доступа к DOM элементу, которым будем управлять
    const scrollRef = useRef();
    // Функция, которая прокручивает элемент, на который указывает ref, до низа.
    const scrollToBottom = () => {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    };

    // Если в массиве textArray больше чем 5 элементов
    if (textArray.length > 5) {
        scrollToBottom() // Вызываем функцию прокрутки к нижней части элемента
    }



    useEffect(() => {
        let lastCiti3 = textArray.slice(-1)[0];

        // Вычисление последнего символа учитывая специфические условия для русских букв "ы" и "ь".
        let lastElement3 = lastCiti3
            ? lastCiti3.charAt(lastCiti3.length - 1) === 'ы' || lastCiti3.charAt(lastCiti3.length - 1) === 'ь'
                ? lastCiti3.charAt(lastCiti3.length - 2)
                : lastCiti3.charAt(lastCiti3.length - 1)
            : '';
        console.log(lastCiti3,'lastCiti2')
        setLastElem(lastElement3.toUpperCase())
        // Установка значения секунд, предположительно для таймера обратного отсчета.
        setSeconds(120);
        // Установка прогресса, значение не связано напрямую с контекстом, может быть для прогресс бара.
        setProgress(576);
        if (textArray.length > 0) {
            setIsDivisibleByTwo(textArray.length % 2 === 0);
        }
    }, [textArray.length])

    // Обработчик отправки формы
    const handleFormSubmit = () => {
        if (matchingLetters && arrCiti && !hasWord) {
            setError('');
            setTextArray([...textArray, inputText]); // Сохраняем текст в массиве
            setInputText(''); // Очищаем input
        } else {
            setError('Такой город не существует или вы его уже использовали');
        }
    };

    useEffect(() => {
        // Этот эффект запускается каждый раз, когда переменная `seconds` меняется.
        if (seconds > 0) {
            // Если значение `seconds` больше 0, запускаем интервал.
            const timer = setInterval(() => {
                // Уменьшаем количество секунд на 1.
                setSeconds(prevSeconds => prevSeconds - 1);
                // Уменьшаем прогресс, не позволяя ему уйти ниже 0.
                setProgress(oldProgress => Math.max(oldProgress - (progressMax / 120), 0));
            }, 1000); // Задержка интервала - 1 секунда (1000 мс).

            // Очищаем интервал при размонтировании компонента или изменении `seconds`.
            return () => clearInterval(timer);
        }
        // Добавляем `seconds` в массив зависимостей эффекта.
    }, [seconds]);

// Стили для полосы прогресса, рассчитываемые на основе `progressPercent`.
    const progressStyle = {
        width: `${progressPercent}%`, // Ширина полосы зависит от процентного значения прогресса.
        height: "5px", // Фиксированная высота полосы прогресса.
        backgroundColor: `rgb(0, 0, ${progressPercent * 2.55})`, // Синий цвет с интенсивностью, зависящей от прогресса.
    };

    // Форматирование времени
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    // Обработчик нажатия клавиши Enter
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleFormSubmit();
        }
    };

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    // Визуализация компонента
    return (
        seconds === 0 ? <Result setInputValue={setInputValue} setSeconds={setSeconds} setProgress={setProgress} textArray={textArray} isDivisibleByTwo={isDivisibleByTwo} setTextArray={setTextArray}/>
        : <div className="main">
            <div className="main__header">
                { isDivisibleByTwo ? <p>Сейчас ваша очередь</p> : <p>Сейчас очередь соперника</p> }
                <p>{formatTime(seconds)}</p>
            </div>
                <div style={{
                    width: '100%', // общая ширина контейнера прогресс-бара
                    backgroundColor: '#ddd', // цвет фона контейнера
                    borderRadius: '5px', // закругление углов контейнера прогресс-бара
                }}>
                    <div style={progressStyle} />
                </div>
            <div className="main__content" ref={scrollRef}>
                {textArray.map((text, index) => (
                    <p key={index} style={{ marginTop: `${50 * (index + 1)}px` }}>{text}</p>
                ))}

                {textArray.length < 1 ? <p className="main__content_desc">Первый участник вспоминает города...</p>
                 : null
                }
            </div>
            {
                textArray.length >= 1 ?
                    <p className="main__content_numberOfCities">Всего перечислено городов: {textArray.length}</p>
                    : ""
            }
            <span>{error}</span>
            <div className="main__control">
                <input
                    placeholder={textArray.length < 1 ? "Напишите любой город, например: Где вы живете?"
                        : isDivisibleByTwo ? `Напишите название города на букву "${lastElem}"` : 'Ожидаем ответа соперника...'
                    }
                    type="text"
                    value={inputText}
                    onChange={handleInputChange}
                    onKeyDown={e => handleKeyDown(e)}
                    disabled={!isDivisibleByTwo}
                    ref={inputRef}
                />
                {
                    isDivisibleByTwo ? <img onClick={handleFormSubmit} src={ImgButton} alt="ImgButton"/>
                        : <img src={ImgButton1} alt="ImgButton"/>
                }
            </div>
        </div>
    );
};

export default Main;
