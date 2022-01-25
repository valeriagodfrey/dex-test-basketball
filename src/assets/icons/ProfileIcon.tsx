import React from "react";

interface Props {
  display: "mobile" | "desktop";
}
export const ProfileIcon = ({ display }: Props) => {
  return (
    <svg
      width={display === "mobile" ? "40" : "30"}
      height={display === "mobile" ? "40" : "30"}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.99992 0.333252C3.31992 0.333252 0.333252 3.31992 0.333252 6.99992C0.333252 10.6799 3.31992 13.6666 6.99992 13.6666C10.6799 13.6666 13.6666 10.6799 13.6666 6.99992C13.6666 3.31992 10.6799 0.333252 6.99992 0.333252ZM6.99992 2.33325C8.10659 2.33325 8.99992 3.22659 8.99992 4.33325C8.99992 5.43992 8.10659 6.33325 6.99992 6.33325C5.89325 6.33325 4.99992 5.43992 4.99992 4.33325C4.99992 3.22659 5.89325 2.33325 6.99992 2.33325ZM2.99992 9.65324C3.85992 10.9466 5.33325 11.7999 6.99992 11.7999C8.66659 11.7999 10.1399 10.9466 10.9999 9.65324C10.9799 8.32658 8.32659 7.59991 6.99992 7.59991C5.66658 7.59991 3.01992 8.32658 2.99992 9.65324Z"
        fill="#9C9C9C"
      />
    </svg>
  );
};