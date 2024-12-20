import { useRef, useState } from "react";
import Display from "@/components/template/Display";
import Pagina from "@/components/template/Pagina";

export default function ContagemCaracteres() {
    const quantidadeCaracteres = 400;
    const [caracteresRestantes, setCaracteresRestantes] = useState(quantidadeCaracteres);
    const refTexto = useRef<HTMLTextAreaElement>(null);

    function atualizarContagem() {
        const texto = refTexto.current?.value ?? "";
        const restantes = quantidadeCaracteres - texto.length;
        setCaracteresRestantes(restantes);
    }

    return (
        <Pagina titulo="Contagem de Caracteres">
            <Display texto="Digite algo" textoComplementar={`${caracteresRestantes} caracteres restantes.`} />
            <textarea
                ref={refTexto}
                onInput={atualizarContagem}
                className="border border-zinc-700 bg-zinc-700 text-white w-full p-2 resize-none"
            />
        </Pagina>
    );
}