import React, { RefObject } from "react";
import styled from "styled-components";
import { NextBtnIcon } from "./svgs/NextBtnIcon";

interface Props {
  onClick?: () => void;
  ref: RefObject<HTMLDivElement>;
}

const Nextbtn = ({ onClick, ref }: Props) => (
  <StyledWrapper ref={ref}>
    <div className="btn-conteiner" onClick={onClick}>
      <a href="#" className="btn-content">
        <span className="icon-arrow">
          <NextBtnIcon classname="" />
        </span>
      </a>
    </div>
  </StyledWrapper>
);

const StyledWrapper = styled.div`
  .btn-conteiner {
    display: flex;
    justify-content: center;
    --color-text: #9ee5fa;
    --color-background: #ffffff;
    --color-outline: #9ee5fa80;
    --color-shadow: #00000080;
  }

  .btn-content {
    display: flex;
    align-items: center;
    padding: 5px 24px 5px 14px;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-size: 45px;
    color: var(--color-text);
    background: var(--color-background);
    transition: 1s;
    border-radius: 100px;
    box-shadow: 0 0 0.2em 0 var(--color-background);
  }

  .btn-content:hover,
  .btn-content:focus {
    transition: 0.5s;
    -webkit-animation: btn-content 1s;
    animation: btn-content 1s;
    outline: 0.1em solid transparent;
    outline-offset: 0.2em;
    box-shadow: 0 0 0.4em 0 var(--color-background);
  }

  .btn-content .icon-arrow {
    transition: 0.5s;
    margin-right: 0px;
    transform: scale(0.6);
  }

  .btn-content:hover .icon-arrow {
    transition: 0.5s;
    margin-right: 25px;
  }

  .icon-arrow {
    width: 20px;
    margin-left: 15px;
    position: relative;
    top: 6%;
  }

  /* SVG */
  #arrow-icon-one {
    transition: 0.4s;
    transform: translateX(-60%);
  }

  #arrow-icon-two {
    transition: 0.5s;
    transform: translateX(-30%);
  }

  .btn-content:hover #arrow-icon-three {
    animation: color_anim 1s infinite 0.2s;
  }

  .btn-content:hover #arrow-icon-one {
    transform: translateX(0%);
    animation: color_anim 1s infinite 0.6s;
  }

  .btn-content:hover #arrow-icon-two {
    transform: translateX(0%);
    animation: color_anim 1s infinite 0.4s;
  }

  /* SVG animations */
  @keyframes color_anim {
    0% {
      fill: white;
    }

    50% {
      fill: var(--color-background);
    }

    100% {
      fill: #9ee5fa;
    }
  }

  /* Button animations */
  @-webkit-keyframes btn-content {
    0% {
      outline: 0.2em solid var(--color-background);
      outline-offset: 0;
    }
  }

  @keyframes btn-content {
    0% {
      outline: 0.2em solid var(--color-background);
      outline-offset: 0;
    }
  }
`;

export default Nextbtn;
