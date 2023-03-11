import styles from './App.module.css'
import { useState, useEffect } from 'react'

function App() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <main className={styles.main}>
                    <Navigation />
                    <CenterBlock />
                    <Sidebar />
                </main>
                <div className={styles.bar}>
                    <div className={styles.bar__content}>
                        <div className={styles.bar__player_progress}></div>
                        <BarPlayerBlock />
                    </div>
                </div>
                <footer className={styles.footer}></footer>
            </div>
        </div>
    )
}

function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    function toggleMenu() {
        setIsOpen(!isOpen)
    }

    return (
        <nav className={`${styles.main__nav} ${styles.nav}`}>
            <Logo />
            <Burger onClick={toggleMenu} />
            <Menu isOpen={isOpen} />
        </nav>
    )
}

function Logo() {
    return (
        <div className={`${styles.nav__logo} ${styles.logo}`}>
            <img className={styles.logo__image} src="img/logo.png" alt="logo" />
        </div>
    )
}

function Burger({ onClick }) {
    return (
        <div
            className={`${styles.nav__burger} ${styles.burger}`}
            onClick={onClick}
        >
            <span className={styles.burger__line}></span>
            <span className={styles.burger__line}></span>
            <span className={styles.burger__line}></span>
        </div>
    )
}

function Menu(props) {
    return (
        <div
            className={`${styles.nav__menu} ${styles.menu} ${
                props.isOpen ? '' : styles.nav__menu_closed
            }`}
        >
            <ul className={styles.menu__list}>
                <li className={styles.menu__item}>
                    <a href="http://" className={styles.menu__link}>
                        Главное
                    </a>
                </li>
                <li className={styles.menu__item}>
                    <a href="http://" className={styles.menu__link}>
                        Мой плейлист
                    </a>
                </li>
                <li className={styles.menu__item}>
                    <a href="http://" className={styles.menu__link}>
                        Войти
                    </a>
                </li>
            </ul>
        </div>
    )
}

function CenterBlock() {
    return (
        <div className={`${styles.main__centerblock} ${styles.centerblock}`}>
            <Search />
            <h2 className={styles.centerblock__h2}>Треки</h2>
            <Filter />
            <CenterBlockContent />
        </div>
    )
}

function Search() {
    return (
        <div className={`${styles.centerblock__search} ${styles.search}`}>
            <svg className={styles.search__svg}>
                <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
            </svg>
            <input
                className={styles.search__text}
                type="search"
                placeholder="Поиск"
                name="search"
            />
        </div>
    )
}

function Filter() {
    const [activeSuggest, setActiveSuggest] = useState(null)

    const toggleSuggest = (suggestType) => {
        setActiveSuggest(activeSuggest === suggestType ? null : suggestType)
    }

    const getButtonClassName = (suggestType) => {
        let className = `${styles.filter__button} ${
            styles[`button_${suggestType}`]
        } `
        className +=
            activeSuggest === suggestType
                ? styles.btn__active
                : styles._btn_text
        return className
    }

    return (
        <div className={`${styles.centerblock__filter} ${styles.filter}`}>
            <div className={styles.filter__title}>Искать по:</div>
            <div
                className={getButtonClassName('author')}
                onClick={() => toggleSuggest('author')}
            >
                исполнителю
                <div
                    className={styles.suggest_container}
                    style={{
                        display: activeSuggest === 'author' ? 'block' : 'none',
                    }}
                >
                    <div className={styles.suggest}>
                        <ul>
                            <li>Ali Bakgor</li>
                            <li>AR/CO</li>
                            <li>Blue Foundation</li>
                            <li>Calvin Harris</li>
                            <li>Disciples</li>
                            <li>Dynoro</li>
                            <li>Hi Profile</li>
                            <li>HYBIT</li>
                            <li>Jaded</li>
                            <li>minthaze</li>
                            <li>Mr. Black</li>
                            <li>Mr. Gee</li>
                            <li>Nero</li>
                            <li>Offer Nissim</li>
                            <li>Outwork</li>
                            <li>Psychopath</li>
                            <li>Tom Boxer</li>
                            <li>Will Clarke</li>
                            <li>Zeds Dead</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div
                className={getButtonClassName('year')}
                onClick={() => toggleSuggest('year')}
            >
                году выпуска
                <div
                    className={styles.suggest_container}
                    style={{
                        display: activeSuggest === 'year' ? 'block' : 'none',
                    }}
                >
                    <div className={styles.suggest}>
                        <ul>
                            <li>2010</li>
                            <li>2011</li>
                            <li>2012</li>
                            <li>2013</li>
                            <li>2014</li>
                            <li>2015</li>
                            <li>2016</li>
                            <li>2017</li>
                            <li>2018</li>
                            <li>2019</li>
                            <li>2020</li>
                            <li>2021</li>
                            <li>2022</li>
                            <li>2023</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div
                className={getButtonClassName('genre')}
                onClick={() => toggleSuggest('genre')}
            >
                жанру
                <div
                    className={styles.suggest_container}
                    style={{
                        display: activeSuggest === 'genre' ? 'block' : 'none',
                    }}
                >
                    <div className={styles.suggest}>
                        <ul>
                            <li>Рок</li>
                            <li>Хип-хоп</li>
                            <li>Джаз</li>
                            <li>Электронная музыка</li>
                            <li>Классическая музыка</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

function CenterBlockContent() {
    return (
        <div className={styles.centerblock__content}>
            <ContentTitle />
            <Playlist />
        </div>
    )
}

function ContentTitle() {
    return (
        <div className={`${styles.content__title} ${styles.playlist_title}`}>
            <div className={`${styles.playlist_title__col} ${styles.col01}`}>
                Трек
            </div>
            <div className={`${styles.playlist_title__col} ${styles.col02}`}>
                ИСПОЛНИТЕЛЬ
            </div>
            <div className={`${styles.playlist_title__col} ${styles.col03}`}>
                АЛЬБОМ
            </div>
            <div className={`${styles.playlist_title__col} ${styles.col04}`}>
                <svg className={styles.playlist_title__svg} alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                </svg>
            </div>
        </div>
    )
}

function PlaylistItem(props) {
    const [showText, setShowText] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowText(false)
        }, 5000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div className={styles.playlist__item}>
            <div className={`${styles.playlist__track} ${styles.track}`}>
                <div className={styles.track__title}>
                    <div className={styles.track__title_image}>
                        <svg className={styles.track__title_svg} alt="music">
                            <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                    </div>
                    <div
                        className={styles.track__title_text}
                        style={{ backgroundColor: showText ? '#313131' : '' }}
                    >
                        <a className={styles.track__title_link} href="http://">
                            {showText ? '' : props.name}
                            <span className={styles.track__title_span}></span>
                        </a>
                    </div>
                </div>
                <div
                    className={styles.track__author}
                    style={{ backgroundColor: showText ? '#313131' : '' }}
                >
                    <a className={styles.track__author_link} href="http://">
                        {showText ? '' : props.author}
                    </a>
                </div>
                <div
                    className={styles.track__album}
                    style={{ backgroundColor: showText ? '#313131' : '' }}
                >
                    <a className={styles.track__album_link} href="http://">
                        {showText ? '' : props.album}
                    </a>
                </div>
                <div
                    className={styles.track__time}
                    style={{ backgroundColor: showText ? '#313131' : '' }}
                >
                    <svg className={styles.track__time_svg} alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </svg>
                    <span className={styles.track__time_text}>
                        {showText ? '' : props.time}
                    </span>
                </div>
            </div>
        </div>
    )
}

function Playlist() {
    return (
        <div className={`${styles.content__playlist} ${styles.playlist}`}>
            <PlaylistItem
                name="Guilt"
                author="Nero"
                album="Welcome Reality"
                time="4:44"
            />
            <PlaylistItem
                name="Elektro"
                author="Dynoro, Outwork, Mr. Gee"
                album="Elektro"
                time="2:22"
            />
            <PlaylistItem
                name="I’m Fire"
                author="Ali Bakgor"
                album="I’m Fire"
                time="2:22"
            />
            <PlaylistItem
                name="Non Stop"
                author="Стоункат, Psychopath"
                album="Non Stop"
                time="4:12"
            />
            <PlaylistItem
                name="Run Run "
                author="Jaded, Will Clarke, AR/CO"
                album="Run Run"
                time="2:54"
            />
            <PlaylistItem
                name="Eyes on Fire"
                author="Blue Foundation, Zeds Dead"
                album="Eyes on Fire"
                time="5:20"
            />
            <PlaylistItem
                name="Mucho Bien"
                author="HYBIT, Mr. Black, Offer Nissim, Hi Profile"
                album="Mucho Bien"
                time="3:41"
            />
            <PlaylistItem
                name="Knives n Cherries"
                author="minthaze"
                album="Captivating"
                time="1:48"
            />
            <PlaylistItem
                name="How Deep Is Your Love"
                author="Calvin Harris, Disciples"
                album="How Deep Is Your Love"
                time="3:32"
            />
            <PlaylistItem
                name="Morena"
                author="Tom Boxer"
                album="Soundz Made in Romania"
                time="3:36"
            />
            <PlaylistItem name="" author="" album="" time="" />
        </div>
    )
}

function Sidebar() {
    return (
        <div className={`${styles.main__sidebar} ${styles.sidebar}`}>
            <SidebarName name="Sergey.Ivanov" />
            <SidebarBlock />
        </div>
    )
}

function SidebarName(props) {
    return (
        <div className={styles.sidebar__personal}>
            <p className={styles.sidebar__personal_name}>{props.name}</p>
            <div className={styles.sidebar__avatar}></div>
        </div>
    )
}

function SidebarBlock() {
    const [showBg, setShowBg] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowBg(false)
        }, 5000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div className={styles.sidebar__block}>
            <div className={styles.sidebar__list}>
                <SidebarItem
                    img={showBg ? 'img/bg.png' : 'img/playlist01.png'}
                />
                <SidebarItem
                    img={showBg ? 'img/bg.png' : 'img/playlist02.png'}
                />
                <SidebarItem
                    img={showBg ? 'img/bg.png' : 'img/playlist03.png'}
                />
            </div>
        </div>
    )
}

function SidebarItem(props) {
    return (
        <div className={styles.sidebar__item}>
            <a className={styles.sidebar__link} href="#">
                {props.img.includes('bg.png') ? (
                    <img
                        className={styles.sidebar__img}
                        src={props.img}
                        alt="sidebar"
                    />
                ) : (
                    <img
                        className={styles.sidebar__img}
                        src={props.img}
                        alt="day's playlist"
                    />
                )}
            </a>
        </div>
    )
}

function BarPlayerBlock() {
    return (
        <div className={styles.bar__player_block}>
            <BarPlayer />
            <BarVolume />
        </div>
    )
}

function BarPlayer() {
    return (
        <div className={`${styles.bar__player} ${styles.player}`}>
            <BarPlayerControls />
            <PlayerTrack />
        </div>
    )
}

function BarPlayerControls() {
    return (
        <div className={styles.player__controls}>
            <PlayerBtn
                type={`${styles.player__btn_prev}`}
                imgType={`${styles.player__btn_prev_svg}`}
                altType="prev"
                img="img/icon/sprite.svg#icon-prev"
            />
            <PlayerBtn
                type={`${styles.player__btn_play} _btn`}
                imgType={`${styles.player__btn_play_svg}`}
                altType="play"
                img="img/icon/sprite.svg#icon-play"
            />
            <PlayerBtn
                type={`${styles.player__btn_next}`}
                imgType={`${styles.player__btn_next_svg}`}
                altType="next"
                img="img/icon/sprite.svg#icon-next"
            />
            <PlayerBtn
                type={`${styles.player__btn_repeat} _btn_icon`}
                imgType={`${styles.player__btn_repeat_svg}`}
                altType="repeat"
                img="img/icon/sprite.svg#icon-repeat"
            />
            <PlayerBtn
                type={`${styles.player__btn_shuffle} _btn_icon`}
                imgType={`${styles.player__btn_shuffle_svg}`}
                altType="shuffle"
                img="img/icon/sprite.svg#icon-shuffle"
            />
        </div>
    )
}

function PlayerBtn(props) {
    return (
        <div className={props.type}>
            <svg className={props.imgType} alt={props.altType}>
                <use xlinkHref={props.img}></use>
            </svg>
        </div>
    )
}

function PlayerTrack() {
    return (
        <div className={`${styles.player__track_play} ${styles.track_play}`}>
            <TrackContain />
            <TrackLikeDis />
        </div>
    )
}
function TrackContain() {
    return (
        <div className={styles.track_play__contain}>
            <div className={styles.track_play__image}>
                <svg className={styles.track_play__svg} alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </svg>
            </div>
            <div className={styles.track_play__author}>
                <a className={styles.track_play__author_link} href="http://">
                    Ты та...
                </a>
            </div>
            <div className={styles.track_play__album}>
                <a className={styles.track_play__album_link} href="http://">
                    Баста
                </a>
            </div>
        </div>
    )
}

function TrackLikeDis() {
    return (
        <div className={styles.track_play__like_dis}>
            <div className={`${styles.track_play__like} ${styles._btn_icon}`}>
                <svg className={styles.track_play__like_svg} alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
            </div>
            <div
                className={`${styles.track_play__dislike} ${styles._btn_icon}`}
            >
                <svg className={styles.track_play__dislike_svg} alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                </svg>
            </div>
        </div>
    )
}

function BarVolume() {
    return (
        <div className={`${styles.bar__volume_block} ${styles.volume}`}>
            <div className={styles.volume__content}>
                <div className={styles.volume__image}>
                    <svg className={styles.volume__svg} alt="volume">
                        <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                    </svg>
                </div>
                <div className={`${styles.volume__progress} ${styles._btn}`}>
                    <input
                        className={`${styles.volume__progress_line} ${styles._btn}`}
                        type="range"
                        name="range"
                    />
                </div>
            </div>
        </div>
    )
}
export default App
