const mongoose = require("mongoose");
const Team = require("../../api/models/teams.model");
const { DB_URL } = require("../database/db");
require("dotenv").config();
const connectDb = require("../database/db");

const teams = [
  {
    name: "Red Bull Racing",
    full_name: "Oracle Red Bull Racing",
    base: "Milton Keynes, United Kingdom",
    team_chief: "Christian Horner",
    team_technical: "Pierre Waché",
    chassis: "RB19",
    power_unit: "Honda RBPT",
    entry: "1997",
    drivernameone: "Max Verstappen",
    drivernamesecond: "Checo Perez",
    driverimgone: "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678227891/formula1/cpl4zd4ykl2madmc8prf.png",
    driverimgsecond: "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678227903/formula1/sglbw3sgnyltd0yalzs7.png",
    img: "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678322776/formula1/dasic4bgik8r6wrd2thy.png",
    imgfour: "",
    imgthree: "",
    imgtwo:
      "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678289649/formula1/redbull_hzme2m.jpg",
  },
  {
    name: "Ferrari",
    full_name: "Scuderia Ferrari",
    base: "Maranello, Italy",
    team_chief: "Frédéric Vasseur",
    team_technical: "Enrico Cardile / Enrico Gualtieri",
    chassis: "SF-23",
    power_unit: "Ferrari",
    entry: "1950",
    drivernameone: "Charles Leclerc",
    drivernamesecond: "Carlos Sainz",
    driverimgone: "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678227927/formula1/enic4h6im80vm9viup5o.png",
    driverimgsecond: "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678227914/formula1/yinfn8latcrulgelkzxy.png",
    img: "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678288849/formula1/vjkzi4hwooqknlv1czek.png",
    imgfour: "",
    imgthree: "",
    imgtwo:
      "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678289649/formula1/ferrari_h3ipof.jpg",
  },
  {
    name: "Mercedes",
    full_name: "Mercedes-AMG PETRONAS F1 Team",
    base: "Brackley, United Kingdom",
    team_chief: "Toto Wolff",
    team_technical: "Mike Elliott",
    chassis: "W14",
    power_unit: "Mercedes",
    entry: "1970",
    drivernameone: "Lewis Hamilton",
    drivernamesecond: "George Russell",
    driverimgone: "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678227937/formula1/jb9behb1kmex39gxdwjy.png",
    driverimgsecond: "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678227946/formula1/z0vvwbxluw5pq70ptq0i.png",
    img: "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678288862/formula1/ofgndab4qccpmd0yfmyt.png",
    imgfour: "",
    imgthree: "",
    imgtwo:
      "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678289649/formula1/mercedes_zfiax6.jpg",
  },
  {
    name: "Aston Martin",
    full_name: "Aston Martin Aramco Cognizant F1 Team",
    base: "Silverstone, United Kingdom",
    team_chief: "Mike Krack",
    team_technical: "Andrew Green",
    chassis: "AMR23",
    power_unit: "Mercedes",
    entry: "2018",
    drivernameone: "Fernando Alonso",
    drivernamesecond: "Lance Stroll",
    driverimgone: "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678227954/formula1/etmbitf9foaa8ryujuew.png",
    driverimgsecond: "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678227967/formula1/qwubryzkvrdkqgkgtqbl.png",
    img: "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678288872/formula1/sao1dhnqbys2h83oyxdc.png",
    imgfour: "",
    imgthree: "",
    imgtwo:
      "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678289649/formula1/aston_hfxltg.jpg",
  },
  {
    name: "McLaren",
    full_name: "McLaren F1 Team",
    base: "Woking, United Kingdom",
    team_chief: "Andrea Stella",
    team_technical: "James Key",
    chassis: "MCL60",
    power_unit: "Mercedes",
    entry: "1966",
    drivernameone: "Lando Norris",
    drivernamesecond: "Oscar Piastri",
    driverimgone: "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678227978/formula1/lxhkrziazszperpukfm1.png",
    driverimgsecond: "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678227988/formula1/wiflvpj8ovrv2ydy2v4a.png",
    img: "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678288880/formula1/bizxsybcvpxgsmq3fuv2.png",
    imgfour: "",
    imgthree: "",
    imgtwo:
      "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678289649/formula1/mclaren_oijh3z.jpg",
  },
  {
    name: "Alfa Romeo",
    full_name: "Alfa Romeo F1 Team Stake",
    base: "Hinwil, Switzerland",
    team_chief: "Alessandro Alunni Bravi",
    team_technical: "Jan Monchaux",
    chassis: "C43",
    power_unit: "Ferrari",
    entry: "1993",
    drivernameone: "Valtteri Bottas",
    drivernamesecond: "Zhou Guanyu",
    driverimgone: "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678227997/formula1/q5hixcfsk9fesdunfvuu.png",
    driverimgsecond: "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678228006/formula1/xb6kndk7mglyhnvtgrch.png",
    img: "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678288892/formula1/bjjrlrtblgoy2ql0zgy8.png",
    imgfour: "",
    imgthree: "",
    imgtwo:
      "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678289649/formula1/alfa_xyysni.jpg",
  },
  {
    name: "Alpine",
    full_name: "BWT Alpine F1 Team",
    base: "Enstone, United Kingdom",
    team_chief: "Otmar Szafnauer",
    team_technical: "Pat Fry",
    chassis: "A523",
    power_unit: "Renault",
    entry: "1986",
    drivernameone: "Pierre Gasly",
    drivernamesecond: "Esteban Ocon",
    driverimgone: "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678228013/formula1/pcxnnebzyamkjpy1u9rt.png",
    driverimgsecond: "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678228020/formula1/jynl4joq55rfcmz62c8o.png",
    img: "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678288898/formula1/anbj7cilosy25qlyuzht.png",
    imgfour: "",
    imgthree: "",
    imgtwo:
      "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678289649/formula1/alpine_y8z7lf.jpg",
  },
  {
    name: "AlphaTauri",
    full_name: "Scuderia AlphaTauri",
    base: "Faenza, Italy",
    team_chief: "Franz Tost",
    team_technical: "Jody Egginton",
    chassis: "AT04",
    power_unit: "Honda RBPT",
    entry: "1985",
    drivernameone: "Yuki Tsunoda",
    drivernamesecond: "Nick De Vries",
    driverimgone: "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678228047/formula1/vbuxwhqbtbchvpducuys.png",
    driverimgsecond: "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678228033/formula1/nshjcqlk4sty0szgupub.png",
    img: "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678288907/formula1/mbngbt9ggtsrlpcooujg.png",
    imgfour: "",
    imgthree: "",
    imgtwo:
      "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678289650/formula1/alpha_ghkohl.jpg",
  },
  {
    name: "Williams",
    full_name: "Williams Racing",
    base: "Grove, United Kingdom",
    team_chief: "James Vowles",
    team_technical: "TBC",
    chassis: "FW45",
    power_unit: "Mercedes",
    entry: "1978",
    drivernameone: "Alexander Albon",
    drivernamesecond: "Logan Sargeant",
    driverimgone: "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678228059/formula1/w657igpdplodn2alpe6h.png",
    driverimgsecond: "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678228070/formula1/wh4ga2sroltsf7mofzdy.png",
    img: "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678288918/formula1/omdfszj6jvjw9b8eaf6q.png",
    imgfour: "",
    imgthree: "",
    imgtwo:
      "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678289649/formula1/williams_hxzoop.jpg",
  },
  {
    name: "Hass F1 Team",
    full_name: "MoneyGram Haas F1 Team",
    base: "Kannapolis, United States",
    team_chief: "Guenther Steiner",
    team_technical: "Simone Resta",
    chassis: "VF-23",
    power_unit: "Ferrari",
    entry: "2016",
    drivernameone: "Kevin Magnussen",
    drivernamesecond: "Nico Hulkenberg",
    driverimgone: "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678290043/formula1/c4iosxpoueseazfiqy3k.png",
    driverimgsecond: "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678228080/formula1/qmenlxblr3xkyaolalxh.png",
    img: "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678288925/formula1/myjprbtplnti38b7zpbl.png",
    imgfour: "",
    imgthree: "",
    imgtwo:
      "https://res.cloudinary.com/dj0q4vclw/image/upload/v1678289649/formula1/hass_qhfesb.jpg",
  },
];

connectDb()
  .then(async () => {
    const allTeams = await Team.find().lean();

    if (!allTeams.length) {
      console.log("[seed]: No teams found, continuing...");
    } else {
      console.log(`[seed]: ${allTeams.length} team(ies) found.`);
      await Team.collection.drop();
      console.log("[seed]: Collection 'teams' succesfully removed");
    }
  })
  .catch((error) =>
    console.log("There has been an error removing the teams ---> " + error)
  )
  .then(async () => {
    await Team.insertMany(teams);
    console.log("[seed]: New teams succesfully uploaded to the database");
  })
  .catch((error) =>
    console.log("There has been an error inserting the teams ---> " + error)
  )
  .finally(() => mongoose.disconnect());
