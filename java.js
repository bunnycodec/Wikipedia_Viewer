
$(document).ready(function(){

    $("#search").click(function(){

        var searchTerm = $("#searchTerm").val();
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";

        $.ajax({

            type: "GET",
            url: url,
            async: false,
            dataType: "json",
            success: function(data){
                $("#list").html("");
                for(var i=0;i<data[1].length;i++){
                    $("#list").prepend("<li class='rounded border border-dark list-group-item edit bg-info p-4 m-2'><a class='lead text-dark' href=" + data[3][i] + ">" + data[1][i] + "</a>" + data[2][i] + "</li>");
                }
            },
            error: function(data){
                alert("Error");
            }

        });

    });

    $("#searchTerm").keypress(function(e){
        if(e.which==13){
            $("#search").click();
        }
    });

});

