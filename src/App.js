import logo from './logo.svg';
import './App.css';
import {useDispatch} from "react-redux";
import {USER_POSTS_FETCH_REQUESTED} from "./store/actions";

function App() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(({
      type: USER_POSTS_FETCH_REQUESTED,
      payload: {
        userId: 1
      }
    }))
  }
  return (
    <div className="app-container">
      <button onClick={handleClick}>Get posts</button>
    </div>
  );
}

export default App;
