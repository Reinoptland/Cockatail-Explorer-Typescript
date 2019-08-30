import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Dispatch } from 'redux'
import { ICocktail } from '../../../entities/cocktail'


interface Props {
    cocktails: ICocktail[] | [];
    dispatch: Dispatch
}

class CocktailDetails extends Component<Props> {

    public async componentDidMount(){
        const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        const json = await res.json()
        this.props.dispatch({
            type: 'FETCH_COCKTAILS_SUCCESS',
            payload: json.drinks
        })
    }

    public render() {
        const { cocktails } = this.props
        return (
        <div className="cocktail">
            <h1>Cocktails</h1>
            {cocktails === null && <p>Loading...</p>}
        </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        cocktails: state.cocktails
    }
}

export default connect(mapStateToProps)(CocktailDetails)