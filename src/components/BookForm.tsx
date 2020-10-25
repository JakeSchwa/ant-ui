import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';


function BookForm() {

    const [name, setName] = useState("")

    const handleSubmit = (event: any) => {
        event.preventDefault()
        console.log(event)
    }

    const handleChange = (event: any) => {
        setName(event.target.value)
    }

    return (
        <div>
            <form id="searchFrom" onSubmit={handleSubmit}>
                <TextField
                    id="title"
                    label="Title"
                    value={name}
                    onChange={handleChange}
                    margin="normal"
                />

                <Button id="submitSearch" type="submit" variant="contained" color="primary">
                Search
                </Button>
            </form>
        </div>
    )
}

export default BookForm
