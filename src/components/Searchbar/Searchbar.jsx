import { Component } from "react";
import PropTypes from "prop-types"
import styles from "./searchbar.module.css"


class Searchbar extends Component {
    state = {
        search: "",
    }
    static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    }
    handleChange = e => {
        this.setState({ search: e.currentTarget.value.toLowerCase() });
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({ search: "" });
    };
    render() {
        return (
            <header  className={styles.Searchbar}>
                <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
                    <button type="submit"className={styles.SearchFormButton}></button>
                    <input className={styles.SearchFormInput} type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handleChange}
                        value={this.state.search}/>
                
                </form>
            </header>
        )
    }
}


export default Searchbar;
