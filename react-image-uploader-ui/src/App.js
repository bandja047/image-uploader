
import Uploader from './components/layout/uploader/Uploader'

import './app.css'
import UploadSuccess from './components/layout/uploader/uploadsuccess/UploadSuccess';
import UploaderProvider from './components/layout/uploader/UploaderProvider';
import ProgressBar from './components/loader/Loader';
import Loader from './components/loader/Loader';

function App() {
  return (


    <UploaderProvider />

  );
}

export default App;
