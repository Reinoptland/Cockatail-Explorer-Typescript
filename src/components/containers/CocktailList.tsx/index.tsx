import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Dispatch } from 'redux'
import { ICocktail } from '../../../entities/cocktail'
import CocktailService from '../../../services/CocktailService'

interface Props {
    cocktails: ICocktail[];
    dispatch: Dispatch
    errors: string
}

class CocktailList extends Component<Props> {

    public async componentDidMount(){
        CocktailService.getMargaritas()
    }

    public render() {
        const { cocktails, errors } = this.props
        return (
        <div className="cocktail">
            <h1>Cocktails</h1>
            {cocktails.length === 0 
                ? <p>Loading...</p>
                : cocktails.map(cocktail =>
                    <div key={cocktail.idDrink}> 
                        <h2>{cocktail.strDrink}</h2>
                        <img 
                            src={cocktail.strDrinkThumb}
                            alt={cocktail.strDrink}
                        />
                    </div>
                )
                
            }
            { errors && 
                <h3 style={{ color: 'red' }}>{errors}</h3> 
            }
        </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        cocktails: state.cocktails,
        errors: state.errors
    }
}

export default connect(mapStateToProps)(CocktailList)