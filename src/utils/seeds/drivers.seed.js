const mongoose = require("mongoose");
const Driver = require('../../api/models/drivers.model');
const { DB_URL } = require('../database/db');
require('dotenv').config();
const connectDb = require("../database/db");

const drivers = [
    {
        name: "Max Verstappen",
        team: "Red Bull Racing",
        country: "Netherlands",
        podiums: "78",
        points: "2036.5",
        grand_prix: "164",
        world_champions: "2",
        highest_race_finish: "1 (x36)",
        highest_grid_position: "1",
        birth_date: "30/09/1997",
        img: "",
    },
    {
        name: "Checo Perez",
        team: "Red Bull Racing",
        country: "Mexico",
        podiums: "27",
        points: "1219",
        grand_prix: "237",
        world_champions: "N/A",
        highest_race_finish: "1 (x4)",
        highest_grid_position: "1",
        birth_date: "26/01/1990",
        img: "",
    },
    {
        name: "Carlos Sainz",
        team: "Ferrari",
        country: "Spain",
        podiums: "15",
        points: "794.5",
        grand_prix: "164",
        world_champions: "N/A",
        highest_race_finish: "1 (x1)",
        highest_grid_position: "1",
        birth_date: "01/09/1994",
        img: "",
    },
    {
        name: "Charles Leclerc",
        team: "Ferrari",
        country: "Monaco",
        podiums: "24",
        points: "868",
        grand_prix: "104",
        world_champions: "N/A",
        highest_race_finish: "1 (x5)",
        highest_grid_position: "1",
        birth_date: "16/10/1997",
        img: "",
    },
    {
        name: "Lewis Hamilton",
        team: "Mercedes",
        country: "United Kingdom",
        podiums: "191",
        points: "4415.5",
        grand_prix: "311",
        world_champions: "7",
        highest_race_finish: "1 (x103)",
        highest_grid_position: "1",
        birth_date: "07/01/1985",
        img: "",
    },
    {
        name: "George Russell",
        team: "Mercedes",
        country: "United Kingdom",
        podiums: "9",
        points: "300",
        grand_prix: "83",
        world_champions: "N/A",
        highest_race_finish: "1 (x1)",
        highest_grid_position: "1",
        birth_date: "15/02/1998",
        img: "",
    },
    {
        name: "Fernando Alonso",
        team: "Aston Martin",
        country: "Spain",
        podiums: "99",
        points: "2076",
        grand_prix: "359",
        world_champions: "2",
        highest_race_finish: "1 (x32)",
        highest_grid_position: "1",
        birth_date: "29/07/1981",
        img: "",
    },
    {
        name: "Lance Stroll",
        team: "Aston Martin",
        country: "Canada",
        podiums: "2",
        points: "202",
        grand_prix: "123",
        world_champions: "N/A",
        highest_race_finish: "3 (x3)",
        highest_grid_position: "1",
        birth_date: "29/10/1998",
        img: "",
    },
    {
        name: "Lando Norris",
        team: "McLaren",
        country: "United Kingdom",
        podiums: "6",
        points: "428",
        grand_prix: "83",
        world_champions: "N/A",
        highest_race_finish: "2 (x2)",
        highest_grid_position: "1",
        birth_date: "13/11/1999",
        img: "",
    },
    {
        name: "Oscar Piastri",
        team: "McLaren",
        country: "Australia",
        podiums: "N/A",
        points: "0",
        grand_prix: "1",
        world_champions: "N/A",
        highest_race_finish: "0 (x0)",
        highest_grid_position: "18",
        birth_date: "06/04/2001",
        img: "",
    },
    {
        name: "Valtteri Bottas",
        team: "Alfa Romeo",
        country: "Finland",
        podiums: "67",
        points: "1791",
        grand_prix: "201",
        world_champions: "N/A",
        highest_race_finish: "1 (x10)",
        highest_grid_position: "1",
        birth_date: "28/08/1989",
        img: "",
    },
    {
        name: "Zhou Guanyu",
        team: "Alfa Romeo",
        country: "China",
        podiums: "N/A",
        points: "6",
        grand_prix: "23",
        world_champions: "N/A",
        highest_race_finish: "8 (x1)",
        highest_grid_position: "9",
        birth_date: "30/05/1999",
        img: "",
    },
    {
        name: "Pierre Gasly",
        team: "Alpine",
        country: "France",
        podiums: "3",
        points: "334",
        grand_prix: "109",
        world_champions: "N/A",
        highest_race_finish: "1 (x1)",
        highest_grid_position: "2",
        birth_date: "07/02/1996",
        img: "",
    },
    {
        name: "Esteban Ocon",
        team: "Alpine",
        country: "France",
        podiums: "2",
        points: "364",
        grand_prix: "112",
        world_champions: "N/A",
        highest_race_finish: "1 (x1)",
        highest_grid_position: "3",
        birth_date: "17/09/1996",
        img: "",
    },
    {
        name: "Nick De Vries",
        team: "AlphaTauri",
        country: "Netherlands",
        podiums: "N/A",
        points: "2",
        grand_prix: "2",
        world_champions: "N/A",
        highest_race_finish: "9 (x1)",
        highest_grid_position: "8",
        birth_date: "06/02/1995",
        img: "",
    },
    {
        name: "Yuki Tsunoda",
        team: "AlphaTauri",
        country: "Japan",
        podiums: "N/A",
        points: "44",
        grand_prix: "45",
        world_champions: "N/A",
        highest_race_finish: "4 (x1)",
        highest_grid_position: "7",
        birth_date: "11/05/2000",
        img: "",
    },
    {
        name: "Alexander Albon",
        team: "Williams",
        country: "Thailand",
        podiums: "2",
        points: "202",
        grand_prix: "60",
        world_champions: "N/A",
        highest_race_finish: "3 (x2)",
        highest_grid_position: "4",
        birth_date: "23/03/1996",
        img: "",
    },
    {
        name: "Logan Sargeant",
        team: "Williams",
        country: "United States",
        podiums: "N/A",
        points: "0",
        grand_prix: "1",
        world_champions: "N/A",
        highest_race_finish: "12 (x1)",
        highest_grid_position: "16",
        birth_date: "31/12/2001",
        img: "",
    },
    {
        name: "Nico Hulkenberg",
        team: "Haas F1 Team",
        country: "Germany",
        podiums: "N/A",
        points: "521",
        grand_prix: "185",
        world_champions: "N/A",
        highest_race_finish: "4 (x3)",
        highest_grid_position: "1",
        birth_date: "19/08/1987",
        img: "",
    },
    {
        name: "Kevin Magnussen",
        team: "Haas F1 Team",
        country: "Denmark",
        podiums: "1",
        points: "183",
        grand_prix: "143",
        world_champions: "N/A",
        highest_race_finish: "2 (x1)",
        highest_grid_position: "4",
        birth_date: "05/10/1992",
        img: "",
    },
];

connectDb()
.then(async () => {
    const allDrivers = await Driver.find().lean();

    if (!allDrivers.length){
        console.log("[seed]: No drivers found, continuing...");
    } else {
        console.log(`[seed]: ${allDrivers.length} driver(ies) found.`);
        await Driver.collection.drop();
        console.log("[seed]: Collection 'drivers' succesfully removed");
    }
})
.catch((error) => console.log("There has been an error removing the drivers ---> " + error))
.then (async () => {
    await Driver.insertMany(drivers)
    console.log("[seed]: New drivers succesfully uploaded to the database");
})
.catch((error) => console.log("There has been an error inserting the drivers ---> " + error))
.finally(() => mongoose.disconnect());