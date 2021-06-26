import React from "react";

export const UseForm = <T,>(estadoInicial: T) => {
    const [valor, setValor] = React.useState(estadoInicial);

    const change = (novoValor: T) => setValor(novoValor);

    return {
        valor,
        setValor,
        change,
    };
};