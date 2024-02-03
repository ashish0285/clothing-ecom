import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home';
import SignIn from './routes/sign-in/sign-in';
import Navigation from './components/navigation/navigation';

const Shop = () => {
return (
<h1>I am a Shop Component</h1>
);
};

const App = () => {
  return (
    <div className='home'>
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path='shop' element={<Shop/>}/>
          <Route path='signIn' element={<SignIn/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
