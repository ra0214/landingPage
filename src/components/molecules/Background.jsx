import "./Background.css"
import data from "../../data/Background"

function Background() {
    return (
        <div className="Background-container">
            <align left>
            {data.items.map(item => {
                return(
                    <img src={item.image} alt="" className="Background-image"/>
                );
            })}
            </align>
            <div className="Background-menu">
                {data.items2.map(item => {
                    return (
                        <span>{item.text}</span>
                    )
                })}
            </div>
        </div>
    )
}

export default Background;