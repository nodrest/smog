// Generated by CoffeeScript 1.3.3
(function() {

  define(["smog/server", "templates/input", "smog/notify"], function(server, templ, notify) {
    return {
      show: function() {
        $('#content').append(templ({
          title: 'New',
          button: 'Create',
          placeholder: 'Name'
        }));
        $('#input-modal').modal();
        $('#input-modal').on('hidden', function() {
          return $('#input-modal').remove();
        });
        return $('#input-button').click(function() {
          return server.createCollection($('#input-text').val(), {}, function(err) {
            if (err != null) {
              return notify.error("Error creating collection: " + (err.err || err));
            }
            $('#input-modal').modal('hide');
            notify.success("Collection created");
            return window.location.hash = '#/home';
          });
        });
      }
    };
  });

}).call(this);
