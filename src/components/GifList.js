import React from 'react'

function GifList(props){
	const listItems = props.searched.map(( el, ind) => <li key={ind}><img src={el.images.fixed_height.url}/></li>)

	return (
		<div className="col-md-8">
			<ul>
			{listItems}
			</ul>
		</div>
	)
}

export default GifList