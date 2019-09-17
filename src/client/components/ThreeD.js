import React from 'react';
import STLViewer from './Three/ThreeViewer';

export default class ThreeD extends React.Component {

    render() {
        return (
            <>
                <STLViewer
                    url='assets/stls/Lipless Crankbait.stl'
                    width={500}
                    height={500}
                    modelColor='#cc4444'
                    backgroundColor='#242424'
                    rotate
                    orbitControls
                />
            </>
        );
    }
}