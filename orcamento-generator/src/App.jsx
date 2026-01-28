import React from "react";
import Documento from "./components/Documento";
import { PDFViewer } from "@react-pdf/renderer";
import { useState, useEffect } from "react";
import "./App.css";

import imgOrcamento from "../public/img/icon-orcamento.png";

const App = () => {
  const [showOrcamento, setShowOrcamento] = useState(false);

  const [servico, setServico] = useState("");
  const [nomeCliente, setNomeCliente] = useState("");
  const [areaConcretada, setAreaConcretada] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [preco, setPreco] = useState(0);
  const [maoDeObra, setMaoDeObra] = useState([]);
  const [materiais, setMateriais] = useState([]);

  const [opcoes, setOpcoes] = useState(["Sim", "Não"]);

  const [temArea, setTemArea] = useState(opcoes[1]);
  const [temMaoDeObra, setTemMaoDeObra] = useState(opcoes[1]);
  const [temMateriais, setTemMateriais] = useState(opcoes[1]);

  useEffect(() => {
    console.log("Tem area ", temArea);
    console.log("Tem M.O ", temMaoDeObra);
    console.log("Tem materiais ", temMateriais);
  }, [temArea, temMaoDeObra, temMateriais]);

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center min-vh-100 p-2"
      id="main"
    >
      <div className="card p-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 mb-4">
              <div className="d-flex justify-content-center">
                <form
                  className="w-100"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setShowOrcamento(true);
                  }}
                >
                  <div className="mb-3">
                    <div className="row d-flex align-items-end">
                      <div className="col-12 col-sm-6">
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
                      <div className="col-12 col-sm-6">
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
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="row">
                      <div className="col-12 col-sm-6">
                        <label>Tem área a ser concretada?</label>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="input-area"
                            id="comArea"
                            value={opcoes[0]}
                            checked={temArea === opcoes[0]}
                            onChange={(e) => {
                              setTemArea(e.target.value);
                            }}
                          />
                          <label className="form-check-label" htmlFor="comArea">
                            {opcoes[0]}
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="input-area"
                            id="semArea"
                            value={opcoes[1]}
                            checked={temArea === opcoes[1]}
                            onChange={(e) => {
                              setTemArea(e.target.value);
                            }}
                          />
                          <label className="form-check-label" htmlFor="semArea">
                            {opcoes[1]}
                          </label>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div>
                          <label
                            htmlFor="area-concretada"
                            className="form-label"
                          >
                            Área a ser concretada
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="area-concretada"
                            onChange={(e) => setAreaConcretada(e.target.value)}
                            value={areaConcretada}
                            required={temArea === opcoes[0]}
                            disabled={temArea === opcoes[1]}
                          ></input>
                        </div>
                      </div>
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
                        value={opcoes[0]}
                        checked={temMaoDeObra === opcoes[0]}
                        onChange={(e) => {
                          setTemMaoDeObra(e.target.value);
                        }}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="comMaoDeObra"
                      >
                        {opcoes[0]}
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="input-mao-de-obra"
                        id="semMaoDeObra"
                        value={opcoes[1]}
                        checked={temMaoDeObra === opcoes[1]}
                        onChange={(e) => {
                          setTemMaoDeObra(e.target.value);
                        }}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="semMaoDeObra"
                      >
                        {opcoes[1]}
                      </label>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="">Itens da mão de obra</label>

                    <div className="input-group ">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Lançar concreto e polir"
                        aria-label="Recipient’s username"
                        aria-describedby="button-addon2"
                        disabled={temMaoDeObra === opcoes[1]}
                      />
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2"
                        disabled={temMaoDeObra === opcoes[1]}
                      >
                        Adicionar
                      </button>
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
                        value={opcoes[0]}
                        checked={temMateriais === opcoes[0]}
                        onChange={(e) => {
                          setTemMateriais(e.target.value);
                        }}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="comMateriais"
                      >
                        {opcoes[0]}
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="input-materiais"
                        id="semMateriais"
                        value={opcoes[1]}
                        checked={temMateriais === opcoes[1]}
                        onChange={(e) => {
                          setTemMateriais(e.target.value);
                        }}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="semMateriais"
                      >
                        {opcoes[1]}
                      </label>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="">Materiais a serem utilizados</label>

                    <div className="input-group ">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Concreto 30 MPA"
                        aria-label="Recipient’s username"
                        aria-describedby="button-addon2"
                        disabled={temMateriais === opcoes[1]}
                      />
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2"
                        disabled={temMateriais === opcoes[1]}
                      >
                        Adicionar
                      </button>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="row">
                      <div className="col-12 col-sm-6">
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
                      <div className="col-12 col-sm-6">
                        <label htmlFor="responsavel" className="form-label">
                          Responsável
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
                    </div>
                  </div>

                  <button className="btn btn-primary w-100" type="submit">
                    Criar orçamento
                  </button>
                </form>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="d-flex justify-content-center align-items-center h-100">
                {showOrcamento ? (
                  <div className="d-flex justify-content-center h-100 w-100">
                    <PDFViewer className="w-100 h-100">
                      <Documento
                        nomeCliente={nomeCliente}
                        areaConcretada={areaConcretada}
                        servico={servico}
                        preco={preco}
                        responsavel={responsavel}
                      ></Documento>
                    </PDFViewer>
                  </div>
                ) : (
                  <div className="d-flex justify-content-center flex-column align-items-center gap-2">
                    <img
                      src={imgOrcamento}
                      alt="icon-orcamento"
                      className="img-orcamento"
                    />
                    <span className="fw-light fs-4 text-center">
                      O orçamento aparecerá aqui!
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
