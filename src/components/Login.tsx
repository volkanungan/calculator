import 'animate.css';
import { IoWarningOutline } from 'react-icons/io5';

export const CREDENTIALS = {
  username: 'Username',
  password: 'Password',
};

type LoginProps = {
  loggedIn: boolean | null;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean | null>>;
};

export default function Login({ loggedIn, setLoggedIn }: LoginProps) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    if (
      !formData.get('username')?.length ||
      !formData.get('current-password')?.length
    ) {
      return;
    }
    const isLoginCorrect =
      formData.get('username') === CREDENTIALS.username &&
      formData.get('current-password') === CREDENTIALS.password;
    setLoggedIn(isLoginCorrect);
  }

  return (
    <form
      className="flex flex-col w-full h-full items-center font-body tracking-wider font-semibold pt-7 gap-y-4"
      onSubmit={handleSubmit}
    >
      <h1 className="text-charcoal drop-shadow-lg">Login to the calculator</h1>
      <div className="w-2/3 max-w-sm">
        <label htmlFor="username" className="text-sm font-normal">
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          className={`border-2 border-linen rounded-lg w-full px-2 py-1 mt-1 shadow-sm font-normal ${
            loggedIn === false && 'animate__animated animate__shakeX'
          }`}
          onChange={() => setLoggedIn(null)}
        />
      </div>
      <div className="w-2/3 max-w-sm">
        <label htmlFor="current-password" className="text-sm font-normal">
          Password
        </label>
        <input
          type="password"
          name="current-password"
          id="current-password"
          autoComplete="current-password"
          className={`border-2 border-linen rounded-lg w-full px-2 py-1 mt-1 shadow-sm font-normal  ${
            loggedIn === false && 'animate__animated animate__shakeX'
          }`}
          onChange={() => setLoggedIn(null)}
        />
      </div>
      <button
        type="submit"
        className="bg-charcoal text-mint-cream tracking-wider uppercase w-2/3 max-w-sm rounded-md py-1 hover:bg-gunmetal hover:scale-105 focus:bg-gunmetal focus:scale-105 transition-all"
      >
        Log in
      </button>
      {loggedIn === false && (
        <div className="text-sm font-normal text-[#6a3232] drop-shadow-sm flex flex-col items-center gap-1">
          <IoWarningOutline className="text-lg" />
          <span className="text-center">
            You have entered an invalid username or password.
          </span>
        </div>
      )}
    </form>
  );
}
