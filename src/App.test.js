import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("Componente principal", () => {
    describe("Quando abro o app", ()=>{
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
    })
  
});
