import React from "react";
import { NumericFormat } from "react-number-format";
import Documento from "./components/Documento";
import { PDFViewer } from "@react-pdf/renderer";
import { useState, useEffect, useRef } from "react";
import "./App.css";

import imgOrcamento from "../public/img/icon-orcamento.png";

const App = () => {
  const [showOrcamento, setShowOrcamento] = useState(false);

  const [nomeCliente, setNomeCliente] = useState("");
  const [responsavel, setResponsavel] = useState("");

  const [servico, setServico] = useState("");
  const [areaConcretada, setAreaConcretada] = useState("");
  const [preco, setPreco] = useState("");
  const [maoDeObra, setMaoDeObra] = useState([]);
  const [materiais, setMateriais] = useState([]);

  const [orcamentos, setOrcamentos] = useState([]);

  const [itemMaoDeObra, setItemMaoDeObra] = useState("");
  const [itemMateriais, setItemMateriais] = useState("");

  const [opcoes, setOpcoes] = useState(["Sim", "Não"]);
  const [opcoesPreco, setOpcoesPreco] = useState(["Por m²", "Preço total"]);

  const [temArea, setTemArea] = useState(opcoes[1]);
  const [temMaoDeObra, setTemMaoDeObra] = useState(opcoes[1]);
  const [temMateriais, setTemMateriais] = useState(opcoes[1]);
  const [formatoPreco, setFormatoPreco] = useState(opcoesPreco[0]);

  const idItemMOAtual = useRef(0);
  const idItemMaterial = useRef(0);

  const deleteItemMO = (id) => {
    setMaoDeObra(maoDeObra.filter((item) => item.id != id));
  };

  const deleteItemMaterial = (id) => {
    setMateriais(materiais.filter((item) => item.id != id));
  };

  const adicionarOrcamento = () => {
    setOrcamentos([
      ...orcamentos,
      {
        servico,
        areaConcretada,
        preco,
        maoDeObra,
        materiais,
        temMaoDeObra,
        temArea,
        temMateriais,
        formatoPreco,
      },
    ]);

    setServico("");
    setAreaConcretada("");
    setPreco("");
    setMaoDeObra([]);
    setMateriais([]);
    setTemArea(opcoes[1]);
    setTemMaoDeObra(opcoes[1]);
    setTemMateriais(opcoes[1]);
    setFormatoPreco(opcoesPreco[0]);
  };

  const finalizarDocumento = () => {
    setShowOrcamento(true);
  };

  useEffect(() => {
    console.log("Tem area ", temArea);
    console.log("Tem M.O ", temMaoDeObra);
    console.log("Tem materiais ", temMateriais);
  }, [temArea, temMaoDeObra, temMateriais]);

  useEffect(() => {
    console.log(maoDeObra);
    console.log(materiais);
  }, [maoDeObra, materiais]);

  useEffect(() => {
    console.log(orcamentos);
  }, [orcamentos]);

  useEffect(() => {
    console.log(preco);
  }, [preco]);

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center min-vh-100"
      id="main"
    >
      <div className="row p-4 w-100">
        <div className="col-12 col-md-6 mb-4">
          <div className="d-flex justify-content-center">
            <form
              className="w-100"
              onSubmit={(e) => {
                e.preventDefault();
                adicionarOrcamento();
              }}
            >
              <div className="mb-3">
                <div className="row gy-3 d-flex align-items-end">
                  <div className="col-12 col-sm-6">
                    <label htmlFor="servico" className="form-label">
                      Descrição do orçamento
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="servico"
                      placeholder="Orçamento de piso industrial"
                      onChange={(e) => setServico(e.target.value)}
                      value={servico}
                      required
                    ></input>
                  </div>
                  <div className="col-12 col-sm-6">
                    <label htmlFor="nome-att" className="form-label">
                      Aos cuidados de...
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nome-att"
                      placeholder="Edson"
                      onChange={(e) => setNomeCliente(e.target.value)}
                      value={nomeCliente}
                      required
                    ></input>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label>Tem área a ser concretada?</label>

                {opcoes.map((opcao, index) => (
                  <div key={index} className="form-check">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="input-area"
                        value={opcao}
                        checked={temArea === opcao}
                        onChange={(e) => {
                          setTemArea(e.target.value);
                        }}
                      />
                      {opcao}
                    </label>
                  </div>
                ))}
              </div>

              {temArea === opcoes[0] && (
                <div className="mb-3">
                  <label htmlFor="area-concretada" className="form-label">
                    Área a ser concretada (em m²)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="area-concretada"
                    onChange={(e) => setAreaConcretada(e.target.value)}
                    value={areaConcretada}
                    required={temArea === opcoes[0]}
                  ></input>
                </div>
              )}

              <div className="mb-3">
                <label>Tem mão de obra?</label>

                {opcoes.map((opcao, index) => (
                  <div key={index} className="form-check">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="input-mao-de-obra"
                        value={opcao}
                        checked={temMaoDeObra === opcao}
                        onChange={(e) => {
                          setTemMaoDeObra(e.target.value);
                        }}
                      />
                      {opcao}
                    </label>
                  </div>
                ))}
              </div>

              {temMaoDeObra === opcoes[0] && (
                <div className="mb-3">
                  <div className="input-group ">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Lançar concreto e polir"
                      value={itemMaoDeObra}
                      onChange={(e) => setItemMaoDeObra(e.target.value)}
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() => {
                        setMaoDeObra([
                          ...maoDeObra,
                          {
                            id: idItemMOAtual.current++,
                            nome: itemMaoDeObra,
                          },
                        ]);
                        setItemMaoDeObra("");
                      }}
                    >
                      Adicionar
                    </button>
                  </div>

                  <div className="d-flex flex-wrap gap-2 mt-3">
                    {maoDeObra.map((item) => (
                      <div
                        key={item.id}
                        className="item-mao-de-obra d-flex bg-primary text-white p-2 rounded-3 gap-2"
                        onClick={() => deleteItemMO(item.id)}
                      >
                        <span className="">{item.nome}</span>
                        <i className="bi bi-x-lg"></i>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-3">
                <label>Tem materiais?</label>

                {opcoes.map((opcao, index) => (
                  <div key={index} className="form-check">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="input-materiais"
                        value={opcao}
                        checked={temMateriais === opcao}
                        onChange={(e) => {
                          setTemMateriais(e.target.value);
                        }}
                      />
                      {opcao}
                    </label>
                  </div>
                ))}
              </div>

              {temMateriais === opcoes[0] && (
                <div className="mb-3">
                  <label htmlFor="">Materiais a serem utilizados</label>

                  <div className="input-group ">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Concreto 30 MPA"
                      disabled={temMateriais === opcoes[1]}
                      value={itemMateriais}
                      onChange={(e) => setItemMateriais(e.target.value)}
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() => {
                        setMateriais([
                          ...materiais,
                          {
                            id: idItemMaterial.current++,
                            nome: itemMateriais,
                          },
                        ]);
                        setItemMateriais("");
                      }}
                    >
                      Adicionar
                    </button>
                  </div>

                  <div className="d-flex flex-wrap gap-2 mt-3">
                    {materiais.map((item) => (
                      <div
                        key={item.id}
                        className="item-material d-flex bg-primary text-white p-2 rounded-3 gap-2"
                        onClick={() => deleteItemMaterial(item.id)}
                      >
                        <span className="">{item.nome}</span>
                        <i className="bi bi-x-lg"></i>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-3">
                <label>Qual será o preço?</label>

                {opcoesPreco.map((opcao, index) => (
                  <div key={index} className="form-check">
                    <label>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="input-tipo-preco"
                        value={opcao}
                        checked={formatoPreco === opcao}
                        onChange={(e) => {
                          setFormatoPreco(e.target.value);
                        }}
                      />
                      {opcao}
                    </label>
                  </div>
                ))}
              </div>

              <div className="mb-3">
                <div className="row gy-3">
                  <div className="col-12 col-sm-6">
                    <label htmlFor="preco" className="form-label">
                      {formatoPreco === "Por m²"
                        ? "Preço por m²"
                        : "Preço total"}
                    </label>

                    <NumericFormat
                      className="form-control"
                      value={preco}
                      onValueChange={(value) => setPreco(value.formattedValue)}
                      allowNegative={false}
                      fixedDecimalScale={true}
                      decimalSeparator=","
                      decimalScale={2}
                      prefix={"R$ "}
                      placeholder="R$ 0,00"
                      required
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <label htmlFor="responsavel" className="form-label">
                      Responsável
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="responsavel"
                      placeholder="Gilmar"
                      onChange={(e) => setResponsavel(e.target.value)}
                      value={responsavel}
                      required
                    ></input>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-column gap-2">
                <button className="btn btn-primary w-100" type="submit">
                  Adicionar orçamento
                </button>

                {orcamentos.length > 0 && (
                  <button
                    className="btn btn-success w-100"
                    type="button"
                    onClick={finalizarDocumento}
                  >
                    Finalizar documento
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="d-flex justify-content-center align-items-center border border-1 rounded-2 bg-body-tertiary h-100 p-2">
            {showOrcamento ? (
              <PDFViewer className="w-100 h-100">
                <Documento
                  nomeCliente={nomeCliente}
                  responsavel={responsavel}
                  orcamentos={orcamentos}
                ></Documento>
              </PDFViewer>
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
  );
};

export default App;
