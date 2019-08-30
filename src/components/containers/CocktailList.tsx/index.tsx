import React, { Component, ReactChild } from 'react'
import { connect } from 'react-redux';
import { Dispatch } from 'redux'
import { ICocktail } from '../../../entities/cocktail'
import CocktailService from '../../../services/CocktailService'

interface Props {
    cocktails: ICocktail[];
    dispatch: Dispatch
}

class CocktailDetails extends Component<Props> {

    public async componentDidMount(){
        CocktailService.getMargaritas()
    }

    public render() {
        const { cocktails } = this.props
        return (
        <div className="cocktail">
            <h1>Cocktails</h1>
            {cocktails.length === 0 
                ? <p>Loading...</p>
                : cocktails.map(cocktail =>
                    <div> 
                        <h2>{cocktail.strDrink}</h2>
                        <img src={cocktail.strDrinkThumb}/>
                    </div>
                )
                
            }
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