import java.util.Scanner;
import java.util.Random;


// this class starts builds our bot
class start {
	public static void main(String args[]) {
		Bot Onedir = new Bot("Onedir");
		
		// the breath of life
		Onedir.think();
	}
}

// this is the actual bot
class Bot {

	// variables
	private String myName;
	private String userName;
	private int myNumber;
	private int userNumber;
	
	// this sets up our bot
	public Bot(String name) {
		myName = name;
		say(1, "I'm alive... cool. (bot '" + myName + "' initiated)", "null");
	} 
	
	// our primary method
	public void think() {
		
		// get a random greeting and greet the user
		Random range = new Random();
		say(2, greetings[range.nextInt(greetings.length)], myName);
		
		// wait for the user input
		Scanner listener = new Scanner(System.in);
		userName = listener.nextLine();
		System.out.println("");
		
		// tell the user 'hey'
		say(2, replies[range.nextInt(replies.length)], userName);
		
		say(1, "Do you want to play a game?\n","");
		listener.nextLine();
		
		Game myGame = new Game(myName, userName);
		say(1, "Here are the rules: \n", "");
		myGame.Rules();
		say(1,"","");
		System.out.print("My number is ");
		Random temp = new Random(); 
		myNumber = 1+range.nextInt(6);
		System.out.println(myNumber);
		
		say(1,"What number do you pick?","");
		userNumber = listener.nextInt();
		
		myGame.setNumbers(myNumber, userNumber);
		
		myGame.Play();
	}

	// our interaction methods
	private void say(int mode, String data, String name) {
		if (mode == 1) {
			System.out.println(data + "\n");
		}
		else if (mode == 2) {
			System.out.printf(data + "\n\n", name);
		}
	}

	// our speaking methods and arrays
	
	String greetings[] = {
		"Hello! I am %s! What is your name?",
		"Well hello... I am called %s. What be thine title?",
		"Hi. I'm %s. Who are you?",
		"My name is %s. What is your name?"
	};
	
	String replies[] = {
		"Nice to meet you, %s.",
		"Whats up %s? It's nice to meet you.",
		"I love you %s. What? I didn't say that.",
		"I lied. My name is %s too."
	};
	

}

// This class is just a game out bot plays
class Game {
	
	// set our variables
	private int player1Number = 0;
	private int player2Number = 0;
	private int player1Points = 0;
	private int player2Points = 0;
	private String player1Name;
	private String player2Name;
	
	// our constructor
	public Game(String player1, String player2) {
		player1Name = player1;
		player2Name = player2;
	}

	// tell the player2 the rules of the game
	public void Rules() {
		System.out.println("The rules of the game are simple.");
		System.out.println("I pick a number, and you pick a number,");
		System.out.println("between one and six. Then I roll six dice.");
		System.out.println("After the dice have rolled, whoever has");
		System.out.println("more of their numbers rolled by the");
		System.out.println("dice wins. Make sence? Probably not.");
	}

	public void setNumbers(int comp /*player1's number*/, int player2 /*player2's number*/) {
		if (player1Number == 0 && player2Number == 0) {
			if (player2 < 1 || player2 > 6) {
				System.out.println("Your number must be between be between 1 and 6"); 
			}else {
				player1Number = comp;
				player2Number = player2;
			}
		}else {
			System.out.println("Game class: Numbers already set!");
		}
	} 

	public void Play() {
		System.out.println("----------------------------------------");
		System.out.println(player1Name + "'s number: " + player1Number);
		System.out.println(player2Name + "'s number: " + player2Number);
		System.out.println("----------------------------------------");
		System.out.print("Dice rolled: ");
		int values[] = Roll();
		for (int i = 0; i <= 5; i++) {
		 System.out.print(values[i] + ", ");
		}
		System.out.println("\n----------------------------------------");
		
		for (int i = 0; i <= 5; i++) {
			if (values[i] == player1Number) {
				player1Points++;
			}
			else if (values[i] == player2Number) {
				player2Points++;
			}
		}
		
		System.out.println(player1Name + "'s points: " + player1Points);
		System.out.println(player2Name + "'s points: " + player2Points);
		System.out.println("");
		System.out.print("Winner: ");
		if (player1Points > player2Points) {
			System.out.print(player1Name + "\n");
		}
		else if (player2Points > player1Points) {
			System.out.print(player2Name + "\n");
		}
		if (player1Points == player2Points) {
			System.out.print("tie\n");
		}
		System.out.println("----------------------------------------\n");
	}

	private int[] Roll() {
		int rolls[] = {0,0,0,0,0,0};
		if (player1Number == 0 && player2Number == 0) {
			System.out.println("Error: numbers are not set!");
		}else {
			Random dice = new Random();
			for (int i = 0; i <= 5; i++) {
				int thisRoll;
				thisRoll = 1+dice.nextInt(6);
				rolls[i] = thisRoll;
			}
		}
		return rolls;
	}

}
