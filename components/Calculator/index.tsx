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
import styled from "styled-components";

import ArmorSi from "../../assets/armor-si.png";
import CalMagurt from "../../assets/cal-magurt.jpg";
import Cannazym from "../../assets/cannazym.png";
import Rhizotonic from "../../assets/rhizotonic.png";

import { GEDosages } from "./GEDosages";

const bottles = [
  {
    name: "Armor Si",
    uri: "https://generalhydroponics.com/armor-si",
    imageUri: ArmorSi,
    dosages: [
      { name: "Mild Strength", value: 25 },
      { name: "Full Strength", value: 50 },
      { name: "Max Strength", value: 100 },
    ],
  },
  {
    name: "Cal Magurt",
    uri: "https://www.tamaplantfood.com/product/cal-magurt/",
    imageUri: CalMagurt,
    dosages: [{ name: "All Stages", value: 100 }],
  },
  {
    name: "Rhizotonic",
    uri: "https://www.canna-uk.com/rhizotonic",
    imageUri: Rhizotonic,
    dosages: [
      { name: "Growth Stage", value: 400 },
      { name: "Healthy roots", value: 50 },
    ],
  },
  {
    name: "Cannazym",
    uri: "https://www.canna-uk.com/cannazym",
    imageUri: Cannazym,
    dosages: [
      { name: "Normal", value: 250 },
      { name: "Max Strength", value: 500 },
    ],
  },
];

const SBottle = styled.div`
  border: 2px dashed #ababab;
  display: flex;
  align-items: center;
  .bottle-left {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      max-height: 5rem;
    }
  }
`;

const Bottle = ({ bottle }: { bottle: typeof bottles[0] }) => (
  <SBottle>
    <div className="bottle-left">
      <b>{bottle.name}</b>
      <a href={bottle.uri} target="_blank" rel="noopener noreferrer">
        <img
          className="bottle"
          src={bottle.imageUri}
          style={{ maxHeight: "10rem" }}
        />
      </a>
    </div>
    <div className="bottle-right">
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
  </SBottle>
);

const Calculator = observer(() => {
  return (
    <div className="container" style={{ padding: "1rem" }}>
      <SCalculator>
        <h1>Hydroponics Fertilizer Calculator</h1>
        <div className="columns is-multiline is-mobile justify-center">
          <div
            className="column is-narrow"
            style={{ display: "flex", alignItems: "center" }}
          >
            Container size:
          </div>
          <div className="column is-narrow">
            <Input
              type="number"
              style={{ width: "50%" }}
              value={calculatorStore.containerLiters}
              onClick={(e) => e.target.select()}
              onChange={(e) => handleChangeNumber(e, "containerLiters")}
              endAdornment={
                <InputAdornment position="end">Liters</InputAdornment>
              }
            />
          </div>
        </div>

        <GEDosages
          style={{
            marginBottom: "2rem",
            marginTop: "4rem",
            border: "2px dashed #ababab",
          }}
        />

        <div className="columns is-multiline">
          {bottles.map((bottle) => (
            <div key={`bottle_${bottle.name}`} className="column is-4">
              <Bottle bottle={bottle}></Bottle>
            </div>
          ))}
        </div>
      </SCalculator>
    </div>
  );
});

export default Calculator;
