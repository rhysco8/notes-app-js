// (function(exports) {
//   function testNoteInitialization() {
//     var note = new Note("test note");
//
//     if (note.text !== "test note") {
//       throw new Error("Note not initialized with text");
//     }
//   };
//   testNoteInitialization();
// })(this);
  var assert = {
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed: " + assertionToCheck + "is not truthy");
      }
    }
  }


  function testNoteInitialization() {
    var note= new Note("test note");
    assert.isTrue(note.text === "test note");
  };
  testNoteInitialization();
