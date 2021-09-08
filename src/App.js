import React, { useState } from 'react';
import api from './api'
import {columns,options} from "./tableOptions";
import MUIDataTable from "mui-datatables";
import InputMask from 'react-input-mask';
import ReactLoading from 'react-loading';

import "./styles.css";


export default function App() {

  const [values, setValues] = useState('');
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(false);

  let total;


  function onChange(ev){
    const {name, value} = ev.target;
    setValues({...values,[name]:value});

}

  async function getDois(cur,dois=[]){
    const {prefix,from,to}  = values;
    if(!prefix || !from || !to){
      return;
    } 
  
   return await api.get(`works?filter=prefix:${prefix},type:journal-article,from-created-date:${from},until-created-date:${to}&select=type,DOI,title,container-title,link,created,URL,member,publisher`+(cur ? '&cursor='+cur : '')) 
      .then(response => {
     
      if(cur === '*') {
            total = response.data.message['total-results'];
         }
            dois.push(...response.data['message']['items'])
            total = total - response.data['message']['items'].length
            if(total <= 0){
              setData(dois);
              return dois
              } 
            cur = encodeURIComponent(response.data['message']['next-cursor'])
            return getDois(cur, dois)
          })
         
  }


  function onSubmit(ev) {
    ev.preventDefault();
    setData([]);
    getDois("*");
    setLoading(false); 
    
  }


let newData = data.map(dois => {
  return {
      "DOI": dois.DOI,
      "created":dois.created['date-time'],
      "title":dois.title,
      "type":dois.type,
      "URL":dois.URL,
      "member":dois.member,
      "publisher":dois.publisher
      }
  });



  return (
    <div className="App">
      <h1>DOIs retrieve {loading}</h1>
      <form onSubmit={onSubmit}>
        <div className="search">
          <InputMask  id="prefix" size="8" mask='10.99999' name="prefix" onChange={onChange} placeholder="prefix" type="text" />
          <input id="from" size="8" name="from" onChange={onChange} placeholder="2020-12-01" type="text" />
          <input id="to" size="8" name="to" onChange={onChange} placeholder="2020-12-31" type="text" /> 
          <button type="submit" className="myButton">Search</button>
        </div>
      </form>
      <div className="loading">
        {loading ? <ReactLoading type={"spin"} color="#00000" height={'3%'} width={'3%'} />:''}
      </div>
      <MUIDataTable
        title={"DOI List"}
        data={newData}
        columns={columns}
        options={options}
      />
    </div>
  );
}
