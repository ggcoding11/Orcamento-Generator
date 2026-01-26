import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

import PTSerif from "../fonts/PTSerif-Regular.ttf";

Font.register({ family: "PT-Serif", src: PTSerif });

const styles = StyleSheet.create({
  page: { fontFamily: "PT-Serif"},
  title: { textDecoration: "underline"},
});

const Documento = () => {
  return (
    <Document>
      <Page style={styles.page}>
        <View>
          <Text style={styles.title}>GV PISOS - PISOS INDUSTRIAIS</Text>

          <Text>MARINGÁ, 09 DE JANEIRO DE 2025</Text>

          <Text>ORÇAMENTO DE PISO INDUSTRIAL</Text>

          <Text>ATT: GUSTAVO</Text>

          <Text>ÁREA A SER CONCRETADA: 200 m²</Text>

          <Text>MATERIAIS A SEREM CONCRETADOS: </Text>

          <Text>MÃO DE OBRA: R$ 16,00 m²</Text>
        </View>
      </Page>
    </Document>
  );
};

export default Documento;
