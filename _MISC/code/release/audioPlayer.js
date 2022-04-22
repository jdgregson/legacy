    /*
     * Corbin - 1/18/2011
     *
     * http://www.jdgregson.com
     *
     */

    /* Call this function with a ink built like this: <a id="http://www.yoursite.com/path/to/your/video.mp3" href="#" onclick="audioPlayer(id, this.innerHTML, 'AudioPlayer', '400', '230');return false;" title="click to play">play</a>
     *
     * All you need to change is the id, which should be the URL of your video/audio,
     * the inner HTML (what goes in between <a> and </a>) which will be the 
     * content in the player box, and the width and height, which is configured in the 
     * function call: onclick="audioPlayer(id, this.innerHTML, 'AudioPlayer', '400', '230');return false;"
     * where '400' is the width, and '230' is the height. 
     *
     */
	  
    function audioPlayer(audioLink,aTitle,WinName,Wt,Ht) {
     WinSpecs="width=" + Wt + ",height=" + Ht + ",menubar=0,resizable=0,scrollbars=1,status=0,titlebar=0,toolbar=0,left=0,top=0";
     audioTitle = aTitle.toUpperCase();
     playerBox=window.open("", WinName, WinSpecs);
     playerBox.document.write("<html>");
     playerBox.document.write("<body bgcolor='black'><center>");
     playerBox.document.write("<p style='color:white;font-weight:bold;'>" + audioTitle + "</p>");
     playerBox.document.write("<embed width='350' src='" + audioLink + "'/>");
     playerBox.document.write("<br/><span style='background:#ccccff'><a href='javascript:lockU=0;self.close()' style='text-decoration:none;'>&nbsp;Close Window&nbsp;</a></span>");
     playerBox.document.write("</center></body>");
     playerBox.document.write("</html>");
     playerBox.document.write("\n");
     playerBox.document.close();
    }
