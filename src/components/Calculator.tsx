export default function Calculator() {
  return (
    <div className="w-3/5 h-4/6 bg-mint-cream p-10 rounded-lg shadow-md">
      <form className="flex flex-col w-full h-full items-center font-body uppercase tracking-wider font-bold pt-7 gap-y-1">
        <label htmlFor="input">Input</label>
        <input
          type="text"
          name="input"
          id="input"
          className="border-4 border-linen rounded-lg font-numbers w-5/6 px-2 py-1 shadow-sm"
          defaultValue={`["2.1","1.7","+","3","*"]`}
        />
        <h2 className="mt-7">Result</h2>
        <span className="bg-[white] p-3 rounded-lg text-3xl font-bold border-4 border-linen select-all font-numbers min-w-[100px] text-center shadow-sm">
          11.4
        </span>
      </form>
    </div>
  );
}
