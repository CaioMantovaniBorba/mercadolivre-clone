import styled from "styled-components";
import {
  HiOutlineHeart,
  HiOutlineCheck,
  HiOutlineShieldCheck,
} from "react-icons/hi";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

export const Condition = styled.div`
  font-size: 14px;
  color: var(--gray);
  margin-bottom: 16px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;

  > h1 {
    width: 100%;
    font-size: 26px;
    font-weight: 600;
  }
`;

export const HeartIcon = styled(HiOutlineHeart)`
  height: 28px;
  width: 28px;
  color: var(--color-blue);
  margin-left: 16px;
  cursor: pointer;
  flex-shrink: 0;
`;

export const DispatchTag = styled.div`
  margin-top: 12px;
  background: var(--color-blue);
  color: var(--color-white);
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  width: fit-content;
`;

export const PriceCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 18px;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 44px;
  font-weight: 300;

  .fraction {
    margin-left: 8.8px;
  }

  .cents {
    font-size: 20px;
    padding-top: 3px;
    margin-left: 1px;
  }
`;

export const InstallmentsInfo = styled.div`
  font-size: 16px;
`;

export const StockStatus = styled.div`
  margin-top: 24px;
  font-size: 18px;
`;

export const MethodCard = styled.div`
  display: flex;
  margin-top: 18px;

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 8px;

    .title {
      color: var(--color-green);
      font-size: 16px;
    }

    .details {
      margin-top: 5px;
      color: var(--color-gray);
      font-size: 14px;
    }

    .more {
      margin-top: 5px;
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
      color: var(--color-blue);
    }
  }
`;

export const CheckIcon = styled(HiOutlineCheck)`
  height: 24px;
  width: 24px;
  color: var(--color-green);
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

type ButtonProps = { solid?: boolean };

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  border-radius: 4px;
  padding: 12px 10px;
  margin-top: 10px;
  cursor: pointer;
  color: ${(props) =>
    props.solid ? "var(--color-white)" : "var(--color-blue)"};
  background: ${(props) => (props.solid ? "var(--color-blue)" : "transparent")};
  border: ${(props) => (props.solid ? "none" : "1px solid var(--color-blue)")};
`;

export const Benefits = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  list-style: none;

  > li {
    display: flex;

    p {
      margin-left: 10px;
      color: var(--color-gray);
      font-size: 14px;
    }
  }
`;

export const ShieldIcon = styled(HiOutlineShieldCheck)`
  height: 20px;
  width: 20px;
  color: var(--color-gray);
  flex-shrink: 0;
`;
