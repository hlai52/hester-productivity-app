



    <div className="App" onDragOver={dragOver}>
      <h1 className="title">Sticky Notes React App</h1>

    
            My Notes ({notesState.notes.length})
            <p>last note: {notesState.lastNoteCreatedAt}</p>
          </h3>
        )}

        <form className="main-form" onSubmit={addNote}>
    
          <button>Add</button>
        </form>
      </div>

      
        </div>
      ))}
    </div>
