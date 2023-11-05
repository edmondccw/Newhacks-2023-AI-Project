<<<<<<< HEAD
import React, { useState, useEffect, ReactNode } from "react";
import * as matcher from "./constants/matcher";

export interface Props {
  children: ReactNode;
=======
import * as matcher from "./constants/matcher";

export interface Props {
>>>>>>> 3c6654a4614f0bbf820357016dce76f7bd0688e1
  mode: string;
  username_input: string;
  password_input: string;
  email_input: string;
  password1_input: string;
  password2_input: string;
<<<<<<< HEAD
  language_input: string;
  topic_input: string;
}

export function PerformAuthentication(
=======
}

export function performAuthentication(
>>>>>>> 3c6654a4614f0bbf820357016dce76f7bd0688e1
  mode: string,
  username_input: string,
  password_input: string,
  email_input: string,
  password1_input: string,
  password2_input: string,
  language_input: string,
  topic_input: string
) {
  switch (mode) {
    case "login":
      return fetch(matcher.LOGIN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username_input,
          password: password_input,
        }),
      }).then((response) => response.json());

    case "register":
      return fetch(matcher.REGISTER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username_input,
          email: email_input,
          password1: password1_input,
          password2: password2_input,
        }),
      }).then((response) => response.json());

<<<<<<< HEAD
    case "quiz":
      return fetch(matcher.GEN_QUESTION, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language: language_input,
          topic: topic_input,
        }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json(); // Parse the response body as JSON
          } else {
            // Handle non-success response (e.g., 401, 404, etc.)
            throw new Error("Request failed");
          }
        })
        .then((data) => {
          return data;
        })
        .catch((error) => {
          // Handle network errors or other issues
          // setError(error.message);
        });

    case "quizList":
      return fetch(matcher.GEN_QUESTION_LIST, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
            JSON;
          } else {
            throw new Error("Request failed");
          }
        })
        .then((data) => {
          return data;
        })
        .catch((error) => {});

    case "quizById":
      return fetch(matcher.GEN_QUESTION_BY_ID + "1", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
            JSON;
          } else {
            throw new Error("Request failed");
          }
        })
        .then((data) => {
          return data;
        })
        .catch((error) => {});

=======
>>>>>>> 3c6654a4614f0bbf820357016dce76f7bd0688e1
    default:
      return Promise.reject("Invalid mode");
  }
}

function Authentication({
<<<<<<< HEAD
  children,
=======
>>>>>>> 3c6654a4614f0bbf820357016dce76f7bd0688e1
  mode,
  username_input,
  password_input,
  email_input,
  password1_input,
  password2_input,
<<<<<<< HEAD
  language_input,
  topic_input,
=======
>>>>>>> 3c6654a4614f0bbf820357016dce76f7bd0688e1
}: Props) {}

export default Authentication;
