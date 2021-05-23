import { memo } from 'react';
import Footer from '../../../assets/styles/Footer';

const PageFooter = () => {
  return (
    <Footer className='footer'>
      <div className='content'>
        <p className='has-text-centered title is-4'>
          &copy; React 2021
        </p>
      </div>
    </Footer>
  )
}

export default memo(PageFooter);
