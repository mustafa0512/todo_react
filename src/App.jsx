import { useState } from 'react'
import './App.css'
import { Button, FormControl, Grid, TextField } from '@mui/material';
import MediaCard from './components/Card';
import { v4 as uuidv4 } from 'uuid';
import MediaModal from './components/Modal';

const arr = [
  {
    id: 1,
    name: "React js",
    link: "reactjs.org",
    img: 'https://avatars.mds.yandex.net/i?id=01fec024da24b4793f7fac8195316414_l-5162959-images-thumbs&n=13'
  },
  {
    id: 2,
    name: "Vue js",
    link: "vuejs.org",
    img: "https://avatars.mds.yandex.net/i?id=85659fd802dca7c382d8ac7e695bcb16-5576139-images-thumbs&n=13"
  },
  {
    id: 3,
    name: "chakra ui",
    link: "chakra-ui.com",
    img: "https://avatars.mds.yandex.net/i?id=dd2de85df2c5aabfc7422ed9e39d64fe_l-4820929-images-thumbs&n=13"
  },
]


function App() {

  const [todos, setTodos] = useState(arr)
  const [open, setOpen] = useState(false);
  const [changeItem, setChangeItem] = useState();

  const removeCard = (id) => {

    let filtered = todos.filter(el => el.id !== id)

    setTodos(filtered)
  }

  const editCard = (data) => {
    todos.filter(item => {
      if (item.id === data.id) {

        item.name = data.changeText

      }


      handleClose()
    })

    console.log(data);
  }

  const handleOpen = (item) => {
    setOpen(true);
    setChangeItem(item)
  }
  const handleClose = () => setOpen(false);

  const submit = (evt) => {
    evt.preventDefault()

    let todo = {
      id: uuidv4(),
      link: 'new.link' ,
      img: "https://avatars.mds.yandex.net/i?id=072aa5a23f21ab8da49c67a024bf07fb86153e31-8427500-images-thumbs&n=13",
    }

    let fm = new FormData(evt.target)

    fm.forEach((value, key) => {
      todo[key] = value
    })



    setTodos([...todos, todo])

  }

  return (
    <>
      <center>
        <form onSubmit={submit} >
          <TextField placeholder="To-do something" sx={{ width: "300px", height: '30px', marginLeft: "20px", borderRadius: '20px' }} id="filled-basic" label="Let's create" variant="standard" name='name' />
          <Button type='submit' variant="contained" sx={{ height: "46px", marginLeft: "20px" }} >create</Button>
        </form>
      </center>



      <Grid container rowSpacing={1} columnSpacing={1} sx={{ width: "1200px", margin: '0 auto' }}>

        {
          todos.map((item) => (
            <Grid item xs={4} key={item.id}>
              <MediaCard {...item} removeCard={removeCard} handleOpen={handleOpen} editCard={editCard} />
            </Grid>
          ))
        }

      </Grid>


      <MediaModal editCard={editCard} data={changeItem} open={open} handleClose={handleClose} />
    </>

  )
}

export default App
