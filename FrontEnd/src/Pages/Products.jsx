import { useState, useEffect } from 'react';
import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Button } from '@material-tailwind/react';
import * as Yup from 'yup';
import { ProductsCard } from '../Components/Products/ProductsCards';
import { Input } from '@material-tailwind/react';
import { Dna } from 'react-loader-spinner';

const Products = () => {
  const [display, setDisplay] = useState(false);
  const [products, setProducts] = useState([]);
  const [productSearchData, setProductSearchData] = useState([]);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState('');
  const [cardValue, setCardValue] = useState('');
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const call = () => {
      axios
        .get('https://sbd-kelompok-2.vercel.app/product')
        .then((result) => {
          if (!search) {
            setProducts(result.data.data);
          }
        })
        .then(() => setIsLoading(true));
    };

    call();
  }, [products]);

  const productDisplay = () => {
    const changeInput = (e) => {
      const value = e.target.value;
      setSearch(value);

      const productSearch = products.filter((product) => {
        return product.title.toLowerCase().includes(search.toLowerCase());
      });

      setProducts(productSearch);
    };

    return (
      <div className="mx-auto text-center">
        <div className="mx-auto my-8 w-72">
          <Input
            className="my-8 pt-8"
            variant="outlined"
            placeholder="search products.."
            onChange={changeInput}
          />
          <h1>{search ? `you search : ${search}` : ''}</h1>
        </div>

        <Button
          color="blue"
          className="my-8 w-40 text-black"
          onClick={() => {
            setDisplay((display) => !display);
          }}
        >
          Add Product
        </Button>
        <ProductsCard
          setDisplay={setDisplay}
          setEdit={setEdit}
          propsData={products}
          setId={setId}
          setCardValue={setCardValue}
        />
      </div>
    );
  };

  const addProduct = () => {
    const initialValues = {
      title: '',
      description: '',
      image: '',
      left: '',
      right: '',
    };

    const onSubmit = (data) => {
      if (id === '') {
        axios
          .post('https://sbd-kelompok-2.vercel.app/product', data)
          .then((response) => {
            setProducts((products) => [...products, response.data]);
          });

        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Berhasil input product',
        });
      } else {
        axios
          .patch(`https://sbd-kelompok-2.vercel.app/product/${id}`, data)
          .then((response) => {
            setProducts((products) => [...products, response.data]);
          });

        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Berhasil edit product',
        });
      }

      setDisplay((display) => !display);
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
            setDisplay(false);
            setEdit(false);
            setId('');
            setCardValue('');
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
            <label>Product Name : `${id}`</label>
            <Field
              id="inputProduct"
              name="title"
              placeholder={cardValue ? cardValue.title : 'product name...'}
              autoComplete="on"
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
              placeholder={
                cardValue ? cardValue.description : 'product description...'
              }
              autoComplete="on"
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
              placeholder={cardValue ? cardValue.left : 'price..'}
              autoComplete="on"
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
              placeholder={cardValue ? cardValue.right : "product's place.."}
              autoComplete="on"
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
              placeholder={cardValue ? cardValue.image : 'img url...'}
              autoComplete="on"
              className="m-1 mx-auto mb-5 w-4/5 rounded-2xl border-[1px] border-blue-400 px-2 py-3 text-black"
            />

            <hr className="mx-auto my-5 w-4/5 bg-black" />

            <Button
              className="m-1 mx-auto mb-5 mt-5 w-4/5 rounded-2xl border-[1px] bg-blue-400 px-2 py-3 text-black"
              type="submit"
            >
              {edit ? 'Edit Product' : 'Add Product'}
            </Button>
          </Form>
        </Formik>
      </div>
    );
  };

  const loading = () => {
    return (
      <div className="tengah mx-auto my-8 text-center">
        <div className="tengah mx-auto my-8">
          <Dna className="tengah mx-auto my-8 bg-black" />
        </div>
        <h1 className="tengah mx-auto my-8">Loading...</h1>
      </div>
    );
  };

  return (
    <div>
      {!isLoading ? loading() : !display ? productDisplay() : addProduct()}
    </div>
  );
};

export { Products };
