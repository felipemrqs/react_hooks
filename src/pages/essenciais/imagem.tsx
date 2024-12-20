import Pagina from "@/components/template/Pagina";
import { useEffect, useState } from "react";

export default function () {
    const [url, setUrl] = useState("");

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => res.json())
            .then((dados) => {
                setUrl(dados.message);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <Pagina titulo={"Imagem aleatória"} subtitulo={"Usando useEffect para evitar loop"}>
            {url && <img src={url} alt="Doguinho"/>}
        </Pagina>
    );
}