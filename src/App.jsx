import PageHeader from './components/common/Header';
import PageFooter from './components/common/Footer';
import Routes from './routes';

const App = () => {
  return [
    <PageHeader key='header' />,
    <main className='container mt-6' key='main'>
      <Routes />
    </main>,
    <PageFooter key='footer' />
  ];
}

export default App;
