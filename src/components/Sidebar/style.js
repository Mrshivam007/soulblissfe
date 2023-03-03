import styled from "styled-components";

const StyledSidebar = styled.section`
display: flex;
  flex-direction: column;
  .sidebar {
    background: #000;
    color: #fff;
    height: 100vh;
    width: 200px;
    transition: all 0.5s;
    .top_section {
      display: flex !important;
      align-items: center;
      padding: 20px 15px;
    }
  }

  .logo {
    fontsize: 30px;
  }
  .bars {
    display: flex;
    fontsize: 25px;
    marginleft: 50px;
  }
  .link {
    display: flex;
    color: #fff;
    padding: 10px 15px;
    gap: 15px;
    transition: all 0.5s;
  }
  .link:hover {
    background: lightskyblue;
    color: #000;
    transition: all 0.5s;
  }
  .active {
    background: lightskyblue;
    color: #000;
  }
  .icon .link_text {
    fontsize: 20px;
  }
  
`;

export { StyledSidebar };
