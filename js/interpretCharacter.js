console.log("Character Interpretter Loaded!");
if (window.File && window.FileReader && window.FileList && window.Blob) {
    console.log("Brower supports file uploading");

    function handleFiles(evt) {
        var files = evt.target.files;

        console.log(files);

        if (files[0]["type"].match("text/xml")) {
            console.log("File is an XML file");

            var reader = new FileReader();

            reader.onload = (function (theFile) {
                return function(e){
                    console.log(e.target.result);
                }
            })(f);
            
            reader.readAsText(f);
        } else {
            console.error("Please upload a valid '.xml' file");
        }


    }

    document.getElementById('characterUpload').addEventListener("change", handleFiles, false);

} else {
    console.error("Browser does not support file uploading");
}
//var xhr = new XMLHttpRequest();
//
//xhr.onload = function(){
//    console.log("Character Loaded!");
//    console.log(xhr.response);
//}
//
//xhr.onerror = function(){
//    console.error("Error loading character XML!");
//}
//
//xhr.open("GET", "http://localhost/js/exampleChar.xml", true);
//xhr.responseType = "document";
//xhr.send(null);

//reader.onload = (function (theFile) {
//    return function (e) {
//        // Render thumbnail.
//        var span = document.createElement('span');
//        span.innerHTML = ['<img class="thumb" src="', e.target.result,
//                            '" title="', escape(theFile.name), '"/>'].join('');
//        document.getElementById('list').insertBefore(span, null);
//    };
//})(f);
