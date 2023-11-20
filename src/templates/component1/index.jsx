import { useContext } from "react";
import Component1Provider, { Component1Context } from "../../contexts/component1Context";
import { Link } from "react-router-dom";

const Component_1 = () => {
    const { isVisible, setIsVisible } = useContext(Component1Context)

    return (
        <>
            <div style={{ color: "red" }}>{isVisible ? 'true' : 'false'}</div>
            <div style={{ color: "red" }}>Teste 1</div>
            <button><Link to={'/component2'}>Componente 2</Link></button>

        </>
    )
}

export default Component_1;