import './App.css'
import photo from './image/hi.jpeg'
import photo2 from './image/hi2.jpg'
import { useState } from 'react'
import axios from 'axios'

function App() {
  const [files, setFiles] = useState('')

  const addButton = (e) => {
    const file = e.target.files
    console.log(file)
    setFiles(file)
  }

  const handleClick = (e) => {
    const formdata = new FormData()
    formdata.append('uploadImage', files[0])

    const config = {
      Headers: {
        'content-type': 'multipart/form-data',
      },
    }
    axios.post(`api`, formdata, config)
  }
  return (
    <>
      <img src={photo} alt="" />
      <img src={photo2} />
      <div>
        <img src="" alt="" />
        <input type="file" id="image" onChange={addButton} />
        <label htmlFor="image">파일 선택하기</label>
      </div>
      <div>
        <button onClick={handleClick}>저장하기</button>
      </div>
    </>
  )
}

export default App
