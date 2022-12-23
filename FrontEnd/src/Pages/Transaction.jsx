import { useEffect } from 'react';

const Transaction = () => {
  useEffect(() => {
    Swal.fire({
      icon: 'error',
      title: 'Not available!',
      text: 'Transactions feature under maintenance',
    });
  }, []);
  return (
    <div className="my-8 py-8 text-center">
      <h1>Transactions</h1>
    </div>
  );
};

export default Transaction;
