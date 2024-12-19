import Pagina from "@/components/template/Pagina";
import Display from "@/components/template/Display";
import {useState} from "react";
import Botao from "@/components/template/Botao";
import Flex from "@/components/template/Flex";

export default function () {
    const [votos, setVotos] = useState({naruto: 0, onePeace: 0});
    function votarNaruto() {
        setVotos({...votos, naruto: votos.naruto + 1});
    }
    function votarOnePeace() {
        setVotos({...votos, onePeace: votos.onePeace + 1});
    }
    return (
    <Pagina titulo="Votação" subtitulo="Usando estado com objeto">
        <Flex col center>
            <Display texto={"Qual é o melhor anime?"}
                     textoComplementar={`Naruto: ${votos.naruto} | One Peace: ${votos.onePeace}`}/>
            <Flex>
                <Botao cor={"bg-orange-500"} texto={"Naruto"} onClick={votarNaruto}/>
                <Botao cor={"bg-red-500"} texto={"One Peace"} onClick={votarOnePeace}/>
            </Flex>
            <Botao cor={"bg-gray-500"} texto={"Zerar votos"} onClick={() => setVotos({naruto: 0, onePeace: 0})}/>
        </Flex>
    </Pagina>
)}