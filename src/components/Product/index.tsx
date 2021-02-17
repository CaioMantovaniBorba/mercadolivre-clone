import React from "react";

import tshirtImage from "../../assets/tshirt.png";
import ProductAction from "../ProductAction";
import SellerInfo from "../SellerInfo";

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="/">Compartilhar</a>
        <a href="/">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="T-Shirt" src={tshirtImage} />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra Garantida com o Lorem Ipsum</p>
        <p className="description">
          Receba o produto que está esperando ou devolvemos seu dinheiro
        </p>
      </span>

      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">sem garantia</p>
      </span>
    </div>

    <a href="/">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac mi vel
      urna ornare bibendum. Donec interdum lacus vitae sem suscipit mattis.
      Nullam eros ligula, sodales sit amet tortor at, ullamcorper interdum ex.
      Aliquam tincidunt tortor non sem aliquet hendrerit. In ante risus,
      efficitur luctus risus sit amet, dignissim pellentesque nulla.
      Pellentesque lobortis mauris convallis sem dictum, quis ornare elit porta.
      Morbi ac convallis massa. Donec iaculis facilisis quam nec cursus. Morbi
      eu erat ornare, finibus diam vitae, rhoncus turpis. Aliquam non volutpat
      quam, vel pellentesque magna. Donec aliquam, sem a varius pharetra, felis
      leo gravida neque, sed ultrices diam eros vitae arcu. Sed auctor dignissim
      tellus, ac accumsan mi accumsan eget. Donec efficitur at diam quis
      posuere. Nam eu leo nec nulla porttitor mollis.
      <br />
      <br />
      Itens inclusos: <br />- 1x camiseta
    </p>
  </Description>
);

export default Product;
