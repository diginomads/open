import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "../../components/ui/table";
  
  // Updated data for the table
  const teamData = [
    {
      name: "Peer Richelsen",
      title: "Co-Founder, Chairman",
      country: "Remote Nomad",
      engagement: "Full-Time",
      seniority: "Co-Founder",
      salary: "$165,000.00",
      joined: "Oct 14, 2020",
    },
    {
      name: "Bailey Pumfleet",
      title: "Co-Founder, President",
      country: "United States",
      engagement: "Full-Time",
      seniority: "Co-Founder",
      salary: "$165,000.00",
      joined: "Mar 1, 2021",
    },
    {
      name: "Alex Van Andel",
      title: "Software Engineer",
      country: "Portugal",
      engagement: "Full-Time",
      seniority: "IC Level 4",
      salary: "$137,280.00",
      joined: "May 24, 2021",
    },
    {
      name: "Ciarán Hanrahan",
      title: "Head of Product",
      country: "Ireland",
      engagement: "Full-Time",
      seniority: "Manager",
      salary: "$151,008.00",
      joined: "Jul 13, 2021",
    },
    {
      name: "Syed Ali Shahbaz",
      title: "Developer Relations Engineer",
      country: "Dubai",
      engagement: "Full-Time",
      seniority: "IC Level 3",
      salary: "$110,000.00",
      joined: "Aug 1, 2021",
    },
    {
      name: "Omar López",
      title: "Software Engineer",
      country: "Mexico",
      engagement: "Full-Time",
      seniority: "IC Level 4",
      salary: "$132,000.00",
      joined: "Sep 13, 2021",
    },
    {
      name: "Milos Puac",
      title: "Customer Experience Manager",
      country: "Serbia",
      engagement: "Full-Time",
      seniority: "-",
      salary: "$51,480.00",
      joined: "Jan 17, 2022",
    },
    {
      name: "Joe Au-Yeung",
      title: "Software Engineer",
      country: "Canada",
      engagement: "Full-Time",
      seniority: "IC Level 2",
      salary: "$91,519.92",
      joined: "Mar 14, 2022",
    },
    {
      name: "Hariom Balhara",
      title: "Software Engineer",
      country: "India",
      engagement: "Part-Time",
      seniority: "IC Level 2",
      salary: "$48,620.04",
      joined: "Apr 3, 2022",
    },
    {
      name: "Sean Brydon",
      title: "Software Engineer",
      country: "United Kingdom",
      engagement: "Full-Time",
      seniority: "IC Level 2",
      salary: "$96,054.84",
      joined: "Apr 22, 2022",
    },
    {
      name: "Carina Wollendorfer",
      title: "Software Engineer",
      country: "Austria",
      engagement: "Full-Time",
      seniority: "IC Level 2",
      salary: "$97,240.00",
      joined: "May 5, 2022",
    },
    {
      name: "Shiraz Dole",
      title: "Account Executive",
      country: "USA",
      engagement: "Full-Time",
      seniority: "-",
      salary: "$114,400.00",
      joined: "Jul 1, 2022",
    },
    {
      name: "Udit Takkar",
      title: "Software Engineer",
      country: "India",
      engagement: "Full-Time",
      seniority: "IC Level 2",
      salary: "$88,000.00",
      joined: "Oct 17, 2022",
    },
    {
      name: "David Borenius",
      title: "Human Resources",
      country: "Germany",
      engagement: "Full-Time",
      seniority: "-",
      salary: "$57,793.30",
      joined: "Nov 1, 2022",
    },
    {
      name: "Keith Williams",
      title: "Head of Engineering",
      country: "USA",
      engagement: "Full-Time",
      seniority: "Manager",
      salary: "$171,600.00",
      joined: "Mar 7, 2023",
    },
    {
      name: "Max Yao Chun Tavepholjalern",
      title: "Head of Marketing",
      country: "USA",
      engagement: "Full-Time",
      seniority: "Manager",
      salary: "$132,000.00",
      joined: "Jul 21, 2023",
    },
    {
      name: "Berkay Kaya",
      title: "Product Designer",
      country: "Turkey",
      engagement: "Full-Time",
      seniority: "IC Level 1",
      salary: "$45,000.00",
      joined: "Aug 30, 2023",
    },
    {
        name: "Peer Richelsen",
        title: "Co-Founder, Chairman",
        country: "Remote Nomad",
        engagement: "Full-Time",
        seniority: "Co-Founder",
        salary: "$165,000.00",
        joined: "Oct 14, 2020",
      },
      {
        name: "Bailey Pumfleet",
        title: "Co-Founder, President",
        country: "United States",
        engagement: "Full-Time",
        seniority: "Co-Founder",
        salary: "$165,000.00",
        joined: "Mar 1, 2021",
      },
      {
        name: "Alex Van Andel",
        title: "Software Engineer",
        country: "Portugal",
        engagement: "Full-Time",
        seniority: "IC Level 4",
        salary: "$137,280.00",
        joined: "May 24, 2021",
      },
      {
        name: "Ciarán Hanrahan",
        title: "Head of Product",
        country: "Ireland",
        engagement: "Full-Time",
        seniority: "Manager",
        salary: "$151,008.00",
        joined: "Jul 13, 2021",
      },
      {
        name: "Syed Ali Shahbaz",
        title: "Developer Relations Engineer",
        country: "Dubai",
        engagement: "Full-Time",
        seniority: "IC Level 3",
        salary: "$110,000.00",
        joined: "Aug 1, 2021",
      },
      {
        name: "Omar López",
        title: "Software Engineer",
        country: "Mexico",
        engagement: "Full-Time",
        seniority: "IC Level 4",
        salary: "$132,000.00",
        joined: "Sep 13, 2021",
      },
      {
        name: "Milos Puac",
        title: "Customer Experience Manager",
        country: "Serbia",
        engagement: "Full-Time",
        seniority: "-",
        salary: "$51,480.00",
        joined: "Jan 17, 2022",
      },
      {
        name: "Joe Au-Yeung",
        title: "Software Engineer",
        country: "Canada",
        engagement: "Full-Time",
        seniority: "IC Level 2",
        salary: "$91,519.92",
        joined: "Mar 14, 2022",
      },
      {
        name: "Hariom Balhara",
        title: "Software Engineer",
        country: "India",
        engagement: "Part-Time",
        seniority: "IC Level 2",
        salary: "$48,620.04",
        joined: "Apr 3, 2022",
      },
      {
        name: "Sean Brydon",
        title: "Software Engineer",
        country: "United Kingdom",
        engagement: "Full-Time",
        seniority: "IC Level 2",
        salary: "$96,054.84",
        joined: "Apr 22, 2022",
      },
      {
        name: "Carina Wollendorfer",
        title: "Software Engineer",
        country: "Austria",
        engagement: "Full-Time",
        seniority: "IC Level 2",
        salary: "$97,240.00",
        joined: "May 5, 2022",
      },
      {
        name: "Shiraz Dole",
        title: "Account Executive",
        country: "USA",
        engagement: "Full-Time",
        seniority: "-",
        salary: "$114,400.00",
        joined: "Jul 1, 2022",
      },
      {
        name: "Udit Takkar",
        title: "Software Engineer",
        country: "India",
        engagement: "Full-Time",
        seniority: "IC Level 2",
        salary: "$88,000.00",
        joined: "Oct 17, 2022",
      },
      {
        name: "David Borenius",
        title: "Human Resources",
        country: "Germany",
        engagement: "Full-Time",
        seniority: "-",
        salary: "$57,793.30",
        joined: "Nov 1, 2022",
      },
      {
        name: "Keith Williams",
        title: "Head of Engineering",
        country: "USA",
        engagement: "Full-Time",
        seniority: "Manager",
        salary: "$171,600.00",
        joined: "Mar 7, 2023",
      },
      {
        name: "Max Yao Chun Tavepholjalern",
        title: "Head of Marketing",
        country: "USA",
        engagement: "Full-Time",
        seniority: "Manager",
        salary: "$132,000.00",
        joined: "Jul 21, 2023",
      },
      {
        name: "Berkay Kaya",
        title: "Product Designer",
        country: "Turkey",
        engagement: "Full-Time",
        seniority: "IC Level 1",
        salary: "$45,000.00",
        joined: "Aug 30, 2023",
      },
      {
        name: "Rajiv Sahal",
        title: "Software Engineer",
        country: "India",
        engagement: "Full-Time",
        seniority: "IC Level 1",
        salary: "$66,000.00",
        joined: "Sep 20, 2023",
      },
      {
        name: "Morgan Vernay",
        title: "Software Engineer",
        country: "Estonia",
        engagement: "Full-Time",
        seniority: "IC Level 4",
        salary: "$132,000.00",
        joined: "Oct 9, 2023",
      },
      {
        name: "Lauris Skraucis",
        title: "Software Engineer",
        country: "Italy",
        engagement: "Full-Time",
        seniority: "IC Level 2",
        salary: "$88,000.00",
        joined: "Nov 4, 2023",
      },
      {
        name: "Ewa Michalak",
        title: "Digital Marketing",
        country: "Poland",
        engagement: "Full-Time",
        seniority: "IC Level 2",
        salary: "$88,000.00",
        joined: "Jan 17, 2024",
      },
      {
        name: "Somay Chauhan",
        title: "Software Engineer",
        country: "India",
        engagement: "Full-Time",
        seniority: "IC Level 1",
        salary: "$66,000.00",
        joined: "Mar 5, 2024",
      },
      {
        name: "Jose Urena",
        title: "Customer Support",
        country: "Dominican Republic",
        engagement: "Full-Time",
        seniority: "-",
        salary: "$20,000.00",
        joined: "May 1, 2024",
      },
  ];
  
export default function TableDemo() {
    return (
      <div className="max-w-8xl mx-auto mt-1 px-4 sm:px-6 lg:px-8 mb-12 ml-10 mr-10 text-gray-800">
        {/* Table with border, rounded corners, and shadow */}
        <Table className="border border-gray-200 rounded-lg shadow-lg">
          <TableHeader>
            <TableRow>
              <TableCell colSpan={7} className="text-1xl text-gray-500 font-semibold py-4 pl-4">
                Team
              </TableCell>
            </TableRow>
            <TableRow>
              <TableHead className="text-left py-2 px-6">Name</TableHead>
              <TableHead className="text-left py-2 px-4">Title</TableHead>
              <TableHead className="text-left py-2 px-4">Country</TableHead>
              <TableHead className="text-left py-2 px-4">Engagement</TableHead>
              <TableHead className="text-left py-2 px-4">Seniority</TableHead>
              <TableHead className="text-left py-2 px-4">Salary</TableHead>
              <TableHead className="text-right py-2 px-4">Joined</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {teamData.map((member) => (
              <TableRow key={member.name}>
                <TableCell className="font-medium py-2 px-4">{member.name}</TableCell>
                <TableCell className="py-2 px-4">{member.title}</TableCell>
                <TableCell className="py-2 px-4">{member.country}</TableCell>
                <TableCell className="py-2 px-4">{member.engagement}</TableCell>
                <TableCell className="py-2 px-4">{member.seniority}</TableCell>
                <TableCell className="py-2 px-4">{member.salary}</TableCell>
                <TableCell className="text-right py-2 px-4">{member.joined}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }