const url = 'http://localhost:3000/notes'

document.addEventListener('submit', function (event) {
    event.preventDefault()
    createNote()
})

function renderNotesList () {
    fetch(url)
        .then(res => res.json())
        .then(notes => {
            let notesList = document.querySelector('#notesList')
                for (let note of notes) {
                    console.log(note)
                addedNote = document.createElement('div')
                    addedNote.classList.add('note-card')
                const noteText = document.createElement('p')
                    addedNote.appendChild(noteText)
                    noteText.innerText = note.noteItem
                notesList.appendChild(addedNote)
                }
            })
        }

function createNote() {
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
            const addedNote = document.createElement('div')
                addedNote.classList.add('note-card')
            const noteText = document.createElement('p')
                addedNote.appendChild(noteText)
                noteText.innerText = data.noteItem
            notesList.appendChild(addedNote)
        })
    }
    
    renderNotesList()

