import React, { useState, useEffect, ReactNode } from "react";
import * as matcher from "./constants/matcher";
export interface Props {
  children: ReactNode;
  mode: string;
  username_input: string;
  password_input: string;
  email_input: string;
  password1_input: string;
  password2_input: string;
  language_input: string;
  topic_input: string;
}

export function performAuthentication(
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

    default:
      return Promise.reject("Invalid mode");
  }
}

function Authentication({
  children,
  mode,
  username_input,
  password_input,
  email_input,
  password1_input,
  password2_input,
  language_input,
  topic_input,
}: Props) {}

export default Authentication;
