const CREDENTIALS = {
  username: 'Username',
  password: 'Password',
};

export default function Login({
  setLoggedIn,
}: {
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const formData = new FormData(e.currentTarget);
    const isCorrect =
      formData.get('username') === CREDENTIALS.username &&
      formData.get('current-password') === CREDENTIALS.password;
    console.log({ isCorrect });
    if (isCorrect) {
      setLoggedIn(true);
    }
    e.preventDefault();
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
          className="border-2 border-linen rounded-lg w-full px-2 py-1 mt-1 shadow-sm font-normal"
          defaultValue={`Username`}
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
          className="border-2 border-linen rounded-lg w-full px-2 py-1 mt-1 shadow-sm font-normal"
          defaultValue={`Password`}
        />
      </div>
      <button
        type="submit"
        className="bg-charcoal text-mint-cream tracking-wider uppercase w-2/3 max-w-sm rounded-md py-1 hover:bg-gunmetal hover:scale-105 focus:bg-gunmetal focus:scale-105 transition-all"
      >
        Log in
      </button>
    </form>
  );
}
