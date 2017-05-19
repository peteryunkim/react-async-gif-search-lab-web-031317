import React from 'react'

class GifSearch extends React.Component {
	constructor(){
		super()
		this.state = {
			search: ""
		}
	}

	searchTerm(ev){
		this.setState({
			search: ev.target.value
		})
	}

	results(ev){
		ev.preventDefault();
		this.setState({
			search: ev.target.value
		})
		this.props.searchAPI(this.state.search)
		

	}



	render(){
		console.log(this.state.search)
		return (
			<div className="col-md-4">
				<form onSubmit={this.results.bind(this)}>
					<input type="text" value={this.state.search} onChange={this.searchTerm.bind(this)}/>
					<input type="submit"/>
				</form>
			</div>
		)
	}
}
	/* ------------searching on type---------------- */
// 	render(){
// 		console.log(this.state.search)
// 		return (
// 			<div className="col-md-4">
// 				<form >
// 					<input type="text" value={this.state.search} onChange={this.results.bind(this)}/>
// 					<input type="submit"/>
// 				</form>
// 			</div>
// 		)
// 	}
// }

export default GifSearch