// Generated by CoffeeScript 1.3.3
(function() {

  define(["smog/server", "smog/notify", "smog/editor", "templates/edit"], function(server, notify, editor, templ) {
    return {
      show: function(_arg) {
        var edit, id, name, val;
        name = _arg.name, id = _arg.id;
        val = $("#" + id + "-value").text();
        $('#content').html(templ({
          title: "Editing " + id,
          id: id,
          button: 'Save'
        }));
        edit = editor.create("" + id + "-edit-view", {
          mode: "javascript",
          wrap: 100,
          worker: false,
          value: val
        });
        return $('#edit-button').click(function() {
          return server.collection({
            collection: name,
            type: 'update',
            query: edit.getText()
          }, function(err) {
            if (err != null) {
              return notify.error("Error saving document: " + (err.err || err));
            }
            edit.destroy();
            notify.success("Document saved!");
            return window.location.hash = "#/collection/" + name;
          });
        });
      }
    };
  });

}).call(this);
