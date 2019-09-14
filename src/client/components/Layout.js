import React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';

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
									home
								</li>
								<li>
									programming
								</li>
								<li>
									3d
								</li>
								<li>
									crafty
								</li>
								<li>
									contact
								</li>
							</ul>
						</div>
						<div className='body'>
							body content
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

/*
 <div
						className='content-panel-container'
					>
						<div
							className='content-panel-menu-trigger'
							onClick={this.toggleMenu}
						/>
						<div
							className={`content-panel nav ${this.menuIsOpen ? 'open' : ''}`}
						>
							<ul>
								<li>
									home
								</li>
								<li>
									programming
								</li>
								<li>
									3d
								</li>
								<li>
									crafty
								</li>
								<li>
									contact
								</li>
							</ul>
				</div>
						<div
							className={`content-panel body ${this.menuIsOpen ? 'nav-open' : ''}`}
						>
							{this.props.children}
				</div>
					</div>
					*/