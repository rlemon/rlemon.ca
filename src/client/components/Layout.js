import React from 'react';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div
                className='container'
            >
                <header>
                    <div
                        className='circle-photo'
                    />
                    <h2>Robert Lemon</h2>
                </header>
                <section
                    className='content'
                >
                    {this.props.children}
                </section>
                <footer>
                    <span>
                        &copy; {new Date().getFullYear()} rlemon.ca
                    </span>
                </footer>
            </div>
        );
    }
}