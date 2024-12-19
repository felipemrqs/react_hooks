import Pagina from "@/components/template/Pagina";
import Display from "@/components/template/Display";
import {useState} from "react";
import Botao from "@/components/template/Botao";
import Flex from "@/components/template/Flex";
import {IconMinus, IconPlus} from "@tabler/icons-react";

export default function (){
    let [contador, setContador] = useState(0);
    return (
        <Pagina titulo="Contador" subtitulo="Entendendo o que é um estado">
            <Display texto={contador}/>
            <Flex>
                <Botao redondo tamanho={"xl"} cor={"bg-blue-500"} icone={<IconMinus/>} onClick={()=>setContador(contador-1)}/>
                <Botao redondo tamanho={"xl"} cor={"bg-red-500"} texto="0" onClick={()=>setContador(0)}/>
                <Botao redondo tamanho={"xl"} cor={"bg-green-500"} icone={<IconPlus/>} onClick={()=>setContador(contador+1)}/>
            </Flex>
        </Pagina>
    )
}