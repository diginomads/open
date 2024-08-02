import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "../../components/ui/table";

const salaryData = [
    {
        title: "Software Engineer",
        seniority: "IC Level 1 (Junior)",
        salary: "$60,000.00",
        comparedToBayArea: "-34%",
        comparedToIndia: "1,100%"
    },
    {
        title: "Software Engineer",
        seniority: "IC Level 2 (Mid)",
        salary: "$80,000.00",
        comparedToBayArea: "-40%",
        comparedToIndia: "772%"
    },
    {
        title: "QA Engineer",
        seniority: "IC Level 3 (Senior)",
        salary: "$90,000.00",
        comparedToBayArea: "-35%",
        comparedToIndia: "648%"
    },
    {
        title: "Software Engineer",
        seniority: "IC Level 3 (Senior)",
        salary: "$100,000.00",
        comparedToBayArea: "-35%",
        comparedToIndia: "648%"
    },
    {
        title: "Software Engineer",
        seniority: "IC Level 4 (Lead)",
        salary: "$120,000.00",
        comparedToBayArea: "-35%",
        comparedToIndia: "648%"
    }
];

export default function TableDemo() {
    return (
        <div className="max-w-8xl mx-auto mt-1 px-4 sm:px-6 lg:px-8 text-gray-800 ml-10 mr-10">
            <Table className="border border-gray-200 rounded-lg shadow-lg">
                <TableHeader>
                    <TableRow>
                        <TableCell colSpan={5} className="text-1xl text-gray-500 font-semibold py-4 pl-4">
                            Global Salary Bands (10/2021)
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Seniority</TableHead>
                        <TableHead>Salary ($)</TableHead>
                        <TableHead>Compared To Bay Area</TableHead>
                        <TableHead className="text-right">Compared To India</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {salaryData.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>{item.title}</TableCell>
                            <TableCell>{item.seniority}</TableCell>
                            <TableCell>{item.salary}</TableCell>
                            <TableCell>{item.comparedToBayArea}</TableCell>
                            <TableCell className="text-right">{item.comparedToIndia}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}