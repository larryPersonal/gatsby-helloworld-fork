import React from 'react'
import { Link } from "gatsby"

import { locales } from '../data/i18n'

class DeskHeader extends React.Component {
	constructor(props) {
		super(props)
	}


	render() {


		return (
			<div>{{locales}}</div>
		)
	}
}


export default DeskHeader
