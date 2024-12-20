import {MenuItem} from "@/data/models/MenuItem";
import {MenuSecao} from "@/data/models/MenuSecao";
import Logo from "./Logo";
import MenuPrincipalItem from "./MenuPrincipalItem";
import MenuPrincipalSecao from "./MenuPrincipalSecao";
import Flex from "./Flex";
import {
    IconArrowsLeftRight,
    IconLetterCase,
    IconMathGreater,
    IconNumbers,
    IconRefreshAlert,
    IconUsers
} from "@tabler/icons-react";

export default function MenuPrincipal() {
    const secoes = [
        {
            titulo: "Essenciais",
            aberta: true,
            itens: [
                {icone: <IconNumbers/>, titulo: "Contador", tag: "useState", url: "/essenciais/contador"},
                {icone: <IconUsers/>, titulo: "Votação", tag: "useState", url: "/essenciais/votacao"},
                {icone: <IconArrowsLeftRight/>, titulo: "Imagem", tag: "useEffect", url: "/essenciais/imagem"},
                {icone: <IconMathGreater/>, titulo: "Maior", tag: "useEffect", url: "/essenciais/maior"},
                {icone: <IconRefreshAlert/>, titulo: "State vs Ref", tag: "useRef", url: "/essenciais/stateVsRef"},
                {icone: <IconLetterCase/>, titulo: "Contagem de Caracteres", tag: "useRef", url: "/essenciais/contagemCaracteres"},

            ],
        },
    ];
    const mini = false;

    function renderizarSecoes() {
        return secoes.map((secao: MenuSecao) => (
            <MenuPrincipalSecao key={secao.titulo} titulo={secao.titulo} mini={mini} aberta={secao.aberta}>
                {renderizarItens(secao)}
            </MenuPrincipalSecao>
        ));
    }

    function renderizarItens(secao: MenuSecao) {
        return secao.itens.map((item: MenuItem) => (
            <MenuPrincipalItem
                key={`${item.titulo}-${item.tag}`}
                icone={item.icone}
                titulo={item.titulo}
                tag={item.tag}
                url={item.url}
                mini={mini}
            />
        ));
    }

    return (
        <aside
            className={`
            flex flex-col overflow-y-scroll overflow-x-hidden
            bg-black shadow-md shadow-zinc-800
            scrollbar-thumb-zinc-700 scrollbar-track-zinc-800 
            scrollbar-thin
            ${mini ? "items-center w-[130px]" : "w-[370px]"}
        `}
        >
            <Flex center className="m-7">
                {!mini && <Logo/>}
            </Flex>
            <nav className="flex flex-col gap-4 m-7">{renderizarSecoes()}</nav>
        </aside>
    );
}
