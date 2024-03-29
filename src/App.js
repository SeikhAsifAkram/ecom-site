import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import { Route, Routes } from 'react-router-dom';
import SignIn from './routes/sign-in/sign-in.component';

const Shop = () => {
  return (
    <h1>This is the Shop Page!!</h1>
  );
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='signin' element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
