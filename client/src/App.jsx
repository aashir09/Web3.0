import {Navbar,Welecome,Footer,Services, Transactions} from './components';
const App =() => {
 
  return (
    <div className="min-h-screen">
       <div className="gradient-bg-welcome">
          <Navbar />
          <Welecome />
       </div>
          <Services />
          <Transactions />
          <Footer />
    </div>
  );
}

export default App;
