import { useEffect } from "react";
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Routes from './routes/Routes';

// Reincia el scroll al cambiar de ruta...
function ScrollToTop(props) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return props.children;
}

function App() {
  return (
    <div className="App font-ag-normal">
      <Router basename="/">
        <ScrollToTop />
        <Routes />
      </Router>
    </div>
  );
}

export default App;