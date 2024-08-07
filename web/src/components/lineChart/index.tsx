import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface LineChartProps {
  data: { date: string, count: number }[]
}

export const LineChart = ({ data }: LineChartProps) => {
  const series = [
    {
      name: "Number of Articles",
      data: data.map(item => item.count)
    }
  ];

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: 'line',
      dropShadow: {
        enabled: true,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2
      },
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    colors: ['#77B6EA'],
    dataLabels: {
      enabled: true
    },
    stroke: {
      curve: 'smooth'
    },
    title: {
      text: 'Número de Artigos publicados, por data, em determinado período',
      align: 'left'
    },
    grid: {
      borderColor: '#e7e7e7',
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5
      }
    },
    markers: {
      size: 1
    },
    xaxis: {
      categories: data.map(item => item.date),
      title: {
        text: 'Data'
      }
    },
    yaxis: {
      title: {
        text: 'Número de Artigos'
      },
      min: 0
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -25,
      offsetX: -5
    }
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height={400}
      width={1080}
    />
  );
};
