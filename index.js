const Stopwatch = function() {
    let startTime, endTime, running, duration = 0;

    Object.defineProperty(this, 'duration', {
      get: function() { return duration = value; },
   
    });
    Object.defineProperty(this, 'startime', {
      get: function() { return startime; },
   
    });
    Object.defineProperty(this, 'endTime', {
      get: function() { return endTime; },
   
    });
    Object.defineProperty(this, 'running', {
      get: function() { return running; },
   
    });
  
    
  }
  Stopwatch.prototype.start = function() {
    if (this.running) {
      throw new Error('Watch has already started.');
    }
    this.running = true;
    this.startTime = new Date();
  };
  Stopwatch.prototype.stop = function() {
    if(!this.running)
      throw new Errow('stopwatch is not running.')
    this.running = false;
    this.endTime = new Date();
     const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
     this.duration += seconds;

  };
 Stopwatch.prototype.reset = function() {
    this.startTime =null;
    this.endTime = null;
    this.running =false;
    this.duration = 0;
  };

  const sw = new Stopwatch();

  sw.start();
  setTimeout(() => {
    sw.stop();
    console.log(sw.duration); // Should log elapsed time in seconds
    sw.reset();
    console.log(sw.duration); // Should log 0
  }, 2000);