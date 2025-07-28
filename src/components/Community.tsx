"use client";
import React from "react";
import styled from "styled-components";
import { BranchIcon } from "./svgs/BranchIcon";
import { DiscordIcon } from "./svgs/DiscordIcon";
import { XIcon } from "./svgs/XIcon";
import { RedditIcon } from "./svgs/RedditIcon";
import { LightIcon } from "./svgs/LightIcon";
import { ThreadIcon } from "./svgs/Threads";
import { InstaIcon } from "./svgs/InstaIcon";
import { SnapIcon } from "./svgs/SnapIcon";
import { WhatsappIcon } from "./svgs/WhatsappIcon";

const Community = () => (
  <StyledWrapper>
    <div className="buttons text-primary">
      <button className="main-button">
        <BranchIcon classname="" />
      </button>
      <button
        className="discord-button button"
        style={{
          transitionDelay: "0s, 0s, 0s",
          transitionProperty: "translate, background, box-shadow",
        }}
      >
        <DiscordIcon classname="" />
      </button>
      <button
        className="twitter-button button"
        style={{
          transitionDelay: "0.1s, 0s, 0.1s",
          transitionProperty: "translate, background, box-shadow",
        }}
      >
        <XIcon classname="" />
      </button>
      <button
        className="reddit-button button"
        style={{
          transitionDelay: "0.2s, 0s, 0.2s",
          transitionProperty: "translate, background, box-shadow",
        }}
      >
        <RedditIcon classname="" />
      </button>
      <button
        className="messenger-button button"
        style={{
          transitionDelay: "0.3s, 0s, 0.3s",
          transitionProperty: "translate, background, box-shadow",
        }}
      >
        <LightIcon classname="" />
      </button>
      <button
        className="pinterest-button button"
        style={{
          transitionDelay: "0.4s, 0s, 0.4s",
          transitionProperty: "translate, background, box-shadow",
        }}
      >
        <ThreadIcon classname="" />
      </button>
      <button
        className="instagram-button button"
        style={{
          transitionDelay: "0.5s, 0s, 0.5s",
          transitionProperty: "translate, background, box-shadow",
        }}
      >
        <InstaIcon classname="" />
      </button>
      <button
        className="snapchat-button button"
        style={{
          transitionDelay: "0.6s, 0s, 0.6s",
          transitionProperty: "translate, background, box-shadow",
        }}
      >
        <SnapIcon classname="" />
      </button>
      <button
        className="whatsapp-button button"
        style={{
          transitionDelay: "0.7s, 0s, 0.7s",
          transitionProperty: "translate, background, box-shadow",
        }}
      >
        <WhatsappIcon classname="" />
      </button>
    </div>
  </StyledWrapper>
);

const StyledWrapper = styled.div`
  /* Cool share button made by: csozi | Website: english.csozi.hu*/

  .buttons {
    position: relative;
    display: grid;
    place-items: center;
    height: fit-content;
    width: fit-content;
    transition: 0.3s;
    border-radius: 50%;
  }

  .buttons:hover {
    padding: 60px;
  }

  .buttons:hover .button {
    box-shadow: 2px 2px 6px #cacaca, -2px -2px 6px #ffffff;
  }

  .main-button {
    position: relative;
    display: grid;
    place-items: center;
    padding: 10px;
    border: none;
    background: #e8e8e8;
    box-shadow: 2px 2px 6px #cacaca, -2px -2px 6px #ffffff;
    border-radius: 50%;
    transition: 0.2s;
    z-index: 100;
  }

  .button {
    position: absolute;
    display: grid;
    place-items: center;
    padding: 10px;
    border: none;
    background: #e8e8e8;
    box-shadow: 2px 2px 6px rgba(202, 202, 202, 0),
      -2px -2px 6px rgba(255, 255, 255, 0);
    transition: 0.3s;
    border-radius: 50%;
  }

  .discord-button:hover {
    background: #5865f2;
  }

  .buttons:hover .discord-button {
    translate: 70px 0px;
    box-shadow: 2px 2px 6px #cacaca, -2px -2px 6px #ffffff;
  }

  .twitter-button:hover {
    background: #1ca1f1;
  }

  .buttons:hover .twitter-button {
    translate: 47px -47px;
    box-shadow: 2px 2px 6px #cacaca, -2px -2px 6px #ffffff;
  }

  .reddit-button:hover {
    background: #ff4500;
  }

  .buttons:hover .reddit-button {
    translate: 0px -70px;
    box-shadow: 2px 2px 6px #cacaca, -2px -2px 6px #ffffff;
  }

  .messenger-button:hover {
    background: #0093ff;
  }

  .buttons:hover .messenger-button {
    translate: -47px -47px;
    box-shadow: 2px 2px 6px #cacaca, -2px -2px 6px #ffffff;
  }

  .pinterest-button:hover {
    background: #f0002a;
  }

  .buttons:hover .pinterest-button {
    translate: -70px 0px;
    box-shadow: 2px 2px 6px #cacaca, -2px -2px 6px #ffffff;
  }

  .instagram-button:hover {
    background: #f914af;
  }

  .buttons:hover .instagram-button {
    translate: -47px 47px;
    box-shadow: 2px 2px 6px #cacaca, -2px -2px 6px #ffffff;
  }

  .snapchat-button:hover {
    background: #fffc00;
  }

  .buttons:hover .snapchat-button {
    translate: 0px 70px;
    box-shadow: 2px 2px 6px #cacaca, -2px -2px 6px #ffffff;
  }

  .whatsapp-button:hover {
    background: #25d366;
  }

  .buttons:hover .whatsapp-button {
    translate: 47px 47px;
    box-shadow: 2px 2px 6px #cacaca, -2px -2px 6px #ffffff;
  }
`;

export default Community;
