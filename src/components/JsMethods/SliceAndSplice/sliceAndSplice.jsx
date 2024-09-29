import React from "react";

const SliceAndSplice = () => {
  const Arr = [
    "0One",
    "1Two",
    "2Three",
    "3Four",
    "4Five",
    "5Six",
    "6Seven",
    "7Eight",
  ];
  const List = [
    "One0",
    "Two1",
    "Three2",
    "Four3",
    "Five4",
    "Six5",
    "Seven6",
    "Eight7",
  ];

  const handleSlice = () => {
    let abc = Arr.slice(2, 3);
    console.log("Result of Arr.slice(2,3) action=", abc);
    console.log("Original Arrr=", Arr);

    const Arr1 = [
      "0One",
      "1Two",
      "2Three",
      "3Four",
      "4Five",
      "5Six",
      "6Seven",
      "7Eight",
    ];

    let abc2 = Arr1.slice(2, 4, "x");
    console.log("Result of Arr1.slice(2,4,'x') action=", abc2);
    console.log("Original Arrr=", Arr1);
  };

  const handleSplice = () => {
    let abc = List.splice(2, 3);
    console.log("Result of List.splice(2,3) action=", abc);
    console.log("Original List=", List);

    const Arr1 = [
      "One0",
      "Two1",
      "Three2",
      "Four3",
      "Five4",
      "Six5",
      "Seven6",
      "Eight7",
    ];

    let abc2 = Arr1.splice(2, 4, "x", "y");
    console.log("Result of Arr1.splice(2,4,'x','y') action=", abc2);
    console.log("Original Arrr=", Arr1);
  };

  return (
    <div style={{ margin: "2rem" }}>
      <h2>Slice and Splice methods</h2>

      <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        <span>Arr =</span>
        {Arr.map((item) => (
          <div key={item}>{item},</div>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        <span>List =</span>
        {List.map((item) => (
          <div key={item}>{item},</div>
        ))}
      </div>
      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <button onClick={handleSlice}>Slice</button>
        <button onClick={handleSplice}>Splice</button>
      </div>
      <p>Check results in console</p>
    </div>
  );
};

export default SliceAndSplice;
