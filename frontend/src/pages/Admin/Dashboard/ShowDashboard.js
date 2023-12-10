 import 
 { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
import './ShowDashboard.css'
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReaderList from './ReaderList';
import GeneralInfo from './GeneralInfo';
import BookList from './BookList';
function ShowDashboard() {

    const [books, setBooks] = useState([]);
    const displayedBooks = books.slice(53, 60);

    useEffect(() => {
        axios.get('http://localhost:3001/books')
            .then(res => {
                console.log(res.data);
                setBooks(res.data)
            })
            .catch(err => {
            });
    }, []);
    
    const dataUser = [
        {
            id:1,
            name:'Lê Hoàng Anh Vũ',
            borrows: 24,
            returns: 20 
        },
        {
            id:2,
            name:'Lê Quốc An',
            borrows: 24,
            returns: 20 
        },
        {
            id:3,
            name:'Đỗ Văn Bâng',
            borrows: 24,
            returns: 20 
        },
        {
            id:4,
            name:'Trương Đức Dũng',
            borrows: 24,
            returns: 20 
        },
        {
            id:5,
            name:'Cù Hoàng Nguyễn Sơn',
            borrows: 24,
            returns: 20 
        },
        {
            id:6,
            name:'Nguyễn Tấn Cường',
            borrows: 24,
            returns: 20 
        },
        {
            id:7,
            name:'Lê Minh Thiên',
            borrows: 24,
            returns: 20 
        }
    ]
    const dataChart = [
        {
          name: 'Tháng 6',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Tháng 7',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Tháng 8',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Tháng 9',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Tháng 10',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Tháng 11',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Tháng 12',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
     

  return (
    <main className='container-fluid'>
        <div className='row mt-3 gx-5 gy-5'>
            <GeneralInfo/>
        </div>

        <div className='charts mb-5 '>
            <div style={{ textAlign: 'center', marginBottom: '100px' }}>
            <h5>Biểu đồ thống kê số lượng truy cập và số sách mượn</h5>
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
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} name="Số lượt truy cập" />
                <Line type="monotone" dataKey="amt" stroke="#82ca9d" name="Số sách mượn" />
                </LineChart>
            </ResponsiveContainer>
            </div>
            <div style={{ textAlign: 'center', marginBottom: '100px' }}>
            <h5>Biểu đồ thống kê số lượng sách mượn và trả</h5>
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
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="amt" fill="#8884d8" name='Số sách trả'/>
                <Bar dataKey="uv" fill="#82ca9d" name='Số sách mượn'/>
                </BarChart>
            </ResponsiveContainer>
            </div>

            
        </div>

        <div className='row my-5 gx-5 gy-5'>
            <ReaderList/>
            <BookList/>
        </div>
    </main>
  )
}

export default ShowDashboard