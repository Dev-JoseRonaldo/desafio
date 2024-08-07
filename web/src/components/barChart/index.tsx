import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface BarChartProps {
  data: { company: string, count: number }[];
}

export const BarChart = ({ data }: BarChartProps) => {
  const series = [
    {
      data: data.map(item => item.count)
    }
  ];

  const options: ApexOptions = {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: data.map(item => item.company)
    }
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="bar"
      height={400}
      width={1080}
    />
  );
};
