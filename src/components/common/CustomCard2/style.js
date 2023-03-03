import styled from "styled-components";

const StyledCard = styled.section`
  display: flex;
  flex-direction: column;
  .cardcontainer {
    border-radius: 15px 15px 0px 0px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .commonbtn {
    border-radius: 4px;
    background: #9d78bd;
    color: #fff;
    width: 60px;
    padding: 3px 0px;
    font-weight: 400;
    font-size: 12px;
    text-transform: capitalize;
    white-space: nowrap;
    &:hover {
      background-color: #9d78bd !important;
    }
    ${({ btntext }) =>
      btntext === "Attend Now"
        ? `width: 80px`
        : `width:60px`}
  }
  .livebtn {
    position: absolute;
    top: 20px;
    left: 17px;
    background-color: #d62828;
    color: white;
    padding: 2px 0px;
    text-transform: capitalize;
    &:hover {
      background-color: #d62828 !important;
    }
  }
`;

export { StyledCard };
