export default function AboutHistory({year}: {year: number}) {
    // NOTE: To add a new year's exec + director team, only the first member
    // needs the title next to their name in the arrays:
    // e.g. [["Co-Presidents", "Gabriel Novak"], ["Nabriel Govak"]]
    // As seen above, the second co-pres doesn't need the title next to their name

    // TO-DO: Refactor this component by moving the buttonData to another file
    // and exporting it here.
    const buttonData = [
        {key: 2026, title: "Executives", members: [["Co-Presidents", "Qiandai Huang"], ["Patrick Sun"], ["Secretary", "Joanna Wong"], ["Treasurer", "Ralph Capricho"], ["Arc Delegate", "John Louis Policarpio"], ["GEDI Officer", "Hayden Ho"], ["Vice President (External)", "Ethan Gu"], ["Vice President (Internal)", "Darien Trinh"], ["Vice President (Technical)", "Mingyuan Xu"]]},
        {key: 2026, title: "External Directors", members: [["Careers", "Joseph Nguyen"], ["Justin Yang"], ["Angelina He"], ["Events", "Danielle Weng"], ["Rowena Wang"], ["Antonio Jimenez"], ["Outreach", "Aria Zhang"], ["Romeo Abran"], ["Richard Zhang"], ["Socials", "Jennifer Su"], ["Sophia Chu"], ["Ryne Echaluse"]]},
        {key: 2026, title: "Internal Directors", members: [["Creative", "Ashley Lin"], ["Lauren Shin"], ["Eric Li"], ["HR", "Emma Bu"], ["Christopher Szeto"], ["Victoria Huang"], ["Marketing", "Jayden Ho"], ["Lana Ong"], ["Yiteng Li"], ["Media", "Summer Mannings-Lees"], ["Christian Selvaratnam"], ["Kelly Tran"]]},
        {key: 2026, title: "Technical Directors", members: [["Competitions", "Kendra Dang"], ["Jason Luo-Xia"], ["Jessica Gao"], ["Digital", "Timothy Lai"], ["Mimi Vu"], ["Ziqi Chen"], ["Education", "Lucas Li"], ["Abtin Moghadam"], ["Sophia Pek"], ["IT", "Tinlone Cheng"], ["Louis Lim"], ["Dorothy Koo"], ["Platforms", "Andrew Zhang"], ["Dylan Zhang"]]},

        {key: 2025, title: "Executives", members: [["Co-Presidents", "Joyce He"], ["Susie Xia"], ["Secretary", "Zitian Qin"], ["Treasurer", "Lisa Lin"], ["Arc Delegate", "Leo Maisnam"], ["GEDI Officer", "Aryan Chauhan"], ["Vice President (External)", "Emma Nguyen"], ["Vice President (Internal)", "Jordan Djamaan"], ["Vice President (Technical)", "JJ Roberts-White"]]},
        {key: 2025, title: "External Directors", members: [["Careers", "Nathan Lin"], ["Michael Liu"], ["Angel Yu"], ["Events", "Lee Torr Chin"], ["Ethan Gu"], ["Kayla Lee"], ["Outreach", "Qiandai Huang"], ["Hayden Ho"], ["Liem Phan"], ["Socials", "Patrick Sun"], ["Makeen Alaeddin"], ["April Choi"]]},
        {key: 2025, title: "Internal Directors", members: [["Creative", "Jasmine Chiu"], ["Louis Policarpio"], ["Ralph Capricho"], ["HR", "Darien Trinh"], ["Isabella Tan"], ["Jenny Tran"], ["Marketing", "Sienna Gunawan"], ["Vedant Vaghela"], ["Joanna Wong"], ["Media", "Hae Kim"], ["Bella Li"], ["Christine Park"]]},
        {key: 2025, title: "Technical Directors", members: [["Competitions", "Luke Zeng"], ["Xuanyu Liu"], ["Valerie Chan"], ["Education", "Erix Xu"], ["Erica Lin"], ["Andrew Zhang"], ["IT", "Dylan Zhang"], ["Justine Kim"], ["Digital", "Jasmine Chia"], ["Aaron Tian"]]},

        {key: 2024, title: "Executives", members: [["Co-Presidents", "Elizabeth Zhu Chan"], ["Lesley Lu"], ["Treasurer", "Justin Son"], ["Secretary", "Ivan Chan"], ["Arc Delegate", "Sophie Khov"], ["GEDI Officer", "Catherine Kim"], ["Vice President (External)", "Nicole Jiang"], ["Vice President (Internal)", "Amy Liu"], ["Vice President (Technical)", "Matthew Lim"]]},
        {key: 2024, title: "External Directors", members: [["Careers", "Eric Kang"], ["Jasmine Xian"], ["Max Lee"], ["Events", "Emma Nguyen"], ["Jalaj Jain"], ["Jenny Lee"], ["Outreach", "Joyce He"], ["Sapphire Wildie"], ["Socials", "Davis Lim"], ["Jennifer Yu"], ["Susie Xia"]]},
        {key: 2024, title: "Internal Directors", members: [["Creative", "Anna Wang"], ["Jordan Dijamaan"], ["Shabinda Sarkaria"], ["HR", "Aryan Chauhan"], ["Edwin Tang"], ["Jasmine Guan"], ["Marketing", "Aaron Lee"], ["Lisa Lin"], ["Zitian Qin"], ["Media", "Dylan Hu"], ["Gloria Xi"], ["Leo Ng Maisnam"]]},
        {key: 2024, title: "Technical Directors", members: [["Competitions", "Aliff Azlan"], ["Haibing Wang"], ["Diego Untalan"], ["Education", "Alina Jin"], ["JJ Roberts-White"], ["Liam Smith"], ["IT", "Derek Xu"], ["Dominic Cheung"], ["Online", "Amy Tian"], ["Brandon Tan"]]},

        {key: 2023, title: "Executives", members: [["Co-Presidents", "Eliza Lee"], ["Amanda Lu"], ["Treasurer", "Melanie Wu"], ["Arc Delegate", "Rebecca Hsu"], ["GEDI Officer", "Priscilla Soo"], ["Vice President (External)", "Felix Cao"], ["Vice President (Internal)", "Sophie Liu"], ["Vice President (Development)", "Hanyuan Li"], ["Angella Pham"]]},
        {key: 2023, title: "External Directors", members: [["Careers", "Aditi Sharma"], ["Fiona Hu"], ["Liz Santoso"], ["Varun Penumalli"], ["Competitions", "Hui SHan Pan"], ["Jason Liu"], ["Leo Lin"], ["Events", "Justin Son"], ["Nicole Jian"], ["Spencer Wong"], ["Socials", "Anish Sanghvi"], ["Ella Huang"], ["Sophia Khov"], ["Outreach", "Aarav Rego"], ["Elizabeth Zhu Chan"]]},
        {key: 2023, title: "Internal Directors", members: [["HR", "Caleb Park"], ["Daniel Khuu"], ["Kelly Pan"], ["Creative", "Amy Liu"], ["Chelsea Chaffey"], ["Eric Hor"], ["Marketing", "Amber Wong"], ["Isabel Wee"], ["Sofia De Bellis"], ["Media", "Ivan Chan"], ["Lesley Lu"], ["Samuel Zheng"]]},
        {key: 2023, title: "Development Directors", members: [["Education", "Madhav Kumar"], ["Maxwell Phillips"], ["Simon Nguyen"], ["Terence Lau"], ["Content", "Omar Al Zeidat"], ["Rachel Ahn"], ["Culture", "Jane Wang"], ["Sharon Zhong"], ["UI/UX", "Darian Lee"], ["Grace Kan"]]},

        {key: 2022, title: "Executives", members: [["Co-Presidents", "Giuliana De Bellis"], ["Lachlan Ting"], ["Treasurer", "Colin Hon"], ["Secretary", "Hayes Choy"], ["Arc Delegate", "Haley Gu"], ["GEDI Officer", "Sandeep Das"]]},
        {key: 2022, title: "Careers", members: [["Lead", "Nancy Zhao"], ["Directors", "Cameron Mayhew"], ["Kevin Zhou"], ["Rebecca Hsu"], ["Srija Mukherjee"]]},
        {key: 2022, title: "Content", members: [["Lead", "Clarence Feng"], ["Marketing", "Fintan O'Shea"], ["Melanie Wu"], ["Creative", "Eliza Lee"], ["Sophie Liu"], ["Van Andrew Nguyen"], ["Media", "Amanda Lu"], ["Caleb Park"], ["Keith Xiao"]]},
        {key: 2022, title: "Events", members: [["Lead", "Evan Lee"], ["Socials", "Ben Yeoh"], ["Felix Cao"], ["Pratishtha Thiharie"], ["Studex", "Priscilla Soo"], ["Timmy Huang"]]},
        {key: 2022, title: "Development", members: [["Lead", "Shrey Somaiya"], ["Education", "Gordon Huang"], ["Jasper Di Francesco"], ["Competitions", "Hanyuan Li"], ["Ryan Shi"], ["Projects", "James Ji"], ["Vicky Wu"], ["Technical", "Abiram Nadarajah"]]},

        {key: 2021, title: "Executives", members: [["Co-Presidents", "Shrey Somaiya"], ["Michael Gribben"], ["Treasurer", "Jiamin Guo"], ["Secretary", "Clarence Feng"], ["Arc Delegate", "Kaiqi Liang"], ["GEDI Officer", "Shrey Somaiya"]]},
        {key: 2021, title: "Directors", members: [["Careers", "Rani Jiang"], ["Finley Ghosh"], ["Cecilia Ni"], ["Cece Zhu"], ["Social Officers", "Lachlan Ting"], ["Evan Lee"], ["Coordinators", "Giuliana De Bellis"], ["Hayes Choy"], ["An Thy Tran"], ["Esther Wong"], ["Zac Kologlu"], ["Colin Hon"], ["James Davidson"], ["Evan Lee"], ["Haley Gu"], ["Angeni Bai"], ["Ryan King"], ["Gary Sun"], ["Sandeep Das"], ["Marketing", "Edward Wong"], ["Edwina Adisusila"]]},

        {key: 2020, title: "Executives", members: [["Co-Presidents", "Shane Kadish"], ["Tammy Zhong"], ["Secretary", "Sam Push"], ["Treasurer", "Teresa Feng"], ["Arc Delegate", "Jeremy Chiu"], ["Grievance Officer", "Tom Kunc"]]},
        {key: 2020, title: "Directors", members: [["Careers", "Evangeline Endacott"], ["Low Khye Ean"], ["Nicholas Duller"], ["Yan Zhai"], ["CompClub", "Livia Wijayanti"], ["Timothy Ryan"], ["Creative", "Elizabeth Zhong"], ["Jia Min Guo"], ["Marketing", "Isaac Pamu Joshi"], ["Jessica Feng"], ["Media", "Aditi Chandra"], ["Clarence Shijun Feng"], ["Socials", "Frances Lee"], ["Van-Roy trinh"], ["Software Projects", "Gordon Zhong"], ["Leesa Kristina Dang"], ["Student Network", "Sachin Krishnamoorthy"], ["Shrey Somaiya"], ["Workshops", "Michael Gribben"]]},

        {key: 2019, title: "Executives", members: [["Co-Presidents", "Alli Murray"], ["Siddhant Virmani"], ["Secretary", "Celine Tye"], ["Treasurer", "Gary Bai (replacing Rachel Liang)"], ["Arc Delegate", "Peter Nguyen"]]},
        {key: 2019, title: "Directors", members: [["Careers", "Sam Push"], ["Sophia Lin"], ["CompClub (High School)", "Jeremy Chiu"], ["Teresa Feng"], ["Marketing", "Amy Luo"], ["Taiyue Tan"], ["Media", "Adrian Martinez"], ["Mehri Amin"], ["Professional Development & Networking", "Apurva Shukla"], ["Social Events", "Selina Chua"], ["Nathan Ellis"], ["Software Projects", "Shane Kadish"], ["Tom Kunc"], ["Student Network", "Tammy Zhong"], ["Workshops & Academics", "Oliver Dolk"]]},

        {key: 2018, title: "Executives", members: [["Co-Presidents", "Ofir Zeevi"], ["Andrew Vo"], ["Secretary", "Andrew Kaploun"], ["Treasurer", "Martin Minh Le"], ["Arc Delegate", "Raiyan Zubair"]]},
        {key: 2018, title: "Directors", members: [["Publications", "Siddhant Virmani"], ["Workshops & Academics", "Nicholas Malecki"], ["Software Projects", "Amri Chamela"], ["CompClub (High School)", "Peter Arnott"], ["Lillian Guo"], ["Sponsored Events", "Gary Bai"], ["Conway Ying"], ["Professional Development", "James Treloar"], ["Marketing", "Celine Tye"], ["Sheng An Zhang"], ["Social Events", "Mark Sonnenschein"], ["Sampath Somanchi"], ["Student Network", "Alli Murray"]]},

        {key: 2017, title: "Executives", members: [["Co-Presidents", "Nicola Gibson"], ["Adam Tizzone"], ["Secretary", "Martin Le"], ["Treasurer", "Jesse Zhang"], ["Arc Delegate", "Weilon Ying"]]},
        {key: 2017, title: "Heads", members: [["Beta", "Melissa Zhang"], ["Social", "Andrew Vo"], ["Ofir Zeevi"], ["Dev", "Daniel Cameron"], ["Talks", "Raiyan Zubair"], ["Workshops", "Mitch Ball"], ["Publicity", "Vivian Dang"], ["CompClub", "Nethan Tran"], ["Angelo Yan"], ["DevSpace", "Inura De Zoysa"], ["Student Network", "David Sison"]]},

        {key: 2016, title: "Executives", members: [["Co-Presidents", "Lavender Chan"], ["Jake Bloom"], ["Secretary", "Carmen Wang"], ["Treasurer", "Steven Strijakov"], ["Arc Delegate", "David Sison"]]},
        {key: 2016, title: "Heads", members: [["Beta", "Jayden Tilbrook"], ["Emily Olorin"], ["Social", "George Mountakis"], ["Jathurson Subachandran"], ["Dev", "Nicholas Whyte"], ["Talks and Workshops", "Adam Tizzone"], ["Daniel Phillips"], ["Publicity", "Nicola Gibson"], ["CompClub (High School)", "Joseph Hilsberg"], ["DevSpace", "John Wiseheart"], ["Student Network", "Jesse Zhang"]]},

        {key: 2015, title: "Executives", members: [["Co-Presidents", "Oliver Tan"], ["Davina Adisusila"], ["Secretary", "Octavia Soegyono"], ["Treasurer", "Lucas Pickup"], ["Arc Delegate", "Karl Krauth"]]},
        {key: 2015, title: "Heads", members: [["Beta", "Jashank Jeremy"], ["Social", "Steven Strijakov"], ["Jake Bloom"], ["Dev", "George Caley"], ["Talks and Workshops", "John Wiseheart"], ["David Sison"], ["Publicity", "Lavender Chan"], ["CompClub (High School)", "Jason Lim"], ["DevSpace", "Matthew McEwen"], ["Joshua Elliott"], ["Student Network", "Christopher Manouvrier"]]},

        {key: 2014, title: "Executives", members: [["Co-Presidents", "Vincent Wong"], ["Pierre Estephan"], ["Secretary", "Caroline Cham"], ["Treasurer", "Matthew Moss"], ["Arc Delegate", "Lavender Chan"]]},
        {key: 2014, title: "Heads", members: [["Beta", "Angelo Tamayo"], ["Social", "Lucas Pickup"], ["Oliver Tan"], ["Dev", "Vincent Tran"], ["John Wiseheart"], ["Tech", "Karl Krauth"], ["Publicity", "Davina Adisusila"], ["High School", "Vanessa Ung"], ["Mrinal Chakravarthy"]]},

        {key: 2013, title: "Executives", members: [["Co-Presidents", "Christopher Manouvrier"], ["Beth Crane"], ["Secretary", "Robert Newey"], ["Treasurer", "Luke Tsekouras"], ["Arc Delegate", "William Korteland"]]},
        {key: 2013, title: "Heads", members: [["Beta", "Wen Di Lim"], ["Social", "Evelyn Chensen"], ["Dev", "Mathew Moss"], ["Tech", "Pierre Estephan"], ["Publicity", "Caroline Cham"], ["High School", "Peter Camilleri"], ["Samuel Li"]]},

        {key: 2012, title: "Executives", members: [["Co-Presidents", "Sean Harris"], ["Sam Li"], ["Secretary", "Bethany Crane"], ["Treasurer", "Dan Padilha"], ["Arc Delegate", "Pauline Koh"]]},
        {key: 2012, title: "Heads", members: [["Beta", "Ritwik Roy"], ["Social", "Youssef Hunter"], ["Symphony Wong"], ["Dev", "Dylan Kelly"], ["Chris Manouvrier"], ["Tech", "Patrick Chung"], ["Publicity", "Weng Sern Loh"]]},

        {key: 2011, title: "Executives", members: [["Co-Presidents", "Aditya Keswani"], ["Peter Milston"], ["Arc Delegate", "Dan Padilha"], ["Secretary", "Natalie Wong"], ["Treasurer", "Youssef Hunter"]]},
        {key: 2011, title: "Heads", members: [["Beta", "Timothy Wiley"], ["Social", "Sam Li"], ["Sysadmin", "Maxwell Swadling"], ["Tech", "Ritwik Roy"]]},

        {key: 2010, title: "Executives", members: [["Co-Presidents", "Samantha Ho/Jayen Ashar"], ["Prashant Varanasi"], ["Arc Delegate", "Justin Wong"], ["Secretary", "Belinda Teh"], ["Treasurer", "Simonne Mautner"]]},
        {key: 2010, title: "Heads", members: [["Beta", "Charles Ma"], ["Social", "Natalie Wong"], ["Sysadmin", "Robert Massaioli"], ["Tech", "Carl Chatfield"], ["Maxwell Swadling"], ["Yongki Yusmanthia"], ["Publicity", "Aditya Keswani"]]},

        {key: 2009, title: "Executives", members: [["Co-Presidents", "Luke Swithenbank"], ["Cassandra Hill"], ["Arc Delegate", "David Claridge"], ["Secretary", "Emily Siow"], ["Treasurer", "Simonne Mautner"]]},
        {key: 2009, title: "Heads", members: [["The Switch", "Jeremy Apthorp"], ["Social", "Ben Lambert-Smith"], ["Sysadmin", "Prashant Varanasi"], ["Tech", "Jayen Ashar"], ["Publicity", "Phys Schmidtke"], ["Web", "Stephen Cossell"]]},

        {key: 2008, title: "Executives", members: [["President", "David Claridge"], ["Vice President", "Martin Mao"], ["Treasurer", "Rhys Schmidtke"], ["Secretary", "Elizabeth O'Loughlin"], ["Technical Officer", "V. Ramana Kirubagaran"], ["Assistant Technical Officer", "Prashant Varanasi"], ["Dean Berwick"], ["Arc Delegate", "Chaitanya Manapragada"], ["Publicity Officer", "Mervin Sayseng"], ["Social Officer", "Stuart Robinson"], ["Jayen Ashar"], ["Anna Lyons"]]},
        {key: 2008, title: "Representatives", members: [["Computer Engineering", "Christopher Bailey"], ["Software Engineering", "Susan Shi"], ["Computer Science", "Matthew Conolly"], ["Postgraduate", "Toby Rahilly"], ["First Year", "Robert Massaioli"], ["Luke Swithenbank"], ["The Switch Working Group", "Adam Brimo"], ["Sam Gentle"]]},

        {key: 2007, title: "Executives", members: [["President", "Stephen Cossell"], ["Vice President", "Chris Macauley"], ["Treasurer", "Mitchell Reid"], ["Secretary", "Alex Kuptsov"], ["Technical Officer", "V. Ramana Kirubagaran"], ["Assistant Technical Officer", "Yose Widjaja"], ["Suwandy Tjin"], ["Publicity Officer", "Mervin Sayseng"], ["Social Officer", "Rupert Shuttleworth"], ["Fionnbharr Davies"]]},
        {key: 2007, title: "Representatives", members: [["Software Engineering", "Andrew John Clayphan"], ["Computer Engineering", "Andrew Bastardo"], ["Computer Science", "Glen Trevor Kelley"], ["First Year", "David Claridge"], ["Charissa Upcroft"]]},
    ]

// NOTE: If CSESoc (for some reason) adds more ports then append this record
// to account for more columns
const colClasses: Record<number, string> = { 1: "grid-cols-1", 2: "grid-cols-2", 3: "grid-cols-3", 4: "grid-cols-4", 5: "grid-cols-5", 6: "grid-cols-6" };
const columns = buttonData.filter(data => data.key == year);

// This makes it easier to add entries to buttonData, as you do not need to
// specify role for every member of that specific role, only the first member
// needs the title specified next to their name. If confused, see lines 2-5.
    {for (let i = 0; i < buttonData.length; i++) {
        if (buttonData[i].key == year) {
            for (let j = 0; j < buttonData[i].members.length; j++) {
                if (!buttonData[i].members[j][1]) {
                    const temp = buttonData[i].members[j][0];
                    buttonData[i].members[j][0] = "";
                    buttonData[i].members[j].push(temp);
                }
            }
        }

    }}

    return (
        // Columns will be *dynamically* generated depending on the amount of ports

        // TO-DO: add support for mobile as it looks kinda garbage rn
        <div className={`grid ${colClasses[columns.length]} grid-flow-row w-[90vw] auto-rows-max justify-self-center`}>
            {buttonData.filter(data => data.key == year).map((item) => (
                <div>
                    <div className="header text-2xl font-bold w-auto m-4 text-center">{item.title}</div>
                    <div>
                        {item.members.map((member) => (
                            <div className="grid grid-cols-2 grid-flow-row auto-rows-max self-center">
                            <div className="font-bold text-right w-auto mr-3">{member[0]}</div>
                            <div className="ml-3 mb-1 w-auto">{member[1]}</div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}