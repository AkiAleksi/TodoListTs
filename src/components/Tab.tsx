import React, { useState } from 'react';
import Tabs from'@mui/material/Tabs';
import Tab from'@mui/material/Tab';
import TodoList from './TodoList';






function TabApp() {
    const [tab, setTab] = useState('Home');
    
    const handleChange = (event: any, value: any) => { 
         setTab(value);
        };
    return (
    <div>
<Tabs value={tab} onChange={handleChange}>
    <Tab value="Home"label="Home" />
    <Tab value="Todo"label="Todo" />
    </Tabs>
    {tab === 'Home' && <div style={{textAlign: "center", color: "white", backgroundColor: "black", height: "80px", top: 0, fontSize: 40}}> This is homepage </div> }   
    {tab === 'Todo' && <TodoList/>}
   </div>
    );
}
export default TabApp;