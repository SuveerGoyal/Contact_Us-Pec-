let soc_ids = ["Heads", "Cultural", "Technical", "Sports"];
toggle = (idx) => {
    expandableItems= document.querySelectorAll(".expandable-item")
    for(let j=0;j<soc_ids.length;j++){
        if(j!=idx && expandableItems[j].classList.contains("active") ){
            expandableItems[j].classList.toggle("active")

        }
    }
    expandableItems[idx].classList.toggle("active")
};

let heads = [
    {
        Position: "CCS",
        Name: "Ishita Arora",
        Phone: "",
        Email: "",
        Sid: "18103130",
    },
    {
        Position: "JCCS",
        Name: "Nikhil Mehta",
        Phone: "",
        Email: "",
        Sid: "19105012",
    },
    {
        Position: "CTS",
        Name: "Rohit Verma",
        Phone: "",
        Email: "",
        Sid: "18102105",
    },
    {
        Position: "JCTS",
        Name: "Harshit Singh",
        Phone: "",
        Email: "",
        Sid: "19104040",
    },
];

let cultutal = [
    {
        Position: "Secretary Rotaract Club",
        Name: "Niaz Sikander Singh",
        Phone: "",
        Email: "",
        Sid: "18101011",
    },
    {
        Position: "Joint Secretary Rotaract Club",
        Name: "Sakshi",
        Phone: "",
        Email: "",
        Sid: "19101007",
    },
    {
        Position: "Secretary Projection and Design Club",
        Name: "M Sai Satya Srikar",
        Phone: "",
        Email: "",
        Sid: "18101026",
    },
    {
        Position: "Joint Secretary Projection and Design Club",
        Name: "Yatharth Bansal",
        Phone: "",
        Email: "",
        Sid: "18109042",
    },
    {
        Position: "Secretary Music Club",
        Name: "Aaron Newton",
        Phone: "",
        Email: "",
        Sid: "18105054",
    },
    {
        Position: "Joint Secretary Music Club",
        Name: "Riteek Bhatt",
        Phone: "",
        Email: "",
        Sid: "18107021",
    },
    {
        Position: "Cheif Editor English Editorial Board",
        Name: "Arshi Aggarwal",
        Phone: "",
        Email: "",
        Sid: "18103098",
    },
    {
        Position: "Commentator English Editorial Board",
        Name: "Simran Tyagi",
        Phone: "",
        Email: "",
        Sid: "18101021",
    },
    {
        Position: "Cheif Editor Hindi Editorial Board",
        Name: "Harshit Dhillon",
        Phone: "",
        Email: "",
        Sid: "18105089",
    },
    {
        Position: "Commentator Hindi Editorial Board",
        Name: "Anupam",
        Phone: "",
        Email: "",
        Sid: "18105129",
    },
    {
        Position: "Cheif Editor Punjabi Editorial Board",
        Name: "Dhananjay Thakur",
        Phone: "",
        Email: "",
        Sid: "18105071",
    },
    {
        Position: "JCommentator Punjabi Editorial Board",
        Name: "Tanvir Singh",
        Phone: "",
        Email: "",
        Sid: "18103061",
    },
    {
        Position: "Secretary SAASC",
        Name: "Srishti Guglani",
        Phone: "",
        Email: "",
        Sid: "18105126",
    },
    {
        Position: "Joint Secretary SAASC",
        Name: "Harnoor Singh Sethi",
        Phone: "",
        Email: "",
        Sid: "18109032",
    },
    {
        Position: "Secretary Dramatics",
        Name: "Sahil Pillania",
        Phone: "",
        Email: "",
        Sid: "18107019",
    },
    {
        Position: "Joint Secretary Dramatics",
        Name: "Girish Kumar",
        Phone: "",
        Email: "",
        Sid: "18107107",
    },
    {
        Position: "Secretary Art & Photography Club",
        Name: "Diya Sharma",
        Phone: "",
        Email: "",
        Sid: "18104098",
    },
    {
        Position: "Joint Secretary Art & Photography Club",
        Name: "Rajneesh Manhas",
        Phone: "",
        Email: "",
        Sid: "18101024",
    },
    {
        Position: "Secretary NSS",
        Name: "Jaideep Singh",
        Phone: "",
        Email: "",
        Sid: "18103055",
    },
    {
        Position: "Joint Secretary NSS",
        Name: "Chirag Mittal",
        Phone: "",
        Email: "",
        Sid: "18104118",
    },
    {
        Position: "Secretary Student Councelling Cell",
        Name: "Jasmeen Bansal",
        Phone: "",
        Email: "",
        Sid: "18103016",
    },
    {
        Position: "Joint Secretary Student Councelling Cell",
        Name: "Devansh Anand Tiwari",
        Phone: "",
        Email: "",
        Sid: "18104087",
    },
    {
        Position: "Secretary NCC",
        Name: "Shresth Suman",
        Phone: "",
        Email: "",
        Sid: "18107114",
    },
    {
        Position: "Joint Secretary NCC",
        Name: "Harsh Pundir",
        Phone: "",
        Email: "",
        Sid: "18105117",
    },
    {
        Position: "Secretary EIC",
        Name: "Prajwal  Rawat",
        Phone: "",
        Email: "",
        Sid: "18105015",
    },
    {
        Position: "Joint Secretary EIC",
        Name: "Rishav Arora",
        Phone: "",
        Email: "",
        Sid: "18104073",
    },
    {
        Position: "Secretary WEC",
        Name: "Shriya Dayal",
        Phone: "",
        Email: "",
        Sid: "18102051",
    },
    {
        Position: "Joint Secretary WEC",
        Name: "Gaurav Singla",
        Phone: "",
        Email: "",
        Sid: "18104062",
    },
    {
        Position: "Secretary CIM",
        Name: "Vivekanand Kunnath",
        Phone: "",
        Email: "",
        Sid: "18107068",
    },
    {
        Position: "Joint Secretary CIM",
        Name: "Anmol Kaushal",
        Phone: "",
        Email: "",
        Sid: "18105125",
    },
    {
        Position: "Joint Secretary CIM",
        Name: "Divya Dhananjay",
        Phone: "",
        Email: "",
        Sid: "18107070",
    },
];

let technical = [
    {
        Position: "Secretary IIM",
        Name: "Harminder Kaur",
        Phone: "",
        Email: "",
        Sid: "18108043",
    },
    {
        Position: "Joint Secretary IIM",
        Name: "Sukhmani",
        Phone: "",
        Email: "",
        Sid: "19108038",
    },
    {
        Position: "Secretary IGS",
        Name: "Shagun Garg",
        Phone: "",
        Email: "",
        Sid: "18102105",
    },
    {
        Position: "Joint Secretary IGS",
        Name: "Jaipreet Nagpal",
        Phone: "",
        Email: "",
        Sid: "19102083",
    },
    {
        Position: "Secretary SESI",
        Name: "Nikhil Aggarwal",
        Phone: "",
        Email: "",
        Sid: "18104072",
    },
    {
        Position: "Joint Secretary SESI",
        Name: "Utpal Semwal",
        Phone: "",
        Email: "",
        Sid: "19104066",
    },
    {
        Position: "Secretary SAE",
        Name: "Nikunj Sharma",
        Phone: "",
        Email: "",
        Sid: "18107053",
    },
    {
        Position: "Joint Secretary SAE",
        Name: "Nehul Narang",
        Phone: "",
        Email: "",
        Sid: "18107103",
    },
    {
        Position: "Secretary IEEE",
        Name: "Ameesh Jodan",
        Phone: "",
        Email: "",
        Sid: "18104038",
    },
    {
        Position: "Joint Secretary IEEE",
        Name: "Sharone",
        Phone: "",
        Email: "",
        Sid: "18105093",
    },
    {
        Position: "Secretary SME",
        Name: "Vivek Sharma",
        Phone: "",
        Email: "",
        Sid: "18109004",
    },
    {
        Position: "Joint Secretary SME",
        Name: "Ojas Rastogi",
        Phone: "",
        Email: "",
        Sid: "18109002",
    },
    {
        Position: "Secretary ASPS",
        Name: "Fenil Kumar",
        Phone: "",
        Email: "",
        Sid: "18101017",
    },
    {
        Position: "Joint Secretary ASPS",
        Name: "K Payal",
        Phone: "",
        Email: "",
        Sid: "18101034",
    },
    {
        Position: "Secretary ASCE",
        Name: "Sarthak Randev",
        Phone: "",
        Email: "",
        Sid: "18109004",
    },
    {
        Position: "Joint Secretary ASCE",
        Name: "Ojas Rastogi",
        Phone: "",
        Email: "",
        Sid: "18109002",
    },
    {
        Position: "Secretary ACM-CSS",
        Name: "Nishant Puri",
        Phone: "",
        Email: "",
        Sid: "18103019",
    },
    {
        Position: "Joint Secretary ACM-CSS",
        Name: "Parikh Goyal",
        Phone: "",
        Email: "",
        Sid: "18103023",
    },
    {
        Position: "Secretary ASME",
        Name: "Mayank",
        Phone: "",
        Email: "",
        Sid: "18105119",
    },
    {
        Position: "Joint Secretary ASME",
        Name: "Kashish Jindal",
        Phone: "",
        Email: "",
        Sid: "18107099",
    },
    {
        Position: "Secretary ATS",
        Name: "Anmol Aulakh",
        Phone: "",
        Email: "",
        Sid: "18101013",
    },
    {
        Position: "Joint Secretary ATS",
        Name: "Shivangar Bali",
        Phone: "",
        Email: "",
        Sid: "18101005",
    },
    {
        Position: "Secretary Robotics",
        Name: "Karanvir Singh",
        Phone: "",
        Email: "",
        Sid: "18107023",
    },
    {
        Position: "Joint Secretary Robotics",
        Name: "Ashishk Adhikari",
        Phone: "",
        Email: "",
        Sid: "18103101",
    },
    {
        Position: "Joint Secretary Robotics",
        Name: "Udit Narayan Nohria",
        Phone: "",
        Email: "",
        Sid: "18105034",
    },
];

let sports = [
    {
        Position: "Secretary",
        Name: "Hritik Gupta",
        Phone: "",
        Email: "",
        Sid: "18108039",
    },
    {
        Position: "Secretary",
        Name: "K Payal",
        Phone: "",
        Email: "",
        Sid: "18101034",
    },
];

let societies = [heads, cultutal, technical, sports];

for (let j = 0; j < societies.length; j++) {
    let filling = "";

    for (let i = 0; i < societies[j].length; i++) {
        filling += `
  <div class="box">
    <div class="front">
            <div class="center">
                <h1>{0}</h1>
            </div>
    </div>
    <div class="back">
        <div class="row">
                <h1>{1}</h1>
        </div>
        <div class="row">
            <span>{2}</span>
            <span><a href="mailto:{3}">{3}</a></span>
            <span>{4}</span>
        </div>
    </div>
  </div>
    `
            .replace("{0}", societies[j][i].Position)
            .replace("{1}", societies[j][i].Name)
            .replace("{2}", societies[j][i].Phone)
            .replace("{3}", societies[j][i].Position)
            .replace("{4}", societies[j][i].Sid);
    }

    document.getElementById(soc_ids[j]).innerHTML = filling;
}
