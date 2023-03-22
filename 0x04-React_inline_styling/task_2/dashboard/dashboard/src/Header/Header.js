import React from 'react';
import { StyleSheet, css } from "aphrodite";
import logo from './logo.jpg';

function Header(){
    return(
        <div className={css(styles.header)}>
        <img src={logo} alt='logo' />
        <h1>
        School dashboard
        </h1>
      </div>
    )
}

const Css = {
  mainColor: "#e01d3f",
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    color: Css.mainColor,
    fontSize: "20px",
  },

  headerImg: {
    width: "200px",
  },
});

export default Header