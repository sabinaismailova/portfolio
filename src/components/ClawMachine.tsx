import styles from "../styles/clawmachine.module.scss";
import kuromigrad from "../../public/images/kuromigrad.png";
import keropisharedstudio from "../../public/images/keropisharedstudio.png";
import mymelodynyt from "../../public/images/mymelodynyt.png";
import tuxegswep from '../../public/images/tuxegswep.png'
import laptopprotrack from '../../public/images/laptopprotrack.png'
import surprise from '../../public/images/surprise.png'
import hellokittywitu from '../../public/images/hellokittywitu.png'
import cinnimarollwikitongues from '../../public/images/cinnimarollwikitongues.png'
import phonettp from '../../public/images/phonettp.png'
import skillsjar from '../../public/images/skillsjar.png'

export default function ClawMachine() {
  const prizes = [
    {
      id: "kuromi",
      img: kuromigrad.src,
      zIndex: 2,
    },
    {
        id: "hello kitty laptop",
        img: laptopprotrack.src,
        zIndex: 2,
    },
    {
        id: "keropi",
        img: keropisharedstudio.src,
        zIndex: 2,
    },
    {
        id: "surprise box",
        img: surprise.src,
        zIndex: 0,
    },
    {
        id: "tuxe",
        img: tuxegswep.src,
        zIndex: 2,
    },
    {
        id: "my melody",
        img: mymelodynyt.src,
        zIndex: 2,
    },
    {
        id: "hello kitty",
        img: hellokittywitu.src,
        zIndex: 0,
    },
    {
        id: "cinnimaroll",
        img: cinnimarollwikitongues.src,
        zIndex: 1,
    },
    {
        id: "hello kitty jar",
        img: skillsjar.src,
        zIndex: 0,
    },
    {
        id: "hello kitty phone",
        img: phonettp.src,
        zIndex: 0,
    },
  ];

  const getBottomPadding = (id: string) => {
    if(id=='hello kitty'){
        return '6%'
    }
    if(id=='cinnimaroll'){
        return '2%'
    }
    if(id=='hello kitty jar'){
        return '1%'
    }
    return '0'
  }

  const getPrizeWidth = (id: string) => {
    if(id=='cinnimaroll'){
        return '16%'
    }
    if(id=='hello kitty phone'){
        return '16%'
    }
    return '8%'
  }

  const getPrizeMaxWidth = (id: string) => {
    if(id=='cinnimaroll'){
        return '170px'
    }
    return '96px'
  }

  const getPrizeMinWidth = (id: string) => {
    if(id=='cinnimaroll'){
        return '96px'
    }
    return '72px'
  }

  const getBottomMargin = (id: string) => {
    if(id=='hello kitty phone'){
        return '-60px'
    }
    return '0'
  }

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
          <div id="prizes" className={styles.prizes}>
            {prizes.map((prize, index) => (
              <div
                key={index}
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: getPrizeWidth(prize.id),
                  height: '16%',
                  padding: '2%',
                  minWidth: getPrizeMinWidth(prize.id),
                  maxWidth: getPrizeMaxWidth(prize.id),
                  minHeight: '20px',
                  maxHeight: '88px',
                  zIndex: `${prize.zIndex}`,
                  paddingBottom: getBottomPadding(prize.id),
                  marginBottom: getBottomMargin(prize.id),
                }}
              >
                <img src={prize.img} className={styles.prize} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.base}></div>
      </div>
    </main>
  );
}
