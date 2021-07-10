import React from "react";

import { formatPrice } from "../../utils/formatPrice";

import { useSelector } from "react-redux";

import {
  CardContainer,
  CardSummaryStyled,
  CardSummaryContent,
  UlCard,
  LiCard,
  RowCard,
  TotalCard,
  Botoncito,
} from "./CardSummaryStyles";
import Spinner from "../Spinner/Spinner";

function CardSummary({ isValid, envio, subTotal }) {
  const { loading } = useSelector((state) => state.orders);

  return (
    <CardContainer>
      <CardSummaryStyled>
        <CardSummaryContent>
          {loading ? (
            <Spinner />
          ) : (
            <>
              <UlCard>
                <LiCard>
                  <p>Costo de Productos</p>
                  <span>{formatPrice(subTotal)}</span>
                </LiCard>
                <LiCard>
                  <p>Costo de Envío</p>
                  <span>{formatPrice(envio)}</span>
                </LiCard>
              </UlCard>
              <RowCard />
              <TotalCard>
                <h4>Total:</h4>
                <h4>{formatPrice(envio + subTotal)}</h4>
              </TotalCard>
              <Botoncito w="100%" m="10px" disabled={isValid}>
                Pagar
              </Botoncito>
            </>
          )}
        </CardSummaryContent>
      </CardSummaryStyled>
    </CardContainer>
  );
}

export default CardSummary;