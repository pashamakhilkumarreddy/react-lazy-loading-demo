import { Component, memo } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage />;
    }
    return this.props.children;
  }
}

const ErrorPage = memo(() => {
  return (
    <div className='columns is-centered is-vcentered is-mobile'>
      <div className='column is-full-mobile'>
        <h2 className='title is-2'>Looks like it is something from our side! Our best minds are working on it.</h2>
      </div>
    </div>
  ) 
})

export default ErrorBoundary;