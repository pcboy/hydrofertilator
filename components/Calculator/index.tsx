import * as React from "react";

import {
  InputAdornment,
  Input,
  Select,
  FormControl,
  InputLabel,
} from "@material-ui/core";

import { observer } from "mobx-react";

import { calculatorStore, computeMl } from "../../stores/CalculatorStore";
import { SCalculator } from "./SCalculator";
import { handleChangeNumber } from "./Utils";
import ArmorSi from "../../assets/armor-si.png";
import CalMagurt from "../../assets/cal-magurt.jpg";
import Cannazym from "../../assets/cannazym.png";
import Rhizotonic from "../../assets/rhizotonic.png";

import { GEDosages } from "./GEDosages";

const bottles = [
  {
    name: "Armor Si",
    imageUri: ArmorSi,
    dosages: [
      { name: "Mild Strength", value: 25 },
      { name: "Full Strength", value: 50 },
      { name: "Max Strength", value: 100 },
    ],
  },
  {
    name: "Cal Magurt",
    imageUri: CalMagurt,
    dosages: [{ name: "All Stages", value: 100 }],
  },
  {
    name: "Rhizotonic",
    imageUri: Rhizotonic,
    dosages: [
      { name: "Growth Stage", value: 400 },
      { name: "Healthy roots", value: 50 },
    ],
  },
  {
    name: "Cannazym",
    imageUri: Cannazym,
    dosages: [
      { name: "Normal", value: 250 },
      { name: "Maximum Strength", value: 500 },
    ],
  },
];

const Bottle = ({ bottle }: { bottle: typeof bottles[0] }) => (
  <div className="column is-4">
    <div className="columns is-mobile">
      <div
        className="column is-4"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <b>{bottle.name}</b>
        <a href={bottle.imageUri}>
          <img
            className="bottle"
            src={bottle.imageUri}
            style={{ maxHeight: "10rem" }}
          />
        </a>
      </div>
      <div className="column align-items-center">
        <div className="dosages">
          {bottle.dosages.map((dose) => (
            <React.Fragment key={`${bottle.name}_dose_${dose.name}`}>
              {dose.name}:{" "}
              <b>{`${computeMl(
                calculatorStore.containerLiters,
                dose.value
              ).toFixed(2)} ml`}</b>
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Calculator = observer(() => {
  return (
    <div className="container" style={{ padding: "1rem" }}>
      <SCalculator>
        <h1>Hydroponics Fertilizer Calculator</h1>
        <div className="columns is-multiline is-mobile justify-center">
          <div className="column is-narrow">Container size:</div>
          <div className="column is-narrow">
            <Input
              type="number"
              style={{ width: "50%" }}
              value={calculatorStore.containerLiters}
              onChange={(e) => handleChangeNumber(e, "containerLiters")}
              label="Container size"
              endAdornment={
                <InputAdornment position="end">Liters</InputAdornment>
              }
            />
          </div>
        </div>

        <GEDosages style={{ marginBottom: "2rem", marginTop: "4rem" }} />

        <div className="columns is-multiline">
          {bottles.map((bottle) => (
            <Bottle key={`bottle_${bottle.name}`} bottle={bottle}></Bottle>
          ))}
        </div>
      </SCalculator>
    </div>
  );
});

export default Calculator;
