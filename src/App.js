import Header from "./components";
import GithubProvider from "./providers/github-providers";

function App() {
  return (
    <div className="App">
      
      <GithubProvider>
        <Header></Header>
        <Header></Header>
        <Header></Header>
        <Header></Header>
        <Header></Header>
      </GithubProvider>
    </div>
  );
}

export default App;