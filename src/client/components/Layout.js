import React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { Link } from 'react-router';

@observer
export default class Layout extends React.Component {
	@observable menuIsOpen = false;
	@action.bound toggleMenu() {
		this.menuIsOpen = !this.menuIsOpen;
	}
	render() {
		return (
			<>
				<header>
					<h2>Robert Lemon</h2>
					<div
						className={`circle-photo ${this.menuIsOpen ? 'small' : '' }`}
					/>
				</header>
				<section
					className='content'
				>
					<div
						className={`inner-content ${this.menuIsOpen ? '' : 'menu-closed'}`}
					>
						<div
							className='menu-toggle'
							onClick={this.toggleMenu}
						>
							☰
						</div>
						<div
							className='menu'
						>
							<ul>
								<li>
									<Link
										className={this.props.location.pathname === '/' ? 'active' : ''} 
										to='/'
									>Home</Link>
								</li>
								<li>
									<Link
										className={this.props.location.pathname === '/programming' ? 'active' : ''}
										to='/programming'
									>Programming</Link>
								</li>
								<li>
									<Link
										className={this.props.location.pathname === '/3d' ? 'active' : ''}
										to='/3d'
									>3D</Link>
								</li>
								<li>
									<Link
										className={this.props.location.pathname === '/crafty' ? 'active' : ''}
										to='/crafty'
									>Crafty</Link>
								</li>
								<li>
									<Link
										className={this.props.location.pathname === '/contact' ? 'active' : ''}
										to='/contact'
									>Contact</Link>
								</li>
							</ul>
						</div>
						<div className='body'>
							{this.props.children}
						</div>
					</div>
				</section>
				<footer>
					<span>
						&copy; {new Date().getFullYear()} rlemon.ca
					</span>
				</footer>
			</>
		);
	}
}
