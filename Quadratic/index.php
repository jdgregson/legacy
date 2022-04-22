<?php

 /*
  * Corbin
  *
  * (c) Reach - 2011
  *
  */

?>
<html>
<head>
    <title>Quadratic Formula!</title>
    <link rel="stylesheet" href="style.css"/>
    <script type="text/javascript">
    function simplify(trinomial) {
        trinomial = trinomial.replace('^', 'v');
        trinomial = trinomial.replace('+', 'p');
        display = document.getElementById('display');
        display.src = 'handler.php?trinomial=' + trinomial;
        return
    }
    </script>
</head>
<body>
    <table width="800" align="center" border="0">
        <tr>
            <td align="center">
                <table align="center"><tr><td>
                    <p>Solve or simplify quadratic equations with the Quadratic
                       formula!<br /><br />How to use it:<br />Enter a trinomial
                       in the box and click Simplify! Trinomials should be written
                       in the form ax^2-bx+c. The signs of the a, b, and c terms
                       don't matter, but the exponent should be written as 'x^2'
                       Alternatively, you can enter only the values of the a, b,
                       and c terms, separated by their sign. That is, the trinomial
                       'x^2-2x-3' can be entered as '+1-2-3'<br /><br />
                    </p>
                </td></tr></table>
            </td>
        </tr>
        <tr>
            <td align="center" height="110px" id="input_bar">
                <form action="" onsubmit="return false;">
                    <input type="text" name="trinomial" placeholder="trinomial"
                           id="trinomial">
                    </input>
                    <input type="button" onclick="simplify(trinomial.value)"
                           value="Simplify!">
                    </input>
                </form>
                <a href="http://bazaar.launchpad.net/~corbin/+junk/scripts/view/head:/quadratic.py">
                    view source
                </a>
            </td>
        </tr>
        <tr>
            <td align="center">
                <iframe src="handler.php" id="display" width="100%"></iframe>
            </td>
        </tr>
    </table>
</body>
</html>
