import Header from './components/Header';
import Main from './components/Main';
import Activity from './components/Activity';
import Accomplishment from './components/Accomplishment';
import Member from './components/Member';
import Ask from './components/Ask';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Header />
            <Main />
            <Activity />
            <Accomplishment />
            <Member />
            <Ask />
            <Footer />
            <a
                href="/"
                className="rounded-full w-12 h-12 bg-gray-100 fixed bottom-0 right-0 flex items-center justify-center text-gray-800 mr-8 mb-8 shadow-sm border-gray-300 border"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                </svg>
            </a>
        </div>
    );
}

export default App;
