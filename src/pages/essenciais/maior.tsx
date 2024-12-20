import {useEffect, useState} from "react";
import Pagina from "@/components/template/Pagina";
import Display from "@/components/template/Display";
import Botao from "@/components/template/Botao";
import Flex from "@/components/template/Flex";

export default function Maior() {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [maior, setMaior] = useState(0);

    useEffect(() => {
        setMaior(Math.max(n1, n2));
    }, [n1, n2]);

    return (
        <Pagina titulo={"Maior valor entre dois números"} subtitulo={"Usando useEffect vinculado às variáveis do componente"}>
            <Display texto={`N1: ${n1} | N2: ${n2}`} textoComplementar={`O maior valor é: ${maior}`}/>
            <Flex>
                <Botao texto="N1" onClick={() => setN1(n1 + 1)}/>
                <Botao texto="N2" onClick={() => setN2(n2 + 1)}/>
            </Flex>
        </Pagina>
    );
}