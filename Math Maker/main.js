 /*
  * These functions create and solve random mathematical expressions. 
  * They are fairly simple, and should be reusable. That is, if you ever 
  * need to generate random mathematical expressions. As they are now,
  * they only use the four main math operations: addition, subtraction
  * multiplication, and division. They add parentheses around negative
  * numbers, but do not generate parenthetical expressions. 
  *
  * Copyright: 2012, Corbin <jdgregson@gmail.com>
  * 
  * This program is free software; you can redistribute it and/or modify it
  * under the terms of the GNU General Public License as published by the
  * Free Software Foundation; either version 2, or (at your option) any
  * later version.
  *
  * This program is distributed in the hope that it will be useful,
  * but WITHOUT ANY WARRANTY; without even the implied warranty of
  * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  * GNU General Public License for more details.
  *
  * You should have received a copy of the GNU General Public License
  * along with this program; if not, write to the Free Software
  * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301, USA.
  *
  */

/***********************************************
* Returns a mathematical term as a string,
* such as "-384" or "90."
* Depends On: Nothing
************************************************/
function makeTerm() {
    var term = "";
    isNegative = 0;
    
    // decide if the term is positive or negative
    if (Math.random() > 0.5 ) {
        term += "(-";
        isNegative = 1;
    } 
    
    // build the term
    int = Math.random() * 9;
    for (I = 0; I <= Math.random() * int; I++) {
        _num = Math.random() * 9;
        num = Math.round(_num);
        term += num;
    }
    
    if (isNegative == 1) {
        term += ")";
    }
    
    return term;
}

/*************************************************
* Returns a mathematical expression as a string, 
* such as "615 * (-754788) - 56 * (-8)"
* Depends On: makeTerm()
**************************************************/
function createExpression() {
    var expression = "";
    
    // operations
    operator = [' + ', ' - ', ' * ', ' / ']; 

    // decide how many terms the expression will have
    _length = Math.random() * 9;
    length = Math.round(_length);
    if (length < 2) {
        length = 2;
    }
    
    // build the expression
    for (i = 1; i <= length; i++) {
        expression += makeTerm();
        if (i < length) {
            _n = Math.random() * 3;
            n = Math.round(_n);
            expression += operator[n];
        }
    }
    
    return expression;
}

/********************************************************
* Replaces * and / with multiplication and division signs.
*********************************************************/
function prettyOperators(expression /* string */) {
    expression = expression.replace(/\//g, '&divide;');
    expression = expression.replace(/\*/g, '&times;');
    
    return expression;
}

/********************************************************
* Evaluates the string as a mathematical expression, then
* returns the result.
*********************************************************/
function solveExpression(expression /* string */) {
    solve = eval(expression);
    
    return solve;
}
