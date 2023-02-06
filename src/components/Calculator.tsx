import { useEffect, useState } from 'react';
import { GiBrokenPottery } from 'react-icons/gi';
import { calc } from '../lib/calculator';

export default function Calculator() {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<number | null>();
  const [error, setError] = useState<string | null>();
  useEffect(() => {
    try {
      setResult(calc(input.trim()));
    } catch (error) {
      let message;
      if (error instanceof Error) {
        message = error.message;
      } else {
        message = String(error);
      }
      setError(message);
    }
  }, [input]);

  return (
    <div className="flex flex-col w-full h-full items-center font-body tracking-wider pt-7 gap-4">
      <h1 className="text-charcoal drop-shadow-lg normal-case font-semibold">
        Calculator
      </h1>
      <input
        type="text"
        name="input"
        id="input"
        autoComplete="off"
        aria-label="Input"
        className="border-4 border-linen rounded-lg font-numbers w-5/6 max-w-md px-2 py-1 shadow-sm font-bold"
        placeholder={`2.1 1.7 + 3 *`}
        onChange={(e) => {
          setInput(e.currentTarget.value);
          setError(null);
        }}
      />
      <div className="text-center">
        <h2 className="uppercase">Result</h2>
        <div
          className="bg-[white] p-3 rounded-lg text-3xl font-bold border-4 border-linen select-all font-numbers min-w-[100px] min-h-[70px] flex items-center justify-center shadow-sm"
          data-testid="result"
        >
          {error ? (
            <GiBrokenPottery className="rotate-12 text-charcoal" />
          ) : (
            result
          )}
        </div>
      </div>
      {error && (
        <div className="text-sm font-normal text-[#6a3232] drop-shadow-sm flex flex-col items-center gap-1">
          <span className="text-center">{error}</span>
        </div>
      )}
    </div>
  );
}
