import { css } from "@emotion/react";
import React from "react";
import { useLoaderData } from "react-router-dom";

export default function Contact() {
  const {
    name: { first, last, title },
    email,
    cell,
    picture,
  } = useLoaderData();
  return (
    <section
      css={css`
        background-color: #4158d0;
        background-image: linear-gradient(43deg, #4158d0 0%, #c850c0 46%, #ffcc70 100%);
        margin: 16px;
        padding: 16px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 16px;
        border: 1px solid lightblue;
        border-radius: 8px;
      `}
    >
      <section>
        <img
          css={css`
            width: 70%;
            height: 70%%;
            border-radius: 40%;
            object-fit: contain;
          `}
          src={picture.large}
          alt={first}
        />
      </section>
      <article
        css={css`
          display: flex;
          justify-content: space-evenly;
          flex-direction: column;
        `}
      >
        <h2>
          {title} {first} {last}
        </h2>
        <h2>{email}</h2>
        <h2>Contact Number : {cell}</h2>
      </article>
    </section>
  );
}
