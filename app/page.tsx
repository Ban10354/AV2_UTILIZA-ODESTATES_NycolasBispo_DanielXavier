"use client";
import { useState } from "react";

export default function Home() {
  return (
    <main>
      <h1>
        <strong>BOM DIA VELHA</strong>
      </h1>
      <DadoBotao />
      <ImagemDiv />
    </main>
  );
}

function DadoBotao() {
  const [resultado, setResultado] = useState(0);
  const [corOriginal, setCorOriginal] = useState(true);
  const [corDiv, setCorDiv] = useState("blue");
  const [corTexto, setCorTexto] = useState("texto-azul");
  const [tamanho, setTamanho] = useState({ largura: "100%", altura: "75%" });
  const [alinhamento, setAlinhamento] = useState("left");
  const [imagem, setImagem] = useState(
    "https://swiftbr.vteximg.com.br/arquivos/ids/198866-636-636/617687_COXINHA-DE-COSTELA-COM-MANDIOCA-CROCANTE-SWIFT-300G_INNATURA_0326_QUADRADO_1000x1000pixels.jpg?v=638519183724530000"
  );

  const youtubeLinks = [
    "https://youtu.be/KMyicJ3fXG0?si=lZrq3jGf6dMrUvv_",
    "https://youtu.be/fvCa57IXVsU?si=l8u3lbuDPsJnD-2c",
    "https://youtu.be/HlIZcncapLo?si=2iGkdVD8eBHg7ZR9",
  ];

  function rolarDadoEMudarCor() {
    const rolagem = Math.floor(Math.random() * 10 + 1);
    setResultado(rolagem);
    const linkAleatorio =
      youtubeLinks[Math.floor(Math.random() * youtubeLinks.length)];
    setImagem(linkAleatorio);

    if (corOriginal) {
      document.body.style.backgroundColor = "red";
      setCorDiv("blue");
      setCorTexto("texto-branco");
      setAlinhamento("center");
    } else {
      document.body.style.backgroundColor = "green";
      setCorDiv("white");
      setCorTexto("texto-azul");
      setAlinhamento("left");
    }
    setCorOriginal(!corOriginal);
    const novaTamanho =
      tamanho.largura === "100%"
        ? { largura: "50%", altura: "50%" }
        : { largura: "100%", altura: "75%" };
    setTamanho(novaTamanho);
  }

  return (
    <div className={corTexto} style={{ textAlign: alinhamento }}>
      <button onClick={rolarDadoEMudarCor}>Mudar</button>
      <p>O resultado foi: {resultado}</p>
      <MinhaDIV l={tamanho.largura} a={tamanho.altura} cor={corDiv} />
      <ImagemDiv imagem={imagem} />
    </div>
  );
}

function MinhaDIV({ l, a, cor }) {
  return (
    <div
      style={{
        width: l,
        height: a,
        backgroundColor: cor,
      }}
    ></div>
  );
}

function ImagemDiv({ imagem }) {
  return (
    <div
      style={{
        width: "50%",
        height: "50%",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
      }}
    >
      <a href={imagem} target="_blank" rel="noopener noreferrer">
        <img
          src={imagem}
          alt="Imagem"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </a>
    </div>
  );
}
