import React, { Component } from 'react';

class Reactstate extends Component    
{
	constructor(props){
		super(props);
		this.state={product:'car',name:'Creata',model:2018,colour:'Red', imageurl:'https://cdn.autoportal.com/img/new-cars-gallery/hyundai/creta/photo34/hyundai-creta-3567c21f.jpg'}
	}
	render(){
		setTimeout(() => {this.setState({product:'Bike',name:'Honda',model:2000,colour:'Black & white',imageurl:"http://2.bp.blogspot.com/_E15jc7J5CoU/Rs3LHCeiGxI/AAAAAAAAAG8/cVrlTSjdmVU/s320/1.jpg"});
	},10000);
		return(<div>
	<h1>Product :{this.state.product}</h1>
	<h2>Name :{this.state.name}</h2>
	<h2>Model :{this.state.model}</h2>
	<h2>Colour :{this.state.colour}</h2>
	<img src={this.state.imageurl} />
			</div>
		);}
}

export default Reactstate;