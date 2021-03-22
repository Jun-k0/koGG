import React from 'react';
import axios from "axios";

const SECRET='개인키' // 숨겻

class History extends React.Component{
    componentDidMount(){
        const {location,history}= this.props;
        if(location.state===undefined){
            history.push("/");
        }
        // riot api 승인받으면 바꿈
        const temp=axios.get(SECRET)
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
