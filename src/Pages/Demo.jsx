import React from "react";
import './Demo.css'
import { Link } from "react-router-dom";

// const style = {
//     tableBorder: `text-black-600 border`
// }

const Demo = () => {
    return (
        <div>
            <h1 className="heading">Governance Overview</h1>
            <div>
                <section className="text-black-600 body-font">
                    <div className="container px-5 py-10 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            <div className="p-4 lg:w-1/3">
                                <div className="h-full bg-gray-100 bg-opacity-75 pt-8 rounded-lg overflow-hidden text-center relative">
                                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Proposal Created</h1>
                                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">50</h1>
                                </div>
                            </div>

                            <div className="p-4 lg:w-1/3">
                                <div className="h-full bg-gray-100 bg-opacity-75 pt-8 rounded-lg overflow-hidden text-center relative">
                                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Eligible Voters</h1>
                                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">43</h1>
                                </div>
                            </div>

                            <div className="p-4 lg:w-1/3">
                                <div className="h-full bg-gray-100 bg-opacity-75 pt-8 rounded-lg overflow-hidden text-center relative">
                                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Ongoing Proposal</h1>
                                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">5</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            <section>

                <div>
                    <h1 className="heading mb-5" style={{textAlign: 'center'}}>Recent Proposal</h1>
                </div>

                <table className=" bg-gray-100 center">
                    <tr>
                        <th className="border text-left px-8 py-4">ID</th>
                        <th className="border text-left px-8 py-4">Description</th>
                        <th className="border text-left px-8 py-4">Status</th>
                    </tr>
                    <tr>
                        <td className="border px-8 py-4">1</td>
                        <td className="border px-8 py-4">Should we start a moralis hamburger chain</td>
                        <td className="border px-8 py-4"> <Link to='/proposal'>Pased</Link> </td>
                    </tr>
                    <tr>
                        <td className="border px-8 py-4">2</td>
                        <td className="border px-8 py-4">Should we start a moralis hamburger chain</td>
                        <td className="border px-8 py-4">Rejected</td>
                    </tr>
                    <tr>
                        <td className="border px-8 py-4">3</td>
                        <td className="border px-8 py-4">Should we start a moralis hamburger chain</td>
                        <td className="border px-8 py-4">Rejected</td>
                    </tr>
                </table>

            </section>
        </div>
    )
}
export default Demo;