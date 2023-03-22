import React from 'react'
import { StyleSheet, css } from "aphrodite";

function Login(){
    return(
      <React.Fragment>
          <div className={css(styles.login)}>
          <p>Login to access the full dashboard</p>
          <div className="form">
          <label htmlFor="Email">Email: </label>
          <input type="text"></input>
          <label htmlFor="Password">Password: </label>
          <input type="password"></input>
          <button type="submit">OK</button>
          </div>
        </div>
      </React.Fragment>
    )
}

const styles = StyleSheet.create({
  login: {
    margin: "50px",
    flexGrow: 1,
  },

  loginInput: {
    marginLeft: "10px",
    marginRight: "20px",
  },
});
export default Login