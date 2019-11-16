import React from "react";
import { Card } from "react-bootstrap";

const TeamPage = () => {
  return (
    <>
      <h1>The Team: </h1>

      <Card style={{ width: "48rem" }}>
        <Card.Body>
          <Card.Title>August Axel Zachariae</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Bsc. Environmental Engineering & Msc.stud Sustainable energy
            engineering.
          </Card.Subtitle>
          <Card.Text>
            August will take responsibility for the energy price simulations and
            production forecasts. He studies and works within the field of
            energy system simulation and feasibility analysis of energy
            projects. His skills are within price and energy system forecasting
            and insights from his work from the energy industry, working in the
            energy analysis team in HOFOR doing electricity price forecasting
            and business cases. August wants to take on a new challenge and
            prove we do it better.
          </Card.Text>
          <Card.Link href="mailto:august_zachariae@hotmail.com">
            august_zachariae@hotmail.com
          </Card.Link>
        </Card.Body>
      </Card>

      <p id="AndreasTeam">
        Andreas Stokholm, Bsc. Electrical Engineering & Msc.stud Electrical
        Engineering specializing in Space Technology. Andreas will be the main
        responsible for working with the Copernicus data and setting up the
        screening mapping services. He has been heavily immersed in big data
        Earth Observation processing & analysis with experience as a Student
        Assistant at the Danish National Space Institute, DTU Space. Creating
        value for society and helping reach the SDGs is a great motivator,
        specifically in terms of goals 13, Climate Change, and 7, Sustainable
        Energy.
        <br></br>
        Contact:
        <a href="mailto:stokholm@space.dtu.dk">stokholm@space.dtu.dk</a>
      </p>
      <p id="MalteTeam">
        Malte Hviid-Magnussen. Studying to get an Academy Profession Degree in
        Computer Science at Cphbusiness Lyngby. Malte will be the main
        responsible for building the online platform, both in concern to system
        development and front/back end development. Maltes skills are in
        software programming: Java, JavaScript, React, and SQL. Malte is
        motivated by a chance to apply his skills in a real-world project and
        wanting to collaborate with his partners.
        <br></br>
        Contact:
        <a href="mailto:maltehviidmagnussen@gmail.com">
          maltehviidmagnussen@gmail.com
        </a>
      </p>
    </>
  );
};

export default TeamPage;
