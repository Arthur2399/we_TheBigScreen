import { useMemo } from "react";

export const useReportsBranch = (scoreGreaterDemand, labels) => {
  const options = {
    fill: true,
    response: true,
    scales: {
      y: {
        min: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const data = useMemo(function () {
    return {
      datasets: [
        {
          label: "Mis datos",
          data: scoreGreaterDemand,
          tension: 0.3,
          borderColor: "#21E1E1",
          pointBackgroundColor: "#21E1E1",
          backgroundColor: "rgba(75,192,192,0.3)",

        },
      ],
      labels,
    };
  }, [labels]);

  return {
    data,
    options,
  };
};
