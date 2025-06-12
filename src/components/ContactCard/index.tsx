"use client";
import React from "react";
import styled from "styled-components";

const ContactCard = () => (
  <StyledWrapper>
    <div className="form-container w-full">
      <form className="form">
        <div className="form-group">
          <label htmlFor="email">Company Email</label>
          <input required name="email" id="email" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="textarea">How Can We Help You?</label>
          <textarea
            required
            cols={50}
            rows={10}
            id="textarea"
            name="textarea"
            defaultValue={""}
          />
        </div>
        <button type="submit" className="form-submit-btn">
          Submit
        </button>
      </form>
    </div>
  </StyledWrapper>
);

const StyledWrapper = styled.div`
  .form-container {
    width: 400px;
    background: linear-gradient(#112331, #112331) padding-box,
      linear-gradient(145deg, transparent 35%, #01eaf9, #40c9ff) border-box;
    border: 2px solid transparent;
    padding: 32px 24px;
    font-size: 14px;
    font-family: inherit;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 40px;
    box-sizing: border-box;
    border-radius: 16px;
    background-size: 200% 100%;
    animation: gradient 5s ease infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }

  .form-container button:active {
    scale: 0.95;
  }

  .form-container .form {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .form-container .form-group {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .form-container .form-group label {
    display: block;
    margin-bottom: 5px;
    color: #fff;
    font-weight: 600;
    font-size: 12px;
  }

  .form-container .form-group input {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    color: #fff;
    font-family: inherit;
    background-color: transparent;
    border: 1px solid #316e72ff;
  }

  .form-container .form-group textarea {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    resize: none;
    color: #fff;
    height: 96px;
    border: 1px solid #316e72ff;
    background-color: transparent;
    font-family: inherit;
  }

  .form-container .form-group input::placeholder {
    opacity: 0.5;
  }

  .form-container .form-group input:focus {
    outline: none;
    border-color: #01eaf9;
  }

  .form-container .form-group textarea:focus {
    outline: none;
    border-color: #01eaf9;
  }

  .form-container .form-submit-btn {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    align-self: flex-start;
    font-family: inherit;
    color: #01eaf9;
    font-weight: 600;
    width: 40%;
    background: #112331;
    border: 1px solid #316e72ff;
    padding: 12px 16px;
    font-size: inherit;
    gap: 8px;
    margin-top: 8px;
    cursor: pointer;
    border-radius: 6px;
  }

  .form-container .form-submit-btn:hover {
    border-color: #01eaf9;
  }
`;

export default ContactCard;
