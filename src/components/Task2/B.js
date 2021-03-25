import C from "./C";

const B =({count, onGetNum}) =>(
    <div>
        <h3>Componet B</h3>
        <C count={count} onGetNum={onGetNum} />
    </div>
)


export default B;