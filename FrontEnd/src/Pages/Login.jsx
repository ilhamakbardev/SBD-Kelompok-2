import { useState, useEffect } from 'react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerAvatar, setRegisterAvatar] = useState('');

  useEffect(() => {
    Swal.fire({
      icon: 'error',
      title: 'Not Available!',
      text: 'Login feature is under maintenance, it not works yet',
    });
  }, []);

  const LoginForm = () => {
    return (
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center rounded-2xl bg-white shadow-2xl md:w-1/3">
        <h3 className="m-8 pt-2 text-3xl font-semibold text-blue-400">
          Sign In!
        </h3>

        <div className="flex flex-col items-center justify-center">
          <input
            type="email"
            className="m-1 mb-5 w-4/5 rounded-2xl border-[1px] border-blue-400 px-2 py-3 text-black"
            placeholder="Email"
          />
          <input
            type="password"
            className="m-1 mb-5 w-4/5 rounded-2xl border-[1px] border-blue-400 px-2 py-3 text-black"
            placeholder="Password"
          />
          <button className="m-2 w-2/5 rounded-2xl bg-blue-400 px-4 py-2 text-white shadow-md hover:bg-white hover:text-blue-400">
            Sign In
          </button>
        </div>
        <div className="inline-block w-20 justify-center border-[1px] border-solid border-blue-400"></div>
        <p className="my-4 mt-4 text-sm text-red-400">Don't have an account?</p>
        <p
          className="mb-4 cursor-pointer text-sm font-medium text-blue-400"
          onClick={() => setIsLogin(false)}
        >
          Create a New Account?
        </p>
      </div>
    );
  };

  const SignUpForm = () => {
    return (
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center rounded-2xl bg-blue-400 text-white shadow-2xl md:w-1/3">
        <div className="inline-block w-20 justify-center border-[1px] border-solid border-white"></div>
        <h3 className="my-5 pt-2 text-3xl font-semibold text-white">
          Create Account!
        </h3>

        <div className="mt-2 flex flex-col items-center justify-center">
          <input
            type="text"
            className="m-1 w-4/5 rounded-2xl border-[1px] border-blue-400 px-2 py-3 text-black md:w-full"
            placeholder="Name"
          />
          <input
            type="email"
            className="m-1 w-4/5 rounded-2xl border-[1px] border-blue-400 px-2 py-3 text-black md:w-full"
            placeholder="Email"
          />
          <input
            type="text"
            className="m-1 w-4/5 rounded-2xl border-[1px] border-blue-400 px-2 py-3 text-black md:w-full"
            placeholder="Password"
          />
          <input
            type="text"
            className="m-1 w-4/5 rounded-2xl border-[1px] border-blue-400 px-2 py-3 text-black md:w-full"
            placeholder="Avatar URL"
          />
          <button className="m-4 w-3/5 rounded-2xl bg-white px-4 py-2 text-blue-400 shadow-md    hover:bg-blue-400 hover:text-white">
            Sign Up
          </button>
        </div>
        <div className="inline-block w-20 justify-center border-[1px] border-solid border-white"></div>
        <p className="mt-4 text-sm text-white">Already have an account?</p>
        <p
          className="mb-4 cursor-pointer text-sm font-medium text-white"
          onClick={() => setIsLogin(true)}
        >
          Sign In to your Account?
        </p>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 md:py-2">
      <main className="flex w-full items-center px-2 md:px-20">
        {isLogin ? <LoginForm /> : <SignUpForm />}
      </main>
    </div>
  );
};

export default Login;
