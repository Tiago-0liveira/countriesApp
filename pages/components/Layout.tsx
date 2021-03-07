import styles from "./Layout.module.scss"

const Layout = ({ children }) => {
    return (
        <div className={styles.Layout}>
            <header>
                <h1 className="title">h1</h1>
            </header>

            <main>
                {children}
            </main>

            <footer>
                Tiago Oliveira @ https://github.com/Tiago-0liveira
            </footer>
        </div>
    )
}

export default Layout