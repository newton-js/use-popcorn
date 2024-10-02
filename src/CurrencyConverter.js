import { useEffect, useState } from "react";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [rateFrom, setRateFrom] = useState("USD");
  const [rateTo, setRateTo] = useState("EUR");
  const [converted, setConverted] = useState("see");
  const [loading, setLoading] = useState(false);

  useEffect(
    function () {
      const controller = new AbortController();

      async function converter() {
        try {
          setLoading(true);
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${rateFrom}&to=${rateTo}`,
            { signal: controller.signal }
          );
          if (!res) throw new Error(`Failed to fetch rate`);
          const data = await res.json();
          if (data.message === "not found")
            throw new Error("currency not found");
          console.log(data);
          const rate = data?.rates[rateTo];
          setConverted(rate);
          setLoading(false);
          //   setConverted(data?.resets[rateTo]);
        } catch (err) {
          console.log(err.message);
        }
      }
      if (rateFrom === rateTo) return setConverted(amount);
      converter();
      return function () {
        controller.abort();
      };
    },
    [amount, rateFrom, rateTo]
  );

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        disabled={loading}
      />
      <Currency
        currency={rateFrom}
        setCurrency={setRateFrom}
        loading={loading}
      />
      <Currency currency={rateTo} setCurrency={setRateTo} loading={loading} />
      <p style={{ color: "black", backgroundColor: "white" }}>
        {loading} {converted} {rateTo}
      </p>
    </div>
  );
}

function Currency({ currency, setCurrency, loading }) {
  return (
    <select
      value={currency}
      disabled={loading}
      onChange={(e) => setCurrency(e.target.value)}
    >
      <option value={"USD"}>USD</option>
      <option value={"EUR"}>EUR</option>
      <option value={"CAD"}>CAD</option>
      <option value={"INR"}>INR</option>
    </select>
  );
}
