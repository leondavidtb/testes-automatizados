import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import App, { calcularNovoSaldo } from "./App";

describe("Componente principal", () => {
  describe("Quando abro o app", () => {
    it("Nome do banco é exibido", () => {
      render(<App />);
      expect(screen.getByText("ByteBank")).toBeInTheDocument();
    });

    it("Saldo é exibido", () => {
      render(<App />);
      expect(screen.getByText("Saldo:")).toBeInTheDocument();
    });

    it("Botão de transação é exibido", () => {
      render(<App />);
      expect(screen.getByText("Realizar operação")).toBeInTheDocument();
    });
  });

  describe("Quando realizo uma transação", () => {
    it("do tipo saque, o valor diminui", () => {
      const valores = {
        transacao: "saque",
        valor: 50,
      };
      const novoSaldo = calcularNovoSaldo(valores, 150);
      expect(novoSaldo).toBe(100);
    });

    it("do tipo deposito, o valor aumenta", () => {
      const valores = {
        transacao: "deposito",
        valor: 50,
      };
      const novoSaldo = calcularNovoSaldo(valores, 50);
      expect(novoSaldo).toBe(100);
    });

    it("Do tipo saque, a transação deve ser realizada", () => {
      render(<App />);

      const saldo = screen.getByText("R$ 1000");
      const transacao = screen.getByLabelText("Saque");
      const valor = screen.getByTestId("valor");
      const botaoTransacao = screen.getByText("Realizar operação");

      expect(saldo.textContent).toBe("R$ 1000");

      fireEvent.click(transacao, { targe: { value: "saque" } });
      fireEvent.change(valor, { target: { value: 10 } });
      fireEvent.click(botaoTransacao);

      expect(saldo.textContent).toBe("R$ 990");
    });
  });
});
