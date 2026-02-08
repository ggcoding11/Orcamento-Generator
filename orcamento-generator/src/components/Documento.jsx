import React from "react";
import { useRef, useState, useEffect } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";

import PTSerif from "../fonts/PTSerif-Regular.ttf";
import PTSerifBold from "../fonts/PTSerif-Bold.ttf";
import imgAlisadora from "../../public/img/alisadora.jpg";

Font.register({ family: "PT-Serif", src: PTSerif, fontWeight: "normal" });
Font.register({
  family: "PT-Serif-Bold",
  src: PTSerifBold,
  fontWeight: "bold",
});

const styles = StyleSheet.create({
  page: {
    fontFamily: "PT-Serif-Bold",
    padding: 40,
    fontSize: "13px",
    textTransform: "uppercase",
    position: "relative",
  },

  title: { fontSize: "30px" },

  subtitle: {
    textDecoration: "underline",
    fontSize: "22px",
  },

  telefone: {
    color: "red",
    fontSize: "12px",
    marginTop: 6,
  },

  servico: {
    width: "300px",
  },

  texto: {
    paddingTop: 10,
    paddingBottom: 10,
  },

  textoNormal: {
    fontFamily: "PT-Serif",
  },

  preco: {
    backgroundColor: "yellow",
    width: "200px",
  },

  orcamento: {
    paddingBottom: 10,
  },

  imagem: {
    width: 180,
    height: 150,
    position: "absolute",
    bottom: 560,
    left: 360,
  },

  rodape: {
    marginRight: 100,
    marginBottom: 10,
  },

  assinatura: {
    textAlign: "center",
  },
});

const Documento = ({ nomeCliente, responsavel, orcamentos }) => {
  const [dataHoje, setDataHoje] = useState(new Date(Date.now()));

  const [diaHoje, setDiaHoje] = useState(0);
  const [mesExtenso, setMesExtenso] = useState("");
  const [anoAtual, setAnoAtual] = useState(0);

  useEffect(() => {
    setDiaHoje(dataHoje.getDate());

    switch (dataHoje.getMonth()) {
      case 0:
        setMesExtenso("JANEIRO");
        break;
      case 1:
        setMesExtenso("FEVEREIRO");
        break;
      case 2:
        setMesExtenso("MARÇO");
        break;
      case 3:
        setMesExtenso("ABRIL");
        break;
      case 4:
        setMesExtenso("MAIO");
        break;
      case 5:
        setMesExtenso("JUNHO");
        break;
      case 6:
        setMesExtenso("JULHO");
        break;
      case 7:
        setMesExtenso("AGOSTO");
        break;
      case 8:
        setMesExtenso("SETEMBRO");
        break;
      case 9:
        setMesExtenso("OUTUBRO");
        break;
      case 10:
        setMesExtenso("NOVEMBRO");
        break;
      case 11:
        setMesExtenso("DEZEMBRO");
        break;
    }

    setAnoAtual(dataHoje.getFullYear());
  }, [dataHoje]);

  return (
    <Document>
      <Page style={styles.page}>
        <View>
          <Text style={styles.title}>GV PISOS - PISOS INDUSTRIAIS</Text>

          <Text style={styles.subtitle}>A ESPECIALIZADA A MAIS DE 25 ANOS</Text>

          <Text style={styles.telefone}>(44) 99973-7827 / (44) 99973-7837</Text>

          <Text style={styles.texto}>
            MARINGÁ, {diaHoje} DE {mesExtenso} DE {anoAtual}
          </Text>

          <Text style={styles.texto}>ATT: {nomeCliente}</Text>
        </View>

        {orcamentos.map((orcamento) => (
          <View style={styles.orcamento}>
            <Text style={[styles.texto, styles.servico]}>
              {orcamento.servico}
            </Text>

            {orcamento.temArea === "Sim" && (
              <Text style={styles.texto}>
                ÁREA A SER CONCRETADA: {orcamento.areaConcretada} m²
              </Text>
            )}

            {orcamento.temMaoDeObra === "Sim" && (
              <View>
                <Text style={styles.texto}>MÃO DE OBRA:</Text>

                {orcamento.maoDeObra.map((item) => (
                  <Text style={styles.textoNormal}>
                    - {item.nome.toUpperCase()}
                  </Text>
                ))}
              </View>
            )}

            {orcamento.temMateriais === "Sim" && (
              <View>
                <Text style={styles.texto}>MATERIAIS A SEREM UTILIZADOS:</Text>

                {orcamento.materiais.map((item) => (
                  <Text style={styles.textoNormal}>
                    - {item.nome.toUpperCase()}
                  </Text>
                ))}
              </View>
            )}

            {orcamento.infoAdicionais.length > 0 && (
              <View>
                <Text style={styles.texto}>{orcamento.infoAdicionais}</Text>
              </View>
            )}

            <View style={styles.texto}>
              <Text style={styles.preco}>
                {orcamento.formatoPreco === "Por m²"
                  ? "PREÇO POR M²"
                  : "PREÇO TOTAL"}
                : {orcamento.preco}
              </Text>
            </View>
          </View>
        ))}

        <View>
          <Text style={[styles.rodape, styles.texto]}>
            A ESPECIALIZADA EM PISOS INDUSTRIAIS A MAIS DE 25 ANOS NO MERCADO
            ATENDENDO MARINGÁ E REGIÃO.
          </Text>

          <Text style={styles.assinatura}>{responsavel}</Text>
          <Text style={styles.assinatura}>GV PISOS INDUSTRIAIS</Text>
        </View>

        <View style={styles.imagem}>
          <Image src={imgAlisadora} />
        </View>
      </Page>
    </Document>
  );
};

export default Documento;
