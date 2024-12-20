import Pagina from "@/components/template/Pagina";
import Display from "@/components/template/Display";
import {useRef, useState} from "react";
import Botao from "@/components/template/Botao";
import Flex from "@/components/template/Flex";


export default function (){
    const [state, setState] = useState(0);
    const ref = useRef(0);
    return (
        <Pagina titulo={"State vs Ref"} subtitulo={"Entendo a diferença entre State e Ref"}>
            <Display texto={`State: ${state} | Ref: ${ref.current}`}/>
            <Flex>
                <Botao texto="State" onClick={() => setState(state + 1)}/>
                <Botao texto="Ref" onClick={() => ref.current++}/>
            </Flex>
        </Pagina>
    );
}