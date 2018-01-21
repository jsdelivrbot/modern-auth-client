import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import history from './../../history';

export default function(ComposedComponent) {
	class Authentication extends Component {
		componentWillMount() {
			if (!this.props.authenticated) {
				history.push('/');
			}
		}

		componentWillUpdate(nextProps) {
			if (!nextProps.authenticated) {
				history.push('/');
			}
		}

		render() {
			return <ComposedComponent { ...this.props} />
		}
	}

	function mapStateToProps(state) {
		return {
			authenticated: state.auth.authenticated
		};
	}

	return connect(mapStateToProps)(Authentication);
};
