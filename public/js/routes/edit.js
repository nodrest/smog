// Generated by CoffeeScript 1.3.1
(function() {

  define(["smog/notify", "smog/editor", "templates/edit"], function(notify, editor, templ) {
    return function(_arg) {
      var edit, id, name, realname;
      name = _arg.name, id = _arg.id;
      realname = name.toLowerCase();
      $('#content').append(templ({
        id: id
      }));
      edit = editor.create("" + id + "-edit-view", "json");
      edit.getSession().setUseWrapMode(true);
      edit.getSession().setWrapLimitRange(100, 100);
      edit.getSession().setValue($("#" + id + "-value").text());
      $('#edit-modal').modal().css({
        'margin-left': function() {
          return -($(this).width() / 2);
        }
      });
      return $('#edit-modal').on('hidden', function() {
        edit.destroy();
        return $('#edit-modal').remove();
      });
    };
  });

}).call(this);