#!/usr/bin/python

"""
Use the quadratic formula to simplify quadratic expressions (only trinomials).
"""

# Copyright (c) Corbin 2012 <jdgregson@gmail.com>
# License: GPLv3

import math
import re
import sys
import doctest


def quadratic_formula(trinomial):
    """
    The quadratic formula, as simply as I can write it in python. This
    function takes the trinomial to be simplified as its only input. It
    returns the simplification or solutions as a string.
                   __________
          -b +/- \/ b^2 - 4ac
     x =  -------------------
                   2a
    
    >>> quadratic_formula('x^2 -7x + 12')
    'x = 4.0, or x = 3.0'
    """

    a, b, c = get_abc(trinomial)
    _b = b * -1
    radicand = (b*b) - (4*a*c)
    radicand_is_negative = 0
    divisor = 2 * a
    if radicand < 0:
        radicand = radicand * -1
        radicand_is_negative = 1
    if divisor is 0:
        raise ValueError('divisor is zero!')
        return
    if radicand_is_negative:
        radicand_rt = math.sqrt(radicand)
        solution = 'x = (%s + %si) / %s' % (_b, radicand_rt, divisor)
        solution += ', or x = (%s - %si) / %s' % (_b, radicand_rt, divisor)
        return solution
    else:
        solution_pos = (_b + math.sqrt(radicand)) / divisor
        solution_neg = (_b - math.sqrt(radicand)) / divisor
        return 'x = %s, or x = %s' % (solution_pos, solution_neg)


def get_abc(trinomial):
    """
    Gets the a, b, and c terms from a trinomial and return them in
    a three-tuple.
    
    >>> get_abc('x^2 -7x + 12')
    (1, -7, 12)
    """
    letters = []
    trinomial = re.sub('(?i)x\^2','', trinomial)
    trinomial = re.sub('(?i)x','', trinomial)
    trinomial = trinomial.replace(' ', '')
    trinomial = trinomial.replace('-', '-_')
    trinomial = trinomial.replace('+', '+=')
    terms = re.split('[-\+]', trinomial)
    for term in terms:
        term = term.replace('_', '-')
        term = term.replace('=', '+')
        if (term == '-' or term == '+'):
            term = term + '1'
        if term == '':
            term = 1
        term = int(term)
        letters.append(term)
    if len(letters) > 3:
        letters.pop(0)
    return tuple(letters)


def main():
    usage = 'Usage: %s <trinomial>\n\nTrinomials should ' % sys.argv[0]
    usage += 'be expressed like:\n\n\'x^2 -7x + 12\' or\n\'x^2-7x+12\'\n'
    if len(sys.argv) < 2:
        print usage
        return 0
    else:
        print quadratic_formula(sys.argv[1])
        return 1
    

if __name__ == '__main__':
    sys.exit(main())
    #doctest.testmod()
