//  import 
//  { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
//  from 'recharts';
// import './ShowDashboard.css'
// import Container from "react-bootstrap/Container";

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import ReaderList from './ReaderList';
// import GeneralInfo from './GeneralInfo';
// import BookList from './BookList';
// function ShowDashboard() {

//     const dataUser = [
//         {
//             id:1,
//             name:'Lê Hoàng Anh Vũ',
//             borrows: 24,
//             returns: 20 
//         },
//         {
//             id:2,
//             name:'Lê Quốc An',
//             borrows: 24,
//             returns: 20 
//         },
//         {
//             id:3,
//             name:'Đỗ Văn Bâng',
//             borrows: 24,
//             returns: 20 
//         },
//         {
//             id:4,
//             name:'Trương Đức Dũng',
//             borrows: 24,
//             returns: 20 
//         },
//         {
//             id:5,
//             name:'Cù Hoàng Nguyễn Sơn',
//             borrows: 24,
//             returns: 20 
//         },
//         {
//             id:6,
//             name:'Nguyễn Tấn Cường',
//             borrows: 24,
//             returns: 20 
//         },
//         {
//             id:7,
//             name:'Lê Minh Thiên',
//             borrows: 24,
//             returns: 20 
//         }
//     ]
//     const dataChart = [
//         {
//           name: 'Tháng 6',
//           uv: 4000,
//           pv: 2400,
//           amt: 2400,
//         },
//         {
//           name: 'Tháng 7',
//           uv: 3000,
//           pv: 1398,
//           amt: 2210,
//         },
//         {
//           name: 'Tháng 8',
//           uv: 2000,
//           pv: 9800,
//           amt: 2290,
//         },
//         {
//           name: 'Tháng 9',
//           uv: 2780,
//           pv: 3908,
//           amt: 2000,
//         },
//         {
//           name: 'Tháng 10',
//           uv: 1890,
//           pv: 4800,
//           amt: 2181,
//         },
//         {
//           name: 'Tháng 11',
//           uv: 2390,
//           pv: 3800,
//           amt: 2500,
//         },
//         {
//           name: 'Tháng 12',
//           uv: 3490,
//           pv: 4300,
//           amt: 2100,
//         },
//       ];


//   return (
//     <Container fluid>
//         <div className='row mt-3 gx-5 gy-5'>
//             <GeneralInfo/>
//         </div>

//         <div className='charts mb-5 '>
//             <div style={{ textAlign: 'center', marginBottom: '100px' }}>
//             <h5>Biểu đồ thống kê số lượng truy cập và số sách mượn</h5>
//             <ResponsiveContainer width="100%" height={300}>
//                 <LineChart
//                 width={500}
//                 height={300}
//                 data={dataChart}
//                 margin={{
//                     top: 5,
//                     right: 30,
//                     left: 20,
//                     bottom: 5,
//                 }}
//                 >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} name="Số lượt truy cập" />
//                 <Line type="monotone" dataKey="amt" stroke="#82ca9d" name="Số sách mượn" />
//                 </LineChart>
//             </ResponsiveContainer>
//             </div>
//             <div style={{ textAlign: 'center', marginBottom: '100px' }}>
//             <h5>Biểu đồ thống kê số lượng sách mượn và trả</h5>
//             <ResponsiveContainer width="100%" height={300}>
//             <BarChart
//             width={500}
//             height={300}
//             data={dataChart}
//             margin={{
//                 top: 5,
//                 right: 30,
//                 left: 20,
//                 bottom: 5,
//             }}
//             >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="amt" fill="#8884d8" name='Số sách trả'/>
//                 <Bar dataKey="uv" fill="#82ca9d" name='Số sách mượn'/>
//                 </BarChart>
//             </ResponsiveContainer>
//             </div>


//         </div>

//         <div className='row my-5 gx-5 gy-5'>
//             <ReaderList/>
//             <BookList/>
//         </div>
//     </Container>
//   )
// }

// export default ShowDashboard


import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
  from 'recharts';
import './ShowDashboard.css'
import Container from "react-bootstrap/Container";

import axios from "axios";
import React, { useEffect, useState } from "react";
import ReaderList from './ReaderList';
import GeneralInfo from './GeneralInfo';
import BookList from './BookList';
function ShowDashboard() {

  const [dataChart, setData] = useState();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const url = 'http://localhost:3001/borrow/dashboard/borrow-chart';
    const payload = {
      year: "2023",
    };

    axios
      .post(url, payload,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request header
            "Content-Type": "application/json",
            // 'Content-Type': 'multipart/form-data',
          },
        }
      )
      .then((res) => {

        // Process the received data
        let processedData = [];

        const monthToDataMap = new Map();
        res.data.forEach((entry) => {
          monthToDataMap.set(entry.month, entry);
        });

        for (let i = 1; i <= 12; i++) {
          const monthData = monthToDataMap.get(i.toString());
          if (monthData) {
            processedData.push(monthData);
          } else {
            processedData.push({ year: payload.year, month: i.toString(), total_borrowed: 0, total_givedback: 0 });
          }
        }


        setData(processedData);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  return (
    <Container fluid>
      <div className='row'>
        <h1 style={{ fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '30px', textAlign: 'center', marginTop: '10px' }}>Thống kê hoạt động của thư viện</h1>
      </div>
      <div className='row mt-3 gx-5 gy-5'>
        <GeneralInfo />
      </div>

      <div className='charts mb-5 '>
        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
          <h5 className='text-center'>Biểu đồ thống kê số lượng truy cập và số sách mượn</h5>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              width={500}
              height={300}
              data={dataChart}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="total_borrowed" stroke="#8884d8" activeDot={{ r: 8 }} name="Số lượt truy cập" />
              <Line type="monotone" dataKey="total_givedback" stroke="#82ca9d" name="Số sách mượn" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
          <h5 className='text-center'>Biểu đồ thống kê số lượng sách mượn và trả</h5>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              width={500}
              height={300}
              data={dataChart}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="total_borrowed" fill="#8884d8" name='Số sách trả' />
              <Bar dataKey="total_givedback" fill="#82ca9d" name='Số sách mượn' />
            </BarChart>
          </ResponsiveContainer>
        </div>


      </div>

      <div className='row my-5 gx-5 gy-5'>
        <ReaderList />
        <BookList />
      </div>
    </Container>
  )
}

export default ShowDashboard;