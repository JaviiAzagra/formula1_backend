const mongoose = require("mongoose");
const Team = require('../../api/models/teams.model');
const { DB_URL } = require('../database/db');
require('dotenv').config();
const connectDb = require("../database/db");

const teams = [
    {
        name: "Red Bull Racing",
        full_name: "Oracle Red Bull Racing",
        base:"Milton Keynes, United Kingdom",
        team_chief:"Christian Horner",
        team_technical:"Pierre Waché",
        chassis:"RB19",
        power_unit:"Honda RBPT",
        entry:"1997",
        img:"https://www.formula1.com/content/fom-website/en/teams/Red-Bull-Racing/_jcr_content/logo.img.jpg/1645620474276.jpg", 
        img_two:"", 
        img_three:"", 
        img_four:"", 
    },
    {
        name: "Ferrari",
        full_name: "Scuderia Ferrari",
        base:"Maranello, Italy",
        team_chief:"Frédéric Vasseur",
        team_technical:"Enrico Cardile / Enrico Gualtieri",
        chassis:"SF-23",
        power_unit:"Ferrari",
        entry:"	1950",
        img:"", 
        img_two:"", 
        img_three:"", 
        img_four:"",  
    },
    {
        name: "Mercedes",
        full_name: "Mercedes-AMG PETRONAS F1 Team",
        base:"Brackley, United Kingdom",
        team_chief:"Toto Wolff",
        team_technical:"Mike Elliott",
        chassis:"W14",
        power_unit:"Mercedes",
        entry:"1970",
        img:"", 
        img_two:"", 
        img_three:"", 
        img_four:"", 
    },
    {
        name: "Aston Martin",
        full_name: "Aston Martin Aramco Cognizant F1 Team",
        base: "Silverstone, United Kingdom",
        team_chief:"Mike Krack",
        team_technical:"Andrew Green",
        chassis:"AMR23",
        power_unit:"Mercedes",
        entry:"2018",
        img:"", 
        img_two:"", 
        img_three:"", 
        img_four:"", 
    },
    {
        name: "McLaren",
        full_name: "McLaren F1 Team",
        base:"Woking, United Kingdom",
        team_chief:"Andrea Stella",
        team_technical:"James Key",
        chassis:"MCL60",
        power_unit:"Mercedes",
        entry:"1966",
        img:"", 
        img_two:"", 
        img_three:"", 
        img_four:"", 
    },
    {
        name: "Alfa Romeo",
        full_name: "Alfa Romeo F1 Team Stake",
        base:"Hinwil, Switzerland",
        team_chief:"Alessandro Alunni Bravi",
        team_technical:"Jan Monchaux",
        chassis:"C43",
        power_unit:"Ferrari",
        entry:"1993",
        img:"", 
        img_two:"", 
        img_three:"", 
        img_four:"",  
    },
    {
        name: "Alpine",
        full_name: "BWT Alpine F1 Team",
        base:"Enstone, United Kingdom",
        team_chief:"Otmar Szafnauer",
        team_technical:"Pat Fry",
        chassis:"A523",
        power_unit:"Renault",
        entry:"1986",
        img:"", 
        img_two:"", 
        img_three:"", 
        img_four:"", 
    },
    {
        name: "AlphaTauri",
        full_name: "Scuderia AlphaTauri",
        base:"Faenza, Italy",
        team_chief:"Franz Tost",
        team_technical:"Jody Egginton",
        chassis: "AT04",
        power_unit:"Honda RBPT",
        entry:"1985",
        img:"", 
        img_two:"", 
        img_three:"", 
        img_four:"", 
    },
    {
        name: "Williams",
        full_name: "Williams Racing",
        base:"Grove, United Kingdom",
        team_chief:"James Vowles",
        team_technical:"TBC",
        chassis:"FW45",
        power_unit:"Mercedes",
        entry:"1978",
        img:"", 
        img_two:"", 
        img_three:"", 
        img_four:"", 
    },
    {
        name: "Hass F1 Team",
        full_name: "MoneyGram Haas F1 Team",
        base:"Kannapolis, United States",
        team_chief:"Guenther Steiner",
        team_technical:"Simone Resta",
        chassis:"VF-23",
        power_unit:"Ferrari",
        entry:"2016",
        img:"", 
        img_two:"", 
        img_three:"", 
        img_four:"", 
    },
    
];

connectDb()
.then(async () => {
    const allTeams = await Team.find().lean();

    if (!allTeams.length){
        console.log("[seed]: No teams found, continuing...");
    } else {
        console.log(`[seed]: ${allTeams.length} team(ies) found.`);
        await Team.collection.drop();
        console.log("[seed]: Collection 'teams' succesfully removed");
    }
})
.catch((error) => console.log("There has been an error removing the teams ---> " + error))
.then (async () => {
    await Team.insertMany(teams)
    console.log("[seed]: New teams succesfully uploaded to the database");
})
.catch((error) => console.log("There has been an error inserting the teams ---> " + error))
.finally(() => mongoose.disconnect());