import { useState, FormEvent } from "react";
import api from "./services/api";
import { DataProps } from "./types/data";

function App() {
  const [data, setData] = useState({} as DataProps);
  const [keyword, setKeyword] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  async function getApiData(keyword: string, startDate: string, endDate: string) {
    try {
      console.log(startDate + " " + endDate)
      const url = `/v2/everything?q=${keyword}&from=${startDate}&to=${endDate}&apiKey=${import.meta.env.VITE_API_KEY}`;
      console.log(url)
      const response = await api.get(url);
      setData(response.data);
      console.log(data)
    } catch (e) {
      console.error(e);
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getApiData(keyword, startDate, endDate);
  };

  return (
    <main className="flex flex-col w-screen h-screen p-4 items-center justify-top gap-20"> 
      <h1 className="text-6xl font-bold">News Explorer</h1>

      <form className="flex gap-4 bg-gray-200 p-4" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Palavra chave" 
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)} 
        />
        <input 
          type="date" 
          placeholder="Data de início" 
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)} 
        />
        <input 
          type="date" 
          placeholder="Data de fim" 
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)} 
        />
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}

export default App;
