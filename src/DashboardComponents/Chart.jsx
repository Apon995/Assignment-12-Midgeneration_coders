import useAuth from "../CustomHooks_folder/useAuth";
import React, { useEffect, useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import AxiosError from "../Components_folder/AxiosError";
import { motion } from "framer-motion"


function Chart() {
    const { data } = useAuth();
    const [chartdata, setChartData] = useState();

    useEffect(() => {
        const createchartdata = data?.map((item) => {
            return {
                "month": item.salary_month,
                "salary": item.salary,
                "yearormonth": `${item.salary_month}"${item.salary_year}"`

            };
        });

        setChartData(createchartdata || []);
    }, [data]);

    return (

        <motion.div
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{ duration: 2 }}
        >

            <div className="py-8 px-[3%]">
                <h1 className="text-3xl font-medium text-[#343a40]">Chart Page</h1>

                <br />
                <br />

                {data?.length > 0 ? (
                    <div className=" h-[400px]">
                        <ResponsiveContainer width="95%" height="100%">
                            <BarChart
                                width={"100%"}
                                height={"100%"}
                                data={chartdata}
                                margin={{
                                    top: 5,
                                    right: 5,
                                    left: 5,
                                    bottom: 5,
                                }}
                                barSize={15}
                            >
                                <XAxis dataKey={'yearormonth'} />
                                <YAxis />
                                <Tooltip />

                                <CartesianGrid strokeDasharray="3 3" />
                                <Bar
                                    dataKey="salary"
                                    textAnchor="#2742fd"
                                    fill="#8884d8"
                                    background={{ fill: "#2742fd" }}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                        <h1 className="text-center text-gray-600 font-medium text-base font-serif border-b-4 border-[#2742fd] w-fit mx-auto">
                            Employee Chart
                        </h1>
                    </div>
                ) : (
                    <div className='flex items-center justify-center w-full min-h-[60vh] text-center'>
                        <h1 className='text-black text-2xl font-medium'>Payment history Empty !</h1>
                    </div>
                )}

                <br />
                <br />
                <br />
                {
                    data?.length > 0 && <div>
                        <h1 className="text-3xl font-medium text-[#343a40]">
                            This Employe Details Table
                        </h1>

                        <div>
                            <table className="styled-table">
                                <thead>
                                    <tr>
                                        <th className="text-sm">Employe Email</th>

                                        <th className="text-sm">Salary</th>
                                        <th className="text-sm">Month</th>
                                        <th className="text-sm">Payed Email</th>

                                        <th className="text-sm">payment Method</th>
                                        <th className="text-sm">Payment Year</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {data?.map((info, index) => (
                                        <tr key={index}>
                                            <td >{info?.payment_recieve_email}</td>
                                            <td>{info?.salary}</td>
                                            <td >{info?.salary_month}</td>
                                            <td >{info?.Pay_email}</td>

                                            <td >{info?.Payment_method}</td>
                                            <td >{info?.salary_year}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                }
            </div>

        </motion.div>
    );
}

export default Chart;
