import { useContext } from "react";
import { Component2Context } from "../../contexts/component2Context";
import { Link } from "react-router-dom";

const Component_2 = () => {
    const { isVisible, setIsVisible } = useContext(Component2Context)

    return (
        <>
            <div style={{ color: "red" }}>{isVisible ? 'true' : 'false'}</div>
            <div style={{ color: "red" }}>Teste 2</div>
            <button><Link to={'/'}>Componente 1</Link></button>
        </>
    )
}

export default Component_2;