import React, {Component} from 'react';
import Media from './media.js';
import './playlist.css';

class Playlist extends Component{
	render(){
		const playlist = this.props.data.categories[0].playlist
		console.log(this.props.data);
		return(
			<div className="Playlist">
				{
					playlist.map((item)=>{
						//En ECMA 6
						//return <Media title={item.title} key={item.id}/>
						//En ECMA 7
						return <Media {...item} key={item.id}/>
					})
				}
				<Media/>
				
			</div>
			)
	}
}

export default Playlist;