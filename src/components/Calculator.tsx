export default function Calculator() {
  return (
    <form className="flex flex-col w-full h-full items-center font-body uppercase tracking-wider pt-7">
      <h1 className="text-charcoal drop-shadow-lg normal-case mb-5 font-semibold">
        Calculator
      </h1>
      {/*       <label htmlFor="input">Input</label> */}
      <input
        type="text"
        name="input"
        id="input"
        autoComplete="off"
        placeholder="Input"
        aria-label="Input"
        className="border-4 border-linen rounded-lg font-numbers w-5/6 max-w-md px-2 py-1 shadow-sm font-bold"
        defaultValue={`["2.1","1.7","+","3","*"]`}
      />
      <h2 className="mt-7">Result</h2>
      <span className="bg-[white] p-3 rounded-lg text-3xl font-bold border-4 border-linen select-all font-numbers min-w-[100px] text-center shadow-sm">
        11.4
      </span>
    </form>
  );
}
