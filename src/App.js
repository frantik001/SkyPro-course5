import './App.css'
import PropTypes from 'prop-types'

function App() {
    return (
        <div className="wrapper">
            <div className="container">
                <main className="main">
                    <Navigation />
                    <CenterBlock />
                    <Sidebar />
                </main>
                <div className="bar">
                    <div className="bar__content">
                        <div className="bar__player-progress"></div>
                        <BarPlayerBlock />
                    </div>
                </div>
                <footer className="footer"></footer>
            </div>
        </div>
    )
}

function Navigation() {
    return (
        <nav className="main__nav nav">
            <Logo />
            <Burger />
            <Menu />
        </nav>
    )
}

function Logo() {
    return (
        <div className="nav__logo logo">
            <img className="logo__image" src="img/logo.png" alt="logo" />
        </div>
    )
}

function Burger() {
    return (
        <div className="nav__burger burger">
            <span className="burger__line"></span>
            <span className="burger__line"></span>
            <span className="burger__line"></span>
        </div>
    )
}

function Menu() {
    return (
        <div className="nav__menu menu">
            <ul className="menu__list">
                <li className="menu__item">
                    <a href="http://" className="menu__link">
                        Главное
                    </a>
                </li>
                <li className="menu__item">
                    <a href="http://" className="menu__link">
                        Мой плейлист
                    </a>
                </li>
                <li className="menu__item">
                    <a href="http://" className="menu__link">
                        Войти
                    </a>
                </li>
            </ul>
        </div>
    )
}

function CenterBlock() {
    return (
        <div className="main__centerblock centerblock">
            <Search />
            <h2 className="centerblock__h2">Треки</h2>
            <Filter />
            <CenterBlockContent />
        </div>
    )
}

function Search() {
    return (
        <div className="centerblock__search search">
            <svg className="search__svg">
                <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
            </svg>
            <input
                className="search__text"
                type="search"
                placeholder="Поиск"
                name="search"
            />
        </div>
    )
}

function Filter() {
    return (
        <div className="centerblock__filter filter">
            <div className="filter__title">Искать по:</div>
            <div className="filter__button button-author _btn-text">
                исполнителю
            </div>
            <div className="filter__button button-year _btn-text">
                году выпуска
            </div>
            <div className="filter__button button-genre _btn-text">жанру</div>
        </div>
    )
}

function CenterBlockContent() {
    return (
        <div className="centerblock__content">
            <ContentTitle />
            <Playlist />
        </div>
    )
}

function ContentTitle() {
    return (
        <div className="content__title playlist-title">
            <div className="playlist-title__col col01">Трек</div>
            <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
            <div className="playlist-title__col col03">АЛЬБОМ</div>
            <div className="playlist-title__col col04">
                <svg className="playlist-title__svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                </svg>
            </div>
        </div>
    )
}

function PlaylistItem(props) {
    return (
        <div className="playlist__item">
            <div className="playlist__track track">
                <div className="track__title">
                    <div className="track__title-image">
                        <svg className="track__title-svg" alt="music">
                            <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                    </div>
                    <div className="track__title-text">
                        <a className="track__title-link" href="http://">
                            {props.name}
                            <span className="track__title-span"></span>
                        </a>
                    </div>
                </div>
                <div className="track__author">
                    <a className="track__author-link" href="http://">
                        {props.author}
                    </a>
                </div>
                <div className="track__album">
                    <a className="track__album-link" href="http://">
                        {props.album}
                    </a>
                </div>
                <div className="track__time">
                    <svg className="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </svg>
                    <span className="track__time-text">{props.time}</span>
                </div>
            </div>
        </div>
    )
}

PlaylistItem.propTypes = {
    name: PropTypes.text,
    author: PropTypes.text,
    album: PropTypes.text,
    time: PropTypes.text,
}

function Playlist() {
    return (
        <div className="content__playlist playlist">
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
        <div className="main__sidebar sidebar">
            <SidebarName name="Sergey.Ivanov" />
            <SidebarBlock />
        </div>
    )
}

function SidebarName(props) {
    return (
        <div className="sidebar__personal">
            <p className="sidebar__personal-name">{props.name}</p>
            <div className="sidebar__avatar"></div>
        </div>
    )
}

function SidebarBlock() {
    return (
        <div className="sidebar__block">
            <div className="sidebar__list">
                <SidebarItem img="img/playlist01.png" />
                <SidebarItem img="img/playlist02.png" />
                <SidebarItem img="img/playlist03.png" />
            </div>
        </div>
    )
}

function SidebarItem(props) {
    return (
        <div className="sidebar__item">
            <a className="sidebar__link" href="#">
                <img
                    className="sidebar__img"
                    src={props.img}
                    alt="day's playlist"
                />
            </a>
        </div>
    )
}

function BarPlayerBlock() {
    return (
        <div className="bar__player-block">
            <BarPlayer />
            <BarVolume />
        </div>
    )
}

function BarPlayer() {
    return (
        <div className="bar__player player">
            <BarPlayerControls />
            <PlayerTrack />
        </div>
    )
}

function BarPlayerControls() {
    return (
        <div className="player__controls">
            <PlayerBtn
                type="player__btn-prev"
                imgType="player__btn-prev-svg"
                altType="prev"
                img="img/icon/sprite.svg#icon-prev"
            />
            <PlayerBtn
                type="player__btn-play _btn"
                imgType="player__btn-play-svg"
                altType="play"
                img="img/icon/sprite.svg#icon-play"
            />
            <PlayerBtn
                type="player__btn-next"
                imgType="player__btn-next-svg"
                altType="next"
                img="img/icon/sprite.svg#icon-next"
            />
            <PlayerBtn
                type="player__btn-repeat _btn-icon"
                imgType="player__btn-repeat-svg"
                altType="repeat"
                img="img/icon/sprite.svg#icon-repeat"
            />
            <PlayerBtn
                type="player__btn-shuffle _btn-icon"
                imgType="player__btn-shuffle-svg"
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
        <div className="player__track-play track-play">
            <TrackContain />
            <TrackLikeDis />
        </div>
    )
}
function TrackContain() {
    return (
        <div className="track-play__contain">
            <div className="track-play__image">
                <svg className="track-play__svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </svg>
            </div>
            <div className="track-play__author">
                <a className="track-play__author-link" href="http://">
                    Ты та...
                </a>
            </div>
            <div className="track-play__album">
                <a className="track-play__album-link" href="http://">
                    Баста
                </a>
            </div>
        </div>
    )
}

function TrackLikeDis() {
    return (
        <div className="track-play__like-dis">
            <div className="track-play__like _btn-icon">
                <svg className="track-play__like-svg" alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
            </div>
            <div className="track-play__dislike _btn-icon">
                <svg className="track-play__dislike-svg" alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                </svg>
            </div>
        </div>
    )
}

function BarVolume() {
    return (
        <div className="bar__volume-block volume">
            <div className="volume__content">
                <div className="volume__image">
                    <svg className="volume__svg" alt="volume">
                        <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                    </svg>
                </div>
                <div className="volume__progress _btn">
                    <input
                        className="volume__progress-line _btn"
                        type="range"
                        name="range"
                    />
                </div>
            </div>
        </div>
    )
}
export default App
