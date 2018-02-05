import React from 'react';
//import React, {Component} from 'react';
import './media.css';


class Media extends React.Component{
	render(){
		const styles ={
			container:{
				
				color:'#44546b',
				curso:'pointer',
				width:260,
				border:'1px solid red'
			}
		}
		return(
			 //<div style={styles.container}>
			 <div className="Media">
			 <div>
			 	<img 
			 	  src="./images/covers/bitcoin.jpg"
			 	  alt=""
			 	  width={260}
			 	  height ={160}
			 	  />
			 	  <h3>Porque aprender React?</h3>
			 	  <p>RoxanaJudith</p>
			 </div>			 
			 </div>

			)
	}
}

export default Media;