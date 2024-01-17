import styles from './Header.module.less'

const Header = () => {
    return (
        <header className={`${styles['header']}`}>
            <span className={`${styles['logo']}`} />
        </header>
    )
}

export default Header