import React from "react";
import { Botoncito } from "../CardSummary/CardSummaryStyles";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";

import { formatPrice } from "../../utils/formatPrice";

import {
  HeaderResume,
  ProductResume,
  ProductUl,
  ProductLi,
  ItemImg,
  InfoProducts,
  PriceResume,
  Quantity,
  CostResume,
  CostLi,
  OrderHistory,
  Container,
  TitleContainerStyled,
  VolverButtonStyled,
  StatusContainerStyled,
  Status,
} from "./OrderResumeStyles";

function OrderResume() {
  let { orders } = useSelector((state) => state.orders);
  let { manuelitaviviaenpehuajo } = useParams();

  console.log(manuelitaviviaenpehuajo);

  let [order] = orders.filter((order) => order.id === manuelitaviviaenpehuajo);

  console.log({ order });
  return (
    <Container>
      <OrderHistory>
        <HeaderResume>
          <VolverButtonStyled to="/mis-ordenes">
            <Botoncito w="60px">Volver</Botoncito>
          </VolverButtonStyled>
          <TitleContainerStyled>
            <h3>Resumen</h3>
            <p>Orden: {manuelitaviviaenpehuajo}</p>
          </TitleContainerStyled>
          <StatusContainerStyled>
            <Status type={order.status}>{order.status}</Status>
          </StatusContainerStyled>
        </HeaderResume>

        <ProductResume>
          <h3>Productos</h3>
          <ProductUl>
            {order.items.map((item) => {
              return (
                <ProductLi>
                  <ItemImg img={item.img} />
                  <InfoProducts>
                    <p>
                      {item.name} - {item.description}
                    </p>
                  </InfoProducts>

                  <PriceResume>
                    <Quantity>{item.quantity}un.</Quantity>
                    <strong>${item.price}</strong>
                  </PriceResume>
                </ProductLi>
              );
            })}
          </ProductUl>
        </ProductResume>
        <CostResume>
          <h3>Costos</h3>
          <ProductUl>
            <CostLi>
              <span>Costo de los productos</span>
              <span>${order.subTotal}</span>
            </CostLi>
            <CostLi>
              <span>Costo de envío</span>
              <span>${order.shippingPrice}</span>
            </CostLi>
            <CostLi>
              <span>
                <strong>Total</strong>
              </span>

              <span>
                <strong>{formatPrice(order.total)}</strong>
              </span>
            </CostLi>
          </ProductUl>
        </CostResume>
      </OrderHistory>
    </Container>
  );
}

export default OrderResume;
