import { Paper } from "@mui/material";
import React from "react";
import { PaperWrapper } from "../../components/PaperWrapper";
import { ProductHeader } from "../../components/ProductHeader";
import styles from "./Products.module.scss";
export const Products = () => {
  return (
    <div style={{ marginTop: 100 }}>
      <ProductHeader />
      <PaperWrapper> 123</PaperWrapper>
    </div>
  );
};
