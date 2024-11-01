$(document).ready(function() {
    $('#taskForm').on('submit', function(event) {
        event.preventDefault();
        let taskText = $('#taskInput').val().trim();
        
        if (taskText !== '') {
            let tarefaDuplicada = false;
            
            $('#taskList li').each(function() {
                if ($(this).text() === taskText) {
                    tarefaDuplicada = true;
                }
            });

            if (!tarefaDuplicada) {
                $('#taskList').append(`<li>${taskText}</li>`);
                $('#taskInput').val('');
                $('#error-message').hide();
            } else {
                $('#error-message').text("Tarefa já cadastrada").show();
            }
        }
    });

    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});