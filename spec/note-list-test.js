function testNoteListInitialization() {
  var noteList = new NoteList;
  var note1 = new Note("test note");
  var note2 = new Note("another note");

  noteList.addNote(note1);
  noteList.addNote(note2);

  assert.isTrue(noteList.notes[0] === "test note")
  assert.isTrue(noteList.notes[1] === "another note")
  // === operator returns false when comparing two arrays
  // assert.isTrue(noteList.notes === ["test note", "another note"]);
};

testNoteListInitialization();
