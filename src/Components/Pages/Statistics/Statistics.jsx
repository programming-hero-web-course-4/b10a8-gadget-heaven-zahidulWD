import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Statistics = () => {
    const fetchData = useLoaderData();

    return (
        <div>
            <div className='products-details-banner bg-[#9538E2] pt-8 pb-8 text-center'>
                <h3 className='text-xl sm:text-2xl md:text-[32px] font-bold text-white mb-4'>Statistics</h3>
                <p className='text-[14px] md:text-base font-normal text-white px-5 lg:px-0'>
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to
                    <br className="hidden lg:block" /> the coolest accessories, we have it all!
                </p>
            </div>
            <div className='w-full sm:w-11/12 md:w-10/12 mx-auto mb-[100px]'>
                <h2 className="text-xl md:text-2xl font-bold text-[#0B0B0B] mt-12">Statistics</h2>
                <div className="overflow-x-auto mt-8">
                    <BarChart
                        width={window.innerWidth < 640 ? 300 : 1130}  // Small device width
                        height={window.innerWidth < 640 ? 300 : 400} // Small device height
                        data={fetchData}
                        margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="product_title" className='text-[8px]' />
                        <YAxis tickCount={10} interval={0} domain={[0, 'dataMax + 10']} />
                        <Tooltip />
                        <Legend />
                        
                        {/* Increased width for price column */}
                        <Bar dataKey="price" fill="#9538E2" barSize={45} />
                        <Bar dataKey="rating" fill="#FF0000" />
                        <Bar dataKey="category" fill="#BF87EE" />
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
