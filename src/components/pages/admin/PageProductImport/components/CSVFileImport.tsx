import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(3, 0, 3),
  },
}));

type CSVFileImportProps = {
  url: string,
  title: string
};

function utf8_to_b64(str: string) {
  return window.btoa(unescape(encodeURIComponent(str)));
}

export default function CSVFileImport({url, title}: CSVFileImportProps) {
  const classes = useStyles();
  const [file, setFile] = useState<any>();

  const onFileChange = (e: any) => {
    console.log(e);
    let files = e.target.files || e.dataTransfer.files
    if (!files.length) return
    setFile(files.item(0));
  };

  const removeFile = () => {
    setFile('');
  };

  const uploadFile = async (e: any) => {
  const shopLocalStorage: Storage = window.localStorage;
  const gitHubUserName: string = `${process.env.USER_NAME}`;

  // const encodedPassword = utf8_to_b64(`${process.env.gitHubUserName}`)
  const encodedPassword = utf8_to_b64(`TEST_PASSWORD`)
  

// if(!shopLocalStorage.getItem(gitHubUserName)) {
  shopLocalStorage.setItem(gitHubUserName, encodedPassword);
// }

const password = shopLocalStorage.getItem(gitHubUserName);

console.log('PASSWORD', password);
      // Get the presigned URL
      const response = await axios({
        method: 'GET',
        url,
        params: {
          name: encodeURIComponent(file.name)
        }
      })
      console.log('File to upload: ', file.name)
      console.log('Uploading to: ', response.data)
      const result = await fetch(response.data, {
        method: 'PUT',
        headers: new Headers({
          'Authorization': `Basic ${password}`,
          'Content-Type': 'application/json',  
        }),
        body: file
      })
      console.log('Result: ', result)
      
      setFile('');
    }
  ;

  return (
    <div className={classes.content}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {!file ? (
          <input type="file" onChange={onFileChange}/>
      ) : (
        <div>
          <button onClick={removeFile}>Remove file</button>
          <button onClick={uploadFile}>Upload file</button>
        </div>
      )}
    </div>
  );
}
