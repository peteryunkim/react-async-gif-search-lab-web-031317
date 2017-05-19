import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component{
	constructor(){
		super()
		this.state = {
			gifs: []
		}
	}

	searchAPI(query){
		fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&limit=3`)
		.then (res => res.json())
		.then (data => this.setState({
			gifs: data.data
		}))
	}

	render(){

			console.log(this.state.gifs)
		return(
			<div className="row">
				<GifList searched={this.state.gifs}/>
				<GifSearch searchAPI={this.searchAPI.bind(this)}/>
			</div>
		)
	}
}

export default GifListContainer