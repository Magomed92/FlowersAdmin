import { Paper } from "@mui/material";
import React from "react";
import styles from "./PaperWrapper.module.scss";
export const PaperWrapper = ({ children }) => {
  return (
    <div>
      <Paper className={styles.root} elevation={1} variant="outlined" square>
        {children}
      </Paper>
    </div>
  );
};
