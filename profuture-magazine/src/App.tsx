import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { IssuesSection } from './components/IssuesSection';
import { CallForArticles } from './components/CallForArticles';
import { CallForPapers } from './components/CallForPapers';

import Footer from './components/Footer';

function App() {
    return (
        <div className="container min-h-screen flex flex-col">
            <Header />
            <Hero />
            <IssuesSection />
            <CallForArticles />
            <CallForPapers />
            <Footer />
        </div>
    );
}

export default App;
