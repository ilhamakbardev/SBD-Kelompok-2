import { useState, useEffect } from 'react';
import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Button } from '@material-tailwind/react';
import * as Yup from 'yup';
import Cards from '../Components/Home/Cards';

const Products = () => {
  const [display, setDisplay] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const call = () => {
      axios.get('http://localhost:4500/product').then((result) => {
        setProducts(result.data.data);
      });
    };

    call();
  }, [products]);

  const productDisplay = () => {
    return (
      <div className="mx-auto text-center">
        <Button
          color="blue"
          className="my-8 w-40 text-black"
          onClick={() => {
            setDisplay((display) => !display);
          }}
        >
          Add Product
        </Button>

        <Cards propsData={products} />
      </div>
    );
  };

  const addProduct = () => {
    const initialValues = {
      name: '',
      description: '',
      image: '',
      left: '',
      right: '',
    };

    const onSubmit = (data) => {
      axios.post('http://localhost:4500/product', data).then((response) => {
        setProducts((products) => [...products, response.data]);
      });
    };

    const validationSchema = Yup.object().shape({
      title: Yup.string()
        .min(3)
        .max(75)
        .required('product name is required field'),
      description: Yup.string().required('description is required field'),
      left: Yup.string().required('price is required field'),
      right: Yup.string().required('location is required field'),
      image: Yup.string().required('img url is required field'),
    });

    return (
      <div className="mx-auto text-center">
        <Button
          color="blue"
          className="my-8 text-black"
          onClick={() => {
            setDisplay((display) => !display);
          }}
        >
          Back To Product
        </Button>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="mx-auto mt-10 flex w-full max-w-xl flex-col p-10 shadow-2xl">
            <ErrorMessage
              className="text-bold mb-5 text-red-600"
              name="title"
              component="span"
            />

            <label>Product Name : </label>
            <Field
              id="inputProduct"
              name="title"
              placeholder="product name..."
              autoComplete="off"
              className="m-1 mx-auto mb-5 w-4/5 rounded-2xl border-[1px] border-blue-400 px-2 py-3 text-black"
            />

            <ErrorMessage
              className="text-bold mb-5 text-red-600"
              name="description"
              component="span"
            />
            <label>Product Description : </label>
            <Field
              id="inputDescription"
              name="description"
              placeholder="product description..."
              autoComplete="off"
              className="m-1 mx-auto mb-5 w-4/5 rounded-2xl border-[1px] border-blue-400 px-2 py-3 text-black"
            />

            <ErrorMessage
              className="text-bold mb-5 text-red-600"
              name="left"
              component="span"
            />
            <label>Product Price : </label>
            <Field
              id="inputProduct"
              name="left"
              placeholder="price.."
              autoComplete="off"
              className="m-1 mx-auto mb-5 w-4/5 rounded-2xl border-[1px] border-blue-400 px-2 py-3 text-black"
            />

            <ErrorMessage
              className="text-bold mb-5 text-red-600"
              name="right"
              component="span"
            />
            <label>Product's Place : </label>
            <Field
              id="inputPlace"
              name="right"
              placeholder="price.."
              autoComplete="off"
              className="m-1 mx-auto mb-5 w-4/5 rounded-2xl border-[1px] border-blue-400 px-2 py-3 text-black"
            />

            <ErrorMessage
              className="text-bold mb-5 text-red-600"
              name="image"
              component="span"
            />
            <label>Product's img url : </label>
            <Field
              id="inputProduct"
              name="image"
              placeholder="img url..."
              autoComplete="off"
              className="m-1 mx-auto mb-5 w-4/5 rounded-2xl border-[1px] border-blue-400 px-2 py-3 text-black"
            />

            <hr className="mx-auto my-5 w-4/5 bg-black" />

            <Button
              className="m-1 mx-auto mb-5 mt-5 w-4/5 rounded-2xl border-[1px] bg-blue-400 px-2 py-3 text-black"
              type="submit"
            >
              Add Product
            </Button>
          </Form>
        </Formik>
      </div>
    );
  };

  return <div>{!display ? productDisplay() : addProduct()}</div>;
};

export { Products };
