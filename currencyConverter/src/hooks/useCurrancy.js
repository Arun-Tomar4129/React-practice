import { useEffect, useState } from "react";

function UseCurrencyInfo(currency) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res)=>res.json)
            .then((res)=>setData())
            .catch(error => console.error("Error fetching data:", error));
    }, [currency]);

    return data;
}