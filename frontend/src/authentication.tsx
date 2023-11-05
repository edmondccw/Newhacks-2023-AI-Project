import * as matcher from "./constants/matcher";

export interface Props {
  mode: string;
  username_input: string;
  password_input: string;
  email_input: string;
  password1_input: string;
  password2_input: string;
}

export function performAuthentication(
  mode: string,
  username_input: string,
  password_input: string,
  email_input: string,
  password1_input: string,
  password2_input: string
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

    default:
      return Promise.reject("Invalid mode");
  }
}

function Authentication({
  mode,
  username_input,
  password_input,
  email_input,
  password1_input,
  password2_input,
}: Props) {}

export default Authentication;
