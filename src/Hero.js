import React from 'react'
import { useGlobalContext } from './context'

const Hero = () => {
   const {closeSubmenu} = useGlobalContext()
  return (
    <section className='hero'>
        <div className='hero-center'>
            <article className='hero-info'>
                <h1>Payments infrastructure for the internet</h1>
                <p>
                   Millions of companies of all sizes-from startups to Fortune 500s-use
                   Stripe's software and APIs to accepts payments, send payouts, and mange their business online.
                </p>
                <button className='btn'>
                   Start now
                </button>
            </article>
            <article className='hero-images'>
                Hero Img
            </article>
        </div>
    </section>
  )
}

export default Hero