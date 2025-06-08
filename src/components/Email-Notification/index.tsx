"use client";
import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  /* The switch - the box around the slider */
  .switch {
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 3.5em;
    height: 2em;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    border: 1px solid #adb5bd;
    transition: 0.4s;
    border-radius: 30px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 1.4em;
    width: 1.4em;
    border-radius: 20px;
    left: 0.27em;
    bottom: 0.25em;
    background-color: var(--color-third);
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: var(--color-secondary);
    border: 1px solid var(--color-secondary);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px var(--color-secondary);
  }

  input:checked + .slider:before {
    transform: translateX(1.4em);
    background-color: var(--color-primary);
  }
`;

export default function EmailNotification() {
  return (
    <div className="mx-auto  w-screen bg-primary py-12">
      <div className="w-[80%] mx-auto flex flex-col justify-start items-start gap-4">
        <div className="flex flex-col text-secondary items-start gap-2">
          <h2 className="text-3xl">Email Notifications</h2>
          <p className="text-sm">
            Select the notification you want to receive emails for
          </p>
        </div>
        <div className="border-secondary text-secondary py-2 border-[1px] w-full flex rounded-sm flex-col gap-2 px-2">
          <div className="border-b-secondary border-b-[1px] flex flex-row px-2 items-center py-2  justify-between">
            <div className="flex flex-col justify-start gap-2 items-start">
              <h3 className="text-md">Item sold</h3>
              <p className="text-sm">
                When someone purchased one of your items
              </p>
            </div>
            <StyledWrapper>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider" />
              </label>
            </StyledWrapper>
          </div>
          <div className="border-b-secondary border-b-[1px] flex flex-row px-2 items-center py-2  justify-between">
            <div className="flex flex-col justify-start gap-2 items-start">
              <h3 className="text-md">Bid Activity</h3>
              <p className="text-sm">When someone bids on one of your items</p>
            </div>
            <StyledWrapper>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider" />
              </label>
            </StyledWrapper>
          </div>
          <div className="border-b-secondary border-b-[1px] flex flex-row px-2 items-center py-2  justify-between">
            <div className="flex flex-col justify-start gap-2 items-start">
              <h3 className="text-md">Deals Accepted</h3>
              <p className="text-sm">When someone accepted one of your deals</p>
            </div>
            <StyledWrapper>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider" />
              </label>
            </StyledWrapper>
          </div>
          <div className="border-b-secondary border-b-[1px] flex flex-row px-2 items-center py-2  justify-between">
            <div className="flex flex-col justify-start gap-2 items-start">
              <h3 className="text-md">Deals Offers</h3>
              <p className="text-sm">
                When someone offers a deal on your items
              </p>
            </div>
            <StyledWrapper>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider" />
              </label>
            </StyledWrapper>
          </div>
          <div className="border-b-secondary border-b-[1px] flex flex-row px-2 items-center py-2  justify-between">
            <div className="flex flex-col justify-start gap-2 items-start">
              <h3 className="text-md">Price Change</h3>
              <p className="text-sm">
                When an item you made an offer on changes in price
              </p>
            </div>
            <StyledWrapper>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider" />
              </label>
            </StyledWrapper>
          </div>
          <div className="border-b-secondary border-b-[1px] flex flex-row px-2 items-center py-2  justify-between">
            <div className="flex flex-col justify-start gap-2 items-start">
              <h3 className="text-md">Auction Expiration</h3>
              <p className="text-sm">When a times auction you created ends</p>
            </div>
            <StyledWrapper>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider" />
              </label>
            </StyledWrapper>
          </div>
          <div className="border-b-secondary border-b-[1px] flex flex-row px-2 items-center py-2  justify-between">
            <div className="flex flex-col justify-start gap-2 items-start">
              <h3 className="text-md">Outbid</h3>
              <p className="text-sm">
                When an offer you placed is exceeded by another user
              </p>
            </div>
            <StyledWrapper>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider" />
              </label>
            </StyledWrapper>
          </div>
          <div className="border-b-secondary border-b-[1px] flex flex-row px-2 items-center py-2  justify-between">
            <div className="flex flex-col justify-start gap-2 items-start">
              <h3 className="text-md">Owned Item Updates</h3>
              <p className="text-sm">
                When a significant update occurs for one of the items you have
                purchased on OpenSea
              </p>
            </div>
            <StyledWrapper>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider" />
              </label>
            </StyledWrapper>
          </div>
          <div className=" flex flex-row px-2 items-center py-2  justify-between">
            <div className="flex flex-col justify-start gap-2 items-start">
              <h3 className="text-md">Successful Purchase</h3>
              <p className="text-sm">When you successfully buy an item</p>
            </div>
            <StyledWrapper>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider" />
              </label>
            </StyledWrapper>
          </div>
        </div>
        <div className="flex flex-row text-secondary gap-40 w-full justify-between items-center">
          <div className="flex flex-col basis-1/2 items-start justify-between">
            <h1 className="text-2xl">Alerts</h1>
            <p className="text-sm">
              Receive notification only when you receive offers with a value
              greater than or equal to this amount of ETH
            </p>
          </div>
          <div className="flex flex-col basis-1/2 gap-2 items-start justify-between">
            <h2 className="text-lg">Minimum Offer Threshold</h2>
            <input
              type="number"
              className="w-full border-secondary outline-none rounded-md border-[1px] px-2 py-1"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}
