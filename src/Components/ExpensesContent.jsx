import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ExpensesContent = () => {


  const [formData, setFormData] = useState({
    heading: '',
    amount: '',
    description: ''
  });
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { heading, amount, description } = formData;

    if (heading && amount && description) {
      setItems([...items, { ...formData }]); 
      setFormData({ heading: '', amount: '', description: '' }); 
    } else {
      alert('All fields are required!');
    }
  };

  return (
    <div className="grid grid-flow-row mt-[40px] ml-[40px] roboto-regular gap-5 dark:text-white bg-gray-300 dark:bg-black">
      <div className='grid gird-cols-1 md:grid-cols-2 items-center gap-5 bg-gray-300 border-b border-black dark:border-darkborder dark:bg-darkdivbg'>
      <div className="w-[240px] h-[150px] md:w-full md:h-[400px] md:p-5 p-1">
        <h3 className="text-xl mb-4">Amount Graph</h3>
        <ResponsiveContainer width="100%" height="90%">
          <LineChart data={items}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="heading" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="amount" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="w-full p-5">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-lg">Heading</label>
            <input
              type="text"
              name="heading"
              value={formData.heading}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded dark:bg-darkdivbginner "
            />
          </div>

          <div>
            <label className="block text-lg">Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded dark:bg-darkdivbginner"
            />
          </div>

          <div>
            <label className="block text-lg">Description</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded dark:bg-darkdivbginner"
            />
          </div>

          <button type="submit" className="w-full bg-white  hover:bg-gray-400 border-gray-300 py-2 rounded dark:bg-darkdivbginner dark:hover:bg-darkdivbghover">
            Add Expense
          </button>
        </form>
      </div>
      </div>
      

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-gray-300 rounded-md p-2 dark:bg-darkdivbg min-h-screen">
        {items.map((item) => (
          <div className="p-4 rounded bg-gray-200 hover:bg-gray-400 flex-col dark:bg-darkdivbginner dark:hover:bg-darkdivbghover">
            <h3 className="text-xl font-bold">{item.heading}</h3>
            <p>Amount: {item.amount}</p>
            <p className='truncate'>{item.description}</p>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default ExpensesContent;
