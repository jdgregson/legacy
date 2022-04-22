current_scene = 0;
choice_one_scene = 1;
choice_two_scene = 1;

scene = [
    [ /* 0 */
        "art/000.svg", // 0: scene image
        "",        // 1: scene text
        "Begin",   // 2: choice one text
        "Begin",   // 3: choice two text
        1,         // 4: choice one scene // (the scene to which this
        1          // 5: choice two scene // (choice will take the user)
    ],

    [ /* 1 */
        "art/001.svg",
        "You had no idea that you would be out this late. You thought for sure"+
        " that you'd be out of the woods before dark. The moonlight through the"+
        " trees did little to help the situation. You wonder if you should turn"+
        " back, or continue your search.",
        "Turn back",
        "Continue on",
        21,
        2
    ],

    [ /* 2 */
        "art/002.svg",
        "You remember that everyone is counting on you, and decide to continue"+
        " on. As you walk further down the path, the trees thicken, and the"+
        " moonlight disappears. You would use your cell phone as a light, "+
        "but your battery is at 7%, and you want to hear from the others if "+
        "they call.",
        "Continue",
        "Continue",
        3,
        3
    ],

    [ /* 3 */
        "art/003.svg",
        "You start walking, testing each step to avoid tripping on a tree root."+
        " After ten minutes you see a clearing up ahead, lit by the moon. After"+
        " you get there, you realize that the trail breaks into two. One path"+
        " to the left, and one to the right. Which do you choose to follow?",
        "Left",
        "Right",
        4,
        30
    ],

    [ /* 4 */
        "art/001.svg",
        "As you step down the trail to the left, you hear a noise on trail to "+
        "the right, which is now behind you. \"It's just a squirrel\", you "+
        "think. You hope.",
        "Continue",
        "Continue",
        5,
        5
    ],

    [ /* 5 */
        "art/004.svg",
        "Continuing on, you find this trail overgrown. "+
        "Branches from under-brush cover most of the trial, and leaves crack "+
        "with with every step. \"You're making too much noise,\" you think to "+
        "yourself. If it wasn't for the small breaks in the trees above, you "+
        "would have been in the pitch black.",
        "Continue",
        "Continue",
        6,
        6

    ],

    [ /* 6 */
        "art/005.svg",
        "Finally the brush moves away, and the path opens up a little. Looking"+
        " around, you find yourself surrounded by pine trees. Their branches "+
        "start no less than thirty feet up, giving you a good distance to see."+
        " Something snaps, and you look to your right.",
        "Continue",
        "Continue",
        7,
        7
    ],

    [ /* 7 */
        "art/008.svg",
        "Standing there, tall, dark, and motionless, you see the figure of a "+
        "man, not ten feet away.\"Maybe he doesn't know I'm here\", you pray,"+
        " as you hold back a scream.",
        "Continue",
        "Continue",
        8,
        8
    ],

    [ /* 8 */
        "art/009.svg",
        "You stand there, not daring to move. The figure also doesn't move. "+
        "What seems like ten minutes goes by. You're petrified. Suddenly "+
        "your cell phone goes off, ringing as loud as a stereo. In an instant"+
        " the figure jumps toward you.",
        "Continue",
        "Continue",
        9,
        9
    ],

    [ /* 9 */
        "art/010.svg",
        "Without even thinking, you run. Darting into the trees, you dodge back"+
        " and forth, trying to get as many trees between you and the figure. You"+
        " trip on a tree root, and cut your shin open. You don't have "+
        "time to care. As you stop to catch your breath, you realize that your"+
        " cell phone is still going off, blasting your location like an air horn.",
        "Throw the phone and run",
        "Wait take out the battery",
        10,
        35
    ],

    [ /* 10 */
        "art/010.svg",
        "You almost fall over as you shove your hand in your pocket and grab "+
        "your phone. You throw it as hard as you can. It hits a tree and "+
        "breaks, and again, you run. You just run.",
        "Continue",
        "Continue",
        11,
        11
    ],

    [ /* 11 */
        "art/010.svg",
        "Fortunately for you, the brush and tree roots are sparse, and your "+
        "time on the track team taught you how to run. After about ten minutes,"+
        " you wonder if the figure is still behind you. You've ran for at least a "+
        "mile and a half. Is he still there? ",
        "Stop, hide, and look around",
        "Keep running",
        12,
        47

    ],

    [ /* 12 */
        "art/012.svg",
        "You slowed to a jog, and glanced around for a place to hide. A fallen"+
        " tree to your left is as good a place as any. As you slide behind it, you "+
        "look back to what was just behind you. Looking around reveals nothing."+
        " Nothing but trees and bushes. You notice that your shoe feels wet, "+
        "and remember your shin. Glancing up and back to your shin, you slowly"+
        " roll down your blood-soaked sock.",
        "Continue",
        "Continue",
        13,
        13
    ],

    [ /* 13 */
        "art/023.svg",
        "A cut at least a half an inch deep is more than enough to concern "+
        "anybody. How much blood have you lost? Luckily your jeans kept the "+
        "blood from leaving much of a trail, but undoubtedly you spread a water"+
        " bottle full along the way. You tear half of your t-shirt off and wrap"+
        " it up. It hurts.",
        "Continue",
        "Continue",
        14,
        14
    ],

    [ /* 14 */
        "art/011.svg",
        "You roll over, and look at the forest in front of you. Suddenly you "+
        "see it. A building. The red brick building looked exactly how it was"+
        " described to you. Two stories, rotten roof, and metal doors.",
        "Continue",
        "Continue",
        15,
        15
    ],

    [ /* 15 */
        "art/013.svg",
        "After another quick look around, you start to head for the building. "+
        "It was at least a hundred yards away. You try to sneak like a ninja,"+
        " but bending your ankle makes you want to scream, so instead you limp"+
        " as quietly as you can. You get to the building without event. No other"+
        " sounds than your own, and no human figures in site. Looking at the "+
        "great metal door, you realize that it is locked. Biggest padlock "+
        "you've ever seen, but it looks rusted and fragile. A big rock near "+
        "the door looks like it would do the trick, but it would make a lot of"+
        " unwanted noise.",
        "Look for another way in",
        "Use the rock",
        16,
        36
    ],

    [ /* 16 */
        "art/014.svg",
        "You decide that it's too risky. Slowly limping around to the left of"+
        " the building, you find a window. It wasn't broken, but the wood "+
        "around it was badly rotten. With a little effort, you slid one of the "+
        "panes out without breaking it. The gap that was left was only about a"+
        " foot wide. You think that you can fit through, but you aren't sure.",
        "Remove the other pane",
        "Try to slip through",
        17,
        45
    ],

    [ /* 17 */
        "art/014.svg",
        "Trying the same way, you manage to remove the other pane of glass. "+
        "It slides out too easily, and to your horror, falls into the "+
        "building and shatters on the floor inside. There is a stir inside the"+
        " building, as if a few hurried footsteps. You drop to your knees "+
        "and hide under the wide open window, trying your best to keep from "+
        "crying. You're terrified of whatever might be in the building, but "+
        "you have to get inside. You have to find what you're looking for.",
        "Go through the window anyway",
        "Go back and try the door",
        18,
        46
    ],

    [ /* 18 */
        "art/015.svg",
        "Slowly, quietly, you slide to the left of the window, stand up, and "+
        "peak in. It's pitch black, you don't see a thing. Finding a little "+
        "courage, you grab onto the window sill, hoist yourself up, and hop in.",
        "Continue",
        "Continue",
        19,
        19
    ],

    [ /* 19 */
        ""/* leave blank */,
        "It's a four-foot drop from thee window to the floor. As your ankle "+
        "hits the ground, a bolt of pain shoots through your entire leg. You "+
        "fall to the floor and let out a groan before you could stop yourself."+
        " You lay there. Almost in shock. Not daring to move an inch. Just "+
        "listening. Hoping. Crying inside.",
        "Continue",
        "Continue",
        20,
        20
    ],

    [ /* 20 */
        ""/* leave blank */,
        "You hear noting. No movement from anywhere else in the building. Just"+
        " your berating, which you are trying so desperately to silence. You"+
        " quietly get up and sneak around a little.",
        "Continue",
        "Continue",
        38,
        38
    ],

    [ /* 21 */
        ""/* leave blank */,
        "You turn around and start to walk back down the trail. After a few "+
        "minutes clouds drift across the moon, and everything gets darker. The"+
        " only thing that you can see is your hand as you place it a foot in front"+
        " of your face. Suddenly you bump into a tree and fall over. After "+
        "standing up and brushing the dirt off of your butt, you feel around for"+
        " the trail. To your alarm you can't find it.",
        "Continue",
        "Continue",
        22,
        22
    ],

    [ /* 22 */
        ""/* leave blank */,
        "You bend over and feel the ground. All you can feel are pine needles"+
        " and shrubs, not dirt like the trail should be. After a  minute you "+
        "start to get more frantic, and find yourself jerking back and forth in"+
        " the dark. You throw yourself helplessly on the ground. You're lost."+
        " You feel like you could cry.",
        "Continue",
        "Continue",
        23,
        23
    ],

    [ /* 23 */
        ""/* leave blank */,
        "Suddenly you hear a noise in the forest to your left. Not like a "+
        "random falling pine cone. More like something heavy slowly pressing "+
        "down on the leaves. Something like a slow footstep. You hear it again."+
        " And again. Each time it sounds slightly closer. You sit up and scoot"+
        " back against a tree, facing the footsteps. You're terrified.",
        "Continue",
        "Continue",
        24,
        24
    ],

    [ /* 24 */
        "art/004.svg",
        "You here the footsteps a few more times, but then they seem to stop."+
        " By now your eyes have adjusted to the dark, and you can see about"+
        " five feet around you. You see the trail now. You wonder if you should"+
        " stand up and keep walking, or wait and see if the footsteps are still"+
        " near.",
        "Get up and walk",
        "Keep waiting",
        26,
        25
    ],

    [ /* 25 */
        "art/004.svg",
        "You stand up and lean against the tree. You're not sure what happened to"+
        " the footsteps, but you haven't heard them for at least two minutes."+
        " You can see again as the clouds drift past the moon.",
        "Continue",
        "Continue",
        7,
        7
    ],

    [ /* 26 */
        "art/004.svg",
        "You stand up and look both ways down the trail. You're not sure which"+
        " way you came from, but you just want to get moving. ",
        "Walk on the trail in front of you",
        "Walk on the trail behind you",
        27,
        3
    ],

    [ /* 27 */
        ""/* leave blank */,
        "Taking your time to make sure that the path in front of you is clear,"+
        " you start walking. You kind of think that this is the way you came"+
        " from when you entered the woods, but the forest is much thicker than"+
        " you remember it. Clouds drift in front of the moon again, and the thick"+
        " tree branches above block out all other light. Unable to see, you stop.",
        "Continue",
        "Continue",
        28,
        28
    ],

    [ /* 28 */
        "" /* leave black */,
        "You stand still, slowly looking from side to side for a gleam of light"+
        " somewhere. Anywhere. There is none. Your heart sinks as you start to "+
        "hear noises all around you. The darkness begins to push in on you, as if"+
        " you were under pressure. The noises get closer. The darkness deeper, "+
        "thicker, and heavier.",
        "Continue",
        "Continue",
        29,
        29
    ],

    [ /* 29 */
        "" /* leave black */,
        "Suddenly something hits you, and you fall forward into a wall of cloth."+
        " You are unable to move as cold, wet hands engulf your body. You died.",
        "Continue",
        "Continue",
        0,
        0
    ],

    [ /* 30 */
        "art/004.svg",
        "You decide that the path on the right looks promising and start walking."+
        " After you pass a small curve to the left, the path opens up. It is now"+
        " well lit, since there are few tree branches covering the path.",
        "Continue",
        "Continue",
        31,
        31
    ],

    [ /* 31 */
        "art/007.svg",
        "The moon is behind you and to your left, casting your shadow onto the"+
        " trees in front of you to your right. As you pass a small clearing, you"+
        " notice that there is a second shadow behind yours. Thinner, taller, "+
        " and moving a lot faster.",
        "Run, run, run, run",
        "Turn around and look",
        32,
        34
    ],

    [ /* 32 */
        "art/010.svg",
        "In an instant, you run. You're running as fast as you can, but the shadow"+
        " keeps getting closer. As the clearing disappears and trees crop up on"+
        " your right and left, you decide that you need to loose the figure, and"+
        " duck into the tree line.",
        "Continue",
        "Continue",
        33,
        33
    ],

    [ /* 33 */
        "art/010.svg",
        "After a few yards you hit your shin on a log and tumble to the ground."+
        " You know that you're bleeding, but you don't have time to care. You "+
        "quickly get up and keep running.",
        "Continue",
        "Continue",
        11,
        11
    ],

    [ /* 34 */
        "art/006.svg",
        "You turn around and start walking backwards. Behind you, standing at "+
        "least seven feet tall, you see a figure, coming straight towards you."+
        " You can't move as it gets closer. Its dark, hooded robe hid its feet"+
        " making it look like the figure was flying. As the figure got closer to"+
        " you, it spread its arms, moving closer and closer. You wanted to run,"+
        " but you couldn't. You just stood there, as the figure got nearer. The"+
        " last thing that you saw was darkness, as the figure's robe covered your"+
        " eyes. Everything is dark now. Everything is quiet. You died.",
        "Continue",
        "Continue",
        0,
        0
    ],

    [ /* 35 */
        "" /* leave black */,
        "You stumble and roll to the ground as you pull your phone out of your"+
        " pocket. The ringtone which was once your favorite song now seems more"+
        " like a dirge, celebrating your quick demise. You drop your phone as "+
        "your fingers shake violently. Suddenly a dark shadow covers you. You"+
        " are petrified as cold, wet hands squeeze down on your neck. Everything"+
        " is dark now. Everything is quiet. You died.",
        "Continue",
        "Continue",
        0,
        0
    ],

    [ /* 36 */
        "art/013.svg",
        "You walk over and pick up the rock. You have to use both hands to grasp"+
        " it. You lift it over your head, and slam is down on the lock. The lock"+
        " breaks, and falls  to the ground. Suddenly you hear a noise inside, "+
        "like a few shuffled footsteps. You fall back on the door and lean against"+
        " it. You don't know what is inside, but you have to go in and find what"+
        " you're looking for.",
        "Continue",
        "Continue",
        37,
        37
    ],

    [ /* 37 */
        "art/019.svg",
        "You roll over to the side of the door and throw it open. It makes a"+
        "terrible screech as the rusty metal hinges are used for the first "+
        "time in years. You wait for a minute, leaning against the side of the"+
        "building. You hear no movement from inside. Slowly you turn around and"+
        " peek inside. You see nothing but blackness. You take a deep breath,"+
        " and step inside.",
        "Continue",
        "Continue",
        38,
        38
    ],

    [ /* 38 */
        "art/016.svg",
        "Crouching in a corner near the door, you wait for your eyes to adjust"+
        " to the darkness. After a few minutes you began to see a little bit. "+
        "The light coming through the door helped. As you crouched there you "+
        "remembered your friend's words. \"Get the black box in the attic. Bring"+
        "it to me. And do not open the cellar.\"",
        "Continue",
        "Continue",
        39,
        39
    ],

    [ /* 39 */
        "art/017.svg",
        "Finally you decide to start moving. The floor is mostly clear, so you "+
        "can move around without making noise. Towards the back of the building"+
        " you find a few doors, and some stairs going to the next floor. You also"+
        " notice some stairs going down, and a metal door lying on the floor"+
        " in front of them, as if it had been broken off from the other side of"+
        " the stairs. You don't have to worry about opening the cellar. It's"+
        " already opened.",
        "Continue",
        "Continue",
        40,
        40
    ],

    [ /* 40 */
        "art/018.svg",
        "Not wanting to think about it, you head up the stairs. A few of them "+
        "creak under your feet. When you get to the second floor, you find that"+
        " the attic door is open, with a ladder leading up into it. You slowly"+
        " climb the ladder, not wanting to make any noise. You hear a scratching"+
        " coming from the attic above you, but keep climbing, slowly. As you "+
        "peak your head in the attic, a bat flutters around your head and out a"+
        " small hole in the roof, and with it the scratching stops.",
        "Continue",
        "Continue",
        41,
        41
    ],

    [ /* 41 */
        "art/020.svg",
        "The light through the holes in the roof do a good job of lighting the"+
        " attic. After looking around and seeing nothing dangerous, you climb up"+
        " the rest of the way. Finding the black box wasn't hard. It was ten feet"+
        " from the attic door, just sitting on a price of wood spread over two"+
        " rafters. It was about the size of a loaf of bread, metal, and heavy,"+
        " with a padlock on the front of it.",
        "Continue",
        "Continue",
        42,
        42
    ],

    [ /* 42 */
        "art/021.svg",
        "You pick it up and climb back down the ladder. Climbing the ladder with"+
        " a heavy metal box and a cut up leg isn't easy, but you manage. You walk"+
        " over to the stairs and quietly walk down. As you walk away from the"+
        " stairs, something jumps out of the cellar behind you and knocks you"+
        " over onto your stomach. You flip over to see your attacker. Standing"+
        " above you is the figure of a man, wearing a black robe and hood.",
        "Continue",
        "Continue",
        43,
        43
    ],

    [ /* 43 */
        "art/022.svg",
        "The figure spread its arms and began moving toward you. You pick up the"+
        " black box and throw it at the figure, hitting it right in the face."+
        " The figure falls over and you stand up. Glancing around you find a large"+
        " brick. You pick it up and hit the figure in the head again as it tries"+
        " to stand up. The figure falls on its back. You lift the brick above your"+
        " head and bring it down violently onto the figure's head, pick up the"+
        " black box, and run towards the door.",
        "Continue",
        "Continue",
        44,
        44
    ],

    [ /* 44 */
        "art/001.svg",
        "Finding the door closed, you throw yourself against it. With a snap and"+
        "a screech, it swings open, and you run out.",
        "Continue",
        "Continue",
        0,
        0
    ],

    [ /* 45 */
        "art/015.svg",
        "You slip your arms through the hole and pull yourself up. You can't"+
        " quite fit through, but you struggle and keep tying anyway. Suddenly"+
        " the other pane and wood give way, and you fall into the building, the"+
        " glass following you, and loudly shattering as it hits the ground. You"+
        " lay on the ground, not daring to move, listening for any sound.",
        "Continue",
        "Continue",
        20,
        20
    ],

    [ /* 46 */
        "art/019.svg",
        "You sneak back to the front of the building and peek around the corner."+
        " To your terror the lock is not on the door anymore, and the door is"+
        " cracked open.",
        "Continue",
        "Continue",
        37,
        37
    ],

    [ /* 47 */
        "art/011.svg",
        "You don't want to take a chance, and keep running. Glancing to your"+
        " right you see it. A building. The red brick building looked exactly"+
        " how it was described to you. Two stories, rotten roof, and metal"+
        " doors.",
        "Continue",
        "Continue",
        15,
        15
    ],

    [ /* 48 */
        "",
        "",
        "",
        ""//,
        //,
        //
    ]
];
