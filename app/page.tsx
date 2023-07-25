import toNumber from "decimal.js";
import Decimal from "decimal.js";

export default function Home() {
  const data = [
    //16หลัก
    "9999999999999999", //i:0 d:16 s:0
    "9999999999999999.24", //i:1 d:16 s:2
    "9999999999999999.99", //i:2 d:16 s:2
    //17หลัก
    "99999999999999999", //i:3 d:17 s:0
    "99999999999999999.263", //i:4 d:17 s:2
    "99999999999999999.99", //i:5 d:17 s:2
    //18หลัก
    "999999999999999999", //i:6 d:18 s:0
    "999999999999999999.42", //i:7 d:18 s:0
    "999999999999999999.99", //i:8 d:18 s:2
    //19หลัก
    "9999999999999999999", //i:9 d:19 s:0
    "9999999999999999999.76", //i:10 d:19 s:0
    "9999999999999999999.99", //i:11 d:19 s:0
  ];
  //16หลัก
  const totald160t = 100000;
  const totald1602t = 101;
  const totald162t = 99;
  const totald160 = sum(data[0], totald160t);
  const totald1602 = sum(data[1], totald1602t);
  const totald162 = sum(data[2], totald162t);
  //17หลัก
  const totald170t = 10000;
  const totald1702t = 2;
  const totald172t = 9;
  const totald170 = sum(data[3], totald170t);
  const totald1702 = sum(data[4], totald1702t);
  const totald172 = sum(data[5], totald172t);
  //18หลัก
  const totald180t = 1000;
  const totald1802t = 9;
  const totald182t = 1;
  const totald180 = sum(data[6], totald180t);
  const totald1802 = sum(data[7], totald1802t);
  const totald182 = sum(data[8], totald182t);
  //19หลัก
  const totald190t = 100;
  const totald1902t = 1;
  const totald192t = 1;
  const totald190 = sum(data[9], totald190t);
  const totald1902 = sum(data[10], totald1902t);
  const totald192 = sum(data[11], totald192t);

  return (
    <div>
      <h3>มีได้มากสุด 21 หลัก รวม "." และ ทศนิยม ถ้าเกินทศนิยม round up</h3>
      {/* 16หลัก */}
      <div style={{ marginBottom: "2rem" }}>
        <p>
          d:{data[0].length} s:0 times:{totald160t}
        </p>
        <h2>Total: {totald160}</h2>
        <p>
          d:{data[1].length - 3} s:2 times:{totald1602t}
        </p>
        <h2>Total: {totald1602}</h2>
        <p>
          d:{data[2].length - 3} s:2 times:{totald162t}
        </p>
        <h2>Total: {totald162}</h2>
      </div>
      {/* 17หลัก */}
      <div style={{ marginBottom: "2rem" }}>
        <p>
          d:{data[3].length} s:0 times:{totald170t}
        </p>
        <h2>Total: {totald170}</h2>
        <p>
          d:{data[4].length - 3} s:2 times:{totald1702t}
        </p>
        <h2>Total: {totald1702}</h2>
        <p>
          d:{data[5].length - 3} s:2 times:{totald172t}
        </p>
        <h2>Total: {totald172}</h2>
      </div>
      {/* 18หลัก */}
      <div style={{ marginBottom: "2rem" }}>
        <p>
          d:{data[6].length} s:0 times:{totald180t}
        </p>
        <h2>Total: {totald180}</h2>
        <p>
          d:{data[7].length - 3} s:2 times:{totald1802t}
        </p>
        <h2>Total: {totald1802}</h2>
        <p>
          d:{data[8].length - 3} s:2 times:{totald182t}
        </p>
        <h2>Total: {totald182}</h2>
      </div>
      {/* 19หลัก */}
      <div style={{ marginBottom: "2rem" }}>
        <p>
          d:{data[9].length} s:0 times:{totald190t}
        </p>
        <h2>Total: {totald190}</h2>
        <p>
          d:{data[10].length - 3} s:2 times:{totald1902t}
        </p>
        <h2>Total: {totald1902}</h2>
        <p>
          d:{data[11].length - 3} s:2 times:{totald192t}
        </p>
        <h2>Total: {totald192}</h2>
      </div>
    </div>
  );
}

function sum(data: any, times: any) {
  const numberToAdd = new toNumber(data);
  let total = new toNumber(0);
  for (let i = 0; i < times; i++) {
    total = total.add(numberToAdd);
  }
  const totals = formatWithCommas(total);
  return totals;
}

const formatWithCommas = (value: Decimal) => {
  const stringValue = value.toString();
  const [integerPart, decimalPart] = stringValue.split(".");
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return decimalPart
    ? formattedInteger + "." + decimalPart
    : formattedInteger + ".00";
};
