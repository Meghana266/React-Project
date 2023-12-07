import React, { useState } from 'react';

const Agents = ({agents, handleSignupClick,handleAgentSignupClick ,handleAgentClick}) => {
    const [filter, setFilter] = useState('all');
    const [displayedAgents,setDisplayedAgents]= useState([]);

    // const agentsData = [
    //     {
    //         id: 1,
    //         fullName: 'John Doe',
    //         designation: 'Architect',
    //         experience: 'Over 10 years of experience in architectural design.',
    //         image: 'img/team-1.jpg',
    //         type: 'architect',
    //     },
    //     {
    //         id: 2,
    //         fullName: 'Jane Smith',
    //         designation: 'Interior Designer',
    //         experience: 'Award-winning interior designer with 15 years of experience.',
    //         image: 'img/team-2.jpg',
    //         type: 'interior designer',
    //     },
    //     {
    //         id: 3,
    //         fullName: 'David Johnson',
    //         designation: 'Contractor',
    //         experience: 'Experienced contractor specializing in residential and commercial projects.',
    //         image: 'img/team-3.jpg',
    //         type: 'contractor',
    //     },
    // ];

    const filterAgents = (type) => {
        setFilter(type);
    };

    const filteredAgents = filter === 'all' ? agents : agents.filter((agent) => agent.designation === filter);

    return (
        <div className="container-xxl py-5 ml-10">
            <br />
            <br />
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-end">
                    <div className="text-start mx-auto mb-5 lg:col-span-1 lg:text-left">
                        <h1 className="mb-3 text-3xl lg:text-4xl font-bold">Property Agents</h1>
                        <p className="text-gray-600">
                            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod
                            sit diam justo sed rebum.
                        </p>
                    </div>
                    <div className="text-start text-lg-end lg:col-span-1 lg:text-right">
                        <ul className="flex justify-end space-x-2 mb-5">
                            <li>
                                <button className={`border border-primary text-primary font-semibold py-2 px-4 rounded-full hover:bg-white ${filter === 'all' ? 'bg-blue-800 text-white' : ''}`} onClick={() => filterAgents('all')}>All</button>
                            </li>
                            <li>
                                <button className={`border border-primary text-primary font-semibold py-2 px-4 rounded-full hover:bg-white ${filter === 'architect' ? 'bg-blue-800 text-white' : ''}`} onClick={() => filterAgents('architect')}>Architects</button>
                            </li>
                            <li>
                                <button className={`border border-primary text-primary font-semibold py-2 px-4 rounded-full hover:bg-white ${filter === 'interior designer' ? 'bg-blue-800 text-white' : ''}`} onClick={() => filterAgents('interior designer')}>Interior Designers</button>
                            </li>
                            <li>
                                <button className={`border border-primary text-primary font-semibold py-2 px-4 rounded-full hover:bg-white ${filter === 'contractor' ? 'bg-blue-800 text-white' : ''}`} onClick={() => filterAgents('contractor')}>Contractors</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="agents-list">
                    {filteredAgents.map((agent) => (
                        <div key={agent._id} className="p-3" onClick={() => handleAgentClick(agent)}> 
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img src={agent.image} alt={agent.name} className="w-full h-40 object-cover object-center" />
                                <div className="p-4">
                                    <h5 className="text-lg font-semibold">{agent.name}</h5>
                                    <p className="text-sm text-gray-500">{agent.designation}</p>
                                    <p className="text-sm text-gray-500">{agent.experience}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-12 text-center">
                    <br />
                    <button className="bg-blue-800 hover:bg-blue-1000 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-800" onClick={handleSignupClick}>Visit More Agents</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="bg-blue-800 hover:bg-blue-1000 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-800" onClick={handleAgentSignupClick}>Register yourself as an Agent</button>
                </div>
            </div>
        </div>
    );
};

export default Agents;
