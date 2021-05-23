import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className='columns is-centered is-vcentered is-mobile is-multiline'>
        <div className='column is-12-mobile is-6-tablet is-6-desktop is-6-widescreen is-6-fullhd'></div>
      </div>
    </>
  )
}

export default Home;