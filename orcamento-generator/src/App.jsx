import React from "react";
import Documento from "./components/Documento";
import { PDFViewer } from "@react-pdf/renderer";
import { useState } from "react";

const App = () => {
  const [showOrcamento, setShowOrcamento] = useState(false);

  const [servico, setServico] = useState("");
  const [nomeCliente, setNomeCliente] = useState("");
  const [areaConcretada, setAreaConcretada] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [preco, setPreco] = useState(0);
  const [maoDeObra, setMaoDeObra] = useState([]);
  const [materiais, setMateriais] = useState([]);

  const [temArea, setTemArea] = useState(false);
  const [temMaoDeObra, setTemMaoDeObra] = useState(false);
  const [temMateriais, setTemMateriais] = useState(false);

  return (
    <div id="main">
      <div className="container vh-100">
        <div className="d-flex justify-content-center mt-2 mb-4">
          <form
            className="w-100"
            onSubmit={(e) => {
              e.preventDefault();
              setShowOrcamento(true);
            }}
          >
            <div className="mb-3">
              <label htmlFor="servico" className="form-label">
                Descrição do orçamento
              </label>
              <input
                type="text"
                className="form-control"
                id="servico"
                onChange={(e) => setServico(e.target.value)}
                value={servico}
                required
              ></input>
            </div>

            <div className="mb-3">
              <label htmlFor="nome-att" className="form-label">
                Nome do cliente
              </label>
              <input
                type="text"
                className="form-control"
                id="nome-att"
                onChange={(e) => setNomeCliente(e.target.value)}
                value={nomeCliente}
                required
              ></input>
            </div>

            <div className="mb-3">
              <label>Tem área a ser concretada?</label>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="input-area"
                  id="comArea"
                />
                <label className="form-check-label" htmlFor="comArea">
                  Sim
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="input-area"
                  id="semArea"
                />
                <label className="form-check-label" htmlFor="semArea">
                  Não
                </label>
              </div>
            </div>

            <div className="mb-3">
              <label>Tem mão de obra?</label>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="input-mao-de-obra"
                  id="comMaoDeObra"
                />
                <label className="form-check-label" htmlFor="comMaoDeObra">
                  Sim
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="input-mao-de-obra"
                  id="semMaoDeObra"
                />
                <label className="form-check-label" htmlFor="semMaoDeObra">
                  Não
                </label>
              </div>
            </div>

            <div className="mb-3">
              <label>Tem materiais?</label>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="input-materiais"
                  id="comMateriais"
                />
                <label className="form-check-label" htmlFor="comMateriais">
                  Sim
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="input-materiais"
                  id="semMateriais"
                />
                <label className="form-check-label" htmlFor="semMateriais">
                  Não
                </label>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="area-concretada" className="form-label">
                Área a ser concretada
              </label>
              <input
                type="number"
                className="form-control"
                id="area-concretada"
                onChange={(e) => setAreaConcretada(e.target.value)}
                value={areaConcretada}
                required
              ></input>
            </div>

            <div className="mb-3">
              <label htmlFor="preco-m2" className="form-label">
                Preço por m²
              </label>
              <input
                type="number"
                className="form-control"
                id="preco-m2"
                onChange={(e) => setPreco(e.target.value)}
                value={preco}
                required
              ></input>
            </div>

            <div className="mb-3">
              <label htmlFor="responsavel" className="form-label">
                Responsavel
              </label>
              <input
                type="text"
                className="form-control"
                id="responsavel"
                onChange={(e) => setResponsavel(e.target.value)}
                value={responsavel}
                required
              ></input>
            </div>

            <button className="btn btn-primary w-100" type="submit">
              Criar orçamento
            </button>
          </form>
        </div>
        {showOrcamento && (
          <div className="d-flex justify-content-center h-75">
            <PDFViewer className="w-50">
              <Documento
                nomeCliente={nomeCliente}
                areaConcretada={areaConcretada}
                servico={servico}
                preco={preco}
                responsavel={responsavel}
              ></Documento>
            </PDFViewer>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
