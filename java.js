
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
                    $("#list").prepend("<div><div class='btn-primary edit'><a href="+ data[3][i] +">"+data[1][i]+"</a><p>"+ data[2][i] +"</p></li></div><hr></div>");
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

