
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
/**
 * This is the bootstrap application
 */
qx.Class.define("bootstrap.Application",
{
  extend : qx.application.Standalone,
 
  members :
  {
    /**
     * This method contains the initial application code and gets called 
     * during startup of the application
     */
    main : function()
    {
      // Call super class
      this.base(arguments);
      qx.registry.setApp(this);
    }
  }
});

