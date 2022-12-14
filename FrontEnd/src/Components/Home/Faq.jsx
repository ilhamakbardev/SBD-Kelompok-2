import { Fragment, useState } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? 'rotate-180' : ''
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export function Faq() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="faq mx-auto my-0 max-w-xs p-10 text-center md:my-20">
      <h1 className="mb-16 text-4xl sm:text-6xl md:mb-20">FAQ</h1>
      <Fragment>
        <Accordion
          className="mb-8"
          open={open === 1}
          icon={<Icon id={1} open={open} />}
        >
          <AccordionHeader onClick={() => handleOpen(1)}>
            Is this products legal ?
          </AccordionHeader>
          <AccordionBody className="my-6">
            We're not always in the position that we want to be at. We're
            constantly growing. We're constantly making mistakes. We're
            constantly trying to express ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion
          className="mb-8"
          open={open === 2}
          icon={<Icon id={2} open={open} />}
        >
          <AccordionHeader onClick={() => handleOpen(2)}>
            Who can buy this products ?
          </AccordionHeader>
          <AccordionBody className="my-6">
            We're not always in the position that we want to be at. We're
            constantly growing. We're constantly making mistakes. We're
            constantly trying to express ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion
          className="mb-8"
          open={open === 3}
          icon={<Icon id={3} open={open} />}
        >
          <AccordionHeader onClick={() => handleOpen(3)}>
            Is this products safe ?
          </AccordionHeader>
          <AccordionBody className="my-6">
            We're not always in the position that we want to be at. We're
            constantly growing. We're constantly making mistakes. We're
            constantly trying to express ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
      </Fragment>
    </div>
  );
}
