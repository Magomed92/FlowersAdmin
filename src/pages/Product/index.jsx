import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import styles from "./Product.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { Button } from "@mui/material";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "media",
    renderCell: (obj) => (
      <Link to={`products/edit/${obj.id}`}>
        <img src={obj.row.media[0].url} />
      </Link>
    ),
    headerName: "Фото",
    width: 100,
  },
  {
    field: "title",
    renderCell: (obj) => (
      <Link to={`products/edit/${obj.id}`}>{obj.value}</Link>
    ),
    headerName: "Название",
    width: 500,
  },
  { field: "price", headerName: "Цена", width: 500 },
  { field: "status", headerName: "Статус", width: 500 },
];

const Product = () => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://85.193.81.200:5555/product").then((res) => {
      setItems(res.data);
    });
  }, []);
  return (
    <Box className={styles.box} component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <div className={styles.img} style={{ height: 400, width: "100%" }}>
        <Link to="/products/create">
          <Button variant="contained">Добавить товар</Button>
        </Link>

        {items.length > 0 ? (
          <DataGrid
            rows={items}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        ) : (
          <div className={styles.loading}>
            <CircularProgress />
          </div>
        )}
      </div>
    </Box>
  );
};

export default Product;
