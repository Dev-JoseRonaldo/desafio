import { FormEvent } from "react";

interface SearchFormProps {
  keyword: string;
  startDate: string;
  endDate: string;
  setKeyword: (value: string) => void;
  setStartDate: (value: string) => void;
  setEndDate: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export const SearchForm = ({ 
  keyword, 
  startDate, 
  endDate, 
  setKeyword, 
  setStartDate, 
  setEndDate, 
  onSubmit 
} : SearchFormProps) => (
  <form className="flex gap-4 bg-gray-200 p-4" onSubmit={onSubmit}>
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
);
