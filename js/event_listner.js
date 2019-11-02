$(document).ready(function() {


    //On Click of a NoteApp
    $(document).on("click","#currentnote",function(){

            alertify.prompt('', 'Enter Note Name',''
               ,function(evt, value)
                    {
                        $(document).find("#currentnote").text(value);
                        $(document).find(".currentelement").find(".note_area").attr('data-note-name', value);
                    }
               ,function()
               {

               });

        });

});
