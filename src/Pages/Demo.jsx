import React from "react";
import './Demo.css'

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
                    <h1 className="heading">Governance Overview</h1>
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
                        <td className="border px-8 py-4">Passed</td>
                    </tr>
                    <tr>
                        <td className="border px-8 py-4">2</td>
                        <td className="border px-8 py-4">Should we start a moralis hamburger chain</td>
                        <td className="border px-8 py-4">Passed</td>
                    </tr>
                    <tr>
                        <td className="border px-8 py-4">3</td>
                        <td className="border px-8 py-4">Should we start a moralis hamburger chain</td>
                        <td className="border px-8 py-4">Passed</td>
                    </tr>
                </table>

{/* <div class="overflow-x-auto relative">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Product name
                </th>
                <th scope="col" class="py-3 px-6">
                    Color
                </th>
                <th scope="col" class="py-3 px-6">
                    Category
                </th>
                <th scope="col" class="py-3 px-6">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="py-4 px-6">
                    Sliver
                </td>
                <td class="py-4 px-6">
                    Laptop
                </td>
                <td class="py-4 px-6">
                    $2999
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="py-4 px-6">
                    White
                </td>
                <td class="py-4 px-6">
                    Laptop PC
                </td>
                <td class="py-4 px-6">
                    $1999
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="py-4 px-6">
                    Black
                </td>
                <td class="py-4 px-6">
                    Accessories
                </td>
                <td class="py-4 px-6">
                    $99
                </td>
            </tr>
        </tbody>
    </table>
</div> */}

            </section>
        </div>
    )
}
export default Demo;