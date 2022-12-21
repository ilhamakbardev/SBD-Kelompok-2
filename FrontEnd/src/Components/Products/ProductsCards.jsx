import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react';
import axios from 'axios';
import { Button } from '@material-tailwind/react';

function ProductsCard(props) {
  const products = props.propsData;

  const handleEdit = (id) => {
    props.setEdit(true);
    props.setDisplay(true);
    props.setId(id);

    alert(props.id);
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://sbd-kelompok-2.vercel.app/product/${id}`)
      .then((response) => {
        setProducts([response.data]);
      });

    Swal.fire({
      icon: 'success',
      title: 'success!',
      text: 'success deleted data',
    });
  };

  return (
    <div className="mx-auto my-8 flex flex-wrap justify-center sm:w-2/3 md:w-11/12">
      {products.map((card) => {
        return (
          <Card
            className="mx-auto mb-5 w-96 bg-slate-100 p-3 shadow-2xl"
            key={card._id}
          >
            <CardHeader color="blue" className="relative mb-3 h-56 p-5">
              <img
                src={card.image}
                alt="img-blur-shadow"
                className="h-full w-full"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="p-2">
                {card.title}
              </Typography>
              <Typography className="p-5">{card.description}</Typography>
            </CardBody>
            <CardFooter
              divider
              className="flex items-center justify-between px-5 py-3"
            >
              <Typography variant="small">{card.left}</Typography>
              <Typography
                variant="small"
                color="gray"
                className="flex gap-1 px-5"
              >
                {card.right}
              </Typography>
            </CardFooter>
            <div className="mx-auto flex justify-center p-5">
              <Button
                className="mx-5 bg-yellow-400 text-black"
                onClick={() => {
                  handleEdit(card._id);
                }}
              >
                Edit
              </Button>
              <Button
                className="mx-5 bg-red-400 text-black"
                onClick={() => {
                  handleDelete(card._id);
                }}
              >
                Delete
              </Button>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export { ProductsCard };
