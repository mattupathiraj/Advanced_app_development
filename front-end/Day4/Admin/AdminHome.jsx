import {
  DollarCircleOutlined,
  EyeOutlined,
  ClockCircleOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory, getOrders, getRevenue } from "../API";
import Header from './Header'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import NavBar1 from "../NavBar1";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function AdminHome() {
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    getOrders().then((res) => {
      setOrders(2563);
      setRevenue(1000);
    });
    getInventory().then((res) => {
      setInventory(2000);
    });
    getCustomers().then((res) => {
      setCustomers(1000);
    });
  }, []);

  return (
  <div className='App1'>
   <NavBar1/>
    <div className="SideMenuAndPageContent">
    <Header/>
    
    <div className="das">
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction="horizontal" style={{minWidth:'870px'}}>
        <DashboardCard
          icon={
            <EyeOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Page Viewed"}
          value={orders}
        />
        <DashboardCard
          icon={
            <ShoppingOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Total Request"}
          value={inventory}
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: "purple",
                backgroundColor: "rgba(0,255,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Approved"}
          value={customers}
        />
        <DashboardCard 
          icon={
            <DollarCircleOutlined
              style={{
                color: "red",
                backgroundColor: "rgba(255,0,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Rejected"}
          value={revenue}
          style={{minWidth:'850px'}}
        />
        <DashboardCard
              icon={
                <ClockCircleOutlined  // Use ClockCircleOutlined for pending status
                  style={{
                    color: "orange",  // Adjust color as needed
                    backgroundColor: "rgba(255,165,0,0.25)",  // Adjust background color as needed
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8,
                  }}
                />
              }
              title={"Pending"}
              value={revenue}
            />
      </Space>
      <Space  style={{minWidth:'1070px'}}>
        <RecentOrders />
        <DashboardChart />
      </Space>
    </Space>
    </div>
    </div>
    </div>
  );
}

function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}
function RecentOrders() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const staticDataSource = [
    {
      key: '1',
      title: '1',
      quantity: 'Wedding',
      discountedPrice: '3 hrs',
      time: '$1000',
      approvalStatus: 'Approved',
    },
    {
      key: '2',
      title: '2',
      quantity: 'Birthday',
      discountedPrice: '1 hr',
      time: '$200',
      approvalStatus: 'Pending',
    },
    {
      key: '3',
      title: '3',
      quantity: 'Concert',
      discountedPrice: '2 hrs',
      time: '$500',
      approvalStatus: 'Pending',
    },
    // Add more static data as needed
  ];
  
  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products.splice(0, 3));
      setLoading(false);
    });
  }, []);

  return (
    <div style={{width:'450px'}}>
    <Typography.Text>Recent Requests</Typography.Text>
      <Space direction="vertical" style={{ marginTop: '16px'}}>
        <Table
          columns={[
            {
              title: 'ID',
              dataIndex: 'title',
            },
            {
              title: 'Event',
              dataIndex: 'quantity',
            },
            {
              title: 'Duration',
              dataIndex: 'discountedPrice',
            },
            {
              title: 'Fee',
              dataIndex: 'Fee',
            },
            {
              title: 'Status',
              dataIndex: 'approvalStatus',
            },
          ]}
          dataSource={staticDataSource}
          pagination={false}

          style={{width:'550px',height:'200px'}}
          
        />
      </Space>
      </div>
  );
}

function DashboardChart() {
  const [reveneuData, setReveneuData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    getRevenue().then((res) => {
      const labels = res.carts.map((cart) => {
        return `User-${cart.userId}`;
      });
      const data = res.carts.map((cart) => {
        return cart.discountedTotal;
      });

      const dataSource = {
        labels,
        datasets: [
          {
            label: "Loan Applied As Of Now",
            data: data,
            backgroundColor: "rgba(255, 0, 0, 1)",
          },
        ],
      };

      setReveneuData(dataSource);
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Most Frequently Loan Applied User",
      },
    },
  };

  

}
export default AdminHome;
