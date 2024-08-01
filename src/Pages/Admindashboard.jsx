import React, { useState, useRef } from 'react';
import AppSidebar from '../Component/Sidebar';
import TopBar from '../Component/TopBar';
import { Line, Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from "chart.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faHouse,
  faChartLine,
  faUsers,
  faMoneyCheckAlt,
  faWallet,
  faCog,
  faSignOutAlt,
  faPrint,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import "react-circular-progressbar/dist/styles.css";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);


const Admin = () => {

    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
      setCollapsed(!collapsed);
    };
  

    const printRef = useRef(null);

  // Example data for charts
  const monthlyCollectionData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Monthly Collection",
        data: [5000, 6000, 5500, 7000, 6500, 7200],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  const participantDistributionData = {
    labels: ["Group A", "Group B", "Group C", "Group D"],
    datasets: [
      {
        label: "Participants",
        data: [150, 200, 100, 250],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const bidAnalysisData = {
    labels: ["Bid A", "Bid B", "Bid C", "Bid D"],
    datasets: [
      {
        label: "Bid Amount",
        data: [10000, 20000, 15000, 25000],
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const collectionHeatmapData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Collection Heatmap",
        data: [3000, 4000, 3500, 5000],
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
    ],
  };

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  const collapseSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handlePrint = () => {
    const printWindow = window.open("", "", "height=600,width=800");
    printWindow.document.write("<html><head><title>Print</title></head><body>");
    printWindow.document.write(
      document.getElementById("print-section").innerHTML
    );
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };


  return (
    <div className="flex h-screen">
      <AppSidebar collapsed={collapsed} />
      <div className="flex-1 flex flex-col bg-neutral-50">
        <TopBar toggleSidebar={toggleSidebar} />
        <section id="print-section" className="p-5">
          {activeTab === "dashboard" && (
            <>
              <div className="flex justify-between gap-5 mb-5 flex-wrap">
                <div className="bg-white p-5 rounded-md shadow-md w-full lg:w-[calc(50%-10px)]">
                  <h3 className="text-xl font-semibold mb-4">
                    Monthly Collection
                  </h3>
                  <Line data={monthlyCollectionData} />
                </div>
                <div className="bg-white p-5 rounded-md shadow-md w-full lg:w-[calc(50%-10px)]">
                  <h3 className="text-xl font-semibold mb-4">
                    Participant Distribution
                  </h3>
                  <Pie data={participantDistributionData} />
                </div>
              </div>

              <div className="flex justify-between gap-5 mb-5 flex-wrap">
                <div className="bg-white p-5 rounded-md shadow-md w-full lg:w-[calc(50%-10px)]">
                  <h3 className="text-xl font-semibold mb-4">Bid Analysis</h3>
                  <Bar data={bidAnalysisData} />
                </div>
                <div className="bg-white p-5 rounded-md shadow-md w-full lg:w-[calc(50%-10px)]">
                  <h3 className="text-xl font-semibold mb-4">
                    Collection Heatmap
                  </h3>
                  <Bar data={collectionHeatmapData} />
                </div>
              </div>

              <div className="bg-white p-5 rounded-md shadow-md mb-5">
                <h3 className="text-xl font-semibold mb-4">
                  Recent Transactions
                </h3>
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Transaction ID
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          #789456
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          2024-07-30
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">$750</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span className="relative">Completed</span>
                        </span>
                      </td>
                    </tr>
                    {/* Add more rows as needed */}
                  </tbody>
                </table>
              </div>
            </>
          )}
          {activeTab === "reports" && <div>Reports Content Here</div>}
          {activeTab === "users" && <div>Users Content Here</div>}
          {activeTab === "chit-groups" && <div>Chit Groups Content Here</div>}
          {activeTab === "contributions" && (
            <div>Contributions Content Here</div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Admin;