import React from "react";
import { Card } from "react-bootstrap";

const TeamPage = () => {
  return (
    <>
      <h1>The Team: </h1>

      <MyCard
        name={"August Axel Zachariae"}
        subtitle={
          "Bsc. Environmental Engineering & Msc.stud Sustainable energy engineering"
        }
        text={`August will take responsibility for the energy price simulations and
        production forecasts. He studies and works within the field of
        energy system simulation and feasibility analysis of energy
        projects. His skills are within price and energy system forecasting
        and insights from his work from the energy industry, working in the
        energy analysis team in HOFOR doing electricity price forecasting
        and business cases. August wants to take on a new challenge and
        prove we do it better.`}
        email={"august_zachariae@hotmail.com"}
      />

      <MyCard
        name={"Andreas Stokholm"}
        subtitle={`Bsc. Electrical Engineering & Msc.stud Electrical
      Engineering specializing in Space Technology`}
        text={`Andreas will be the main
      responsible for working with the Copernicus data and setting up the
      screening mapping services. He has been heavily immersed in big data
      Earth Observation processing & analysis with experience as a Student
      Assistant at the Danish National Space Institute, DTU Space. Creating
      value for society and helping reach the SDGs is a great motivator,
      specifically in terms of goals 13, Climate Change, and 7, Sustainable
      Energy.`}
        email={"stokholm@space.dtu.dk"}
      />

      <MyCard
        name={"Malte Hviid-Magnussen"}
        subtitle={`Studying to get an Academy Profession Degree in
        Computer Science at Cphbusiness Lyngby`}
        text={`Malte will be mainly
        responsible for building the online platform, both in concern to system
        development and front/back end development. Maltes skills are in
        software programming: Java, JavaScript, React, and SQL. Malte is
        motivated by a chance to apply his skills in a real-world project and
        wanting to collaborate with his partners.`}
        email={`maltehviidmagnussen@gmail.com`}
      />
    </>
  );
};

const MyCard = ({ name, subtitle, text, email, image }) => {
  const link = "mailto:" + email;
  // For card image:     <Card.Img variant="top" src="image" />

  return (
    <>
      <Card style={{ width: "48rem", marginBottom: "20px" }}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
          <Card.Text>{text}</Card.Text>
          <Card.Link href={link}>{email}</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default TeamPage;
