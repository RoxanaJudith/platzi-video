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
			 /*                 METODO HARD CODER
			 //<div style={styles.container}>
			 <div className="Media">
			 <div className="Media-cover">
			 	<img 
			 	  src="./images/covers/bitcoin.jpg"
			 	  alt=""
			 	  width={260}
			 	  height ={160}
			 	  className="Media-image"
			 	  />
			 	  <h3 className="Media-title">Porque aprender React?</h3>
			 	  <p className="Media-autor">RoxanaJudith</p>
			 </div>			 
			 </div>
			 */
			 <div className="Media">
			 <div className="Media-cover">
			 	<img 
			 	  src={this.props.image}
			 	  alt=""
			 	  width={260}
			 	  height ={160}
			 	  className="Media-image"
			 	  />
			 	  <h3 className="Media-title">{this.props.title}</h3>
			 	  <p className="Media-autor">{this.props.autor}</p>
			 </div>			 
			 </div>

			)
	}
}

export default Media;