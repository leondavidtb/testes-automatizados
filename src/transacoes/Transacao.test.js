import React from "react";
import Transacao from "./Transacao";
import { render } from "@testing-library/react";

describe("Componente de transação do extrato", () => {
  it("O snapshot do componente deve permanecer sempre o mesmo", () => {
    const { container } = render(
      <Transacao data="01/09/2021" tipo="saque" valor="20.00" />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

});
