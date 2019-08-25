function handleFiles(fileList) {
  var blob = fileList[0];
  var start = 0;
  var end = 0;
  var index = 0;
  var fileSize = blob.size;
  var fileName = blob.name;
  var fileType = blob.type;
  var bytesPerPiece = 1024 * 1024; // 每个文件切片大小定为1MB .
  var totalPieces = Math.ceil(fileSize / bytesPerPiece);
  var formData = new FormData();
  while(start < fileSize) {
    end = start + bytesPerPiece;
    if(end > fileSize) {
      end = fileSize;
    }
    var chunk = blob.slice(start, end, fileType);//切割文件    
    var sliceIndex= blob.name + index;
    formData.append("file", 'aaa');
    console.log(chunk);
    // $.ajax({
    //     url: '',
    //     type: 'POST',
    //     cache: false,
    //     data: formData,
    //     processData: false,
    //     contentType: false,
    // }).done(function(res){ 

    // }).fail(function(res) {

    // });
    start = end;
    index++;
  }
  console.log(formData.values());
}
