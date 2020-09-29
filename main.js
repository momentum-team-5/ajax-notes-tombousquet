const url = 'http://localhost:3000/notes'

document.addEventListener('submit', function (event) {
    event.preventDefault()
    const noteInput = document.querySelector('#noteInput').value
    console.log(noteInput)

fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        noteItem: noteInput,
    })
})
    .then(res => res.json())
    .then(data => {
        const notesList = document.querySelector('#notesList')
        const addedNote = document.createElement('li')
        addedNote.innerText = data.noteItem
        notesList.appendChild(addedNote)
    })
})
    
fetch(url)
    .then(res => res.json())
    .then(notes => {
        let notesList = document.querySelector('#notesList')
            for (let note of notes) {
                console.log(note)
            addedNote = document.createElement('li')
            addedNote.innerText = notes.noteItem
            notesList.appendChild(addedNote)
            }
        })
