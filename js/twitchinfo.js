function getChannelInfo() {
    
    $('#searchButton').prop('disabled', true);
    $('#channelName').prop('disabled', true);
    
    var id = '?client_id=e6wxl3xsgtfv32x51y9gb6lspt1cdbx'
    var chan = document.getElementById("channelName").value

    $.ajax({
          dataType: "jsonp",
          url: 'https://api.twitch.tv/kraken/channels/' + chan + id,
          }).done(function ( data ) {

          $('#chan-name').append('<b>' + data.display_name + '</b> - Channel Statistics');
          $('#followers').append(data.followers.toLocaleString());
          $('#views').append(data.views.toLocaleString());
          $('#stream-title').append('Stream Title <b>: ' + data.status + '</b>');
          $('#game').append('Current Game <b>: ' + data.game + '</b>');
          $('#create-date').append(data.created_at.toLocaleString());
          $('#partner').append(data.partner);
          $('#avatar').append('<p><img style="width:146px;height:146px;" src=' + data.logo + '></p>');
          document.getElementById('page-wrapper').className = "unhidden";

        $.ajax({
          dataType: "jsonp",
          url: 'https://api.twitch.tv/kraken/channels/' + chan + '/follows' + id,
          }).done(function ( followData ) {
              for(var i=0; i<17; i++)
                {
                    $('#followTable1').append('<tr><td><p> '+ followData.follows[i].user.display_name +'&nbsp;</p></td></tr>');
                };
        });

        $('#chat').append('<iframe frameborder="0" scrolling="no" src="https://twitch.tv/' +chan + '/chat" height="500" width="540"></iframe>');

        $.ajax({
          dataType: "jsonp",
          url: 'https://api.twitch.tv/kraken/chat/' + chan + '/emoticons' + id,
          }).done(function ( emoteData ) {



          for(var i=0; i<10; i++)
            {
                if(emoteData.emoticons[i].subscriber_only == true) {
                    $('#emoteTable1').append('<tr><td> '+ emoteData.emoticons[i].regex +'&nbsp;</td> <td><img src=' + emoteData.emoticons[i].url + '> </td> </tr>');
                }
            };
          for(var j=10; j<20; j++)
            {
                if(emoteData.emoticons[j].subscriber_only == true) {
                    $('#emoteTable2').append('<tr><td> '+ emoteData.emoticons[j].regex +'&nbsp;</td> <td><img src=' + emoteData.emoticons[j].url + '> </td> </tr>');
                }
            };
          for(var l=20; l<30; l++)
            {
                if(emoteData.emoticons[l].subscriber_only == true) {
                    $('#emoteTable3').append('<tr><td> '+ emoteData.emoticons[l].regex +'&nbsp;</td> <td><img src=' + emoteData.emoticons[l].url + '> </td> </tr>');
                }
            };
          for(var p=30; p<40; p++)
            {
                if(emoteData.emoticons[p].subscriber_only == true) {
                    $('#emoteTable4').append('<tr><td> '+ emoteData.emoticons[p].regex +'&nbsp;</td> <td><img src=' + emoteData.emoticons[p].url + '> </td> </tr>');
                }
            };
            for(var q=40; q<50; q++)
            {
                if(emoteData.emoticons[q].subscriber_only == true) {
                    $('#emoteTable5').append('<tr><td> '+ emoteData.emoticons[q].regex +'&nbsp;</td> <td><img src=' + emoteData.emoticons[q].url + '> </td> </tr>');
                }
            };
            for(var w=40; q<50; q++)
            {
                if(emoteData.emoticons[w].subscriber_only == true) {
                    $('#emoteTable6').append('<tr><td> '+ emoteData.emoticons[w].regex +'&nbsp;</td> <td><img src=' + emoteData.emoticons[w].url + '> </td> </tr>');
                }
            };
        });
    });
    };
          
function ClearFields() {location.reload();};
        
$('#channelForm').submit(function(event) {
    event.preventDefault();
    if ($("searchButton").hasAttr('disabled')) {
      location.reload();
    }
    else {
      getChannelInfo();
    }
    document.getElementById('page-wrapper').className = "hidden";
});

