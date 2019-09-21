import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import { ThemeProvider } from 'styled-components'
const theme = {
  colors: {
    primary: '#0070f3'
  }
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <title>Palestra React</title>
          <link rel="stylesheet" type="text/css" href="./static/css/style.css" />
          <link rel="shortcut icon" href="./static/img/ico/favicon.ico" />
          <meta name="theme-color" content="#000" />
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    )
  }
}
