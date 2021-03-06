const { default: FetchedPosts } = require('./components/FetchedPosts');
const { default: PostForm } = require('./components/PostForm');
const { default: Posts } = require('./components/Posts');

function App() {
  return (
    <div className='container pt-3'>
      <div className='row'>
        <div className='col'>
          <PostForm />
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <h2>SyncPosts</h2>
          <Posts />
        </div>
        <div className='col'>
          <h2>AsyncPosts</h2>
          <FetchedPosts posts={[]} />
        </div>
      </div>
    </div>
  );
}

export default App;
