import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    // setInterval(() => console.log(new Date(restoreState('hw9-date', Date.now()))), 100);

    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)
    const [disabled, setDisabled] = useState<boolean>(false)

    const start = () => {
        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
        setDisabled(!disabled)
        setInterval(() => setDate(new Date(restoreState('hw9-date', Date.now()))), 100)
    }

    const stop = () => {
        setDisabled(!disabled)
        setDate(new Date)

    }

    const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
        setShow(!show)
    }
    const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
        setShow(!show)
    }
    const mounth = new Intl.DateTimeFormat("en-US", {
         month: 'long',
    });
    const day = new Intl.DateTimeFormat("en-US", {
        day: '2-digit', month: '2-digit', year: 'numeric'
    });
    const dayWeek = new Intl.DateTimeFormat("en-US", {
        weekday:'long'
    });
    const time = new Intl.DateTimeFormat("en-US", {
        hour:'numeric', minute:'numeric', second:'numeric', hour12:false
    });
    const stringTime =  time.format(date) || <br/> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты  //////'date->time'
    const stringDate = day.format(date)|| <br/> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем //////'date->date'

    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
    const stringDay =   dayWeek.format(date) || <br/> // пишут студенты  ////'date->day'
    const stringMonth = mounth.format(date)|| <br/> // пишут студенты  //////'date->month'

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={disabled} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={!disabled} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
