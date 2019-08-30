import React, { Component } from 'react'

interface State {
    cocktails: any;
}

export default class CocktailDetails extends Component<{}, State> {
    public state: State = { cocktails: null };

    public render() {
        const { cocktails } = this.state
        return (
        <div className="cocktail">
            <h1>Cocktails</h1>
            {cocktails === null && <p>Loading...</p>}
        </div>
        );
    }
}