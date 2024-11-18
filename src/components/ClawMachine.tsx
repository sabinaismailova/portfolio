import styles from '../styles/clawmachine.module.scss'

export default function ClawMachine() {
    return (
        <main>
        <div className={styles.clawMachine}>
            <div className={styles.inside}>
                <div className={styles.leftWall}></div>
                <div className={styles.backWall}></div>
                <div className={styles.rightWall}></div>
                <div className={styles.topWall}></div>
                <div className={styles.bottomWall}></div>
                <div id="glassRails">
                    <div className={styles.sideGlass}></div>
                    <div className={styles.frontGlass}></div>
                </div>
            </div>
            <div className={styles.base}></div>
        </div>
        </main>
    );
};