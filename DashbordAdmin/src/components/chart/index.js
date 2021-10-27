import { RadialChart } from "react-vis";

const Chart = () => {
    return (
        <RadialChart
        getLabel={d => d.label}
        data={[
          { angle: 80, color: "#8DB9F2", name: "Pagamentos", opacity: 0.2 },
          { angle: 25, color: "#f2e852", name: "Custo de hospedagem" },
          { angle: 40, color: "#ffffff",    name: "Banco de dados" },
        ]}
        labelsRadiusMultiplier={1.6}
        labelsStyle={{ fontSize: 16, fill: "#222" }}
        width={350}
        height={300}
      />
    )
}

export default Chart