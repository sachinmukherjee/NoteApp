var currentNoteName = undefined;


$(document).ready(function(){

    readCurrentNoteData();

    $(document).on("keypress",".note_area",function(){

        if(currentNoteName == undefined)
        {
            currentNoteName = $(this).attr('data-note-name');
        }

        storeCurrentNoteData($(this).val(),currentNoteName);
    });

});


function storeCurrentNoteData(data,currentNoteName){

    var note1 = {
        "note_name":currentNoteName,
        "data":data,
        "is_current":true,
        "last_edited": new Date(),
    };

   note1 = JSON.stringify(note1);
   localStorage.setItem("note_1", note1);

}

function readCurrentNoteData(){

    var currentNoteName = "";
    var noteData = "";
    var note_1 = localStorage.getItem("note_1");
    note_1 = JSON.parse(note_1);

    if(note_1 != null){

        currentNoteName = note_1["note_name"];
        noteData = note_1["data"];

        $(document).find("#currentnote").text(currentNoteName);
        $(document).find(".currentelement").find(".note_area").attr('data-note-name', currentNoteName);
        $(document).find(".note_area").val(noteData);
    }
}
