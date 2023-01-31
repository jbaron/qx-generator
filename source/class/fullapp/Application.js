
qx.registry = {

  "registerMainMethod" : function(fn) { 
     qx.registry.main = fn;
     qx.registry.app && fn(qx.registry.app);
  },

  "setApp" : function(app) {
    qx.registry.app = app;
    qx.registry.main && qx.registry.main(app);
  }

}


window.demo = function(app) {
  var doc = app.getRoot();
  var button1 = new qx.ui.form.Button("Click me too", "fullapp/test.png");
  doc.add(button1, {left: 100, top: 150});

  // Add an event listener
  button1.addListener("execute", function() {
    /* eslint no-alert: "off" */
    alert("Hello World!");
  });
}

/**
 * This is the main application class of "fullapp"
 * 
 * @asset(fullapp/*)
 * @asset(qx/iconfont/MaterialIcons/*)
 * 
 */
qx.Class.define("fullapp.Application",
{
  extend : qx.application.Standalone,
  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    /**
     * This method contains the initial application code and gets called 
     * during startup of the application
     * 
     * @lint ignoreDeprecated(alert)
     */
    main : function()
    {
      // Call super class
      this.base(arguments);
      qx.registry.setApp(this);
    }
  }
});

