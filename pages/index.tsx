import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.scss'
import Layout from "./components/Layout"
import { HomeProps, Country } from './components/types'


export default function Home(props: HomeProps) {
  return (
    <Layout>
      {props.countries.map((country, i) => (
        <div key={i} className={styles.country}>
          <span>Name: {country.name}</span>
          <span>Population: {country.population}</span>
          <span>Area: {country.area}m^2</span>
        </div>
      ))}
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries: Country[] = await res.json();

  return {
    props: { countries }
  }
}
