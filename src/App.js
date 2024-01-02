import './App.css';
import { useRef , useState , useEffect} from 'react';
import uploadFile from './services/api';

function App() {

  const [file,setFile]=useState('');
  const [result,setResult]=useState('');
  const fileInputRef=useRef();

  const logo='https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg';

  useEffect(()=>{
    const getImage= async ()=>{
      if(file){
        const data=new FormData();
        data.append("name",file.name);
        data.append("file",file);

        let response = await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  },[file]);

  const onUploadClick = ()=>{
    fileInputRef.current.click();
  }

  return (
      <div className='container'>
          <img src={logo} alt='Loading' />
          <div className='wrapper'>
            <h1>File Sharing</h1>
            <p>Upload and Share the download link from here.</p>

            <button onClick={()=> onUploadClick()}>Upload</button>
            <input type='file'
              ref={fileInputRef}
              style={{display:'none'}}
              onChange={(e)=> setFile(e.target.files[0])}
            />
            <a href={result}>{result}</a>
          </div>
      </div>
  );
}

export default App;
