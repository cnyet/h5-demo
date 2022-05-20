var hexHash = SparkMD5.hash('Hi there'); // hex hash
console.log(hexHash);

function handleChange(fileList) {
  const blobSlice = File.prototype.slice;
  const file = fileList[0];
  let running = false;
  console.log(file);
  const chunkSize = 2097152; // Read in chunks of 2MB
  const chunks = Math.ceil(file.size / chunkSize);
  let currentChunk = 0;
  const spark = new SparkMD5.ArrayBuffer();
  const fileReader = new FileReader();
  if (running) {
    return;
  }
  fileReader.onload = function(e) {
    const blob = e.target.result;
    running = false;
    spark.append(blob); // Append array buffer
    currentChunk++;
    console.log(currentChunk, blob);
    if (currentChunk < chunks) {
      const md5 = SparkMD5.ArrayBuffer.hash(blob);
      const item = document.createElement('li');
      const text = document.createTextNode('md5: ' + md5);
      item.appendChild(text);
      document.getElementById('hash').appendChild(item);
      loadNext();
    } else {
      const hash = spark.end();
      console.log('finished loading');
      console.info('computed hash', hash); // Compute hash
      document.getElementById('total').innerHTML = hash;
    }
  };

  function loadNext() {
    var start = currentChunk * chunkSize;
    var end = start + chunkSize >= file.size ? file.size : start + chunkSize;
    fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
  }
  fileReader.onerror = function() {
    console.warn('oops, something went wrong.');
  };
  running = true;
  fileReader.readAsArrayBuffer(file);
}

var blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice,
  log = document.getElementById('log'),
  input = document.getElementById('input'),
  running = false,
  ua = navigator.userAgent.toLowerCase();

function registerLog(str, className) {
  var elem = document.createElement('div');

  elem.innerHTML = str;
  elem.className = 'alert-message' + (className ? ' ' + className : '');
  log.appendChild(elem);
}

function doIncrementalTest() {
  if (running) {
    return;
  }

  if (!input.files.length) {
    registerLog('<strong>Please select a file.</strong><br/>');
    return;
  }

  var blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice,
    file = input.files[0],
    chunkSize = 2097152, // read in chunks of 2MB
    chunks = Math.ceil(file.size / chunkSize),
    currentChunk = 0,
    spark = new SparkMD5.ArrayBuffer(),
    time,
    uniqueId = 'chunk_' + (new Date().getTime()),
    chunkId = null,
    fileReader = new FileReader();

  fileReader.onload = function(e) {
    if (currentChunk === 0) {
      registerLog('Read chunk number <strong id="' + uniqueId + '">' + (currentChunk + 1) + '</strong> of <strong>' + chunks + '</strong><br/>', 'info');
    } else {
      if (chunkId === null) {
        chunkId = document.getElementById(uniqueId);
      }

      chunkId.innerHTML = currentChunk + 1;
    }

    spark.append(e.target.result); // append array buffer
    currentChunk += 1;

    if (currentChunk < chunks) {
      const md5 = SparkMD5.ArrayBuffer.hash(e.target.result);
      const item = document.createElement('li');
      const text = document.createTextNode('md5: ' + md5);
      item.appendChild(text);
      document.getElementById('spark').appendChild(item);
      loadNext();
    } else {
      running = false;
      registerLog('<strong>Finished loading!</strong><br/>', 'success');
      registerLog('<strong>Computed hash:</strong> ' + spark.end() + '<br/>', 'success'); // compute hash
      registerLog('<strong>Total time:</strong> ' + (new Date().getTime() - time) + 'ms<br/>', 'success');
    }
  };

  fileReader.onerror = function() {
    running = false;
    registerLog('<strong>Oops, something went wrong.</strong>', 'error');
  };

  function loadNext() {
    var start = currentChunk * chunkSize,
      end = start + chunkSize >= file.size ? file.size : start + chunkSize;

    fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
  }

  running = true;
  registerLog('<p></p><strong>Starting incremental test (' + file.name + ')</strong><br/>', 'info');
  time = new Date().getTime();
  loadNext();
}