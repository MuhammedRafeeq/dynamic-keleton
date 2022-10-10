import React, { useEffect, useState } from "react";
import Row from "../components/skeleton/Row";
import Section from "../components/skeleton/Section";
import { Round, Square, Table, Paragraph } from "../components/skeleton/shapes";
import { mockData } from "./mock";

const Samples = () => {
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setContentReady(true);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
       <div style={{ width: "50%" }}>
      {/* @ts-ignore */}
      <Section
        contentReady={contentReady}
        skeleton={
          <>
            <Row align="center">
              <Round size={100} />
              <div>
                <Square mx={10} width={200} height={10} />
                <br />
                <Square mx={10} width={200} height={8} />
              </div>
            </Row>
            <br />
            <Paragraph rowCount={12} />
            <br />
            <Paragraph rowCount={9} />
          </>
        }
      >
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 30,
            }}
          >
            <img
              style={{
                width: 100,
                height: 100,
                borderRadius: "50%",
              }}
              src={mockData.image}
            />
            <div style={{ marginLeft: 30 }}>
              <h3>{mockData.name}</h3>
              <h5>{mockData.title}</h5>
            </div>
          </div>
          <div>{mockData.details}</div>
          <br />
          <div>{mockData.details}</div>
        </div>
      </Section>
      </div>
      <div style={{ width: "50%", marginLeft: 40 }}>
        {/* @ts-ignore */}
        <Section
          contentReady={contentReady}
          skeleton={
            <>
              <Square height={20} width={200} center my={20} />
              <Table width={600} columnCount={3} rowCount={5} />
            </>
          }
        >
          <h3>Test title</h3>
          <table>
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
            {[1, 1, 1, 1, 1].map((it) => (
              <tr>
                <td>Sample data</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
            ))}
          </table>
        </Section>
      </div>
    </div>
  );
};

export default Samples;
