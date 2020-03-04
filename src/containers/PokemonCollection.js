import React from "react";
import PokemonCard from "../components/PokemonCard";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));


const PokemonCollection = props => {
    const classes = useStyles();

    function renderPokemons() {
        return props.allPokemon.map(pokemon => {
            return (
                <Grid key={pokemon.id} item xs={2}>
                    <PokemonCard pokemon={pokemon} key={pokemon.id} handleClick={props.handleClick} />
                </Grid>
            )
        })
    }

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={4}>
                    {renderPokemons()}
                </Grid>
            </Grid>
        </Grid>
    )
};

export default PokemonCollection;

            // <div>
            //     <div>
            //         {this.renderPokemons()}
            //     </div>
            // </div>