import styled from "styled-components";

const StyledFileUpload = styled.section`
  .bind {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
  }
  .buttonPadding {
    background: #e8ecf7;
    border: 5px dashed #8da0d8;
    border-radius: 20px;
    margin-top: 10px;
    position: relative;
  }
  .contentBind {
    display: flex;
    align-items: center;
    flex-direction:column;
  } 
  .choose {
    color: #fff;
    border-radius: 5px;
    font-size: 14px;   
    padding: 7px 8px;
    background-color: #9D78BD;
  }
 
`;

export { StyledFileUpload };
