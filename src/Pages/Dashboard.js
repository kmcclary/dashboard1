import '../App.css';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../aws-exports'
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { listSurveyDatas } from '../graphql/queries';
import { useState, useEffect } from 'react';

Amplify.configure(awsconfig);

function Dashboard() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetchdata()
    }, []);

    const fetchdata = async () => {
        try {
            const foundData = await API.graphql(graphqlOperation(listSurveyDatas))
            const dataList = foundData.data.listSurveyDatas.items;
            console.log('data list', dataList)
        }
        catch (error) {
            console.log('error fetchting', error)
        }
    }



  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut />
        <h2>My App Content</h2>
      </header>
    </div>
  );
}

export default withAuthenticator(Dashboard);