import {ArcElement, Chart, Legend, Title, Tooltip} from 'chart.js';
import {Pie} from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend, Title);

export interface DonutChartProps {
    chartData: {
        rating: number;
        count: number;
    }[];
}

export const DonutChart = ({chartData}: DonutChartProps) => {
    if (chartData.length === 0) {
        return <p className="text-center text-lg mt-8">Немає даних для відображення</p>;
    }

    const pieChartData = {
        labels: chartData.map(data => `${data.rating}`),
        datasets: [
            {
                data: chartData.map(data => data.count),
                backgroundColor: chartData.map((_, index) => {
                    const colors = [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#4BC0C0",
                        "#9966FF",
                        "#FF9F40",
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#4BC0C0",
                    ];
                    return colors[index % colors.length];
                }),
            },
        ],
    };

    return (
        <div className="sm:w-full lg:w-[480px] lg:h-[480px] mt-8 bg-white shadow-lg rounded-lg p-4">
            <Pie
                data={pieChartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Рейтинги користувачів",
                            font: {
                                size: 20,
                                weight: 'bold'
                            }
                        },
                        legend: {
                            display: false,
                        }
                    },
                    maintainAspectRatio: false,
                }}
            />
        </div>
    );
};
