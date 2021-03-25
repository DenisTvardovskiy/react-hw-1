import B from "./B";

const A = ({count, onGetNum}) =>(
    <div>
        <h3>Component A</h3>
        <B count={count} onGetNum={onGetNum}/>
    </div>
)



export default A;