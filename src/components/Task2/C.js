
const C = ({count, onGetNum}) => {
    const fac = 1000;
    return(
        <div>
            <h3>Component C</h3>
            <button
            type="button"
            onClick={()=> onGetNum((Math.random()*100).toFixed(1)*fac)}
            >
                {count ? `Rnd: ${count}`: 'Get rand count'}
            </button>
        </div>
    )
}
export default C