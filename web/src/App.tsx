import { useState, FormEvent, useEffect } from "react";
import api from "./services/api";
import { DataProps, ArticleProps } from "./types/data";
import { LineChart } from "./components/lineChart";
import { SearchForm } from "./components/searchForm";
import { GraphContainer } from "./components/graphContainer";
import { GraphTitle } from "./components/graphTitle";

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

      <GraphContainer>
        <GraphTitle 
          text="1) Pesquise a quantidade de notícias relacionadas à palavra-chave durante um determinado período de tempo." 
        />
        <SearchForm 
          keyword={keyword}
          startDate={startDate}
          endDate={endDate}
          setKeyword={setKeyword}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          onSubmit={handleSubmit}
        />
        <LineChart data={chartData} />
      </GraphContainer>
    </main>
  );
}

export default App;
