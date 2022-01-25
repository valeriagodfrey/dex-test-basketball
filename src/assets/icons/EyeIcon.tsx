import React from "react";

interface Props {
  type: React.HTMLInputTypeAttribute | undefined;
}
export const EyeIcon = ({ type }: Props) => {
  return (
    <div>
      {type === "password" ? (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="close_eye">
            <path
              id="close_eye_2"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.80675 3.0266C1.54675 2.7666 1.54675 2.3466 1.80675 2.0866C2.06675 1.8266 2.49341 1.8266 2.75341 2.0866L13.6267 12.9733C13.8867 13.2333 13.8867 13.6533 13.6267 13.9133C13.3667 14.1733 12.9467 14.1733 12.6867 13.9133L10.8734 12.0999C9.98008 12.4466 9.01341 12.6466 8.00008 12.6466C4.66675 12.6466 1.82008 10.5733 0.666748 7.6466C1.18008 6.33327 2.04008 5.19993 3.12008 4.33993L1.80675 3.0266ZM11.3334 7.64662C11.3334 5.80662 9.84008 4.31329 8.00008 4.31329C7.66008 4.31329 7.33342 4.37995 7.02008 4.47329L5.57341 3.02662C6.34008 2.77995 7.15341 2.64662 8.00008 2.64662C11.3334 2.64662 14.1801 4.71995 15.3334 7.63995C14.8734 8.81329 14.1401 9.83995 13.2134 10.66L11.1734 8.61995C11.2667 8.31329 11.3334 7.98662 11.3334 7.64662ZM8.00008 10.9799C6.16008 10.9799 4.66675 9.48658 4.66675 7.64658C4.66675 7.13325 4.78675 6.64658 4.99341 6.21992L6.04008 7.26658C6.02008 7.38658 6.00008 7.51325 6.00008 7.64658C6.00008 8.75325 6.89341 9.64658 8.00008 9.64658C8.13341 9.64658 8.25341 9.62658 8.38008 9.59992L9.42675 10.6466C8.99341 10.8599 8.51341 10.9799 8.00008 10.9799ZM9.98008 7.42661C9.88008 6.49328 9.14675 5.76661 8.22008 5.66661L9.98008 7.42661Z"
              fill="#9C9C9C"
            />
          </g>
        </svg>
      ) : (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="eye">
            <path
              id="eye_2"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.00008 2.66675C4.66675 2.66675 1.82008 4.74008 0.666748 7.66675C1.82008 10.5934 4.66675 12.6667 8.00008 12.6667C11.3334 12.6667 14.1801 10.5934 15.3334 7.66675C14.1801 4.74008 11.3334 2.66675 8.00008 2.66675ZM8.00008 11.0001C6.16008 11.0001 4.66675 9.50675 4.66675 7.66675C4.66675 5.82675 6.16008 4.33341 8.00008 4.33341C9.84008 4.33341 11.3334 5.82675 11.3334 7.66675C11.3334 9.50675 9.84008 11.0001 8.00008 11.0001ZM6.00008 7.66675C6.00008 6.56008 6.89341 5.66675 8.00008 5.66675C9.10675 5.66675 10.0001 6.56008 10.0001 7.66675C10.0001 8.77341 9.10675 9.66675 8.00008 9.66675C6.89341 9.66675 6.00008 8.77341 6.00008 7.66675Z"
              fill="#9C9C9C"
            />
          </g>
        </svg>
      )}
    </div>
  );
};
