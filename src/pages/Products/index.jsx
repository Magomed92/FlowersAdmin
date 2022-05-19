import { Paper } from "@mui/material";
import axios from "axios";
import React from "react";
import { useLocation } from "react-router-dom";
import { PaperWrapper } from "../../components/PaperWrapper";
import { ProductHeader } from "../../components/ProductHeader";
import styles from "./Products.module.scss";
import { useForm } from "react-hook-form";
import ProductView from "../../components/Pages/ProductView";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const schema = yup
  .object({
    title: yup.string().required("Нет заголовка "),
    price: yup.number().positive().integer().required(""),
    description: yup.string().required(),
  })
  .required();

export const Products = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValue: { price: "", title: "", description: "" },
    resolver: yupResolver(schema),
  });
  console.log(errors, 23341412415);
  // const [product, setProduct] = React.useState({});
  const location = useLocation();
  const productId = location.pathname.split("edit/")[1];
  React.useEffect(() => {
    axios
      .get(`http://85.193.81.200:5555/admin/product/${productId}`)
      .then((res) => {
        console.log(res, 123124);
        reset({
          price: res.data.price,
          title: res.data.title,
          description: res.data.description,
          media: [res.data.media[0].id],
          status: res.data.status,
        });
      });
  }, [reset, productId]);

  // const handleChangeProduct = (event) => {
  //   setProduct((prev) => ({
  //     ...prev,
  //     [event.target.name]: event.target.value,
  //   }));
  // };
  const onSave = (event) => {
    axios.patch(`http://85.193.81.200:5555/admin/product/${productId}`, {
      ...event,
      price: +event.price,
      category_id: 1,
    });
    console.log(event, 123);
  };

  return (
    <div style={{ marginTop: 100 }}>
      <ProductView />
      <ProductHeader />
      <PaperWrapper>
        <form onSubmit={handleSubmit(onSave)}>
          <div>
            <p>Заголовок</p>

            <input
              {...register("title")}
              // onChange={handleChangeProduct}
              name="title"
            />
            <p>{errors?.title?.message}</p>
          </div>
          <div>
            <p>Описание</p>
            <input
              {...register("description")}
              // onChange={handleChangeProduct}
              name="description"
            />
          </div>
          <div>
            <p>Цена</p>
            <input
              type="number"
              {...register("price")}
              // onChange={handleChangeProduct}
              name="price"
            />
            {errors.price && <span>Нет данных</span>}
          </div>

          {/* {product.status} */}
          <button type="submit">Сохранить</button>
        </form>
      </PaperWrapper>
    </div>
  );
};
