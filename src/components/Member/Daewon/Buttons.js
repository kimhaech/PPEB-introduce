import { Component, React } from 'react'
import { Link } from 'react-router-dom';

class Buttons extends Component {
  render() {
    return (
      <div className="flex felx-row justify-center space-x-20 mt-16">
        <Link to="/members">
          <div className="h-16 w-32 border-purple-300 border rounded-lg transform hover:shadow-lg motion-reduce:transform-none tracking-widest font-medium title-font">
            <div className="text-center mt-5">재학생</div>
          </div>
        </Link>
        <Link to="/graduates">
          <div className="h-16 w-32 border-purple-300 border rounded-lg transform hover:shadow-lg motion-reduce:transform-none text-l tracking-widest font-medium title-font">
            <div className="text-center mt-5">졸업생</div>
          </div>
        </Link>
      </div>
    )
  }
}
export default Buttons;
