import './ProgressBar.css';

function ProgressBar({percent}){

    const getColor = () => {
        if(percent < 40){
            return"#ff0000";    
        } else if(percent < 70){
            return "#ffa500";
        } else {
            return "#2"
        }
    }

    return (
        <div className='Progress-bar'>
            <div className='progress-bar-fill' style={{width: `${percent}%`, background: getColor()}}>

            </div>

        </div>
    )
}

export default ProgressBar;