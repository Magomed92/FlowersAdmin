import { Button, IconButton } from "@mui/material";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import styles from "./ProductHeader.module.scss";
export const ProductHeader = () => {
  return (
    <div className="mb-20">
      <IconButton className={styles.btn}>
        <svg
          width="9"
          height="14"
          viewBox="0 0 9 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 13L1 7L8 1"
            stroke="#373737"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </IconButton>
      <span className="ml-10">Новый продукт</span>
     
    </div>
  );
};
