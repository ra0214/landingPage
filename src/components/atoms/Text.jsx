import style from './Text.module.css'

function Text({text}) {
    return(
        <center>
        <h1 className={style.pg_text}>{text}</h1>
        </center>
    );
}

export default Text;