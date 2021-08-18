import React from "react";

import { Botoncito } from "../CardSummary/CardSummaryStyles";

import { formatDate } from "../../utils/formatDate";
import { formatPrice } from "../../utils/formatPrice";

import { Link, useRouteMatch } from "react-router-dom";

import {
  Container,
  OrderHistory,
  Wrapper,
  OrderTitle,
  OrderContent,
  OrderDetails,
  OrderUl,
  OrderLi,
  OrderSpan,
  Flex,
  Status,
  StatusContainerStyled,
} from "./MyOrdersStyles";

function MyOrders({orders}) {
  let { url } = useRouteMatch();
    return (
      <Container>
      <OrderHistory>
        <Wrapper>
          <OrderTitle>
            <h2>Mis últimos pedidos!</h2>
            <p>
              Hacele un seguimiento a los pedidos que hiciste 
            </p>
          </OrderTitle>

          <div>
            {orders.map((order) => (
              <OrderContent>
                <OrderDetails>
                  <OrderUl>
                    <OrderLi>
                      <OrderSpan>Fecha:</OrderSpan>
                      {formatDate(order.createdAt.seconds)}
                    </OrderLi>
                    <OrderLi>
                      <OrderSpan>Total:</OrderSpan>
                      {formatPrice(order.total)}
                    </OrderLi>
                  </OrderUl>
                  <StatusContainerStyled>
                    <Status type={order.status}>{order.status}</Status>
                  </StatusContainerStyled>
                  <Flex>
                    <Link to={`${url}/${order.id}`}>
                      <Botoncito w="150px" m="0">
                        Ver resumen
                      </Botoncito>
                    </Link>
                  </Flex>
                </OrderDetails>
              </OrderContent>
            ))}
          </div>
        </Wrapper>
      </OrderHistory>
    </Container>
    )
}

export default MyOrders
