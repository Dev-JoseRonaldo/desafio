import { useState, FormEvent, useEffect } from "react";
import api from "./services/api";
import { DataProps, ArticleProps } from "./types/data";
import { LineChart } from "./components/lineChart";

function App() {
  const [data, setData] = useState<DataProps | null>(null);
  const [keyword, setKeyword] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [chartData, setChartData] = useState<{ date: string, count: number }[]>([]);

  async function getApiData(keyword: string, startDate: string, endDate: string) {
    try {
      const url = `/v2/everything?q=${keyword}&from=${startDate}&to=${endDate}&apiKey=${import.meta.env.VITE_API_KEY}`;
      console.log(url);
      const response = await api.get(url);
      setData(response.data);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    if (data) {
      const articlesByDate = data.articles.reduce((acc: Record<string, number>, article: ArticleProps) => {
        const date = article.publishedAt.split('T')[0];
        if (!acc[date]) {
          acc[date] = 0;
        }
        acc[date]++;
        return acc;
      }, {});

      const processedData = Object.keys(articlesByDate)
        .map(date => ({
          date,
          count: articlesByDate[date]
        }))
        .filter(dataPoint => dataPoint.date !== '1970-01-01') // remove a data de 1970-01-01 que estava vindo da API
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

      setChartData(processedData);
    }
  }, [data]);

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

      <LineChart data={chartData} />
    </main>
  );
}

export default App;
