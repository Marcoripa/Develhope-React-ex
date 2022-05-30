import React from 'react';

export class Colors extends React.Component {
    render() {
        return (
            <>
                {this.props.items.map(item => 
                    <ul>
                        <li key={item.id}style={{color: item.name}}>{item.name}</li>
                    </ul>
                )}
            </>
        )
    }
}
