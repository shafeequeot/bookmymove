import Head from 'next/head'
import React, { useState } from 'react'
import {useRouter} from 'next/router'


function Titile({title, desc}) {
    const [canonicalURL, setcanonicalURL] = useState('https://bookmymove.ae'+useRouter().pathname)

  return (
    <Head>
    <title >{title?.toString()}</title>
    <meta name="description" content={desc?.toString()} />
    <link rel="canonical" href={canonicalURL} />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  )
}

export default Titile