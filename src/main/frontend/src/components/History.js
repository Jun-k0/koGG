import React from 'react';
import axios from "axios";

class History extends React.Component{
    componentDidMount(){
        const {location,history}= this.props;
        if(location.state===undefined){
            history.push("/");
        }
        // riot api 승인받으면 바꿈
        const temp=axios.get('https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=7505633b57c0264a95d188319bfc3798&targetDt=20120101')
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        });
        console.log(temp);
    }
    render(){
        const {location}=this.props;
        if(location.state){
            return <div>{location.state.name}</div>;
        }
        else{
            return null;
        }
    }
}

export default History;