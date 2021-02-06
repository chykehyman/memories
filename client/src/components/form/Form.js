import { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { createPost } from '../../actions/posts';

const Form = () => {
  const initialPostData = {
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  };
  const [postData, setPostData] = useState(initialPostData);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleChange = ({ target }) => {
    setPostData({
      ...postData,
      [target.name]: target.value,
    });
  };

  const clearForm = () => {
    setPostData(initialPostData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };
  return (
    <Paper>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6"> Creating a Memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={handleChange}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={handleChange}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={handleChange}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={handleChange}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          fullWidth
          className={classes.buttonMargin}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
        >
          Submit
        </Button>
        <Button
          fullWidth
          className={classes.buttonMargin}
          variant="contained"
          color="secondary"
          size="small"
          onClick={clearForm}
        >
          Clear Form
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
