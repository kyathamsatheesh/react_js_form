import logo from './logo.svg';
import './App.css';
import Greet1 from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import Eventbind from './components/Eventbind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifeCycleA from './LifeCyclecomponents/LifeCycleA';
import FragmentDemo from './Fragmentcomponents/FragmentDemo';
import Table from './Fragmentcomponents/Table';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundry from './components/ErrorBoundry';
import PostList from './components/HTTPComponents/PostList';
import PostForm from './components/HTTPComponents/PostForm';

function App() {
  return (
    <div className="App">
      {/* <PostList/> */}
      <PostForm/>
     {/* <ErrorBoundry> */}
     {/* <ErrorBoundry>
        <Hero heroName='Batman'></Hero>
      </ErrorBoundry>
       <ErrorBoundry>
        <Hero heroName='Superman'></Hero>
      </ErrorBoundry>
      <ErrorBoundry>
        <Hero heroName='Joker'></Hero>
      </ErrorBoundry> */}
    {/* </ErrorBoundry>  */}
    {/* <PortalDemo/> */}
    {/* <FragmentDemo/> */}
    {/* <Table/> */}
      {/* <LifeCycleA/> */}

      {/* <Form/> */}

      {/* <Greet1/>   Functional Component */}
      {/* <Welcome/>    Class Component */}
      {/* <Hello/> */}
      {/* <Greet1 name="Bruce" heroName="Batman"><p>This is children props</p></Greet1>
      <Greet1 name="Clark" heroName="Superman"><button>Action</button></Greet1>
      <Greet1 name="Diana" heroName="Wonder Woman"/>
      <Welcome name="Bruce" heroName="Batman"></Welcome>
      <Welcome name="Clark" heroName="Superman"></Welcome>
      <Welcome name="Diana" heroName="Wonder Woman"></Welcome> */}
      {/* <Message /> */}
      {/* <Counter/> */}
      {/* <Greet1 name="Clark" heroName="Superman"><button>Action</button></Greet1>
      <Welcome name="Clark" heroName="Superman"/> */}
      {/* <FunctionClick/>
      <ClassClick/> */}
      {/* <Eventbind/> */}
      {/* <ParentComponent/> */}
      {/* <UserGreeting/> */}
      {/* <NameList/> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <h1 className='error'>Regular Style Error</h1>
      <h1 className={styles.success}>Module Style Success</h1>
      <Inline/> */}
    </div>
  );
}

export default App;
