import * as React from "react";
import { observer } from "mobx-react";
import GHELogo from "../../assets/ghe-logo.png";
import { calculatorStore, computeMl } from "../../stores/CalculatorStore";

const GHEntry = observer(
  ({
    title,
    microDose,
    groDose,
    bloomDose,
  }: {
    title: string;
    microDose: number;
    groDose: number;
    bloomDose: number;
  }) => {
    return (
      <div className="columns is-multiline">
        <div className="column is-12">
          <b>{title}</b>
        </div>
        <div className="column is-offset-1">
          <p>
            {`GH Flora Micro: ${computeMl(
              calculatorStore.containerLiters,
              microDose
            )} ml`}
          </p>
          <p>
            {`GH Flora Gro: ${computeMl(
              calculatorStore.containerLiters,
              groDose
            )} ml`}
          </p>
          <p>
            {`GH Flora Bloom: ${computeMl(
              calculatorStore.containerLiters,
              bloomDose
            )} ml`}
          </p>
        </div>
      </div>
    );
  }
);

export const GEDosages = observer((props: any) => {
  const ghData: { [k: string]: any } = {
    "Cutting / Seedlings": { micro: 33, gro: 33, bloom: 33 },
    "General Purpose / Mild vegetative": { micro: 132, gro: 132, bloom: 132 },
    "Agressive vegetative": { micro: 264, gro: 396, bloom: 132 },
    "Transisition to Bloom": { micro: 264, gro: 264, bloom: 264 },
    Blooming: { micro: 264, gro: 132, bloom: 396 },
  };

  return (
    <div className="columns is-multiline" {...props}>
      <div className="column is-12 justify-center">
        <img src={GHELogo} style={{ maxWidth: "25rem" }} />
      </div>
      {Object.keys(ghData).map((title) => (
        <div className="column is-4" key={`ghentry_${title}`}>
          <GHEntry
            title={title}
            microDose={ghData[title].micro}
            groDose={ghData[title].gro}
            bloomDose={ghData[title].bloom}
          ></GHEntry>
        </div>
      ))}
    </div>
  );
});
