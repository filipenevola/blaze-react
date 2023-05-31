import React, { useEffect, useState } from "react";
import { Random } from "meteor/random";

export const Table = () => {
  const [lines, setLines] = useState([{ _id: Random.id(), content: "data" }]);
  console.log(`lines`, lines);


  const addLine = () => {
    setLines([...lines, { _id: Random.id(), content: Random.id() }]);
  };

  useEffect(() => {
    console.log('rendering Table');
    return () => {
      console.log('cleaning up Table');
    }
  }, [])

  return (
    <>
      <button onClick={addLine}>Add line</button>
      <table>
        <thead>
          <tr>
            <th>Hey</th>
          </tr>
        </thead>
        <tbody>
          {lines.map(({ _id, content }) => {
            return (
              <tr key={_id}>
                <td>{content}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
