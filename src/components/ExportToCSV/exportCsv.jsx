import React from "react";

const ExportToCSV = () => {
  const exportCSV = () => {
    // Data from the page
    const heading = "Example Heading";
    const paragraph = "This is an example paragraph.";
    const tableData = [
      ["", "Column 1", "Column 2"],
      ["Row 1", "Cell 1", "Cell 2"],
      ["Row 2", "Cell 3", "Cell 4"],
    ];

    // Convert to CSV format
    let csvContent = `"${heading}"\n"${paragraph}"\n\n`;
    tableData.forEach((row) => {
      csvContent += row.map((cell) => `"${cell} |"`).join(",") + "\n";
    });

    // Create and download the CSV file
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "data.csv";
    link.click();
  };

  return (
    <div style={{ margin: '2rem' }}>
      <h1>Example Heading</h1>
      <p>This is an example paragraph.</p>
      <table border={1}>
        <thead>
          <tr>
            <th> </th>
            <th>Column 1</th>
            <th>Column 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Row 1</th>
            <td>Cell 1</td>
            <td>Cell 2</td>
          </tr>
          <tr>
            <th>Row 2</th>
            <td>Cell 3</td>
            <td>Cell 4</td>
          </tr>
        </tbody>
      </table>
      <button onClick={exportCSV} style={{ marginTop: '1rem' }}>Export to CSV</button>
    </div>
  );
};

export default ExportToCSV;