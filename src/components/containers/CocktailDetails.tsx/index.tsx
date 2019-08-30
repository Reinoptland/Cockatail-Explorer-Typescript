import React, { Component } from 'react'

interface State {
    cocktail: any;
}

export default class CocktailDetails extends Component<{}, State> {
    public state: State = { cocktail: null };

    public render() {
        const { cocktail } = this.state
        return (
        <div className="cocktail">
            <h1>Cocktail details</h1>
            {cocktail === null && <p>Loading...</p>}
        </div>
        );
    }
}