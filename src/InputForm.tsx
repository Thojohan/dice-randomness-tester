import { ChartData, Results } from "./App";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import ErrorMessage from "./ErrorMessage";
import Spinner from "./Spinner";
import Worker from "./calculate.worker.ts?worker";
export type Average = number[];

const Form = styled.form`
  display: flex;
  justify-content: space-around;
  align-self: center;
  width: 60%;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  background-color: #eceae6;
  box-shadow: 2px 2px 2px inset lightgrey;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Select = styled.select`
  border-style: hidden;
  background-color: #e1dddd;
  box-shadow: 3px 3px 3px inset lightgrey;
  border-radius: 5px;
  text-align: center;
  padding: 3px;
  @media (max-width: 500px) {
    margin-bottom: 10px;
  }
`;

const Input = styled.input`
  border-style: hidden;
  box-shadow: 3px 3px 3px inset lightgrey;
  background-color: #e1dddd;
  border-radius: 5px;
  text-align: center;
  padding: 3px;
  @media (max-width: 500px) {
    margin-bottom: 10px;
  }
`;

const Label = styled.label`
  font-size: large;
  margin-right: 6px;
  font-weight: 600;
`;

const Button = styled.button`
  font-size: small;
  font-weight: 600;
  border-style: hidden;
  box-shadow: 3px 3px 3px inset lightgrey;
  background-color: #e1dddd;
  margin-left: 10px;
  border-radius: 5px;
  max-height: 3rem;
  padding: 4px;
  padding-right: 7px;
  padding-left: 7px;
  align-self: center;

  &:hover:enabled {
    background-color: #ffffd9;
  }

  &:active:enabled {
    background-color: #f9cccc;
  }
`;

type FormData = {
  rangeCount: number;
  rollCount: number;
  batchCount: number;
  cheatDice: number;
};

const cheatDice: number[] = [0, 0.05, 0.1, 0.5, 1, 2, 3, 5, 10, 25, 50, 100];

function InputForm({
  setResults,
  setChartData,
  setExpected,
  setIsRolling,
  isRolling,
}: {
  setResults: React.Dispatch<React.SetStateAction<Results>>;
  results: Results;
  setChartData: React.Dispatch<
    React.SetStateAction<{
      regChartData: ChartData;
      cryptoChartData: ChartData;
    }>
  >;
  setExpected: React.Dispatch<React.SetStateAction<number[]>>;
  setIsRolling: React.Dispatch<React.SetStateAction<boolean>>;
  isRolling: boolean;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<FormData>();

  const [worker, setWorker] = useState<Worker | null>(null);
  console.log("before useffect in InputForm");
  useEffect(() => {
    // const myWorker = new Worker("calculate.worker.ts", { type: "module" });

    //const url = new URL("./calculate.worker.ts", import.meta.url);
    //const myWorker = new Worker(url, { type: "module" });
    const myWorker = new Worker();
    myWorker.onmessage = function (event) {
      const {
        chartData,
        cryptoChartData,
        resArray,
        cryptographicResArray,
        expected,
      } = event.data;

      setResults({
        regResults: resArray,
        cryptoResults: cryptographicResArray,
      });
      setChartData({
        regChartData: chartData,
        cryptoChartData: cryptoChartData,
      });
      setExpected(expected);
      setIsRolling(false);
    };
    console.log("in useffect inputform");
    setWorker(myWorker);

    return () => {
      myWorker.terminate();
    };
  }, [setChartData, setExpected, setIsRolling, setResults]);

  function submitHandler(
    data: FormData,
    e: React.BaseSyntheticEvent<object> | undefined
  ) {
    e?.preventDefault();
    const { rangeCount, batchCount, rollCount, cheatDice } = data;
    setIsRolling(true);
    if (!rollCount) return;

    if (worker) {
      worker.postMessage({ rangeCount, batchCount, rollCount, cheatDice });
    }
  }

  if (Object.keys(errors).length > 0) return <ErrorMessage />;
  if (isLoading) return <Spinner />;

  return (
    <Form onSubmit={handleSubmit(submitHandler)}>
      <span>
        <Label htmlFor="rangeCount">Range (D &#829; ) </Label>
        <Select
          defaultValue={6}
          {...register("rangeCount", { valueAsNumber: true })}
          disabled={isRolling}
        >
          {new Array(99).fill(null).map((_el, i) => (
            <option key={i} value={i + 2}>
              {i + 2}
            </option>
          ))}
        </Select>
      </span>
      <span>
        <Label htmlFor="rollCount">Rolls per batch</Label>
        <Input
          type="number"
          min="1"
          max="100000"
          defaultValue={1000}
          required={true}
          pattern="\d+"
          {...register("rollCount", { valueAsNumber: true })}
          disabled={isRolling}
        />
      </span>{" "}
      <span>
        <Label htmlFor="batchCount">Test batches</Label>
        <Select
          defaultValue={20}
          {...register("batchCount", { valueAsNumber: true })}
          disabled={isRolling}
        >
          {new Array(50).fill(null).map((_el, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </Select>
      </span>
      <span>
        <Label htmlFor="cheatDice">Cheat!</Label>
        <Select
          defaultValue={0}
          {...register("cheatDice", { valueAsNumber: true })}
          disabled={isRolling}
        >
          {cheatDice.map((el, i) => (
            <option key={i} value={el}>
              {`${el}%`}
            </option>
          ))}
        </Select>
      </span>
      <Button type="submit" disabled={isRolling}>
        Compute
      </Button>
    </Form>
  );
}

export default InputForm;
